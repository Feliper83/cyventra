import express from 'express'
import serverless from "serverless-http";

import cors from 'cors'
import rateLimit from 'express-rate-limit'
import sectionRoutes from './routes/sectionRoutes.js'
import aboutRoutes from './routes/aboutRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import languageRoutes from './routes/languageRoutes.js'
import benefitsRoutes from './routes/benefitRoutes.js'
import jobsRoutes from './routes/jobRoutes.js'
import jobApplicationRoutes from './routes/jobApplicationRoutes.js'
import companyRoutes from './routes/companyRoutes.js'

const app = express()

// CORS Configuration - Restrictive for security
const allowedOrigins = [
  'https://cyventrasoft.com',
  'https://www.cyventrasoft.com',
  'http://localhost:5173',      // Vite dev server
  'http://localhost:3001'        // Backend local testing
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy: Origin ${origin} is not allowed`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())

// ===== RATE LIMITING CONFIGURATION =====

// 1. Rate limiter general para toda la API
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // 100 requests por ventana
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

// 2. Rate limiter MUY RESTRICTIVO para formularios
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5, // Solo 5 requests por hora
  message: {
    error: 'Too many submissions from this IP. Please try again in 1 hour.',
    retryAfter: '1 hour'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false, // Contar incluso requests exitosos
});

// 3. Rate limiter MEDIO para endpoints de lectura pública
const readLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 50, // 50 requests
  message: {
    error: 'Too many requests, please slow down.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Aplicar rate limiter general a toda la API
app.use('/api/', generalLimiter);

// Health check endpoint (sin rate limit)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// API Routes con rate limiters específicos
app.use('/api/sections', readLimiter, sectionRoutes)
app.use('/api/abouts', readLimiter, aboutRoutes)
app.use('/api/contacts', formLimiter, contactRoutes)      // ← CRÍTICO: 5/hora
app.use('/api/services', readLimiter, serviceRoutes)
app.use('/api/blogs', readLimiter, blogRoutes)
app.use('/api/languages', languageRoutes)                 // ← Sin límite extra (solo general)
app.use('/api/benefits', readLimiter, benefitsRoutes)
app.use('/api/jobs', readLimiter, jobsRoutes)
app.use('/api/apply', formLimiter, jobApplicationRoutes) // ← CRÍTICO: 5/hora
app.use('/api/company', readLimiter, companyRoutes)


if (process.env.NODE_ENV !== 'lambda') {
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
}

export const handler = serverless(app)

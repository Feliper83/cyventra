import express from 'express'
import serverless from "serverless-http";

import cors from 'cors'
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

app.use('/api/sections', sectionRoutes)
app.use('/api/abouts', aboutRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/languages', languageRoutes)
app.use('/api/benefits', benefitsRoutes)
app.use('/api/jobs', jobsRoutes)
app.use('/api/apply', jobApplicationRoutes)
app.use('/api/company', companyRoutes)


if (process.env.NODE_ENV !== 'lambda') {
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
}

export const handler = serverless(app)

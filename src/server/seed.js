// src/server/seed.js
import fs from 'fs';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

// Lee los SQL desde archivos externos
const resetSql = fs.readFileSync('./db/reset.sql', 'utf8');
const schemaSql = fs.readFileSync('./db/schema.sql', 'utf8');
const seedSql = fs.readFileSync('./db/seed.sql', 'utf8');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function runSeed() {
    try {
        await client.connect();
        
        console.log('🗑️  Limpiando schema anterior...');
        await client.query(resetSql);
        console.log('✅ Schema limpiado');
        
        console.log('📦 Creando schema y tablas...');
        await client.query(schemaSql);
        console.log('✅ Schema y tablas creadas');
        
        console.log('🌱 Insertando datos...');
        await client.query(seedSql);
        console.log('✅ Datos insertados correctamente');
        
        console.log('\n🎉 Seed ejecutado completamente!');
    } catch (err) {
        console.error('❌ Error ejecutando el seed', err);
    } finally {
        await client.end();
    }
}

runSeed();

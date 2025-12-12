// src/server/update-services.js
import fs from 'fs';
import pkg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();
const { Client } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lee el SQL desde el archivo
const updateSql = fs.readFileSync(
    join(__dirname, 'db', 'update-services-differentiation.sql'), 
    'utf8'
);

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function runUpdate() {
    try {
        await client.connect();
        console.log('🔌 Conectado a la base de datos');
        
        console.log('📝 Actualizando contenido de servicios con diferenciación...');
        await client.query(updateSql);
        console.log('✅ Servicios actualizados correctamente');
        
        // Verificar cambios
        console.log('\n📊 Verificando cambios...');
        const result = await client.query(`
            SELECT 
                st.service_id,
                s.slug,
                st.lang_code,
                st.name,
                st.summary,
                LEFT(st.details, 100) as details_preview
            FROM cyventra.service_translation st
            JOIN cyventra.service s ON s.id = st.service_id
            ORDER BY st.service_id, st.lang_code
        `);
        
        console.log('\n✅ Servicios actualizados:');
        result.rows.forEach(row => {
            console.log(`\n  [${row.slug}] (${row.lang_code})`);
            console.log(`  Nombre: ${row.name}`);
            console.log(`  Summary: ${row.summary.substring(0, 80)}...`);
        });
        
        console.log('\n🎉 Actualización completada exitosamente!');
    } catch (err) {
        console.error('❌ Error ejecutando la actualización:', err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

runUpdate();


# 🚀 GUÍA RÁPIDA: GENERAR PDFs Y EMAILS

## Opción 1: Generación Automática (Recomendada)

### Paso 1: Instalar Dependencias
```bash
cd portfolio
npm install
```

### Paso 2: Generar PDFs
```bash
npm run generate:pdfs
```

Los PDFs se guardarán en la carpeta `pdfs/`

---

## Opción 2: Usando Pandoc (Si está instalado)

### Windows (PowerShell):
```powershell
.\generate-pdfs.ps1
```

### Linux/Mac (Bash):
```bash
chmod +x generate-pdfs.sh
./generate-pdfs.sh
```

---

## Opción 3: Conversión Manual Online

1. **Abre el archivo Markdown** que quieres convertir (ej: `CYVENTRA_PORTFOLIO_EN.md`)
2. **Copia todo el contenido**
3. **Ve a un conversor online:**
   - https://www.markdowntopdf.com/
   - https://dillinger.io/ (exportar como PDF)
   - https://www.markdowntopdf.com/
4. **Pega el contenido y descarga el PDF**

---

## Opción 4: VS Code Extension

1. **Instala la extensión:** "Markdown PDF"
2. **Abre el archivo .md**
3. **Click derecho → "Markdown PDF: Export (pdf)"**

---

## 📧 USAR LOS EMAILS HTML

### Método 1: Copiar HTML directamente
1. Abre `EMAIL_HTML_EN.html` o `EMAIL_HTML_ES.html` en tu navegador
2. Selecciona todo (Ctrl+A / Cmd+A)
3. Copia (Ctrl+C / Cmd+C)
4. Pega en tu cliente de email (Gmail, Outlook, etc.)

### Método 2: Usar como plantilla HTML
1. Abre el archivo HTML en un editor de texto
2. Personaliza los campos `[Name]` y `[Your Name]`
3. Copia el código HTML completo
4. En Gmail: Activa "Insertar HTML" o usa el modo HTML
5. En Outlook: Usa "Insertar → Texto → HTML"

### Método 3: Servidor local (para preview)
```bash
# En la carpeta portfolio
python -m http.server 8000
# O con Node.js
npx http-server -p 8000
```
Luego abre: http://localhost:8000/EMAIL_HTML_EN.html

---

## ✅ ARCHIVOS GENERADOS

Después de ejecutar los scripts, tendrás:

```
portfolio/
├── pdfs/
│   ├── CYVENTRA_PORTFOLIO_EN.pdf
│   ├── CYVENTRA_PORTFOLIO_ES.pdf
│   ├── CYVENTRA_ONEPAGER_EN.pdf
│   └── CYVENTRA_ONEPAGER_ES.pdf
├── EMAIL_HTML_EN.html (listo para usar)
└── EMAIL_HTML_ES.html (listo para usar)
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "puppeteer not found"
```bash
npm install puppeteer
```

### Error: "markdown-pdf not found"
```bash
npm install markdown-pdf
```

### Los PDFs no se generan
- Usa la Opción 3 (conversión manual online)
- O instala Pandoc: https://pandoc.org/installing.html

### Los emails HTML no se ven bien
- Abre el HTML en un navegador primero para verificar
- Algunos clientes de email tienen limitaciones
- Prueba con Gmail o Outlook que tienen mejor soporte HTML

---

## 📝 NOTAS IMPORTANTES

- **Personaliza antes de enviar:** Reemplaza `[Name]` y `[Your Name]` en los emails
- **Revisa los PDFs:** Verifica que el formato se vea bien antes de compartir
- **Actualiza estadísticas:** Si cambian los números, actualiza los archivos fuente primero

---

**¿Necesitas ayuda?** Revisa el `README.md` para más detalles.


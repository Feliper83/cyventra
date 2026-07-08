#!/usr/bin/env node

/**
 * Generate PDFs from Markdown files
 * Requires: npm install markdown-pdf puppeteer
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const markdownPdf = require('markdown-pdf');
const puppeteer = require('puppeteer');

const sourceDir = path.join(__dirname, '..');
const outputDir = path.join(__dirname, '..', 'pdfs');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Files to convert
const filesToConvert = [
    { input: 'CYVENTRA_PORTFOLIO_EN.md', output: 'CYVENTRA_PORTFOLIO_EN.pdf' },
    { input: 'CYVENTRA_PORTFOLIO_ES.md', output: 'CYVENTRA_PORTFOLIO_ES.pdf' },
    { input: 'CYVENTRA_ONEPAGER_EN.md', output: 'CYVENTRA_ONEPAGER_EN.pdf' },
    { input: 'CYVENTRA_ONEPAGER_ES.md', output: 'CYVENTRA_ONEPAGER_ES.pdf' }
];

async function generatePDFWithPuppeteer(inputFile, outputFile) {
    console.log(`Generating ${outputFile}...`);
    
    try {
        const markdownContent = fs.readFileSync(path.join(sourceDir, inputFile), 'utf8');
        
        // Convert markdown to HTML
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        @page {
            margin: 2cm;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #1e40af;
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 10px;
        }
        h2 {
            color: #3b82f6;
            margin-top: 30px;
        }
        h3 {
            color: #64748b;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #e5e7eb;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f8fafc;
            font-weight: bold;
        }
        code {
            background-color: #f1f5f9;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        pre {
            background-color: #f8fafc;
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
        }
        blockquote {
            border-left: 4px solid #3b82f6;
            padding-left: 20px;
            margin: 20px 0;
            color: #64748b;
        }
        .highlight-box {
            background-color: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        ul, ol {
            margin: 15px 0;
            padding-left: 30px;
        }
        li {
            margin: 8px 0;
        }
        hr {
            border: none;
            border-top: 2px solid #e5e7eb;
            margin: 30px 0;
        }
        a {
            color: #3b82f6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
${markdownToHtml(markdownContent)}
</body>
</html>`;

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        await page.pdf({
            path: path.join(outputDir, outputFile),
            format: 'A4',
            margin: {
                top: '2cm',
                right: '2cm',
                bottom: '2cm',
                left: '2cm'
            },
            printBackground: true
        });
        
        await browser.close();
        console.log(`✅ Generated: ${outputFile}`);
    } catch (error) {
        console.error(`❌ Error generating ${outputFile}:`, error.message);
    }
}

function markdownToHtml(markdown) {
    // Simple markdown to HTML converter
    let html = markdown;
    
    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>');
    
    // Code blocks
    html = html.replace(/```[\s\S]*?```/gim, (match) => {
        const code = match.replace(/```/g, '').trim();
        return `<pre><code>${code}</code></pre>`;
    });
    
    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');
    
    // Paragraphs
    html = html.split('\n\n').map(para => {
        if (!para.trim()) return '';
        if (para.startsWith('<')) return para;
        return `<p>${para}</p>`;
    }).join('\n');
    
    return html;
}

async function main() {
    console.log('🚀 Starting PDF generation...\n');
    
    for (const file of filesToConvert) {
        await generatePDFWithPuppeteer(file.input, file.output);
    }
    
    console.log('\n✅ PDF generation complete!');
    console.log(`📁 PDFs saved in: ${outputDir}`);
}

main().catch(console.error);


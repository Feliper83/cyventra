#!/usr/bin/env node

/**
 * Generate all portfolio materials
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Cyventra Portfolio Generator\n');
console.log('This script will help you generate all portfolio materials.\n');

console.log('Available options:');
console.log('1. Generate PDFs (requires npm install)');
console.log('2. Copy email templates');
console.log('3. Generate all\n');

// Check if dependencies are installed
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
const hasDependencies = fs.existsSync(nodeModulesPath);

if (!hasDependencies) {
    console.log('⚠️  Dependencies not installed.');
    console.log('Run: npm install');
    console.log('\nAlternatively, use manual methods:\n');
    console.log('For PDFs:');
    console.log('- Use online converters: https://www.markdowntopdf.com/');
    console.log('- Use VS Code extension: Markdown PDF');
    console.log('- Use Pandoc: pandoc file.md -o file.pdf\n');
}

console.log('📋 Files ready to use:');
console.log('\n✅ Portfolio Documents:');
console.log('   - CYVENTRA_PORTFOLIO_EN.md');
console.log('   - CYVENTRA_PORTFOLIO_ES.md');
console.log('   - CYVENTRA_ONEPAGER_EN.md');
console.log('   - CYVENTRA_ONEPAGER_ES.md');

console.log('\n✅ Email Templates:');
console.log('   - EMAIL_TEMPLATE_EN.md (Plain text)');
console.log('   - EMAIL_TEMPLATE_ES.md (Plain text)');
console.log('   - EMAIL_HTML_EN.html (HTML version)');
console.log('   - EMAIL_HTML_ES.html (HTML version)');

console.log('\n✅ LinkedIn Posts:');
console.log('   - LINKEDIN_POST_EN.md');
console.log('   - LINKEDIN_POST_ES.md');

console.log('\n✅ Other:');
console.log('   - PITCH_DECK_OUTLINE.md');

console.log('\n📖 See README.md for detailed instructions.\n');


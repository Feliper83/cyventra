# PowerShell script to generate PDFs (Windows)
# Requires: Pandoc or online conversion

Write-Host "🚀 Cyventra PDF Generator" -ForegroundColor Cyan
Write-Host ""

$sourceDir = $PSScriptRoot
$outputDir = Join-Path $sourceDir "pdfs"

# Create output directory
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

# Check for Pandoc
$pandocPath = Get-Command pandoc -ErrorAction SilentlyContinue

if ($pandocPath) {
    Write-Host "✅ Pandoc found. Generating PDFs..." -ForegroundColor Green
    Write-Host ""
    
    $files = @(
        @{Input="CYVENTRA_PORTFOLIO_EN.md"; Output="CYVENTRA_PORTFOLIO_EN.pdf"},
        @{Input="CYVENTRA_PORTFOLIO_ES.md"; Output="CYVENTRA_PORTFOLIO_ES.pdf"},
        @{Input="CYVENTRA_ONEPAGER_EN.md"; Output="CYVENTRA_ONEPAGER_EN.pdf"},
        @{Input="CYVENTRA_ONEPAGER_ES.md"; Output="CYVENTRA_ONEPAGER_ES.pdf"}
    )
    
    foreach ($file in $files) {
        $inputPath = Join-Path $sourceDir $file.Input
        $outputPath = Join-Path $outputDir $file.Output
        
        if (Test-Path $inputPath) {
            Write-Host "Generating $($file.Output)..." -ForegroundColor Yellow
            pandoc $inputPath -o $outputPath --pdf-engine=xelatex -V geometry:margin=2cm
            Write-Host "✅ Generated: $($file.Output)" -ForegroundColor Green
        } else {
            Write-Host "❌ File not found: $($file.Input)" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "✅ PDF generation complete!" -ForegroundColor Green
    Write-Host "📁 PDFs saved in: $outputDir" -ForegroundColor Cyan
} else {
    Write-Host "⚠️  Pandoc not found." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Installation options:" -ForegroundColor Cyan
    Write-Host "1. Install Pandoc: https://pandoc.org/installing.html" -ForegroundColor White
    Write-Host "2. Use online converter: https://www.markdowntopdf.com/" -ForegroundColor White
    Write-Host "3. Use VS Code extension: Markdown PDF" -ForegroundColor White
    Write-Host ""
    Write-Host "Manual conversion:" -ForegroundColor Cyan
    Write-Host "- Copy markdown content" -ForegroundColor White
    Write-Host "- Paste into online converter" -ForegroundColor White
    Write-Host "- Download PDF" -ForegroundColor White
}


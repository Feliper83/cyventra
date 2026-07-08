#!/bin/bash

# Bash script to generate PDFs (Linux/Mac)
# Requires: Pandoc

echo "🚀 Cyventra PDF Generator"
echo ""

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_DIR="$SOURCE_DIR/pdfs"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Check for Pandoc
if command -v pandoc &> /dev/null; then
    echo "✅ Pandoc found. Generating PDFs..."
    echo ""
    
    declare -a files=(
        "CYVENTRA_PORTFOLIO_EN.md:CYVENTRA_PORTFOLIO_EN.pdf"
        "CYVENTRA_PORTFOLIO_ES.md:CYVENTRA_PORTFOLIO_ES.pdf"
        "CYVENTRA_ONEPAGER_EN.md:CYVENTRA_ONEPAGER_EN.pdf"
        "CYVENTRA_ONEPAGER_ES.md:CYVENTRA_ONEPAGER_ES.pdf"
    )
    
    for file_pair in "${files[@]}"; do
        IFS=':' read -r input output <<< "$file_pair"
        input_path="$SOURCE_DIR/$input"
        output_path="$OUTPUT_DIR/$output"
        
        if [ -f "$input_path" ]; then
            echo "Generating $output..."
            pandoc "$input_path" -o "$output_path" --pdf-engine=xelatex -V geometry:margin=2cm
            echo "✅ Generated: $output"
        else
            echo "❌ File not found: $input"
        fi
    done
    
    echo ""
    echo "✅ PDF generation complete!"
    echo "📁 PDFs saved in: $OUTPUT_DIR"
else
    echo "⚠️  Pandoc not found."
    echo ""
    echo "Installation options:"
    echo "1. Install Pandoc: https://pandoc.org/installing.html"
    echo "2. Use online converter: https://www.markdowntopdf.com/"
    echo "3. Use VS Code extension: Markdown PDF"
    echo ""
    echo "Manual conversion:"
    echo "- Copy markdown content"
    echo "- Paste into online converter"
    echo "- Download PDF"
fi


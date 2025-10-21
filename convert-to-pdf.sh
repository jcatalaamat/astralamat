#!/bin/bash

# Simple script to convert HTML CV to PDF
# Uses the default browser's print functionality

echo "🔄 Converting CV to PDF..."
echo ""
echo "Opening CV in browser. To create PDF:"
echo "1. Press Cmd+P when browser opens"
echo "2. Change Destination to 'Save as PDF'"
echo "3. Check 'Background graphics' checkbox"
echo "4. Click Save"
echo "5. Name it: Jordi-Amat-CV.pdf"
echo ""
echo "Press any key to open the CV..."
read -n 1 -s

# Open the HTML file (will open in default browser)
open CV-Jordi-Amat-Formatted.html

echo ""
echo "✅ Browser opened! Follow the steps above to create your PDF."
echo ""
echo "Tip: The PDF will look exactly like what you see in the browser!"

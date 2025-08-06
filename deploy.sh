#!/bin/bash

echo "🚀 StokStok Deployment Script"
echo "=============================="

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Create a new repository on GitHub named 'stokstok'"
    echo "2. Run the following commands:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/stokstok.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "🌐 For deployment options:"
    echo "- Netlify: Drag and drop the 'build' folder"
    echo "- Vercel: Connect your GitHub repository"
    echo "- GitHub Pages: Enable Pages in repository settings"
    echo ""
    echo "📁 Build files are ready in the 'build' directory"
else
    echo "❌ Build failed!"
    exit 1
fi 
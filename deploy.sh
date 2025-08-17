#!/bin/bash

# The Morning Sister Breakfast - Website Deployment Script
# This script helps deploy the website to various hosting platforms

echo "🌅 The Morning Sister Breakfast - Website Deployment"
echo "=================================================="

# Check if required files exist
echo "📁 Checking required files..."

required_files=("index.html" "dishes.html" "contact.html" "css/style.css" "js/script.js" "js/contact.js" "js/dishes.js")

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file - MISSING!"
        exit 1
    fi
done

echo ""
echo "🎯 Deployment Options:"
echo "1. Local testing"
echo "2. GitHub Pages"
echo "3. Netlify"
echo "4. AWS S3"
echo "5. Custom server"

read -p "Choose deployment option (1-5): " choice

case $choice in
    1)
        echo "🚀 Starting local server..."
        echo "Website will be available at: http://localhost:8000"
        echo "Press Ctrl+C to stop the server"
        python3 -m http.server 8000
        ;;
    2)
        echo "📚 GitHub Pages Deployment:"
        echo "1. Create a new repository on GitHub"
        echo "2. Push your code to the repository"
        echo "3. Go to Settings > Pages"
        echo "4. Select source branch (usually main or master)"
        echo "5. Your site will be available at: https://username.github.io/repository-name"
        ;;
    3)
        echo "🌐 Netlify Deployment:"
        echo "1. Go to netlify.com and sign up/login"
        echo "2. Drag and drop your website folder to deploy"
        echo "3. Or connect your GitHub repository for automatic deployments"
        echo "4. Your site will get a random URL (you can customize it)"
        ;;
    4)
        echo "☁️ AWS S3 Deployment:"
        echo "1. Install AWS CLI: pip install awscli"
        echo "2. Configure AWS: aws configure"
        echo "3. Create S3 bucket: aws s3 mb s3://your-bucket-name"
        echo "4. Enable static website hosting"
        echo "5. Upload files: aws s3 sync . s3://your-bucket-name"
        echo "6. Your site will be available at the S3 website URL"
        ;;
    5)
        echo "🖥️ Custom Server Deployment:"
        echo "1. Upload all files to your web server"
        echo "2. Ensure index.html is in the root directory"
        echo "3. Check that all file paths are correct"
        echo "4. Test the website functionality"
        ;;
    *)
        echo "❌ Invalid option. Please choose 1-5."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment instructions completed!"
echo ""
echo "📋 Post-deployment checklist:"
echo "✅ Test all pages load correctly"
echo "✅ Verify navigation works"
echo "✅ Check contact form functionality"
echo "✅ Test responsive design on mobile"
echo "✅ Verify all images display properly"
echo "✅ Check JavaScript functionality"
echo ""
echo "🌅 Thank you for choosing The Morning Sister Breakfast!"

#!/bin/bash

# Smart S3 Deployment Script for The Morning Sister Breakfast
# Copies files directly to preserve functionality - keeps development clean!
# Deploys to: s3://clomo-mdm-backup/uploads/html/sites/breakfast/

# Configuration
BUCKET_NAME="clomo-mdm-backup"
S3_FOLDER="uploads/html/sites/breakfast"
AWS_REGION="ap-southeast-2"  # Sydney, Australia region

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Temporary directory for production files
TEMP_DIR="./temp-deploy"
PRODUCTION_DIR="$TEMP_DIR/production"

echo -e "${BLUE}🚀 Starting Smart S3 Deployment for The Morning Sister Breakfast${NC}"
echo "=================================================="
echo -e "${GREEN}🌅 Target: s3://$BUCKET_NAME/$S3_FOLDER/${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
  echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
  echo "Visit: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
  exit 1
fi

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
  echo -e "${RED}❌ AWS CLI is not configured. Please run 'aws configure' first.${NC}"
  exit 1
fi

# Check if bucket exists
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
  echo -e "${RED}❌ Bucket '$BUCKET_NAME' does not exist.${NC}"
  echo "Please create the bucket first or check the bucket name."
  exit 1
fi

echo -e "${GREEN}✅ Bucket '$BUCKET_NAME' exists${NC}"

# Check if folder exists
if aws s3 ls "s3://$BUCKET_NAME/$S3_FOLDER/" 2>&1 | grep -q 'NoSuchKey'; then
  echo -e "${YELLOW}📁 Creating folder structure: $S3_FOLDER${NC}"

  # Create the folder structure by uploading a dummy file
  echo "Creating folder structure..." > temp_upload.txt
  aws s3 cp temp_upload.txt "s3://$BUCKET_NAME/$S3_FOLDER/"
  rm temp_upload.txt

  echo -e "${GREEN}✅ Folder structure created${NC}"
else
  echo -e "${GREEN}✅ Folder '$S3_FOLDER' already exists${NC}"
fi

# Clean up any existing temp directory
if [ -d "$TEMP_DIR" ]; then
  rm -rf "$TEMP_DIR"
fi

# Create temporary directories
mkdir -p "$PRODUCTION_DIR/css"
mkdir -p "$PRODUCTION_DIR/js"
mkdir -p "$PRODUCTION_DIR/images"
mkdir -p "$PRODUCTION_DIR"

echo -e "${YELLOW}📦 Creating production CSS...${NC}"

# Copy CSS without minification to preserve complex values and data URLs
cp css/style.css "$PRODUCTION_DIR/css/style.css"

echo -e "${GREEN}✅ CSS copied successfully (preserving all CSS rules)${NC}"

echo -e "${YELLOW}📦 Creating production JavaScript files...${NC}"

# Copy JavaScript files without minification to preserve functionality
cp js/script.js "$PRODUCTION_DIR/js/script.js"
cp js/contact.js "$PRODUCTION_DIR/js/contact.js"
cp js/dishes.js "$PRODUCTION_DIR/js/dishes.js"

echo -e "${GREEN}✅ JavaScript files copied successfully (preserving all functionality)${NC}"

echo -e "${YELLOW}📦 Creating production HTML files...${NC}"

# Copy HTML files (they are not minified)
cp index.html "$PRODUCTION_DIR/index.html"
cp dishes.html "$PRODUCTION_DIR/dishes.html"
cp contact.html "$PRODUCTION_DIR/contact.html"

echo -e "${GREEN}✅ Production HTML files created${NC}"

echo -e "${YELLOW}📦 Copying images and other assets...${NC}"
cp -r images "$PRODUCTION_DIR/"

# Copy any other assets
find . -maxdepth 1 -type f \( -name "*.ico" -o -name "*.xml" -o -name "*.txt" \) -exec cp {} "$PRODUCTION_DIR/" \;

echo -e "${GREEN}✅ Assets copied${NC}"

echo -e "${YELLOW}📦 Uploading to S3 with smart caching...${NC}"

# Upload CSS with 1-week cache
aws s3 cp "$PRODUCTION_DIR/css/style.css" "s3://$BUCKET_NAME/$S3_FOLDER/css/" \
  --cache-control "max-age=604800,public" \
  --content-type "text/css" \
  --region $AWS_REGION

# Upload JavaScript files with 1-week cache
aws s3 cp "$PRODUCTION_DIR/js/script.js" "s3://$BUCKET_NAME/$S3_FOLDER/js/" \
  --cache-control "max-age=604800,public" \
  --content-type "application/javascript" \
  --region $AWS_REGION

aws s3 cp "$PRODUCTION_DIR/js/contact.js" "s3://$BUCKET_NAME/$S3_FOLDER/js/" \
  --cache-control "max-age=604800,public" \
  --content-type "application/javascript" \
  --region $AWS_REGION

aws s3 cp "$PRODUCTION_DIR/js/dishes.js" "s3://$BUCKET_NAME/$S3_FOLDER/js/" \
  --cache-control "max-age=604800,public" \
  --content-type "application/javascript" \
  --region $AWS_REGION

echo -e "${YELLOW}📦 Uploading HTML files with 1-hour cache...${NC}"
for html_file in "$PRODUCTION_DIR"/*.html; do
  if [ -f "$html_file" ]; then
    filename=$(basename "$html_file")
    echo "Uploading $filename..."
    aws s3 cp "$html_file" "s3://$BUCKET_NAME/$S3_FOLDER/$filename" \
      --cache-control "max-age=3600,public" \
      --content-type "text/html" \
      --region $AWS_REGION
  fi
done

# Upload images with 1-month cache
aws s3 cp "$PRODUCTION_DIR/images/" "s3://$BUCKET_NAME/$S3_FOLDER/images/" \
  --recursive \
  --cache-control "max-age=2592000,public" \
  --region $AWS_REGION

# Upload other assets with 1-day cache
# aws s3 cp "$PRODUCTION_DIR"/*.ico "s3://$BUCKET_NAME/$S3_FOLDER/" \
#     --cache-control "max-age=86400,public" \
#     --region $AWS_REGION 2>/dev/null || true

# aws s3 cp "$PRODUCTION_DIR"/*.xml "s3://$BUCKET_NAME/$S3_FOLDER/" \
#     --cache-control "max-age=86400,public" \
#     --region $AWS_REGION 2>/dev/null || true

# aws s3 cp "$PRODUCTION_DIR"/*.txt "s3://$BUCKET_NAME/$S3_FOLDER/" \
#     --cache-control "max-age=86400,public" \
#     --region $AWS_REGION 2>/dev/null || true

echo -e "${GREEN}✅ All files uploaded successfully!${NC}"

# Clean up temporary directory
echo -e "${YELLOW}🧹 Cleaning up temporary files...${NC}"
rm -rf "$TEMP_DIR"

echo ""
echo -e "${BLUE}🎉 Smart Deployment Complete!${NC}"
echo "=================================================="
echo -e "${GREEN}✅ Website deployed to: s3://$BUCKET_NAME/$S3_FOLDER/${NC}"
echo ""
echo -e "${YELLOW}Your website is now available at:${NC}"
echo -e "${GREEN}http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/index.html${NC}"
echo ""
echo -e "${YELLOW}Direct page links:${NC}"
echo -e "${BLUE}Homepage:${NC} http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/index.html"
echo -e "${BLUE}Dishes:${NC} http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/dishes.html"
echo -e "${BLUE}Contact:${NC} http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/contact.html"
echo ""
echo -e "${YELLOW}📊 File size comparison:${NC}"
echo "Original CSS: $(ls -lh css/style.css | awk '{print $5}')"
echo "Deployed CSS: $(ls -lh "$PRODUCTION_DIR/css/style.css" | awk '{print $5}')"
echo "Original JS: $(ls -lh js/script.js | awk '{print $5}')"
echo "Deployed JS: $(ls -lh "$PRODUCTION_DIR/js/script.js" | awk '{print $5}')"
echo ""
echo -e "${BLUE}💡 Benefits of this approach:${NC}"
echo "• Development files stay clean and readable"
echo "• Files are copied directly during deployment"
echo "• No complex folder structure in development"
echo "• Easy to debug and maintain"
echo "• Automatic cleanup after deployment"
echo "• Smart caching for better performance"
echo "• Preserves all CSS and JavaScript functionality"
echo ""
echo -e "${GREEN}🌅 Happy Breakfast! 🍳☕🍜${NC}"

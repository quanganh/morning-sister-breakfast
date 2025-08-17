#!/bin/bash

# Update Modified Files Only - The Morning Sister Breakfast
# This script updates only the modified files to S3 without changing the original deploy script

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

echo -e "${GREEN}🔄 Update Modified Files Only - The Morning Sister Breakfast${NC}"
echo "================================================================"
echo -e "${BLUE}Target: s3://$BUCKET_NAME/$S3_FOLDER/${NC}"
echo -e "${BLUE}Region: $AWS_REGION${NC}"
echo ""

# Upload only modified files
echo -e "${YELLOW}📤 Uploading modified files only...${NC}"

# Upload modified HTML files
echo "Uploading modified HTML files..."
aws s3 cp index.html "s3://$BUCKET_NAME/$S3_FOLDER/"
aws s3 cp dishes.html "s3://$BUCKET_NAME/$S3_FOLDER/"
aws s3 cp contact.html "s3://$BUCKET_NAME/$S3_FOLDER/"

# Upload modified CSS file
echo "Uploading modified CSS file..."
aws s3 cp css/style.css "s3://$BUCKET_NAME/$S3_FOLDER/css/"

# Upload modified README
echo "Uploading modified README..."
aws s3 cp README.md "s3://$BUCKET_NAME/$S3_FOLDER/"

echo -e "${GREEN}✅ Modified files uploaded successfully!${NC}"

# Display the website URLs
echo ""
echo -e "${GREEN}🎉 Update completed successfully!${NC}"

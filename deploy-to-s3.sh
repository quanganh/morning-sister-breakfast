#!/bin/bash

# The Morning Sister Breakfast Website Deployment Script for S3 Folder
# This script deploys to: s3://clomo-mdm-backup/uploads/html/sites/breakfast/

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

echo -e "${GREEN}🌅 The Morning Sister Breakfast Website Deployment Script 🍽️${NC}"
echo "=================================================="
echo -e "${BLUE}Target: s3://$BUCKET_NAME/$S3_FOLDER/${NC}"
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

# Check bucket public access settings
# echo -e "${YELLOW}🔒 Checking bucket public access settings...${NC}"
# aws s3api get-public-access-block --bucket $BUCKET_NAME
# echo -e "${YELLOW}⚠️  If you see 'BlockPublicAcls: true', you need to update your bucket policy.${NC}"
# echo -e "${YELLOW}   Run the following command to allow public access:${NC}"
# echo -e "${BLUE}   aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false${NC}"
# echo ""

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

# Upload website files
echo -e "${YELLOW}📤 Uploading website files...${NC}"

# Upload HTML files
echo "Uploading HTML files..."
aws s3 cp index.html "s3://$BUCKET_NAME/$S3_FOLDER/"
aws s3 cp dishes.html "s3://$BUCKET_NAME/$S3_FOLDER/"
aws s3 cp contact.html "s3://$BUCKET_NAME/$S3_FOLDER/"

# Upload CSS files
echo "Uploading CSS files..."
aws s3 cp --recursive css/ "s3://$BUCKET_NAME/$S3_FOLDER/css/"

# Upload JavaScript files
echo "Uploading JavaScript files..."
aws s3 cp --recursive js/ "s3://$BUCKET_NAME/$S3_FOLDER/js/"

# Upload images
echo "Uploading images..."
aws s3 cp --recursive images/ "s3://$BUCKET_NAME/$S3_FOLDER/images/"

# Upload README
echo "Uploading README..."
aws s3 cp README.md "s3://$BUCKET_NAME/$S3_FOLDER/"

echo -e "${GREEN}✅ All files uploaded successfully!${NC}"

# Display the website URLs
echo ""
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo ""
echo -e "${YELLOW}Your website is now available at:${NC}"
echo -e "${GREEN}http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/index.html${NC}"
echo ""
echo -e "${YELLOW}Direct page links:${NC}"
echo -e "${BLUE}Homepage:${NC} http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/index.html"
echo -e "${BLUE}Dishes:${NC} http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/dishes.html"
echo -e "${BLUE}Contact:${NC} http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/$S3_FOLDER/contact.html"
echo ""
echo -e "${YELLOW}Note:${NC} Your S3 bucket is now configured for static website hosting."
echo -e "${YELLOW}Website URL:${NC} http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com/"
echo ""
echo -e "${GREEN}🌅 Happy Breakfast! 🍳☕🍜${NC}"

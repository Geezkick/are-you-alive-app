#!/bin/bash

echo "🚀 Deploying Are You Alive? to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel if not already logged in
if ! vercel whoami &> /dev/null; then
    echo "Please login to Vercel..."
    vercel login
fi

# Build the project
echo "Building project..."
npm run build

# Deploy
echo "Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"

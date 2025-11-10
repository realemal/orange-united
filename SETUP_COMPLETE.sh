#!/bin/bash
# Orange United - Complete Setup Script
# This script will guide you through the remaining setup steps

set -e

echo "🍊 Orange United - Final Setup"
echo "================================"
echo ""

echo "📋 STEP 1: Supabase SQL Setup"
echo "------------------------------"
echo "1. Open this URL in your browser:"
echo "   https://supabase.com/dashboard/project/xoptayfppsyfblbvbvoc/sql/new"
echo ""
echo "2. The SQL file will open automatically in a moment..."
echo ""
echo "Press Enter to open the SQL file..."
read

# Open the SQL file
open "scripts/setup-supabase.sql"

echo ""
echo "3. Copy ALL the SQL from the opened file"
echo "4. Paste it into the Supabase SQL Editor"
echo "5. Click 'Run' (or press Cmd+Enter)"
echo ""
echo "Press Enter when done..."
read

echo ""
echo "✅ Supabase SQL setup complete!"
echo ""

echo "🔐 STEP 2: Netlify Environment Variables"
echo "-----------------------------------------"
echo "1. Open this URL in your browser:"
echo "   https://app.netlify.com/sites/orangeunited/settings/env"
echo ""
echo "2. Copy the environment variables from the file opening now..."
echo ""

# Create a file with the env vars ready to paste
cat > /tmp/netlify-env-vars.txt << 'EOF'
COPY THESE TO NETLIFY (one at a time):

Variable 1:
  Name: PLAUSIBLE_DOMAIN
  Value: orangeunited.org

Variable 2:
  Name: SUPABASE_URL
  Value: https://xoptayfppsyfblbvbvoc.supabase.co

Variable 3:
  Name: SUPABASE_SERVICE_ROLE
  Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcHRheWZwcHN5ZmJsYnZidm9jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mjc4Njc0MywiZXhwIjoyMDc4MzYyNzQzfQ.spSdzYxYZV7-fADrW7oANSSEzcz0dH5lOxg21A8l5Xc

Variable 4:
  Name: SUPABASE_ANON_KEY
  Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcHRheWZwcHN5ZmJsYnZidm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3ODY3NDMsImV4cCI6MjA3ODM2Mjc0M30.V-aNNabmBFctb7ijVbEoxJ1XijVLkNTBAXMu566zqao

Click "Add a variable" for each one, paste the Name and Value, then click "Save"
EOF

open /tmp/netlify-env-vars.txt

echo ""
echo "Press Enter when all 4 variables are added..."
read

echo ""
echo "✅ Environment variables set!"
echo ""

echo "📨 STEP 3: Connect Netlify Forms to Function"
echo "---------------------------------------------"
echo "1. Open this URL in your browser:"
echo "   https://app.netlify.com/sites/orangeunited/forms"
echo ""
echo "2. Click 'Form notifications' or 'Settings and usage'"
echo "3. Scroll to 'Outgoing notifications'"
echo "4. Click 'Add notification' → 'Function'"
echo "5. Select 'form-submission' from dropdown"
echo "6. Click 'Save'"
echo ""
echo "Press Enter when done..."
read

echo ""
echo "✅ Form notification connected!"
echo ""

echo "🚀 STEP 4: Trigger Deploy"
echo "-------------------------"
echo "Opening Netlify deploys page..."
open "https://app.netlify.com/sites/orangeunited/deploys"

echo ""
echo "Click 'Trigger deploy' → 'Deploy site'"
echo ""
echo "Press Enter when deploy is triggered..."
read

echo ""
echo "🎉 SETUP COMPLETE!"
echo "===================="
echo ""
echo "Your Orange United site now has:"
echo "  ✅ Search index (23 articles + 7 board members)"
echo "  ✅ Vote tracker (with sample data)"
echo "  ✅ Form storage in Supabase"
echo "  ✅ Unified admin dashboard"
echo ""
echo "Visit your dashboard at:"
echo "  https://orangeunited.org/admin-dashboard"
echo ""
echo "🍊 You're all set!"


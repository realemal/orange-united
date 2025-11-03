# 🎨 Image Creation Guide for Orange United

This guide helps you create all the images you need from your main logo.

## 📋 What You Need to Create

1. **Favicon** - Small icon for browser tabs (32x32px or 512x512px)
2. **OG Default Image** - Social media share image (1200x630px)
3. **Logo variants** - Different sizes for different uses

---

## 🔧 Method 1: Using Canva (Easiest - Free)

### Create Favicon

1. Go to [Canva.com](https://canva.com) (free account)
2. Click **"Create a design"** → **"Custom size"** → 512 x 512 px
3. Upload your Orange United logo
4. Place the logo in the center, filling most of the canvas
5. **Optional**: Add a subtle background color (light orange: #FFF7ED)
6. Download as **PNG**
7. Go to [Favicon.io](https://favicon.io/favicon-converter/)
8. Upload your 512x512 PNG
9. Download the converted files
10. Save the `.ico` file to `/public/favicon.ico`

**Quick alternative:** Just crop your current logo to a square and resize to 512x512px!

### Create OG Image (Social Share)

1. Go to Canva → **"Create a design"** → **"Custom size"** → 1200 x 630 px
2. Choose a background:
   - **Option A**: Solid white (#FFFFFF)
   - **Option B**: Light orange gradient (#FFF7ED to #FFEDD5)
   - **Option C**: Solid orange (#F97316)
3. Add your logo (centered or left-aligned)
4. Add text:
   - **"ORANGE UNITED"** (large, bold, Inter font or similar)
   - **"Protecting Parent Choice"** (smaller, below)
   - If using orange background, make text white
   - If using white background, make text dark gray (#111827)
5. Download as **JPG** (high quality)
6. Save to `/public/og-default.jpg`

---

## 🔧 Method 2: Using Photoshop/GIMP (Advanced)

### Favicon
```
1. Open your logo in Photoshop/GIMP
2. Image → Image Size → 512 x 512 px
3. Crop to square if needed (focus on the orange)
4. Export as PNG
5. Use favicon.io to convert to .ico
```

### OG Image
```
1. New file: 1200 x 630 px, 72 DPI
2. Add background layer with color
3. Place logo (resize to fit nicely)
4. Add text layers with brand name and tagline
5. Export as JPG (quality: 85-90%)
```

---

## 🔧 Method 3: Quick Templates

I've created text templates below you can use:

### Canva Template URLs

**Favicon Template:**
- Size: 512x512px
- Background: #FFF7ED (light orange)
- Logo: Centered, 400x400px
- No text needed (logo is self-explanatory)

**OG Image Template Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│     [Logo]    ORANGE UNITED            │
│     300px     Protecting Parent Choice  │
│               Parents and Schools.      │
│               Together.                 │
│                                         │
└─────────────────────────────────────────┘
     1200 x 630 px
```

Colors to use:
- Background: White (#FFFFFF) or Light Orange (#FFF7ED)
- Text: Dark Gray (#111827) or Orange (#F97316)
- Logo: Your actual logo (already has colors)

---

## 📱 Testing Your Images

### Test Favicon
1. Save to `/public/favicon.ico`
2. Run `npm run dev`
3. Check browser tab - you should see your icon!

### Test OG Image
1. Save to `/public/og-default.jpg`
2. Deploy to Netlify
3. Test at [OpenGraph.xyz](https://www.opengraph.xyz/)
4. Enter your URL and preview how it looks on social media

---

## 🎯 Recommended Specifications

### Favicon
- **Format**: ICO or PNG
- **Size**: 32x32px (minimum) or 512x512px (recommended)
- **File name**: `favicon.ico`
- **Location**: `/public/favicon.ico`
- **Content**: Just your orange logo, centered

### OG Default Image
- **Format**: JPG (smaller file size) or PNG
- **Size**: 1200 x 630 px (exact!)
- **File size**: Under 1 MB (aim for 200-500 KB)
- **File name**: `og-default.jpg`
- **Location**: `/public/og-default.jpg`
- **Content**: 
  - Your logo (left or center)
  - "ORANGE UNITED" text
  - "Protecting Parent Choice" tagline
  - Clean, simple design

---

## 🎨 Design Tips

### For Favicon
- ✅ Keep it simple (just the orange is perfect)
- ✅ High contrast
- ✅ Recognizable at tiny sizes
- ❌ Don't add small text (won't be readable)

### For OG Image
- ✅ Keep text large and readable
- ✅ Use your brand colors
- ✅ Leave breathing room (don't crowd)
- ✅ Make sure logo is clear
- ❌ Don't use tiny fonts (minimum 48px for body text)
- ❌ Don't place important elements at edges (safe zone: 40px from edge)

---

## 🚀 Quick Start Checklist

**Option 1: Minimum Viable (5 minutes)**
- [ ] Crop logo to 512x512px square → save as `favicon.ico`
- [ ] Create simple 1200x630 image with logo + text → save as `og-default.jpg`
- [ ] Done!

**Option 2: Professional (20 minutes)**
- [ ] Create proper favicon using Canva or Photoshop
- [ ] Convert to .ico format
- [ ] Design OG image with nice layout
- [ ] Test both on live site
- [ ] Optimize file sizes
- [ ] Done!

---

## 📦 File Checklist

After creating your images, you should have:

```
public/
├── logo.png           ✅ (your main logo - already done!)
├── favicon.ico        ⬜ (create this)
└── og-default.jpg     ⬜ (create this)
```

---

## 🆘 Need Help?

**Can't create images?** Here are quick alternatives:

### Favicon
Use [Favicon.io Generator](https://favicon.io/favicon-generator/):
1. Enter text: "OU"
2. Background: Orange (#F97316)
3. Font: Bold
4. Download and use

### OG Image
Use [Canva's OG Image Template](https://www.canva.com/create/og-images/):
1. Search "Social Media" → "Facebook Post"
2. Resize to 1200x630
3. Add your logo and text
4. Download

---

## ✨ Pro Tips

1. **Compress images**: Use [TinyPNG](https://tinypng.com) before uploading
2. **Test on mobile**: Check how favicon looks on phone
3. **Test social sharing**: Share on Twitter/Facebook to verify OG image
4. **Keep source files**: Save your Canva designs for future edits

---

**Ready to create?** Pick your method and follow the steps above. You've got this! 🎨


# 📁 Image Placement Instructions

Place your created images in this `/public/` folder.

## Required Images

### 1. Main Logo ✅
- **File**: `logo.png`
- **Status**: DONE! (You provided this)
- **Size**: Your current size is fine
- **Used**: Header, footer, throughout site

### 2. Favicon ⬜
- **File**: `favicon.ico`
- **Status**: NEEDS TO BE CREATED
- **Size**: 32x32px (or 512x512px source)
- **Format**: .ico (preferred) or .png
- **Used**: Browser tab icon
- **Create**: Follow instructions in `/IMAGE_GUIDE.md` or `/CANVA_TEMPLATE_INSTRUCTIONS.md`

### 3. OG Default Image ⬜
- **File**: `og-default.jpg`
- **Status**: NEEDS TO BE CREATED  
- **Size**: 1200 x 630 px (EXACT!)
- **Format**: .jpg (preferred) or .png
- **Used**: Social media sharing (Facebook, Twitter, LinkedIn)
- **Create**: Follow instructions in `/IMAGE_GUIDE.md` or `/CANVA_TEMPLATE_INSTRUCTIONS.md`

---

## File Structure

Your `/public/` folder should look like this when complete:

```
public/
├── admin/
│   ├── config.yml
│   └── index.html
├── uploads/
│   └── (uploaded media from CMS)
├── logo.png           ✅ DONE
├── logo.svg           (optional, original SVG if you have it)
├── favicon.ico        ⬜ CREATE THIS
├── og-default.jpg     ⬜ CREATE THIS
└── PLACE_IMAGES_HERE.md (this file)
```

---

## Quick Steps

1. **Create favicon.ico**
   - Follow: `/CANVA_TEMPLATE_INSTRUCTIONS.md`
   - Save file here: `/public/favicon.ico`

2. **Create og-default.jpg**
   - Follow: `/CANVA_TEMPLATE_INSTRUCTIONS.md`
   - Save file here: `/public/og-default.jpg`

3. **Done!**
   - Run `npm run dev` to test locally
   - Check browser tab for favicon
   - Deploy to see OG image in action

---

## Testing

### Test Favicon Locally
```bash
npm run dev
```
Then check your browser tab - should see your orange icon!

### Test OG Image
1. Deploy site to Netlify
2. Go to [OpenGraph.xyz](https://www.opengraph.xyz/)
3. Enter your site URL
4. See preview of how it looks on social media

---

## Need Help?

Check these guides:
- `/IMAGE_GUIDE.md` - Complete image creation guide
- `/CANVA_TEMPLATE_INSTRUCTIONS.md` - Step-by-step Canva tutorial
- `/README.md` - Overall project documentation

Still stuck? The placeholder files will work for now - you can add proper images later!


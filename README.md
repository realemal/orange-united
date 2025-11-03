# 🍊 Orange United

**Protecting Parent Choice**

A fast, accessible civic website for Orange United, built with Astro, Tailwind CSS, and Decap CMS. Features include an admin panel for content management, email list signup, bilingual support (EN/ES), and professional SEO.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- Git
- A code editor (VS Code recommended)
- A GitHub account

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser to http://localhost:4321
```

That's it! The site should now be running locally.

---

## 📁 Project Structure

```
/
├── public/
│   ├── admin/               # Decap CMS admin panel
│   │   ├── config.yml       # CMS configuration
│   │   └── index.html       # CMS entry point
│   ├── uploads/             # Media uploads from CMS
│   ├── logo.svg             # Site logo
│   └── favicon.ico          # Site icon
├── src/
│   ├── components/          # Reusable UI components
│   ├── content/             # Content collections (articles, events, pages)
│   ├── data/                # Site settings JSON
│   ├── i18n/                # Internationalization setup
│   ├── layouts/             # Page layouts
│   ├── pages/               # Route pages
│   └── styles/              # Global CSS
├── astro.config.mjs         # Astro configuration
├── tailwind.config.cjs      # Tailwind CSS configuration
├── netlify.toml             # Netlify deployment config
└── package.json             # Dependencies
```

---

## 🎨 Key Features

### ✅ Admin Panel (Decap CMS)
- Access at `/admin` after deployment
- Add, edit, publish, and unpublish articles
- Manage events, pages, and site settings
- Git-based workflow (all changes commit to your repo)
- Editorial workflow (draft → review → publish)

### ✅ Content Management
- **Articles**: Full blog with categories, tags, featured posts, and Spanish translations
- **Events**: Upcoming and past events with RSVP links
- **Pages**: About, Get Involved, and custom pages
- **Site Settings**: Social links, newsletter provider, colors, and more

### ✅ Email Signup
- Default: Netlify Forms (submissions in Netlify dashboard)
- Can switch to Mailchimp or Beehiiv via CMS settings

### ✅ Bilingual Support
- Spanish toggle in header
- Optional Spanish fields for articles and pages
- Fallback messaging when translations aren't available

### ✅ SEO & Performance
- Open Graph and Twitter Card meta tags
- RSS feed at `/rss.xml`
- Sitemap generation
- Optimized images and assets
- Fast page loads with Astro

### ✅ Accessibility
- WCAG-compliant components
- Keyboard navigation
- Focus indicators
- Semantic HTML

---

## 🛠️ Deployment

### Deploy to Netlify (Recommended)

Netlify is recommended because it provides built-in authentication for Decap CMS.

#### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/orange-united.git
git push -u origin main
```

#### Step 2: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and select your `orange-united` repository
4. Build settings (should auto-detect):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**

#### Step 3: Enable Netlify Identity (for CMS authentication)

1. In your Netlify site dashboard, go to **Settings** → **Identity**
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select **"Invite only"** (recommended)
4. Under **External providers**, enable **GitHub** or **Google** (optional)
5. Go to **Settings** → **Identity** → **Services** → **Git Gateway** and click **"Enable Git Gateway"**

#### Step 4: Invite yourself as a CMS user

1. Go to **Identity** tab in Netlify dashboard
2. Click **"Invite users"**
3. Enter your email address
4. Check your email and accept the invitation
5. Set your password

#### Step 5: Access the CMS

1. Visit `https://YOUR_SITE.netlify.app/admin`
2. Log in with your email and password
3. Start creating content!

#### Step 6: Connect your custom domain (orangeunited.org)

1. In Netlify dashboard, go to **Domain settings** → **Add custom domain**
2. Enter `orangeunited.org`
3. Netlify will provide DNS records (A record and CNAME)
4. Go to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns)
5. Add the DNS records Netlify provided:
   - **A Record**: `@` → Netlify's IP address
   - **CNAME Record**: `www` → your-site.netlify.app
6. Wait 24-48 hours for DNS propagation
7. Enable **HTTPS** in Netlify (should be automatic after DNS is set up)

---

### Deploy to Vercel (Alternative)

Vercel works great but requires GitHub OAuth for Decap CMS authentication.

#### Step 1: Push to GitHub (same as above)

#### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Add New Project"** → Import your GitHub repo
3. Build settings (should auto-detect):
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **"Deploy"**

#### Step 3: Set up GitHub OAuth for CMS

1. Follow [Decap CMS GitHub OAuth guide](https://decapcms.org/docs/github-backend/)
2. Update `public/admin/config.yml` backend to use GitHub OAuth
3. Redeploy

#### Step 4: Connect custom domain

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add `orangeunited.org`
3. Follow Vercel's DNS instructions for GoDaddy

---

## ✏️ Managing Content

### Adding/Editing Articles

1. Go to `/admin` and log in
2. Click **Articles** → **New Article**
3. Fill in:
   - Title
   - Date
   - Excerpt (summary)
   - Category (Curriculum, Board Meetings, Opinion, News)
   - Tags (optional)
   - Body content (Markdown)
   - Spanish Title/Excerpt (optional)
   - Status: **draft** or **published**
   - Featured (checkbox)
4. Click **"Save"** (saves as draft) or **"Publish"** (goes live immediately)

**To take down an article:**
- Set Status to **"draft"** or delete it entirely

### Adding Events

1. Go to `/admin` → **Events** → **New Event**
2. Fill in:
   - Title
   - Date & Time
   - Location
   - Description
   - RSVP URL (optional)
   - Canceled checkbox (if event is canceled)
3. Publish

### Editing Pages (About, Get Involved)

1. Go to `/admin` → **Pages**
2. Select the page to edit
3. Update content in Markdown
4. Publish

### Updating Site Settings

1. Go to `/admin` → **Site Settings** → **General Settings**
2. Update:
   - Social media URLs
   - Newsletter provider
   - Google Analytics ID
   - Primary color (hex code)
3. Save

---

## 📧 Newsletter Setup

### Using Netlify Forms (Default)

Already configured! Form submissions go to your Netlify dashboard under **Forms**.

To view submissions:
1. Go to Netlify dashboard
2. Click **Forms** tab
3. See all newsletter signups

### Switching to Mailchimp

1. Go to your [Mailchimp account](https://mailchimp.com)
2. Create a new audience
3. Go to **Audience** → **Signup forms** → **Embedded forms**
4. Copy the embed code
5. In your site's CMS (`/admin`), go to **Site Settings**
6. Set **Newsletter Provider** to `mailchimp`
7. Paste the embed code into **Newsletter Embed HTML**
8. Save and publish

### Switching to Beehiiv

1. Go to your [Beehiiv dashboard](https://beehiiv.com)
2. Get your embed code
3. In your site's CMS (`/admin`), go to **Site Settings**
4. Set **Newsletter Provider** to `beehiiv`
5. Paste the embed code into **Newsletter Embed HTML**
6. Save and publish

---

## 🌐 Adding Spanish Translations

### For Articles

1. When creating/editing an article in `/admin`
2. Fill in optional fields:
   - **Spanish Title** (esTitle)
   - **Spanish Excerpt** (esExcerpt)
3. For the body content, you can either:
   - Add a Spanish version at the end of the article (separated by `---`)
   - Create a separate Spanish article with the same slug + `-es`

When a user toggles to Spanish and you've provided translations, they'll see the Spanish version. Otherwise, they'll see English with a note "(Spanish translation coming soon)".

### For Pages (About, Get Involved)

Currently, pages use a single body field. To add Spanish:
1. Edit the page in `/admin`
2. Add Spanish content at the end separated by a heading:

```markdown
# English content here

---

# Contenido en español aquí
```

---

## 🔧 Customization

### Changing Colors

1. Go to `/admin` → **Site Settings** → **General Settings**
2. Update **Primary Color** (hex code, e.g., `#F97316`)
3. Save

Or manually edit `tailwind.config.cjs`:

```javascript
colors: {
  orange: {
    500: '#YOUR_COLOR', // Primary brand color
  },
}
```

### Adding/Removing Navigation Items

Edit `src/components/Header.astro`:

```javascript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add more items here
];
```

### Changing Social Links

Go to `/admin` → **Site Settings** and update social URLs, or manually edit `src/data/settings.json`.

### Adding Google Analytics

1. Get your GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
2. Go to `/admin` → **Site Settings**
3. Enter your GA4 ID in **Google Analytics ID**
4. Save

The tracking script will automatically be added to all pages.

---

## 📱 Social Media Links

Update these in `/admin` → **Site Settings**:

- **Twitter**: https://twitter.com/orangeunitedca
- **Instagram**: https://instagram.com/orangeunited.ca
- **Facebook**: https://facebook.com/orangeunited

---

## 🐛 Troubleshooting

### CMS Login Issues

**Problem**: Can't log in to `/admin`

**Solutions**:
- Make sure Netlify Identity is enabled
- Check that you've accepted the email invitation
- Try clearing browser cache/cookies
- Ensure you're using the correct email/password

### Build Failures

**Problem**: Site won't build on Netlify

**Solutions**:
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version is 20+
- Check for syntax errors in Markdown content

### Forms Not Submitting

**Problem**: Newsletter/contact forms don't work

**Solutions**:
- Ensure `netlify.toml` is present
- Check that forms have `data-netlify="true"` attribute
- Verify form name matches in hidden input field

### Spanish Toggle Not Working

**Problem**: Language toggle doesn't switch content

**Solutions**:
- Check browser console for JavaScript errors
- Ensure i18next is properly initialized
- Clear localStorage: `localStorage.clear()` in browser console

---

## 🤝 Support & Community

- **Report issues**: Open an issue on GitHub
- **Questions**: Contact via the website contact form
- **Contribute**: Pull requests welcome!

---

## 📄 Legal

**Footer Disclaimer**: "Paid for by The Community Action Network."

This is automatically included in the footer. To change it, edit `src/components/Footer.astro`.

---

## 📚 Tech Stack

- **Framework**: [Astro](https://astro.build) - Fast static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **CMS**: [Decap CMS](https://decapcms.org) - Git-based content management
- **i18n**: [i18next](https://www.i18next.com) - Internationalization
- **Forms**: [Netlify Forms](https://www.netlify.com/products/forms/) - Form handling
- **Hosting**: [Netlify](https://netlify.com) or [Vercel](https://vercel.com)

---

## 🎯 Next Steps

1. ✅ Deploy to Netlify
2. ✅ Connect orangeunited.org domain
3. ✅ Set up Netlify Identity and invite team members
4. ✅ Log in to `/admin` and start adding content
5. ✅ Configure newsletter provider (Mailchimp/Beehiiv)
6. ✅ Add Google Analytics
7. ✅ Share on social media and start growing your community!

---

## 📞 Need Help?

If you run into any issues during setup or have questions, feel free to:

- Check the troubleshooting section above
- Review Netlify's documentation
- Search Astro's documentation
- Open an issue on GitHub

**Good luck building Orange United! 🍊**


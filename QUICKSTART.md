# 🚀 Orange United - Quick Start Guide

Get your Orange United website up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Run Locally

```bash
npm run dev
```

Visit **http://localhost:4321** in your browser. You should see your Orange United site!

## Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial Orange United site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/orange-united.git
git push -u origin main
```

## Step 4: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repo
4. Deploy! (settings should auto-detect)

## Step 5: Set Up CMS Access

1. In Netlify dashboard → **Settings** → **Identity** → **Enable Identity**
2. Enable **Git Gateway** under Identity Services
3. **Identity** tab → **Invite users** → Enter your email
4. Check email and set password
5. Visit **yoursite.netlify.app/admin** to log in!

## Step 6: Connect Domain (orangeunited.org)

1. Netlify dashboard → **Domain settings** → **Add custom domain**
2. Enter `orangeunited.org`
3. Copy the DNS records Netlify provides
4. Go to GoDaddy DNS settings
5. Add the A and CNAME records
6. Wait 24-48 hours for DNS propagation

## 🎉 You're Done!

Your site is now live with:
- ✅ Admin panel at `/admin`
- ✅ Email signup forms
- ✅ Spanish language toggle
- ✅ SEO optimization
- ✅ RSS feed
- ✅ Professional design

## 📝 Next Steps

- Add your first article at `/admin`
- Update About page with your story
- Add upcoming events
- Configure newsletter provider (Mailchimp/Beehiiv)
- Share on social media!

## 🆘 Need Help?

Check the full [README.md](./README.md) for detailed documentation.

**Happy publishing! 🍊**


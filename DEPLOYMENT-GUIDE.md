# 🚀 Deployment Guide for Donnelly GP14 Website

## Current Issue: SSL/HSTS Error
Your domain `gp14.net` is configured with DNS but **no website is deployed yet**. This causes the SSL error you're seeing.

---

## ✅ Quick Deploy to Netlify (Recommended)

### Method 1: Drag & Drop Deploy (Easiest - 2 minutes)

1. **Go to Netlify**: https://app.netlify.com/drop

2. **Drag your entire folder** (`gp14 web`) onto the deploy dropzone
   - Or select these files manually:
     - ✅ index.html
     - ✅ tuning-guide.html
     - ✅ blog.html
     - ✅ sitemap.xml
     - ✅ robots.txt
     - ✅ netlify.toml
     - ✅ _redirects

3. **Wait for deployment** (30 seconds)
   - Netlify will give you a random URL like: `random-name-123.netlify.app`

4. **Connect your custom domain**:
   - Go to: **Site settings → Domain management → Add custom domain**
   - Enter: `gp14.net`
   - Netlify will detect your existing DNS and connect automatically
   - SSL certificate will be provisioned within 1 minute

5. **Done!** Visit https://gp14.net

---

### Method 2: Netlify CLI (For developers)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from your folder
cd "c:\Users\donne\gp14 web"
netlify deploy --prod

# Follow the prompts to connect to your site
```

---

### Method 3: Git + Continuous Deployment

1. **Create a Git repository**:
```bash
cd "c:\Users\donne\gp14 web"
git init
git add .
git commit -m "Initial commit - Donnelly GP14 website"
```

2. **Push to GitHub/GitLab**:
```bash
# Create a new repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/gp14-website.git
git push -u origin main
```

3. **Connect to Netlify**:
   - Go to: https://app.netlify.com/start
   - Click "Import from Git"
   - Select your repository
   - Deploy settings:
     - Build command: *leave empty*
     - Publish directory: `.` (root)
   - Click "Deploy site"

4. **Add custom domain** (same as Method 1, step 4)

---

## 🔧 Current DNS Configuration

Your DNS is already correctly configured:

| Record | Type | Value |
|--------|------|-------|
| gp14.net | A/CNAME | Points to Netlify |
| www.gp14.net | A/CNAME | Points to Netlify |

**Name servers**:
- dns1.p05.nsone.net
- dns2.p05.nsone.net
- dns3.p05.nsone.net
- dns4.p05.nsone.net

✅ **This is correct** - No DNS changes needed!

---

## 📋 Deployment Checklist

- [x] DNS configured with Netlify nameservers
- [x] DNS records pointing to Netlify
- [ ] **Website deployed to Netlify** ← YOU ARE HERE
- [ ] Custom domain connected
- [ ] SSL certificate provisioned (automatic)
- [ ] Website accessible at https://gp14.net

---

## 🚨 Why You're Getting the SSL Error

1. **DNS works**: gp14.net → Points to Netlify ✅
2. **No site deployed**: Nothing hosted on Netlify ❌
3. **Browser expects HTTPS**: Domain configured for SSL but no certificate ❌

**Solution**: Deploy the website (use Method 1 above - takes 2 minutes!)

---

## 📦 Files Ready for Deployment

Your website folder contains everything needed:

```
gp14 web/
├── index.html              ← Main landing page
├── tuning-guide.html       ← Tuning guide page
├── blog.html               ← Blog page
├── sitemap.xml             ← SEO sitemap
├── robots.txt              ← Search engine instructions
├── netlify.toml            ← Netlify configuration (NEW!)
└── _redirects              ← URL redirects (NEW!)
```

---

## 🔐 SSL Certificate (Automatic)

Once deployed, Netlify will automatically:
1. Detect your custom domain
2. Provision a free Let's Encrypt SSL certificate
3. Enable HTTPS redirect
4. Configure HSTS headers

**Time to SSL**: ~1 minute after deployment

---

## 🎯 After Deployment

1. **Test your website**:
   - https://gp14.net
   - https://www.gp14.net
   - https://gp14.net/tuning-guide
   - https://gp14.net/blog

2. **Verify SSL**: Check for green padlock in browser

3. **Test SEO**:
   - https://gp14.net/sitemap.xml
   - https://gp14.net/robots.txt

4. **Submit to Google**:
   - https://search.google.com/search-console
   - Add property: gp14.net
   - Submit sitemap: https://gp14.net/sitemap.xml

---

## ⚡ Performance Optimization (Already Configured)

Your `netlify.toml` includes:
- ✅ Security headers (XSS, clickjacking protection)
- ✅ Cache control (1 year for static assets)
- ✅ Image compression
- ✅ Pretty URLs
- ✅ 404 handling

---

## 🆘 Troubleshooting

**Issue**: "Site not found" after deployment
- **Solution**: Add custom domain in Netlify settings

**Issue**: "SSL certificate pending"
- **Solution**: Wait 1-2 minutes, refresh page

**Issue**: "Changes not showing"
- **Solution**: Clear browser cache (Ctrl+Shift+R)

**Issue**: "404 on sub-pages"
- **Solution**: Ensure `_redirects` file is deployed

---

## 📞 Support

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://answers.netlify.com
- **SSL Issues**: https://docs.netlify.com/domains-https/https-ssl/

---

## ✨ Next Steps After Deployment

1. **Analytics**: Add Google Analytics 4
2. **Forms**: Configure Netlify Forms for contact form
3. **Performance**: Test on PageSpeed Insights
4. **SEO**: Submit to Google Search Console
5. **Monitoring**: Set up uptime monitoring

---

**🎉 Ready to deploy! Use Method 1 (Drag & Drop) for the fastest deployment.**

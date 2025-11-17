# Apple Store Mimic Page

A static website that mimics the Apple Store design with an iOS-style payment alert notification popup.

## Features

- 🍎 **Authentic Apple Design** - Pixel-perfect recreation of Apple's UI/UX
- 📱 **iOS-Style Alert** - Payment notification popup that appears on page load
- 📞 **Direct Call Button** - Click-to-call functionality to customer support
- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Pure HTML/CSS/JS** - No framework dependencies, fast loading
- 🚀 **Deployment Ready** - Easy setup for GitHub Pages and DigitalOcean

## Alert Notification

The page displays a payment alert notification with the following details:
- Amount: $289.00 USD
- Alert message about unrecognized device
- Call button to contact support: +1888-530-7545
- Professional iOS-style design with smooth animations

## Project Structure

```
apple-store-mimic/
├── index.html          # Main HTML file
├── styles.css          # CSS styling with Apple design
├── script.js           # JavaScript for notification popup
└── README.md           # This file
```

## Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The notification popup will appear automatically

No build process or dependencies required!

## Deployment

### GitHub Pages

1. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `apple-store-mimic`

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Apple Store mimic page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/apple-store-mimic.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at: `https://YOUR-USERNAME.github.io/apple-store-mimic/`

### DigitalOcean App Platform

1. **Prepare your repository**
   - Make sure your code is pushed to GitHub (follow steps above)

2. **Create a new app on DigitalOcean**
   - Log in to [DigitalOcean](https://cloud.digitalocean.com)
   - Click "Create" → "Apps"
   - Select "GitHub" and authorize DigitalOcean
   - Choose your repository

3. **Configure your app**
   - App Type: Static Site
   - Build Command: (leave empty)
   - Output Directory: `/`
   - Click "Next"

4. **Deploy**
   - Review and click "Create Resources"
   - Wait for deployment to complete
   - Your site will be live at the provided DigitalOcean URL

### DigitalOcean Droplet (Alternative)

1. **Create a Droplet**
   - Choose Ubuntu 22.04 LTS
   - Select your preferred plan ($4/month minimum)

2. **Connect via SSH**
   ```bash
   ssh root@your_droplet_ip
   ```

3. **Install Nginx**
   ```bash
   apt update
   apt install nginx -y
   ```

4. **Upload your files**
   ```bash
   cd /var/www/html
   rm index.nginx-debian.html
   # Upload your index.html, styles.css, and script.js here
   ```

5. **Configure firewall**
   ```bash
   ufw allow 'Nginx Full'
   ufw enable
   ```

6. **Access your site**
   - Visit `http://your_droplet_ip` in your browser

## Customization

### Change Phone Number
Edit `index.html` line containing the phone number:
```html
<a href="tel:+18885307545" class="call-button">
    Tap to call Support: +1888-530-7545
</a>
```

### Change Alert Amount
Edit `index.html` to modify the payment amount:
```html
<strong>$289.00 USD</strong>
```

### Modify Colors
Edit `styles.css` CSS variables:
```css
:root {
    --apple-black: #1d1d1f;
    --apple-blue: #0071e3;
    --apple-red: #FF3B30;
}
```

### Disable Auto-popup
Edit `script.js` to remove or modify the auto-show behavior:
```javascript
// Comment out or remove this section
setTimeout(() => {
    notification.style.display = 'flex';
}, 500);
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- SVG icons

## License

This project is for educational purposes only. Apple, iPhone, iPad, MacBook, AirPods, and Apple Watch are trademarks of Apple Inc.

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Note**: This is a static mockup for demonstration purposes. It does not connect to any real Apple services or process actual payments.

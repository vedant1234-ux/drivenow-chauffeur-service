# 🚗 DriveNow – Professional Chauffeur Booking Service

DriveNow is a modern, high-performance web application designed to help users book trained and verified chauffeurs for their personal vehicles.

Built with React, TypeScript, Vite, and Tailwind CSS, it offers a smooth, intuitive, and reliable booking experience.

🔗 **GitHub Repository**: [https://github.com/vedant1234-ux/drivenow-chauffeur-service](https://github.com/vedant1234-ux/drivenow-chauffeur-service)

🌐 **Live Demo**: [https://drivenow-chauffeur-service-gryq.vercel.app](https://drivenow-chauffeur-service-gryq.vercel.app)

## ✨ Features

- 🚘 Book verified, professional drivers for your own car
- 📅 Trip scheduling with pickup, destination, date & trip duration
- 📱 Modern, clean, mobile-first UI
- ⚡ Smooth page transitions & animations
- 🛡️ Driver safety, verification & ratings
- 🚀 Ultra-fast performance with Vite

## 🛠 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/vedant1234-ux/drivenow-chauffeur-service.git
cd drivenow-chauffeur-service
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

➡️ **App runs at**: http://localhost:8080

### 4. Build for production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   ├── BookingForm.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/
├── lib/
└── main.tsx
```

## 🚀 Deployment

### ✅ Vercel Deployment (Live)

The project is deployed on Vercel, with automatic updates on push to main.

🌐 **Production URL**: [https://drivenow-chauffeur-service-gryq.vercel.app](https://drivenow-chauffeur-service-gryq.vercel.app)

### Deploy on Other Platforms

#### Vercel (Recommended)

- Import GitHub repo
- Vercel auto-detects Vite
- Deploy instantly

#### Netlify

```bash
npm run build
# Upload the /dist folder in Netlify dashboard
```

#### Other supported platforms

- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## ⚙️ Build & Config Notes

This project includes additional build configuration for smoother deployment:

- **`.npmrc`**
  - Enables legacy peer deps to avoid dependency conflicts
  - Prevents Vercel integrity failures

- **`vercel.json`**
  - Custom build command with `--force`
  - Ensures clean install even when dependency metadata changes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch and open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For help, suggestions or issues:

📧 support@drivenow.com

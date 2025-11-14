# 🚗 DriveNow – Professional Chauffeur Service

DriveNow is a modern web application that allows users to book trained, verified drivers for their personal vehicles. Built with React, TypeScript, and Tailwind CSS, it provides a fast, smooth, and user-friendly booking experience.

🔗 **Repository**: [https://github.com/vedant1234-ux/drivenow-chauffeur-service](https://github.com/vedant1234-ux/drivenow-chauffeur-service)

🌐 **Live Demo**: [https://drivenow-chauffeur-service-gryq.vercel.app](https://drivenow-chauffeur-service-gryq.vercel.app)

## ✨ Features

- Book Professional Drivers for your own car
- Trip Scheduling with pickup, destination, date & duration
- Clean & Responsive UI (mobile-first)
- Smooth Navigation with modern animations
- Driver Safety & Verification indicators
- Fast & Optimized with Vite

## 🛠 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vedant1234-ux/drivenow-chauffeur-service.git
cd drivenow-chauffeur-service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

👉 Default URL: http://localhost:8080

### 4. Build for Production

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

### ✅ Live Deployment

The application is currently deployed on **Vercel**:

🌐 **Production URL**: [https://drivenow-chauffeur-service-gryq.vercel.app](https://drivenow-chauffeur-service-gryq.vercel.app)

The deployment is automatically updated when you push to the `main` branch.

### Deploy to Other Platforms

#### Vercel (Recommended)

- Import your GitHub repo
- Vercel auto-detects Vite
- Deploy instantly

#### Netlify

```bash
npm run build
# Deploy the dist folder
```

#### Other Options

- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

### Build Configuration

This project includes:
- `.npmrc` - Configured for legacy peer deps to avoid integrity issues
- `vercel.json` - Custom build command with force install flags

## 🤝 Contributing

1. Fork this repository
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push and open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For issues or questions:

📧 Email: support@drivenow.com

## 🐛 Troubleshooting

### Vercel Build Issues

If you encounter npm integrity errors during Vercel deployment:
- The project includes `.npmrc` and `vercel.json` configured to handle these issues
- The build uses `--force` flag to bypass corrupted package checks
- If issues persist, try clearing Vercel's build cache

### Local Development

If you encounter dependency issues locally:
```bash
npm install --legacy-peer-deps
```

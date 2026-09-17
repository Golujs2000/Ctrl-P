# Ctrl-P

> **Ctrl P — Printing • Advertising • Event**  
> Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna, Bihar  
> Contact: +91 9304085366 / +91 9304323888 • GSTIN: 10AAIPQ8193J1ZD  

Professional printing, advertising, and event solutions web application built with **React**, **Express.js**, **Tailwind CSS**, and **Lucide Icons**, configured for **Firebase Hosting**.

---

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons
- **Backend**: Node.js, Express.js (Quote calculator, lead capture, WhatsApp link generator)
- **Deployment**: Configured for Firebase Hosting (`firebase.json`, `.firebaserc`)
- **Assets**: 200+ high-resolution, renamed, web-friendly media files with audit manifest (`Assets/assets-manifest.json`)

---

## 📦 Project Structure

```
Ctrl-P/
├── Assets/                    # Original catalog media (systematically renamed)
│   └── assets-manifest.json  # Full audit trail mapping
├── client/                    # React frontend
│   ├── public/assets/         # Web-served images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # Header with brand logo & direct call pill
│   │   │   ├── Hero.jsx       # 1:1 hero with 3D printer visual & CTAs
│   │   │   ├── Services.jsx   # 21 service cards + Custom Solutions banner
│   │   │   ├── Machines.jsx   # Offset & Eco-Flex industrial machinery specs
│   │   │   ├── AboutWhy.jsx   # About Ctrl P & Why Ctrl P checklist
│   │   │   ├── Portfolio.jsx  # Real production work gallery & lightbox
│   │   │   ├── CtaBanner.jsx  # Bold yellow & red full-width CTA strip
│   │   │   ├── Location.jsx   # Kalyani Complex Patna address & map
│   │   │   ├── Footer.jsx     # Brand footer & social icons
│   │   │   └── QuoteModal.jsx # Interactive quote calculator & WhatsApp dispatch
│   │   ├── App.jsx
│   │   └── index.css          # Tailwind CSS styling & brand tokens
│   └── vite.config.js
├── server/                    # Express backend
│   ├── index.js               # API endpoints (/api/quote, /api/contact, /api/health)
│   └── package.json
├── firebase.json              # Firebase Hosting configuration
├── .firebaserc                # Firebase project configuration
└── package.json               # Root scripts
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
npm --prefix client install
npm --prefix server install
```

### 2. Run Development Server
```bash
npm run dev
```
- Client runs at: `http://localhost:3000`
- Express API runs at: `http://localhost:5000`

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to Firebase Hosting
```bash
firebase deploy
```

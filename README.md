# 🚀 Vegapod Hyperloop — 3D Aerospace Web Portal

[![React 19](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r182-black.svg)](https://threejs.org/)
[![Vite 7](https://img.shields.io/badge/Vite-7.3.6-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Built for](https://img.shields.io/badge/MIT--WPU-Pune-f05423.svg)](https://mitwpu.edu.in)

> **Next-Generation 3D-Animated Web Experience** for **Team Vegapod Hyperloop**, the premier student engineering contingent from **Dr. Vishwanath Karad MIT World Peace University (MIT-WPU), Pune, India**, representing the nation at the **European Hyperloop Week (EHW)** and **SpaceX Hyperloop Pod Competition**.

---

## ⚡ Highlights & Key Innovations

- **Aerospace 3D Hyperloop Simulation**: Procedural carbon-composite pod body with aerodynamic canopy, rear Linear Induction Motor (LIM) propulsion nozzle, dual-frequency electromagnetic levitation skids with dynamic flux fields, speed wake slipstream particles, and an infinite vacuum tube with moving structural portals.
- **Dynamic Telemetry & Speed Regimes**: Real-time switchable flight modes:
  - `0 km/h` — **Diagnostic Dock** (Static 360° orbital scrutiny)
  - `250 km/h` — **EHW Track Cruise** (Nominal linear induction acceleration)
  - `1,200 km/h` — **Supersonic Vacuum Flight** (Near sonic barrier transit)
- **Interactive 3D Engineering Hotspots**: Clickable annotations directly attached to the 3D pod highlighting Aerodynamics, Modular Multi-Plate Chassis Patent, LIM Contactless Propulsion, and Electrodynamic Levitation.
- **Web Audio Propulsion Synthesizer**: Built-in dual-oscillator procedural acoustic engine simulating the magnetic hum and harmonic turbine drone of high-speed hyperloop travel.
- **100% Data Fidelity**:
  - **40+ Active Engineers & Leadership**: Full team directory categorized by subsystem (Leads, Structures, Electromagnets, High Voltage, Low Voltage Avionics, Thermal, Business) with LinkedIn handles.
  - **Alumni Network**: Multi-year alumni directory across 2025 and 2024 cohorts.
  - **Faculty Advisory Board**: Comprehensive academic leadership profiles from the MIT-WPU Department of Mechanical Engineering.
  - **27 Corporate Partners**: High-resolution vector sponsor grid (MAHLE, Infineon, Norbar, Traco Power, GoPro, Hilti, Arrow, Altium, Ansys, etc.).
  - **3 Published Patents**: Published Indian Patent Office innovations on chassis modularity, force-multiplying beam brakes, and electrodynamic levitation.
  - **Historic Milestones (2019–2026)**: Interactive timeline from SpaceX HQ in Hawthorne, California to EHW in Delft, Edinburgh, Zurich, and Groningen.
  - **Media & YouTube Hub**: Official `@vegapodhyperloop` series cards, video modal player, and social hubs.
  - **Photographic Lightbox Archive**: 18 high-resolution photos with multi-year filter tabs and fullscreen zoom modal.
  - **Communications Terminal**: Recruitment form connection and interactive message transmission console with celebratory confetti effects.

---

## 🎨 Brand Design System

Strictly aligned with the official Vegapod Hyperloop logo identity:
- **Electric Orange**: `#f05423` (Energy, propulsion, and active accents)
- **Deep Navy Blue**: `#0d2446` (Aerospace chassis, structural cards, and depth)
- **Void Obsidian**: `#030811` (Deep space vacuum background)
- **Cyan Flux**: `#00d2ff` (Magnetic levitation and telemetry highlights)

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Vite 7.3** | Lightning-fast HMR and optimized production bundling |
| **React 19.2** | Concurrent UI rendering with strict peer dependency management |
| **Three.js & @react-three/fiber** | WebGL hardware-accelerated 3D scene rendering |
| **@react-three/drei** | Orbital camera controls and adaptive DPR scaling |
| **Tailwind CSS v3.4** | Aerospace glassmorphism, responsive grid layout, and brand tokens |
| **Framer Motion 12** | Silky layout animations, modals, and tab switches |
| **Canvas Confetti** | Celebratory transmission feedback |
| **Lucide React** | Aerospace and telemetry icon set |

---

## 💻 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/harshvshah12/vegapod-hyperloop-portal.git

# Navigate to project directory
cd vegapod-hyperloop-portal

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚢 One-Click Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fharshvshah12%2Fvegapod-hyperloop-portal)

This project is pre-configured with `vercel.json` and `.npmrc` for seamless, 100% automated deployment to [Vercel](https://vercel.com/).

### Method 1: Deploy from Vercel Dashboard (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and select **`harshvshah12/vegapod-hyperloop-portal`**.
3. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on a global Edge CDN URL within ~60 seconds!

### Method 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly to production
vercel --prod
```

### Key Vercel Optimizations Included
- **SPA Client-Side Routing**: Complete rewrite configuration in `vercel.json` ensuring all 11 sub-routes (`/about`, `/subsystems`, `/achievements`, `/patents`, `/members`, `/mentors`, `/sponsors`, `/gallery`, `/media`, `/contact`) work on direct URL visits and hard refreshes without 404 errors.
- **Peer Dependency Guard (`.npmrc`)**: Configured with `legacy-peer-deps=true` so automated Vercel CI installs never fail on React 19 / Three.js peer dependencies.
- **Edge Cache Optimization**: 1-year immutable caching on bundled static assets (`/assets/*`).
- **Security Headers**: Production headers configured (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`).

---

## 🏛️ Incubation & Affiliations

- **Incubator**: Faculty of Engineering & Technology, Dr. Vishwanath Karad MIT World Peace University (MIT-WPU), Pune, Maharashtra, India.
- **Competition**: European Hyperloop Week (EHW).
- **Alumni Heritage**: SpaceX Hyperloop Pod Competition (Hawthorne, California).

© Team Vegapod Hyperloop. Engineered with passion at MIT-WPU.

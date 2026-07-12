# 🍽️ DineEase: Restaurant Reservation Frontend

<div align="center">
  <img src="https://img.shields.io/badge/Live_Demo-Visit_Now-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-DOM-red?style=for-the-badge&logo=react-router" alt="React Router" />
  <img src="https://img.shields.io/badge/Vite-4.0-purple?style=for-the-badge&logo=vite" alt="Vite" />
</div>

<br/>

A modern, responsive React interface serving as the client-facing portal for the DineEase ecosystem. Built with absolute speed and intuitive UX in mind, natively handling advanced user states, reservation cart architectures, and table management portals. 

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🛡️ Token Injection** | Axios instances actively trapping and wrapping JWT signatures for secure endpoints. |
| **🪑 Visual Seating Config** | Clean component UI allowing users to visually set pax limit constraints securely. |
| **🔄 Seamless Dashboard** | Real-time user reservation tracking with instant cancellation capabilities. |
| **👨‍💼 Operator Analytics** | Administrator portal designed to view real-time restaurant active floor-plans and edit metrics. |
| **🌐 Native Hash Fallbacks** | Advanced build-scripts seamlessly integrating BrowserRouter mechanics directly onto Github Pages without 404s. |

---

## 🛠️ Tech Stack

**Frontend Design System:**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🌐 Deployment

| Service | Platform | URL |
| :--- | :--- | :--- |
| **Frontend Web** | GitHub Pages | [DineEase Client Portal](https://gurramsravankumar.github.io/restaurant-reservation-frontend) |
| **Backend Cluster** | Render Web Services | [Connected REST API Server](https://restaurant-reservation-system-iqjj.onrender.com) |

---

## 🚀 Run Locally

**Prerequisites:**
* Node.js 18+
* Web Browser (Chrome/Edge/Firefox)

**Execution Commands:**
```bash
git clone https://github.com/GurramSravankumar/restaurant-reservation-frontend.git
cd restaurant-reservation-frontend
npm install
npm run dev
```

---

## 📁 UI Component Architecture

```text
Restaurant-Frontend/
├── src/
│   ├── components/                # Modular Reusable Atoms
│   │   ├── Navbar.jsx             # Root routing boundaries
│   │   └── Modal.jsx              # UX confirmation triggers
│   │
│   ├── pages/                     # Routed Macro Panels
│   │   ├── Home.jsx               # Reservation Generation Engine
│   │   ├── AdminDashboard.jsx     # Control & Audit UI
│   │   ├── Login.jsx              # JWT Issuance Screen
│   │   └── Register.jsx           # Spring Security interfacing
│   │
│   ├── index.css                  # Master CSS token variables
│   ├── main.jsx                   # React Root DOM Mountpoint
│   └── App.jsx                    # Route mapping & Security wrappers
└── package.json                   # Automated deployment scripts
```

# SkillNest (JobFinder) 🚀

[![CI Pipeline](https://github.com/thanish2806/jobfinder/actions/workflows/ci.yml/badge.svg)](https://github.com/thanish2806/jobfinder/actions/workflows/ci.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Vitest](https://img.shields.io/badge/tested_with-Vitest-yellow.svg)](https://vitest.dev/)

**SkillNest** is an all-in-one career acceleration and job-finding ecosystem. It unites real-time skill matching, an ATS-friendly multi-template resume builder, interactive coding and learning modules, and an AI-driven career assistant.

---

## 📑 Table of Contents
- [Architecture Overview](#-architecture-overview)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Environment Variables](#-environment-variables)
- [Quick Start Guide](#-quick-start-guide)
  - [Prerequisites](#prerequisites)
  - [Installation & Local Setup](#installation--local-setup)
- [Testing](#-testing)
- [Docker & Containerized Sandboxing](#-docker--containerized-sandboxing)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Contributing](#-contributing)

---

## 🏛️ Architecture Overview

```mermaid
graph TD
    Client[React 19 + Vite Frontend SPA] -->|REST API / HTTP| Server[Node.js + Express Server]
    Client -->|Auth / DB / Storage| Firebase[Firebase Auth & Firestore]
    Client -->|Code Execution| Judge0[Judge0 API / RapidAPI]
    Server -->|Mongoose ORM| MongoDB[(MongoDB Cluster)]
    Server -->|AI Assistance| OpenRouter[OpenRouter AI API]
```

---

## 📂 Project Structure

```
jobfinder/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI pipeline
├── client/                      # Frontend Application (React + Vite)
│   ├── public/                  # Public static assets
│   ├── src/
│   │   ├── assets/              # Images, vector icons, media
│   │   ├── components/          # Reusable UI components (Navbar, Footer, Loader)
│   │   ├── Coursespage/         # Learning modules & courses
│   │   │   ├── courses/         # Course components
│   │   │   │   └── data/        # Modularized course lesson content
│   │   ├── ResumeApp/           # Resume builder workflow & template engines
│   │   ├── firebase.js          # Firebase client initialization
│   │   ├── setupTests.js        # Vitest & RTL test environment setup
│   │   └── App.jsx              # Main routing component
│   ├── .env.example             # Frontend environment template
│   ├── Dockerfile               # Production container image
│   ├── nginx.conf               # Nginx reverse proxy configuration
│   ├── package.json             # Frontend dependencies & scripts
│   └── vite.config.js           # Vite configuration with Vitest setup
├── server/                      # Backend API Service (Node.js + Express)
│   ├── controller/              # Business logic controllers
│   ├── models/                  # Mongoose data schemas
│   ├── routes/                  # Express route handlers
│   ├── utils/                   # Server utilities & helpers
│   ├── .env.example             # Backend environment template
│   ├── Dockerfile               # Node.js server container image
│   ├── package.json             # Backend dependencies & scripts
│   └── server.js                # Server entry point
├── .dockerignore
├── .gitignore                   # Root Git ignore rules
├── .prettierrc                  # Project code formatting rules
├── docker-compose.yml           # Multi-container orchestration
├── package.json                 # Monorepo management scripts
└── README.md                    # Project documentation
```

---

## ✨ Key Features

- **🎯 Smart Job Search & Matching**: Filter and discover job listings tailored by location, technical skills, and experience level.
- **📄 Interactive Resume Builder**: Multi-step resume generator supporting custom themes, education, work experiences, projects, skills, and instant PDF downloads.
- **📚 Curated Learning Hub**: 20+ comprehensive tech courses (Fullstack, React, Python, Docker, AI/ML, MongoDB, DevOps) with modular lesson tracking.
- **💻 Online Code Runner**: Integrated IDE powered by Judge0 API to execute JavaScript, Python, and other languages in real-time.
- **🤖 Career Assistant**: Integrated conversational AI providing interview prep and resume enhancement suggestions.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, React Router 7, Redux Toolkit, Material UI (MUI), Lucide React, Framer Motion, TailwindCSS.
- **Testing**: Vitest, React Testing Library, jsdom, `@testing-library/jest-dom`.
- **Backend**: Node.js, Express 5, Socket.io, Mongoose (MongoDB).
- **Cloud & Services**: Firebase (Authentication & Storage), OpenRouter AI, Judge0 via RapidAPI.
- **DevOps**: Docker, Docker Compose, GitHub Actions, Nginx.

---

## 🔐 Environment Variables

Before running the application, create `.env` files in `client/` and `server/` using the provided `.env.example` templates.

### Client Configuration (`client/.env`)

| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_FIREBASE_API_KEY` | Firebase Web API Key | `AIzaSy...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Authentication Domain | `your-app.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID | `your-project-id` |
| `VITE_FIREBASE_STORAGE_BUCKET`| Firebase Storage Bucket | `your-app.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | `1234567890` |
| `VITE_FIREBASE_APP_ID` | Firebase Web App ID | `1:123:web:abc` |
| `VITE_RAPID_API_URL` | Judge0 Execution Endpoint | `https://judge0-ce.p.rapidapi.com/submissions` |
| `VITE_RAPID_API_KEY` | RapidAPI Access Key | `your_rapidapi_key` |
| `VITE_RAPID_API_HOST` | RapidAPI Host Header | `judge0-ce.p.rapidapi.com` |
| `VITE_BACKEND_URL` | Backend API URL | `http://localhost:5000` |

### Server Configuration (`server/.env`)

| Variable | Description | Example |
| :--- | :--- | :--- |
| `PORT` | Server listen port | `5000` |
| `FRONTEND_URL` | Allowed CORS origin | `http://localhost:5173` |
| `MONGO_URI` | MongoDB connection URI | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `RAPIDAPI_KEY` | RapidAPI Key for backend tasks | `your_key` |
| `OPENROUTER_API_KEY` | OpenRouter Key for AI Chatbot | `sk-or-v1-...` |

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js `>= 20.0.0`
- npm `>= 10.0.0`
- (Optional) Docker & Docker Compose

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thanish2806/jobfinder.git
   cd jobfinder
   ```

2. **Install all dependencies**:
   ```bash
   npm run install:all
   ```

3. **Configure environment variables**:
   ```bash
   cp client/.env.example client/.env
   cp server/.env.example server/.env
   # Edit client/.env and server/.env with your API credentials
   ```

4. **Start local development servers**:
   ```bash
   # In terminal 1 (Frontend):
   cd client && npm run dev

   # In terminal 2 (Backend):
   cd server && npm start
   ```

   The web application will be accessible at `http://localhost:5173`.

---

## 🧪 Testing

The repository uses **Vitest** and **React Testing Library** for automated unit and component testing.

To run the test suite:
```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# From the client directory
cd client
npm test
```

---

## 🐳 Docker & Containerized Sandboxing

You can spin up the entire application stack in an isolated container environment using Docker Compose:

```bash
# Build and launch client and server containers
docker compose up --build

# Run in background (detached mode)
docker compose up -d

# Stop containers
docker compose down
```

- **Frontend**: Exposed on port `80` (`http://localhost`)
- **Backend API**: Exposed on port `5000` (`http://localhost:5000`)

---

## 🔄 CI/CD Pipeline

Continuous Integration is automated via **GitHub Actions** (`.github/workflows/ci.yml`). On every pull request and push to `main`:
1. Installs clean dependencies (`npm ci`).
2. Runs ESLint verification (`npm run lint`).
3. Executes the full Vitest suite (`npm test`).
4. Performs a production build (`npm run build`).

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

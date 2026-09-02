# Kalatuwawage Hansanie Prabodha — Enterprise Engineering Portfolio

> **Full-Stack Systems Engineer | Native Mobile & Enterprise Java Architect**  
> BSc (Hons) Undergraduate · UK Level 4 & Level 5 — 10+ High Distinctions  
> Padukka, Sri Lanka · Open for Remote / Relocation · Global Engineering Roles

[![Live Portfolio](https://img.shields.io/badge/🚀_Live_Portfolio-Portfolio_URL-00f2fe?style=for-the-badge)](https://hansanie-portfolio.onrender.com)
[![Swagger API](https://img.shields.io/badge/📄_Swagger_API_Docs-OpenAPI_3-10b981?style=for-the-badge)](https://hansanie-portfolio.onrender.com/swagger-ui.html)
[![GitHub](https://img.shields.io/badge/GitHub-Hansanie22-white?style=for-the-badge&logo=github)](https://github.com/Hansanie22)

---

## 🏆 3 Production Client Systems (Not Tutorial Apps)

| # | System | Live URL | Tech |
|---|--------|----------|------|
| 1 | **VELORA / Rush Jewels** — Enterprise Fine Jewellery POS & E-Commerce | [rushjewels.com](https://www.rushjewels.com) | Java 17, Spring Boot 3, Docker, TiDB |
| 2 | **AuraCraft / Ceylon Letter Co** — Bespoke Keepsakes ERP & Automation Suite | [ceylonletterco.com](https://www.ceylonletterco.com) | Java 17, Spring Boot 3, Webhooks, Cron |
| 3 | **GREEN CART** — Native Android Grocery & Subscription Platform | [Live Showcase](https://hansanie22.github.io/greencart-android-portfolio/) | Android Java 11, MVVM, Room DB, WorkManager |

---

## 🛠 Tech Architecture Stack

| Layer | Technologies |
|-------|-------------|
| **Backend** | Java 17, Spring Boot 3.3.x, Spring Data JPA, Spring Security, RESTful APIs, Swagger/OpenAPI 3 |
| **Mobile** | Native Android Java 11, MVVM, Jetpack Room DB, WorkManager, Accelerometer Sensor API, FCM |
| **Frontend** | React 18, Vite, Vanilla CSS3, Glassmorphism UI, Chart.js Analytics |
| **Cloud & DB** | MySQL 8.x, TiDB Cloud, HikariCP, Cloudinary CDN, Docker, Render Cloud |
| **Academic** | UK Level 4 & 5 SE Diplomas — OOP Patterns, SAD, Testing & QA, Handheld Device Programming |

---

## 🚀 Run Locally

### Prerequisites
- Java 17+
- Node.js 18+
- Maven 3.9+

### Backend (Spring Boot REST API)
```bash
cd backend
mvn spring-boot:run
# API running at http://localhost:8080
# Swagger UI: http://localhost:8080/swagger-ui.html
```

### Frontend (React Vite Dev Server)
```bash
cd frontend
npm install
npm run dev
# Portfolio UI at http://localhost:5173
```

---

## 🐳 Docker Build & Run

```bash
# Build the image (React + Spring Boot in one container)
docker build -t hansanie-portfolio .

# Run
docker run -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod hansanie-portfolio

# Visit: http://localhost:8080
```

---

## ☁️ Deploy on Render

### Option A: Using render.yaml Blueprint (Recommended)
1. Push this repo to GitHub
2. Go to [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**
3. Connect your GitHub repo → Render auto-reads `render.yaml`
4. Click **Apply** — done! 🎉

### Option B: Manual Docker Web Service
1. Render Dashboard → **New** → **Web Service**
2. Connect GitHub repo
3. **Runtime**: `Docker`
4. **Dockerfile Path**: `./Dockerfile`
5. **Docker Context**: `.`
6. Set **Environment Variable**: `SPRING_PROFILES_ACTIVE=prod`
7. **Health Check Path**: `/actuator/health`

---

## 📋 Live REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/profile` | Candidate bio, metrics & positioning |
| `GET` | `/api/v1/projects` | 3 production systems with credentials |
| `GET` | `/api/v1/projects/{code}` | Individual project blueprint |
| `GET` | `/api/v1/qualifications` | UK Level 4/5 transcripts & distinctions |
| `GET` | `/api/v1/casestudies` | Engineering deep-dive articles |
| `POST` | `/api/v1/contact` | Recruiter inquiry submission |
| `GET` | `/api/v1/analytics/stats` | Live portfolio engagement metrics |
| `POST` | `/api/v1/analytics/event` | Track interaction events |

---

## 📬 Contact

- **Email**: hansanieprabodha@gmail.com  
- **GitHub**: [github.com/Hansanie22](https://github.com/Hansanie22)  
- **LinkedIn**: [linkedin.com/in/hansanie-prabodha](https://linkedin.com/in/hansanie-prabodha)

---

*Built with Spring Boot 3.3.3 + React 18 + Vite — Deployed on Render (Docker)*

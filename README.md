# Kalatuwawage Hansanie Prabodha — Software Engineering Portfolio

> **Full-Stack & Mobile Software Engineer**  
> BSc (Hons) Undergraduate · UK Level 4 & Level 5 — 10+ High Distinctions  
> Padukka, Sri Lanka · Open for Remote / Relocation · Software Engineering Roles

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Portfolio_URL-0284c7?style=for-the-badge)](https://hansanie-portfolio.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Hansanie22-white?style=for-the-badge&logo=github)](https://github.com/Hansanie22)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hansanie_Prabodha-0a66c2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/hansanie-prabodha)

---

## Featured Engineering Projects

| # | Project | Live Demo | Tech Stack |
|---|---------|-----------|------------|
| 1 | **RUSH JEWELS (Velora)** — Enterprise Retail POS & Fine Jewellery Suite | [Live on Render](https://rush-jewels-portfolio.onrender.com) | Java 17, Spring Boot 3, React, Docker, TiDB |
| 2 | **GREEN CART** — Native Android Grocery & Subscription Platform | [Live Showcase](https://hansanie22.github.io/greencart-android-portfolio/) | Android Java, MVVM, Room DB, Sensor API, WorkManager |
| 3 | **CEYLON LETTER CO (AuraCraft)** — Manufacturing ERP & Automation Suite | [Live on Render](https://ceylon-letter-co-portfolio.onrender.com) | Java 17, Spring Boot 3, Cloud Webhooks, Cron Schedulers |

---

## Tech Architecture Stack

| Layer | Technologies |
|-------|-------------|
| **Backend** | Java 17, Spring Boot 3.3.x, Spring Data JPA, Spring Security, RESTful APIs, Swagger/OpenAPI 3 |
| **Mobile** | Native Android Java 11, MVVM, Jetpack Room DB, WorkManager, Accelerometer Sensor API, FCM |
| **Frontend** | React 18, Vite, Vanilla CSS3, Responsive UI, State Management |
| **Cloud & DB** | MySQL 8.x, TiDB Cloud, PostgreSQL, HikariCP, Cloudinary CDN, Docker, Render Cloud |
| **Academic** | UK Level 4 & 5 SE Diplomas — OOP Patterns, SAD, Testing & QA, Handheld Device Programming |

---

## Run Locally

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

## Docker Build & Run

```bash
# Build the image (React + Spring Boot in one container)
docker build -t hansanie-portfolio .

# Run
docker run -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod hansanie-portfolio

# Visit: http://localhost:8080
```

---

## Deploy on Render

### Option A: Using render.yaml Blueprint (Recommended)
1. Push this repo to GitHub
2. Go to [dashboard.render.com](https://dashboard.render.com) -> **New** -> **Blueprint**
3. Connect your GitHub repo -> Render auto-reads `render.yaml`
4. Click **Apply**

### Option B: Manual Docker Web Service
1. Render Dashboard -> **New** -> **Web Service**
2. Connect GitHub repo
3. **Runtime**: `Docker`
4. **Dockerfile Path**: `./Dockerfile`
5. **Docker Context**: `.`
6. Set **Environment Variable**: `SPRING_PROFILES_ACTIVE=prod`
7. **Health Check Path**: `/actuator/health`

---

## Live REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/profile` | Candidate bio, metrics & positioning |
| `GET` | `/api/v1/projects` | Production systems with demo credentials |
| `GET` | `/api/v1/projects/{code}` | Individual project blueprint |
| `GET` | `/api/v1/qualifications` | UK Level 4/5 transcripts & distinctions |
| `GET` | `/api/v1/casestudies` | Engineering deep-dive case studies |
| `POST` | `/api/v1/contact` | Recruiter inquiry submission |
| `GET` | `/api/v1/analytics/stats` | Live portfolio engagement metrics |
| `POST` | `/api/v1/analytics/event` | Track interaction events |

---

## Contact

- **Email**: hansanieprabodha@gmail.com  
- **GitHub**: [github.com/Hansanie22](https://github.com/Hansanie22)  
- **LinkedIn**: [linkedin.com/in/hansanie-prabodha](https://linkedin.com/in/hansanie-prabodha)

---

*Built with Spring Boot 3.3.3 + React 18 + Vite — Deployed on Render (Docker)*

# ============================================================
# Stage 1: Build React Frontend
# ============================================================
FROM node:22-alpine AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci --silent

COPY frontend/ .
RUN npm run build

# ============================================================
# Stage 2: Build Spring Boot Backend (with embedded React)
# ============================================================
FROM maven:3.9-eclipse-temurin-17 AS backend-builder

WORKDIR /app/backend

# Copy pom.xml first for layer caching
COPY backend/pom.xml .
RUN mvn dependency:go-offline -B --no-transfer-progress

# Copy source
COPY backend/src ./src

# Copy React build output into Spring Boot static resources
COPY --from=frontend-builder /app/frontend/dist ./src/main/resources/static/

# Build the JAR (skip tests for faster Docker builds)
RUN mvn clean package -DskipTests --no-transfer-progress

# ============================================================
# Stage 3: Production Runtime
# ============================================================
FROM eclipse-temurin:17-jre-alpine AS runtime

WORKDIR /app

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy the JAR from build stage
COPY --from=backend-builder /app/backend/target/*.jar app.jar

USER appuser

EXPOSE 8080

ENV SPRING_PROFILES_ACTIVE=prod

ENTRYPOINT ["java", \
  "-XX:+UseContainerSupport", \
  "-XX:MaxRAMPercentage=75.0", \
  "-jar", "/app/app.jar"]

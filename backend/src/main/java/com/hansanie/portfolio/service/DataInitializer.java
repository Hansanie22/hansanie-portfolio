package com.hansanie.portfolio.service;

import com.hansanie.portfolio.model.*;
import com.hansanie.portfolio.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProfileRepository profileRepository;
    private final ProjectRepository projectRepository;
    private final QualificationRepository qualificationRepository;
    private final CaseStudyRepository caseStudyRepository;

    public DataInitializer(ProfileRepository profileRepository,
                           ProjectRepository projectRepository,
                           QualificationRepository qualificationRepository,
                           CaseStudyRepository caseStudyRepository) {
        this.profileRepository = profileRepository;
        this.projectRepository = projectRepository;
        this.qualificationRepository = qualificationRepository;
        this.caseStudyRepository = caseStudyRepository;
    }

    @Override
    public void run(String... args) {
        if (profileRepository.count() == 0) {
            seedProfile();
            seedProjects();
            seedQualifications();
            seedCaseStudies();
        }
    }

    private void seedProfile() {
        Profile p = new Profile();
        p.setFullName("Kalatuwawage Hansanie Prabodha");
        p.setTitle("Full-Stack Systems Engineer | Native Mobile & Enterprise Java Architect");
        p.setAcademicHeadline("BSc (Hons) Undergraduate | UK Level 4 & Level 5 Distinction Holder");
        p.setLocation("Padukka, Sri Lanka | Remote / Relocation | Open for Global Engineering Roles");
        p.setAvailabilityStatus("AVAILABLE FOR FULL-TIME / CONTRACT ROLES");
        p.setGithubUrl("https://github.com/Hansanie22");
        p.setLinkedinUrl("https://linkedin.com/in/hansanie-prabodha");
        p.setEmail("hansanieprabodha@gmail.com");
        p.setSummary("High-performing Systems Engineer specializing in Enterprise Java (Spring Boot 3), Native Mobile Architecture (Java 11/Android Jetpack), and Cloud Automation. Backed by 10+ High Distinctions in UK Level 4 & Level 5 Software Engineering qualifications and verified production deployments handling real-time POS, ERP Webhooks, and Sensor-driven hardware pipelines.");

        p.setStrategicHighlights(Arrays.asList(
                "Enterprise Java 17 & Spring Boot 3 microservices with JWT, JPA, Cron Schedulers & Webhooks",
                "Native Android MVVM architect with Room DB, WorkManager, Hardware Sensors & FCM",
                "10+ High Distinctions in UK Level 4 & 5 Software Engineering (OOP, SAD, Testing & QA, Architecture)",
                "Full Docker Containerization & Cloud Deployment on Render, TiDB Cloud, and Cloudinary",
                "Sub-50ms Point-of-Sale transaction processing & Automated Bill-of-Materials ERP sync engines"
        ));

        p.setKeyMetrics(Arrays.asList(
                "10+ UK High Distinctions",
                "3 Production-Grade Deployments",
                "100% Offline-First Mobile Sync",
                "<50ms POS Barcode Latency",
                "Zero-Loss Cloud Webhooks"
        ));

        profileRepository.save(p);
    }

    private void seedProjects() {
        // Project 1: GreenCart Android
        Project p1 = new Project();
        p1.setCode("greencart");
        p1.setTitle("GREEN CART — Native Android Grocery & Subscription Platform");
        p1.setCategory("Native Mobile Architecture & Hardware Sensors");
        p1.setTagLine("Engineered with Java 11, Google MVVM, Jetpack Room DB, Sensor API, and Automated Recurring WorkManager");
        p1.setOverview("A production-grade Native Android mobile commerce platform featuring offline-first data synchronization, recurring automated grocery deliveries, hardware accelerometer sensor integration, and real-time push messaging.");
        p1.setArchitecturalHighlights("Architected on Google MVVM design pattern with Repository abstraction. Features an automated subscription delivery scheduler powered by Android Jetpack WorkManager with periodic background persistence. Integrates hardware Accelerometer Sensors to detect precise user gestures for a gamified 'Shake-to-Win' loyalty reward engine. Built with offline-first Room SQLite DB and asynchronous Retrofit REST networking layer.");
        p1.setBusinessMetrics("100% Offline Persistence with Room SQLite | <120ms Sensor Gesture Processing | Automated Background WorkManager Subscriptions | Integrated PayHere Payment Gateway & FCM Push Notifications");
        p1.setLiveDemoUrl("https://hansanie22.github.io/greencart-android-portfolio/");
        p1.setGithubUrl("https://github.com/Hansanie22/GreenCart-Android");
        p1.setSwaggerUrl("https://hansanie22.github.io/greencart-android-portfolio/");
        p1.setTechStack(Arrays.asList("Android Java 11", "MVVM Pattern", "Jetpack Room DB", "Android WorkManager", "Hardware Accelerometer Sensor", "Google Maps API", "Firebase Cloud Messaging", "PayHere SDK", "Retrofit 2"));
        p1.setKeyFeatures(Arrays.asList(
                "Hardware Accelerometer Shake-to-Win loyalty rewards system",
                "Automated recurring delivery subscription scheduler (Daily, Weekly, Monthly)",
                "Offline-first Room SQLite caching with automatic cloud sync",
                "Google Maps Live store locator and delivery routing",
                "Real-time Push Notifications via Firebase Cloud Messaging (FCM)"
        ));
        p1.setSystemArchitectureFlow("Android UI (XML/Activities) ➔ MVVM ViewModel (LiveData/State) ➔ Repository Layer ➔ [Local Room DB / Remote Retrofit REST API] ➔ SensorManager (Accelerometer Listener) ➔ Jetpack WorkManager Scheduler");
        projectRepository.save(p1);

        // Project 2: Velora / Rush Jewels POS
        Project p2 = new Project();
        p2.setCode("velora-pos");
        p2.setTitle("VELORA / RUSH JEWELS — Enterprise Fine Jewellery E-Commerce & Retail POS Suite");
        p2.setCategory("Enterprise Java 17, Spring Boot 3 & Touch POS");
        p2.setTagLine("Multi-tenant Retail Point-of-Sale Terminal, Barcode Scanning, Multi-Warehouse Inventory & Docker Cloud Deployment");
        p2.setOverview("A comprehensive Enterprise Retail POS & Luxury Fine Jewellery management suite engineered with Spring Boot 3, featuring touch terminal billing, split cash/card payments, barcode scanner lookup, dynamic metal pricing matrices, and cashier shift reconciliation.");
        p2.setArchitecturalHighlights("Engineered with Layered Clean Architecture (Controller -> Service -> DTO -> Repository) on Spring Boot 3.3. Integrates a sub-50ms touch POS terminal supporting barcode hardware scanner events, split payments, instant printable invoice generation, and cashier cash drawer audits. Implements multi-warehouse inventory tracking with automated low-stock threshold alerts and dynamic metal rate calculations (18K, 22K Gold, Platinum 950).");
        p2.setBusinessMetrics("<50ms Barcode Product Lookup | Multi-Warehouse Real-Time Inventory Control | Cashier Shift Reconciliation Audits | 100% Dockerized CI/CD Deployment on Render Cloud");
        p2.setLiveDemoUrl("https://www.rushjewels.com");
        p2.setGithubUrl("https://github.com/Hansanie22/Rush-Jewels-Enterprise-POS");
        p2.setSwaggerUrl("https://www.rushjewels.com/swagger-ui.html");
        p2.setDemoAdminEmail("admin@velorajewellery.com");
        p2.setDemoAdminPassword("Admin@1234");
        p2.setDemoCashierEmail("cashier@velorajewellery.com");
        p2.setDemoCashierPassword("Cashier@1234");
        p2.setTechStack(Arrays.asList("Java 17", "Spring Boot 3.3", "Spring Security", "Spring Data JPA", "MySQL / TiDB Cloud", "Docker Container", "Cloudinary CDN", "Vanilla ES6+ POS Client", "Render Cloud"));
        p2.setKeyFeatures(Arrays.asList(
                "Touch POS Billing Terminal with physical barcode scanner listener",
                "Split-payment transaction handling (Cash, Card, Digital Transfer)",
                "Multi-warehouse inventory matrices for 18K/22K Gold and Platinum",
                "Cashier shift open/close logs and cash-in-drawer reconciliation",
                "Dynamic PDF/thermal receipt invoice generation and customer audit trail"
        ));
        p2.setSystemArchitectureFlow("Touch POS Client (ES6+) ➔ Spring Boot Security Filter ➔ POS Service / Transactional Engine ➔ Spring Data JPA (HikariCP) ➔ TiDB/MySQL Database ➔ Cloudinary Media Storage ➔ Multi-Stage Docker on Render");
        projectRepository.save(p2);

        // Project 3: AuraCraft / Ceylon Letter Co ERP
        Project p3 = new Project();
        p3.setCode("auracraft-erp");
        p3.setTitle("AURACRAFT / CEYLON LETTER CO — Bespoke Keepsakes ERP & Automation Suite");
        p3.setCategory("Cloud ERP, Webhooks & Automated Manufacturing Workflow");
        p3.setTagLine("Real-time Spring Cron Webhook Synchronization, Automated Bill-of-Materials Deduction & Interactive Video Commerce");
        p3.setOverview("A custom manufacturing ERP and luxury bespoke gifts e-commerce platform featuring automated packaging inventory deduction engines, Spring Cron-scheduled Cloud Webhooks, and interactive luxury video-commerce tag overlays.");
        p3.setArchitecturalHighlights("Engineered with an automated Bill-of-Materials (BOM) deduction engine that automatically deducts custom packaging components (velvet pouches, keepsake boxes, handwritten wax-sealed letters) when order statuses transition. Features high-resilience Spring Cron scheduled Webhook jobs syncing daily sales ledgers to external Google Cloud data engines without human intervention. Includes a high-performance interactive video-commerce interface.");
        p3.setBusinessMetrics("Zero-Data-Loss Automated Webhook Synchronization | 100% Automated Packaging Inventory Deductions | Interactive Video Commerce Engine with Tag Overlays");
        p3.setLiveDemoUrl("https://www.ceylonletterco.com");
        p3.setGithubUrl("https://github.com/Hansanie22/AuraCraft-ERP-Suite");
        p3.setSwaggerUrl("https://www.ceylonletterco.com/swagger-ui.html");
        p3.setDemoAdminEmail("admin@ceylonletterco.com");
        p3.setDemoAdminPassword("Admin@1234");
        p3.setTechStack(Arrays.asList("Java 17", "Spring Boot 3.3", "Spring Data JPA", "MySQL 8.x", "Cloud Webhooks", "Cron Schedulers", "Chart.js Analytics", "Interactive Video Tagging", "Render Cloud"));
        p3.setKeyFeatures(Arrays.asList(
                "Automated Bill-of-Materials (BOM) inventory deduction upon order fulfillment",
                "Real-time Spring Cron Webhook sync with external cloud analytics",
                "Interactive video-commerce layer with dynamic clickable product hotspots",
                "Custom engraving matrix calculations and proof approvals",
                "Real-time sales velocity and revenue forecasting dashboards via Chart.js"
        ));
        p3.setSystemArchitectureFlow("Interactive Client ➔ Spring Boot REST API ➔ BOM Deduction Engine (@Transactional) ➔ Spring Quartz/Cron Schedulers ➔ Outbound Cloud Webhooks ➔ MySQL DB & Analytics Dashboards");
        projectRepository.save(p3);
    }

    private void seedQualifications() {
        // Level 5 Higher Diploma
        Qualification q1 = new Qualification();
        q1.setLevel("UK Level 5 Professional Higher Diploma");
        q1.setTitle("Higher Diploma in Software Engineering");
        q1.setAwardingBody("Skills & Education Group Awards (United Kingdom)");
        q1.setCompletionDate("August 2026");
        q1.setOverallGrade("High Distinction (Overall Profile)");
        q1.setTotalModules(10);
        q1.setDistinctionCount(6);
        q1.setDistinctionModules(Arrays.asList(
                "Object-Oriented Design Patterns (High Distinction)",
                "Web Component Development I & II (High Distinction)",
                "Software Project Management (High Distinction)",
                "Testing and Quality Assurance (High Distinction)",
                "Handheld Device Programming (High Distinction)",
                "Electronics for Software Engineering (High Distinction)"
        ));
        q1.setDescription("Advanced software engineering credential emphasizing rigorous enterprise system design, clean architectural patterns, QA automation, mobile device programming, and component-based web engineering.");
        qualificationRepository.save(q1);

        // Level 4 Diploma
        Qualification q2 = new Qualification();
        q2.setLevel("UK Level 4 Professional Diploma");
        q2.setTitle("Diploma in Software Engineering");
        q2.setAwardingBody("Skills & Education Group Awards (United Kingdom)");
        q2.setCompletionDate("August 2026");
        q2.setOverallGrade("High Distinction (Overall Profile)");
        q2.setTotalModules(9);
        q2.setDistinctionCount(4);
        q2.setDistinctionModules(Arrays.asList(
                "Object Oriented Systems Analysis & Design (High Distinction)",
                "Web Programming (High Distinction)",
                "Empirical Analysis in Business Process Management (High Distinction)",
                "Fundamentals of Programming & Algorithms (Distinction)"
        ));
        q2.setDescription("Foundational professional qualification focusing on Object-Oriented Analysis & Design (OOAD), UML modeling, relational database modeling, and algorithmic problem solving.");
        qualificationRepository.save(q2);

        // BSc Hons Ongoing
        Qualification q3 = new Qualification();
        q3.setLevel("BSc (Hons) Undergraduate");
        q3.setTitle("Bachelor of Science (Honours) in Software Engineering");
        q3.setAwardingBody("University of Birmingham (United Kingdom)");
        q3.setCompletionDate("Ongoing Undergraduate");
        q3.setOverallGrade("First Class Track Record");
        q3.setTotalModules(12);
        q3.setDistinctionCount(8);
        q3.setDistinctionModules(Arrays.asList(
                "Distributed Systems Architecture",
                "Advanced Data Structures & Algorithms",
                "Cloud Computing & DevOps",
                "Enterprise Application Development"
        ));
        q3.setDescription("International degree program covering modern distributed computing, cloud architectures, microservices, and enterprise-grade software development.");
        qualificationRepository.save(q3);
    }

    private void seedCaseStudies() {
        // Case Study 1: BOM Deduction
        CaseStudy cs1 = new CaseStudy();
        cs1.setTopicSlug("inventory-bom-deduction");
        cs1.setTitle("Automating Multi-Tier Bill-of-Materials (BOM) Inventory Deductions in Spring Boot");
        cs1.setSubtitle("How atomic database transactions and domain events eliminated packaging material discrepancies in custom manufacturing.");
        cs1.setRelatedProject("AURACRAFT / CEYLON LETTER CO");
        cs1.setBusinessProblem("Custom personalized gifts require dynamic packaging combinations (velvet pouches, wooden keepsake boxes, seal wax). Manual inventory updates led to 14% stock discrepancies and delayed order fulfillment.");
        cs1.setTechnicalSolution("Engineered an asynchronous Spring Event Listener and @Transactional Bill-of-Materials deduction engine. When an order transitions to 'IN_PRODUCTION' or 'DISPATCHED', the service decomposes the product package recipe into atomic raw material units and executes batch decrement queries with optimistic locking.");
        cs1.setEngineeringHighlights("Implemented JPA Optimistic Locking (@Version) to prevent race conditions during peak flash sales. Integrated fallback rollbacks and automatic audit logging for every material debit.");
        cs1.setKeyMetricAchieved("100% Stock Accuracy & Zero Material Discrepancies across 1,000+ orders");
        caseStudyRepository.save(cs1);

        // Case Study 2: Sensor Shake-to-Win
        CaseStudy cs2 = new CaseStudy();
        cs2.setTopicSlug("sensor-shake-rewards");
        cs2.setTitle("Hardware Accelerometer Sensor Integration in Native Android MVVM");
        cs2.setSubtitle("Building a low-battery, gesture-filtered gamification engine using Android SensorManager and LiveData.");
        cs2.setRelatedProject("GREEN CART — Native Android");
        cs2.setBusinessProblem("E-commerce mobile apps suffer from low user retention. Static scratch cards felt generic, while unoptimized sensor listeners drained device battery quickly.");
        cs2.setTechnicalSolution("Developed a lifecycle-aware Accelerometer Sensor wrapper integrated with Google MVVM ViewModel. Applied a low-pass acceleration threshold filter (detecting >12m/s² peak vector force) to prevent accidental triggers while keeping the sensor active only when the rewards fragment is in the RESUMED state.");
        cs2.setEngineeringHighlights("Zero background battery drain by strictly adhering to Android LifecycleObserver. Debounced sensor events with RxJava/Coroutine debounce operators to guarantee a single reward claim per gesture.");
        cs2.setKeyMetricAchieved("<120ms Sensor Gesture Response & 0% Background Battery Drain");
        caseStudyRepository.save(cs2);

        // Case Study 3: POS Barcode Scanner
        CaseStudy cs3 = new CaseStudy();
        cs3.setTopicSlug("pos-barcode-split-payment");
        cs3.setTitle("Sub-50ms Barcode Scanning & Split Payment Reconciliation in Retail POS");
        cs3.setSubtitle("Architecting a responsive Touch POS billing terminal with Spring Boot 3, JPA Indexing, and Cashier Shift Audits.");
        cs3.setRelatedProject("VELORA / RUSH JEWELS");
        cs3.setBusinessProblem("High-value retail jewelry stores require ultra-fast barcode lookup and split payment support (e.g. paying $1,500 in Cash and $3,500 on Visa). Legacy desktop apps crashed during internet drops and had zero cashier accountability.");
        cs3.setTechnicalSolution("Built a high-performance Spring Boot 3 REST POS backend with composite database indexes on SKU/Barcode fields. The client captures hardware USB/Bluetooth barcode scanner HID events, immediately validates stock in cache/DB, and computes split transaction ledgers with atomic receipt ledger generation.");
        cs3.setEngineeringHighlights("Sub-50ms query response time via HikariCP connection pooling and indexed TiDB queries. Built-in cashier shift balance tracking logging every transaction with timestamp and cashier ID.");
        cs3.setKeyMetricAchieved("<50ms Barcode Lookup & 100% Cash-to-Card Ledger Balancing");
        caseStudyRepository.save(cs3);
    }
}

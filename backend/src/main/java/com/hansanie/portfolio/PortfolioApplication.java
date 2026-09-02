package com.hansanie.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
        System.out.println("==================================================================");
        System.out.println("🚀 Hansanie Portfolio Enterprise REST API is RUNNING on http://localhost:8080");
        System.out.println("📄 Swagger UI API Docs: http://localhost:8080/swagger-ui.html");
        System.out.println("💾 H2 Database Console: http://localhost:8080/h2-console");
        System.out.println("==================================================================");
    }
}

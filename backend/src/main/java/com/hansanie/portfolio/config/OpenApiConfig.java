package com.hansanie.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI portfolioOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Kalatuwawage Hansanie Prabodha — Enterprise Portfolio REST API")
                        .description("Production-grade backend service powering interactive project showcases, metrics-driven architecture telemetry, distinction credentials, and recruiter contact inquiry management.")
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("Kalatuwawage Hansanie Prabodha")
                                .email("hansanieprabodha@gmail.com")
                                .url("https://github.com/Hansanie22"))
                        .license(new License()
                                .name("MIT License")
                                .url("https://opensource.org/licenses/MIT")));
    }
}

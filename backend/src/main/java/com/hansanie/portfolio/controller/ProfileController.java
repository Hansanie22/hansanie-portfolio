package com.hansanie.portfolio.controller;

import com.hansanie.portfolio.model.Profile;
import com.hansanie.portfolio.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/profile")
@Tag(name = "Candidate Profile API", description = "Endpoints for fetching Kalatuwawage Hansanie Prabodha's executive summary, academic distinction credentials, and technical positioning.")
public class ProfileController {

    private final PortfolioService portfolioService;

    public ProfileController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    @Operation(summary = "Get Candidate Profile", description = "Returns full profile details including title, bio summary, verified metrics, and global role availability.")
    public ResponseEntity<Profile> getProfile() {
        return portfolioService.getProfile()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

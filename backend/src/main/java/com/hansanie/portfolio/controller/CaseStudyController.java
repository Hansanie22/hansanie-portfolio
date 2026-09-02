package com.hansanie.portfolio.controller;

import com.hansanie.portfolio.model.CaseStudy;
import com.hansanie.portfolio.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/casestudies")
@Tag(name = "Engineering Case Studies API", description = "Endpoints for deep-dive technical articles demonstrating how specific complex challenges were solved.")
public class CaseStudyController {

    private final PortfolioService portfolioService;

    public CaseStudyController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    @Operation(summary = "List All Engineering Case Studies", description = "Returns in-depth architecture and problem-solving breakdowns.")
    public ResponseEntity<List<CaseStudy>> getAllCaseStudies() {
        return ResponseEntity.ok(portfolioService.getAllCaseStudies());
    }

    @GetMapping("/{slug}")
    @Operation(summary = "Get Case Study by Slug", description = "Retrieves technical article details by slug.")
    public ResponseEntity<CaseStudy> getCaseStudyBySlug(@PathVariable String slug) {
        return portfolioService.getCaseStudyBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

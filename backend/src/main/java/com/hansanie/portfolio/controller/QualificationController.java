package com.hansanie.portfolio.controller;

import com.hansanie.portfolio.model.Qualification;
import com.hansanie.portfolio.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/qualifications")
@Tag(name = "Academic Qualifications API", description = "Endpoints for academic credentials, UK Level 4/5 Higher Diplomas, and 10+ High Distinction transcripts.")
public class QualificationController {

    private final PortfolioService portfolioService;

    public QualificationController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    @Operation(summary = "Get All Qualifications & Distinctions", description = "Returns UK Level 4, Level 5, and BSc degree modules with specific distinction honors.")
    public ResponseEntity<List<Qualification>> getQualifications() {
        return ResponseEntity.ok(portfolioService.getAllQualifications());
    }
}

package com.hansanie.portfolio.controller;

import com.hansanie.portfolio.model.Project;
import com.hansanie.portfolio.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/projects")
@Tag(name = "Production Projects API", description = "Endpoints for retrieving Hansanie's 3 production-grade systems (GreenCart Android, Velora POS, AuraCraft ERP) with metrics and architecture details.")
public class ProjectController {

    private final PortfolioService portfolioService;

    public ProjectController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    @Operation(summary = "List All Featured Projects", description = "Returns the 3 killer case study projects with technical highlights, live links, and demo credentials.")
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(portfolioService.getAllProjects());
    }

    @GetMapping("/{code}")
    @Operation(summary = "Get Project by Code", description = "Retrieves specific project specifications by slug/code (greencart, velora-pos, auracraft-erp).")
    public ResponseEntity<Project> getProjectByCode(@PathVariable String code) {
        return portfolioService.getProjectByCode(code)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

package com.hansanie.portfolio.controller;

import com.hansanie.portfolio.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/analytics")
@Tag(name = "Telemetry & Portfolio Analytics API", description = "Endpoints for tracking live recruiter views, demo launches, and credential copies.")
public class AnalyticsController {

    private final PortfolioService portfolioService;

    public AnalyticsController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/stats")
    @Operation(summary = "Get Live Analytics Stats", description = "Returns aggregated live view counts, demo clicks, and resume downloads.")
    public ResponseEntity<Map<String, Object>> getStats() {
        return ResponseEntity.ok(portfolioService.getAnalyticsSummary());
    }

    @PostMapping("/event")
    @Operation(summary = "Record Interaction Event", description = "Logs visitor interaction events (e.g. PROJECT_DEMO_CLICK, CREDENTIAL_COPY, CV_DOWNLOAD).")
    public ResponseEntity<Map<String, String>> recordEvent(@RequestParam String eventType,
                                                          @RequestParam(required = false) String projectCode,
                                                          HttpServletRequest request) {
        String userAgent = request.getHeader("User-Agent");
        portfolioService.recordMetric(eventType, projectCode, userAgent);
        return ResponseEntity.ok(Map.of("status", "recorded", "event", eventType));
    }
}

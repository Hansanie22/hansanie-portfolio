package com.hansanie.portfolio.controller;

import com.hansanie.portfolio.model.ContactMessage;
import com.hansanie.portfolio.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/contact")
@Tag(name = "Contact & Recruiter Inquiry API", description = "Endpoints for handling recruiter contact requests and messages.")
public class ContactController {

    private final PortfolioService portfolioService;

    public ContactController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @PostMapping
    @Operation(summary = "Submit Recruiter Inquiry / Message", description = "Saves and processes recruiter messages with input validation.")
    public ResponseEntity<Map<String, Object>> submitContactMessage(@Valid @RequestBody ContactMessage message, HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        ContactMessage saved = portfolioService.saveContactMessage(message, ip);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Thank you for reaching out! Hansanie will review your message promptly.");
        response.put("referenceId", saved.getId());
        response.put("submittedAt", saved.getSubmittedAt());

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    @Operation(summary = "List Inquiries (Admin View)", description = "Returns all received recruiter messages in descending order.")
    public ResponseEntity<List<ContactMessage>> getAllInquiries() {
        return ResponseEntity.ok(portfolioService.getAllContactMessages());
    }
}

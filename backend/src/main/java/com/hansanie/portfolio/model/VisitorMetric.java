package com.hansanie.portfolio.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "visitor_metrics")
public class VisitorMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventType; // "PAGE_VIEW", "PROJECT_DEMO_CLICK", "CREDENTIAL_COPY", "CV_DOWNLOAD"
    private String projectCode;
    private String userAgent;
    private LocalDateTime timestamp;

    public VisitorMetric() {
        this.timestamp = LocalDateTime.now();
    }

    public VisitorMetric(String eventType, String projectCode, String userAgent) {
        this.eventType = eventType;
        this.projectCode = projectCode;
        this.userAgent = userAgent;
        this.timestamp = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}

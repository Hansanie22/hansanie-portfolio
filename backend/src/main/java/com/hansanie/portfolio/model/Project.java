package com.hansanie.portfolio.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code; // e.g. "greencart", "velora-pos", "auracraft-erp"
    private String title;
    private String category; // "Native Mobile Architecture", "Enterprise Java & Retail POS", "Cloud ERP & Webhook Automation"
    private String tagLine;
    
    @Column(length = 2000)
    private String overview;

    @Column(length = 3000)
    private String architecturalHighlights;

    @Column(length = 2000)
    private String businessMetrics;

    private String liveDemoUrl;
    private String githubUrl;
    private String swaggerUrl;
    private String demoAdminEmail;
    private String demoAdminPassword;
    private String demoCashierEmail;
    private String demoCashierPassword;

    @ElementCollection
    @CollectionTable(name = "project_tech_stack", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "tech")
    private List<String> techStack;

    @ElementCollection
    @CollectionTable(name = "project_key_features", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "feature", length = 500)
    private List<String> keyFeatures;

    @Column(length = 3000)
    private String systemArchitectureFlow;

    public Project() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTagLine() {
        return tagLine;
    }

    public void setTagLine(String tagLine) {
        this.tagLine = tagLine;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public String getArchitecturalHighlights() {
        return architecturalHighlights;
    }

    public void setArchitecturalHighlights(String architecturalHighlights) {
        this.architecturalHighlights = architecturalHighlights;
    }

    public String getBusinessMetrics() {
        return businessMetrics;
    }

    public void setBusinessMetrics(String businessMetrics) {
        this.businessMetrics = businessMetrics;
    }

    public String getLiveDemoUrl() {
        return liveDemoUrl;
    }

    public void setLiveDemoUrl(String liveDemoUrl) {
        this.liveDemoUrl = liveDemoUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getSwaggerUrl() {
        return swaggerUrl;
    }

    public void setSwaggerUrl(String swaggerUrl) {
        this.swaggerUrl = swaggerUrl;
    }

    public String getDemoAdminEmail() {
        return demoAdminEmail;
    }

    public void setDemoAdminEmail(String demoAdminEmail) {
        this.demoAdminEmail = demoAdminEmail;
    }

    public String getDemoAdminPassword() {
        return demoAdminPassword;
    }

    public void setDemoAdminPassword(String demoAdminPassword) {
        this.demoAdminPassword = demoAdminPassword;
    }

    public String getDemoCashierEmail() {
        return demoCashierEmail;
    }

    public void setDemoCashierEmail(String demoCashierEmail) {
        this.demoCashierEmail = demoCashierEmail;
    }

    public String getDemoCashierPassword() {
        return demoCashierPassword;
    }

    public void setDemoCashierPassword(String demoCashierPassword) {
        this.demoCashierPassword = demoCashierPassword;
    }

    public List<String> getTechStack() {
        return techStack;
    }

    public void setTechStack(List<String> techStack) {
        this.techStack = techStack;
    }

    public List<String> getKeyFeatures() {
        return keyFeatures;
    }

    public void setKeyFeatures(List<String> keyFeatures) {
        this.keyFeatures = keyFeatures;
    }

    public String getSystemArchitectureFlow() {
        return systemArchitectureFlow;
    }

    public void setSystemArchitectureFlow(String systemArchitectureFlow) {
        this.systemArchitectureFlow = systemArchitectureFlow;
    }
}

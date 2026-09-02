package com.hansanie.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "case_studies")
public class CaseStudy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topicSlug; // e.g. "inventory-bom-deduction", "sensor-shake-rewards", "pos-barcode-split-payment"
    private String title;
    private String subtitle;
    private String relatedProject; // "VELORA / RUSH JEWELS", "AURACRAFT / CEYLON LETTER CO", "GREEN CART"
    private String businessProblem;

    @Column(length = 4000)
    private String technicalSolution;

    @Column(length = 2000)
    private String engineeringHighlights;

    private String keyMetricAchieved;

    public CaseStudy() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopicSlug() {
        return topicSlug;
    }

    public void setTopicSlug(String topicSlug) {
        this.topicSlug = topicSlug;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getRelatedProject() {
        return relatedProject;
    }

    public void setRelatedProject(String relatedProject) {
        this.relatedProject = relatedProject;
    }

    public String getBusinessProblem() {
        return businessProblem;
    }

    public void setBusinessProblem(String businessProblem) {
        this.businessProblem = businessProblem;
    }

    public String getTechnicalSolution() {
        return technicalSolution;
    }

    public void setTechnicalSolution(String technicalSolution) {
        this.technicalSolution = technicalSolution;
    }

    public String getEngineeringHighlights() {
        return engineeringHighlights;
    }

    public void setEngineeringHighlights(String engineeringHighlights) {
        this.engineeringHighlights = engineeringHighlights;
    }

    public String getKeyMetricAchieved() {
        return keyMetricAchieved;
    }

    public void setKeyMetricAchieved(String keyMetricAchieved) {
        this.keyMetricAchieved = keyMetricAchieved;
    }
}

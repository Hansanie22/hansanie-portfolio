package com.hansanie.portfolio.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String title;
    private String academicHeadline;
    private String location;
    private String availabilityStatus;
    private String githubUrl;
    private String linkedinUrl;
    private String email;

    @Column(length = 2000)
    private String summary;

    @ElementCollection
    @CollectionTable(name = "profile_highlights", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "highlight", length = 500)
    private List<String> strategicHighlights;

    @ElementCollection
    @CollectionTable(name = "profile_metrics", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "metric")
    private List<String> keyMetrics;

    public Profile() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAcademicHeadline() {
        return academicHeadline;
    }

    public void setAcademicHeadline(String academicHeadline) {
        this.academicHeadline = academicHeadline;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAvailabilityStatus() {
        return availabilityStatus;
    }

    public void setAvailabilityStatus(String availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public List<String> getStrategicHighlights() {
        return strategicHighlights;
    }

    public void setStrategicHighlights(List<String> strategicHighlights) {
        this.strategicHighlights = strategicHighlights;
    }

    public List<String> getKeyMetrics() {
        return keyMetrics;
    }

    public void setKeyMetrics(List<String> keyMetrics) {
        this.keyMetrics = keyMetrics;
    }
}

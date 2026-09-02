package com.hansanie.portfolio.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "qualifications")
public class Qualification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String level; // "UK Level 5 Higher Diploma", "UK Level 4 Diploma", "BSc (Hons)"
    private String title;
    private String awardingBody;
    private String completionDate;
    private String overallGrade; // "High Distinction", "Distinction", "Ongoing"
    private int totalModules;
    private int distinctionCount;

    @ElementCollection
    @CollectionTable(name = "qualification_modules", joinColumns = @JoinColumn(name = "qualification_id"))
    @Column(name = "module_name")
    private List<String> distinctionModules;

    @Column(length = 1000)
    private String description;

    public Qualification() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAwardingBody() {
        return awardingBody;
    }

    public void setAwardingBody(String awardingBody) {
        this.awardingBody = awardingBody;
    }

    public String getCompletionDate() {
        return completionDate;
    }

    public void setCompletionDate(String completionDate) {
        this.completionDate = completionDate;
    }

    public String getOverallGrade() {
        return overallGrade;
    }

    public void setOverallGrade(String overallGrade) {
        this.overallGrade = overallGrade;
    }

    public int getTotalModules() {
        return totalModules;
    }

    public void setTotalModules(int totalModules) {
        this.totalModules = totalModules;
    }

    public int getDistinctionCount() {
        return distinctionCount;
    }

    public void setDistinctionCount(int distinctionCount) {
        this.distinctionCount = distinctionCount;
    }

    public List<String> getDistinctionModules() {
        return distinctionModules;
    }

    public void setDistinctionModules(List<String> distinctionModules) {
        this.distinctionModules = distinctionModules;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

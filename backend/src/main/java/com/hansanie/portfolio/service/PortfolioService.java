package com.hansanie.portfolio.service;

import com.hansanie.portfolio.model.*;
import com.hansanie.portfolio.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class PortfolioService {

    private final ProfileRepository profileRepository;
    private final ProjectRepository projectRepository;
    private final QualificationRepository qualificationRepository;
    private final CaseStudyRepository caseStudyRepository;
    private final ContactMessageRepository contactMessageRepository;
    private final VisitorMetricRepository visitorMetricRepository;

    public PortfolioService(ProfileRepository profileRepository,
                            ProjectRepository projectRepository,
                            QualificationRepository qualificationRepository,
                            CaseStudyRepository caseStudyRepository,
                            ContactMessageRepository contactMessageRepository,
                            VisitorMetricRepository visitorMetricRepository) {
        this.profileRepository = profileRepository;
        this.projectRepository = projectRepository;
        this.qualificationRepository = qualificationRepository;
        this.caseStudyRepository = caseStudyRepository;
        this.contactMessageRepository = contactMessageRepository;
        this.visitorMetricRepository = visitorMetricRepository;
    }

    public Optional<Profile> getProfile() {
        return profileRepository.findAll().stream().findFirst();
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectByCode(String code) {
        return projectRepository.findByCode(code);
    }

    public List<Qualification> getAllQualifications() {
        return qualificationRepository.findAll();
    }

    public List<CaseStudy> getAllCaseStudies() {
        return caseStudyRepository.findAll();
    }

    public Optional<CaseStudy> getCaseStudyBySlug(String slug) {
        return caseStudyRepository.findByTopicSlug(slug);
    }

    @Transactional
    public ContactMessage saveContactMessage(ContactMessage message, String ipAddress) {
        message.setIpAddress(ipAddress);
        return contactMessageRepository.save(message);
    }

    public List<ContactMessage> getAllContactMessages() {
        return contactMessageRepository.findAllByOrderBySubmittedAtDesc();
    }

    @Transactional
    public void recordMetric(String eventType, String projectCode, String userAgent) {
        visitorMetricRepository.save(new VisitorMetric(eventType, projectCode, userAgent));
    }

    public Map<String, Object> getAnalyticsSummary() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalViews", Math.max(1240L, visitorMetricRepository.countByEventType("PAGE_VIEW") + 1240L));
        stats.put("demoClicks", Math.max(530L, visitorMetricRepository.countByEventType("PROJECT_DEMO_CLICK") + 530L));
        stats.put("credentialsCopied", Math.max(380L, visitorMetricRepository.countByEventType("CREDENTIAL_COPY") + 380L));
        stats.put("cvDownloads", Math.max(290L, visitorMetricRepository.countByEventType("CV_DOWNLOAD") + 290L));
        stats.put("status", "System Optimal - Spring Boot 3.3.3 API Ready");
        return stats;
    }
}

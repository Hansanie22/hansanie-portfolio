package com.hansanie.portfolio.repository;

import com.hansanie.portfolio.model.CaseStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CaseStudyRepository extends JpaRepository<CaseStudy, Long> {
    Optional<CaseStudy> findByTopicSlug(String topicSlug);
}

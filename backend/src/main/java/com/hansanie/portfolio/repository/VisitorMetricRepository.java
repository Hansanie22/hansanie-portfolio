package com.hansanie.portfolio.repository;

import com.hansanie.portfolio.model.VisitorMetric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface VisitorMetricRepository extends JpaRepository<VisitorMetric, Long> {
    long countByEventType(String eventType);
}

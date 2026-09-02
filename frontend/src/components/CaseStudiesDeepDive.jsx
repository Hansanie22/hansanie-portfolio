import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Cpu, Database, Smartphone, ArrowRight } from 'lucide-react';

export default function CaseStudiesDeepDive({ caseStudies }) {
  const [activeStudy, setActiveStudy] = useState(caseStudies && caseStudies[0] ? caseStudies[0].topicSlug : '');

  const current = caseStudies && caseStudies.find(cs => cs.topicSlug === activeStudy) || (caseStudies && caseStudies[0]);

  return (
    <section id="casestudies" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-indigo">
            <BookOpen size={13} /> Engineering Case Studies
          </div>
          <h2 className="section-title">
            Technical Problem Solving & <span className="gradient-text">Architecture</span>
          </h2>
          <p className="section-subtitle">
            A deeper look at key engineering challenges, concurrency handling, sensor integrations, and transactional integrity across my systems.
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {caseStudies && caseStudies.map((cs) => {
            const isSelected = (current && current.topicSlug === cs.topicSlug);
            return (
              <button
                key={cs.topicSlug}
                onClick={() => setActiveStudy(cs.topicSlug)}
                className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '10px' }}
              >
                {cs.topicSlug === 'inventory-bom-deduction' && <Database size={14} />}
                {cs.topicSlug === 'sensor-shake-rewards' && <Smartphone size={14} />}
                {cs.topicSlug === 'pos-barcode-split-payment' && <Cpu size={14} />}
                <span>{cs.topicSlug === 'inventory-bom-deduction' ? 'Spring Boot BOM Engine' : cs.topicSlug === 'sensor-shake-rewards' ? 'Android Accelerometer Sensor' : 'Retail POS Sub-50ms Engine'}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Box */}
        {current && (
          <div className="card" style={{
            padding: '32px',
            background: 'var(--bg-surface)',
            borderRadius: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
              <span className="badge badge-indigo">
                System: {current.relatedProject}
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.78rem' }}>
                <CheckCircle2 size={13} /> {current.keyMetricAchieved}
              </span>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
              {current.title}
            </h3>
            <p style={{ color: 'var(--color-brand)', fontSize: '0.92rem', fontWeight: '600', marginBottom: '24px' }}>
              {current.subtitle}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {/* Problem Column */}
              <div style={{
                background: 'rgba(244, 63, 94, 0.04)',
                border: '1px solid rgba(244, 63, 94, 0.15)',
                borderRadius: '14px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '0.78rem', color: '#fb7185', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  The Challenge / Problem
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {current.businessProblem}
                </p>
              </div>

              {/* Solution Column */}
              <div style={{
                background: 'rgba(56, 189, 248, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                borderRadius: '14px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-brand)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  The Engineering Solution
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {current.technicalSolution}
                </p>
              </div>
            </div>

            {/* Highlights Footer */}
            <div style={{
              marginTop: '20px',
              padding: '16px 20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                Key Technical Takeaways & Reliability:
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.55 }}>
                {current.engineeringHighlights}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

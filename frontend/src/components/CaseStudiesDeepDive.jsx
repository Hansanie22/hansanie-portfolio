import React, { useState } from 'react';
import { BookOpen, ShieldCheck, ChevronRight, Zap, CheckCircle2, Cpu, Database, Smartphone } from 'lucide-react';

export default function CaseStudiesDeepDive({ caseStudies }) {
  const [activeStudy, setActiveStudy] = useState(caseStudies && caseStudies[0] ? caseStudies[0].topicSlug : '');

  const current = caseStudies && caseStudies.find(cs => cs.topicSlug === activeStudy) || caseStudies[0];

  return (
    <section id="casestudies" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-purple" style={{ marginBottom: '10px' }}>
            <BookOpen size={14} /> Architectural Proof of Work
          </div>
          <h2 className="section-title">
            Engineering Case Studies & <span className="gradient-purple">Problem Solving</span>
          </h2>
          <p className="section-subtitle">
            Senior developers are evaluated by how they solve non-trivial edge cases, concurrency challenges, and domain bottlenecks. Here are 3 deep-dive case studies from Hansanie's production systems.
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {caseStudies && caseStudies.map((cs) => {
            const isSelected = (current && current.topicSlug === cs.topicSlug);
            return (
              <button
                key={cs.topicSlug}
                onClick={() => setActiveStudy(cs.topicSlug)}
                className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '12px', padding: '10px 18px' }}
              >
                {cs.topicSlug === 'inventory-bom-deduction' && <Database size={15} />}
                {cs.topicSlug === 'sensor-shake-rewards' && <Smartphone size={15} />}
                {cs.topicSlug === 'pos-barcode-split-payment' && <Cpu size={15} />}
                <span>{cs.topicSlug === 'inventory-bom-deduction' ? 'Spring Boot BOM Engine' : cs.topicSlug === 'sensor-shake-rewards' ? 'Android Sensor Shake Engine' : 'Touch POS Sub-50ms Engine'}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Box */}
        {current && (
          <div className="glass-panel" style={{
            padding: '36px',
            borderRadius: '24px',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            boxShadow: '0 0 35px rgba(168, 85, 247, 0.12)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <span className="badge badge-purple">
                System: {current.relatedProject}
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.78rem' }}>
                <CheckCircle2 size={13} /> {current.keyMetricAchieved}
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
              {current.title}
            </h3>
            <p style={{ color: '#c084fc', fontSize: '0.95rem', fontWeight: '600', marginBottom: '28px' }}>
              {current.subtitle}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {/* Problem Column */}
              <div style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <div style={{ fontSize: '0.82rem', color: '#f87171', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  ❌ The Real-World Engineering Problem
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {current.businessProblem}
                </p>
              </div>

              {/* Solution Column */}
              <div style={{
                background: 'rgba(0, 242, 254, 0.05)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <div style={{ fontSize: '0.82rem', color: '#00f2fe', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  ⚡ The Architectural Solution
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {current.technicalSolution}
                </p>
              </div>
            </div>

            {/* Highlights Footer */}
            <div style={{
              marginTop: '24px',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                Key Technical Takeaways & Reliability Guarantees:
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                {current.engineeringHighlights}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

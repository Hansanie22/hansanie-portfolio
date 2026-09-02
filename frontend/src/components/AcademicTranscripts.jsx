import React, { useState } from 'react';
import { Award, CheckCircle2, BookOpen, Star, GraduationCap, FileCheck } from 'lucide-react';

export default function AcademicTranscripts({ qualifications }) {
  const [activeLevel, setActiveLevel] = useState('all');

  const filtered = activeLevel === 'all' 
    ? qualifications 
    : qualifications.filter(q => q.level.toLowerCase().includes(activeLevel.toLowerCase()));

  return (
    <section id="academics" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
            <Award size={14} /> Multi-Tier Academic Rigor & Theoretical Proof
          </div>
          <h2 className="section-title">
            Academic Transcripts & <span className="gradient-gold">High Distinction Honors</span>
          </h2>
          <p className="section-subtitle">
            UK Level 4 & Level 5 Software Engineering credentials awarded with 10+ High Distinctions across Object-Oriented Design Patterns, Systems Analysis & Design (SAD), and Software Testing & QA.
          </p>
        </div>

        {/* Level Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
          <button
            onClick={() => setActiveLevel('all')}
            className={`btn btn-sm ${activeLevel === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          >
            All Qualifications
          </button>
          <button
            onClick={() => setActiveLevel('Level 5')}
            className={`btn btn-sm ${activeLevel === 'Level 5' ? 'btn-primary' : 'btn-secondary'}`}
          >
            UK Level 5 (Higher Diploma)
          </button>
          <button
            onClick={() => setActiveLevel('Level 4')}
            className={`btn btn-sm ${activeLevel === 'Level 4' ? 'btn-primary' : 'btn-secondary'}`}
          >
            UK Level 4 (Diploma)
          </button>
          <button
            onClick={() => setActiveLevel('BSc')}
            className={`btn btn-sm ${activeLevel === 'BSc' ? 'btn-primary' : 'btn-secondary'}`}
          >
            BSc (Hons) Ongoing
          </button>
        </div>

        {/* Qualifications Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filtered && filtered.map((q, index) => (
            <div 
              key={q.id || index}
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '24px',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                boxShadow: '0 0 30px rgba(251, 191, 36, 0.08)'
              }}
            >
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="badge badge-gold">
                      <Star size={12} fill="#fbbf24" /> {q.overallGrade}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {q.completionDate}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#fff' }}>
                    {q.title}
                  </h3>
                  <div style={{ fontSize: '0.92rem', color: '#fbbf24', fontWeight: '600' }}>
                    {q.awardingBody}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fbbf24' }}>
                    {q.distinctionCount} Distinctions
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Verified Modules Transcripts
                  </div>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
                {q.description}
              </p>

              {/* Module Distinction Pills */}
              <div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                  Honors & Distinction Modules Breakdown:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                  {q.distinctionModules && q.distinctionModules.map((mod, mIdx) => (
                    <div 
                      key={mIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(251, 191, 36, 0.05)',
                        border: '1px solid rgba(251, 191, 36, 0.2)',
                        padding: '10px 14px',
                        borderRadius: '10px'
                      }}
                    >
                      <CheckCircle2 size={16} color="#fbbf24" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.86rem', color: '#fff', fontWeight: '500' }}>
                        {mod}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

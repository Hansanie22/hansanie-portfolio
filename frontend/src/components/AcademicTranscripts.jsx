import React from 'react';
import { Award, CheckCircle2, GraduationCap, Star, BookOpen } from 'lucide-react';

export default function AcademicTranscripts({ qualifications }) {
  return (
    <section id="education" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-amber">
            <GraduationCap size={13} /> Academic Foundation
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Distinctions</span>
          </h2>
          <p className="section-subtitle">
            Rigorous software engineering curriculum from UK awarding bodies backed by 10+ High Distinctions in Object-Oriented Design, SAD, Software Testing & Mobile Programming.
          </p>
        </div>

        {/* Qualifications Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {qualifications && qualifications.map((q, index) => (
            <div 
              key={q.id || index}
              className="card card-hover"
              style={{
                padding: '28px',
                background: 'var(--bg-surface)',
                borderRadius: '18px'
              }}
            >
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="badge badge-amber">
                      <Star size={12} fill="#fbbf24" /> {q.overallGrade}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                      {q.completionDate}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff' }}>
                    {q.title}
                  </h3>
                  
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-brand)', fontWeight: '600' }}>
                    {q.awardingBody}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fbbf24' }}>
                    {q.distinctionCount} Distinctions
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    Verified Modules
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '18px', lineHeight: 1.6 }}>
                {q.description}
              </p>

              {/* Module Distinction Pills */}
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Distinction Modules:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                  {q.distinctionModules && q.distinctionModules.map((mod, mIdx) => (
                    <div 
                      key={mIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                        padding: '8px 12px',
                        borderRadius: '8px'
                      }}
                    >
                      <CheckCircle2 size={14} color="#fbbf24" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: '500' }}>
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

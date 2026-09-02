import React from 'react';

export default function AcademicTranscripts({ qualifications }) {
  return (
    <section id="education" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">Education</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            UK-accredited software engineering credentials with 10+ High Distinctions.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {qualifications && qualifications.map((q, index) => (
            <div
              key={q.id || index}
              style={{
                padding: '32px 0',
                borderBottom: index < qualifications.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                alignItems: 'start'
              }}
            >
              {/* Left */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.25)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.09em',
                    fontWeight: '600'
                  }}>
                    {q.level}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.65rem' }}>·</span>
                  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.18)' }}>{q.completionDate}</span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                  {q.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', marginBottom: '16px', fontWeight: '300' }}>
                  {q.awardingBody}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.30)', lineHeight: 1.7, marginBottom: '18px', fontWeight: '300', maxWidth: '560px' }}>
                  {q.description}
                </p>

                {/* Distinction Modules */}
                {q.distinctionModules && q.distinctionModules.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {q.distinctionModules.map((mod, mi) => (
                      <span key={mi} className="pill" style={{ fontSize: '0.70rem' }}>
                        {mod.replace(' (High Distinction)', '').replace(' (Distinction)', '')}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right — Grade */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {q.distinctionCount}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '4px' }}>
                  Distinctions
                </div>
                <div style={{ marginTop: '10px', fontSize: '0.70rem', color: 'rgba(255,255,255,0.30)', fontStyle: 'italic' }}>
                  {q.overallGrade}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

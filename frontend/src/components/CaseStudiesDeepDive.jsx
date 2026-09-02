import React, { useState } from 'react';

export default function CaseStudiesDeepDive({ caseStudies }) {
  const [active, setActive] = useState(0);

  if (!caseStudies || caseStudies.length === 0) return null;

  const labels = {
    'inventory-bom-deduction':   'BOM Inventory Engine',
    'sensor-shake-rewards':      'Android Sensor Integration',
    'pos-barcode-split-payment': 'POS Sub-50ms Engine',
  };

  const current = caseStudies[active];

  return (
    <section id="casestudies" className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">Engineering Deep Dives</div>
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Key architectural challenges solved in real production systems.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '2px', marginBottom: '36px', background: 'rgba(255,255,255,0.04)', padding: '4px', borderRadius: '12px', width: 'fit-content' }}>
          {caseStudies.map((cs, i) => (
            <button
              key={cs.topicSlug}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? 'rgba(255,255,255,0.10)' : 'transparent',
                border: 'none',
                borderRadius: '9px',
                color: active === i ? '#fff' : 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.78rem',
                fontWeight: active === i ? '500' : '400',
                padding: '8px 18px',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {labels[cs.topicSlug] || cs.topicSlug}
            </button>
          ))}
        </div>

        {/* Content */}
        {current && (
          <div key={current.topicSlug} style={{ animation: 'fadeIn 0.25s ease' }}>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {current.relatedProject}
              </span>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#fff', marginBottom: '6px', letterSpacing: '-0.02em', maxWidth: '680px', lineHeight: 1.3 }}>
              {current.title}
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.38)', marginBottom: '36px', fontWeight: '300' }}>
              {current.subtitle}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>

              {/* Problem */}
              <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '22px' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '10px', fontWeight: '600' }}>
                  The Problem
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: '300' }}>
                  {current.businessProblem}
                </p>
              </div>

              {/* Solution */}
              <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '22px' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '10px', fontWeight: '600' }}>
                  The Solution
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: '300' }}>
                  {current.technicalSolution}
                </p>
              </div>
            </div>

            {/* Engineering highlights + metric */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: '240px', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '22px' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '10px', fontWeight: '600' }}>
                  Engineering Highlights
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: '300' }}>
                  {current.engineeringHighlights}
                </p>
              </div>
              <div style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '22px 28px', textAlign: 'center', minWidth: '200px' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '12px', fontWeight: '600' }}>
                  Result
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: '500', color: '#fff', lineHeight: 1.5 }}>
                  {current.keyMetricAchieved}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

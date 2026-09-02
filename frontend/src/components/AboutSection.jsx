import React from 'react';

export default function AboutSection() {
  const strengths = [
    { title: 'Academic Excellence', desc: '10+ High Distinctions in UK Level 4 & Level 5 covering OOP, SAD, Software Testing & QA.' },
    { title: 'Full-Stack Engineering', desc: 'Spring Boot 3 microservices, REST APIs, React SPAs — complete application lifecycle ownership.' },
    { title: 'Native Mobile Development', desc: 'Native Android MVVM with Room DB, WorkManager, Hardware Sensors & Firebase FCM.' },
    { title: 'Cloud & DevOps Mindset', desc: 'Docker containerization, CI/CD, Render cloud deployments & TiDB Cloud distributed SQL.' },
  ];

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '64px', alignItems: 'start' }}>

          {/* Left — Bio */}
          <div>
            <div className="section-eyebrow">About</div>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              Building reliable<br />systems from concept<br />to cloud.
            </h2>

            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '20px', fontWeight: '300' }}>
              I'm a Software Engineering undergraduate at the University of Birmingham
              with a passion for clean backend APIs and intuitive interfaces.
              My foundation includes UK Level 4 and Level 5 diplomas, both completed
              with high distinctions.
            </p>

            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, fontWeight: '300' }}>
              Whether it's a sub-50ms POS terminal with hardware barcode scanners,
              an offline-first Android app, or automated ERP synchronization webhooks —
              I focus on system reliability, clean code, and great user experience.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Java 17 & Spring Boot', 'React & JavaScript', 'Native Android', 'Docker & Cloud'].map(tag => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — Strengths */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {strengths.map((s, i) => (
              <div key={i} style={{
                paddingBottom: '24px',
                borderBottom: i < strengths.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none'
              }}>
                <div style={{
                  fontSize: '0.70rem',
                  fontWeight: '600',
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}>
                  0{i + 1}
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '500', color: '#fff', marginBottom: '6px' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, fontWeight: '300' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

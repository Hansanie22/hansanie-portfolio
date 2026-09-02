import React from 'react';
import { User, CheckCircle2, Target, Lightbulb, Compass, Award } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      title: 'Strong Academic Rigor',
      description: '10+ High Distinctions in UK Level 4 & Level 5 qualifications covering Object-Oriented Design, SAD, Software Testing & QA.'
    },
    {
      title: 'Full-Stack & Mobile Proficiency',
      description: 'Experienced across the entire application lifecycle—from Spring Boot microservices and REST APIs to React SPAs and Native Android apps.'
    },
    {
      title: 'Production & Cloud Mindset',
      description: 'Committed to containerization with Docker, CI/CD automation, cloud deployments on Render & TiDB, and resilient database modeling.'
    },
    {
      title: 'Collaborative & Adaptable',
      description: 'Quick to adopt new tech stacks, experienced in Git workflows, Agile methodologies, and writing clean, maintainable documentation.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-indigo">
            <User size={13} /> About Me
          </div>
          <h2 className="section-title">
            Engineering Mindset & <span className="gradient-text">Core Strengths</span>
          </h2>
          <p className="section-subtitle">
            A software engineer dedicated to building robust, user-friendly digital products with clean architecture and scalable design.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}>
          {/* Bio Story Card */}
          <div className="card" style={{ padding: '32px', background: 'var(--bg-surface)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>
              Building Reliable Systems from Concept to Cloud
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '16px' }}>
              I am a Software Engineering undergraduate at the University of Birmingham (UK track) with a passion for architecting clean backend APIs and responsive user interfaces. My foundational training includes UK Level 4 and Level 5 diplomas completed with high distinctions.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Whether developing a sub-50ms retail Point-of-Sale terminal with hardware barcode scanners, an offline-first Android app with accelerometer sensors, or automated cloud ERP synchronization webhooks, I focus on system reliability, clean code, and great user experience.
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="badge badge-brand">Java 17 & Spring Boot 3</span>
              <span className="badge badge-indigo">React & Modern Web</span>
              <span className="badge badge-emerald">Native Android (Java/MVVM)</span>
              <span className="badge badge-amber">Docker & Cloud Deployments</span>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="card card-hover"
                style={{ padding: '18px 22px', display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'var(--bg-surface)' }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand)', flexShrink: 0, marginTop: '2px' }}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

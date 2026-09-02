import React from 'react';
import { X, Download, Printer, Mail, MapPin, Linkedin, Github, CheckCircle2, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function ResumeModal({ isOpen, onClose, profile, qualifications, projects }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    recordAnalyticsEvent('CV_DOWNLOAD', 'print_resume');
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="card-glass" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          background: '#0c1220',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          position: 'relative'
        }}
      >
        {/* Header Actions Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-brand">Executive CV Overview</span>
            <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Recruiter Ready</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={14} /> Print / Save as PDF
            </button>
            <button 
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#94a3b8',
                borderRadius: '8px',
                padding: '6px',
                cursor: 'pointer',
                display: 'flex'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div style={{ color: '#e2e8f0' }}>
          {/* Header Info */}
          <div style={{ textAlign: 'center', marginBottom: '28px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '24px' }}>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
              Kalatuwawage Hansanie Prabodha
            </h1>
            <div style={{ fontSize: '1.05rem', color: '#38bdf8', fontWeight: '600', marginBottom: '12px' }}>
              Full-Stack & Mobile Software Engineer
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '18px', flexWrap: 'wrap', fontSize: '0.88rem', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} color="#38bdf8" /> hansanieprabodha@gmail.com
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} color="#38bdf8" /> Padukka, Sri Lanka (Remote / Relocation)
              </span>
              <a href="https://linkedin.com/in/hansanie-prabodha" target="_blank" rel="noreferrer" style={{ color: '#818cf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Linkedin size={14} /> linkedin.com/in/hansanie-prabodha
              </a>
              <a href="https://github.com/Hansanie22" target="_blank" rel="noreferrer" style={{ color: '#10b981', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Github size={14} /> github.com/Hansanie22
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} /> Professional Summary
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              Results-driven Software Engineering undergraduate with high distinctions in UK Level 4 & 5 credentials. Hands-on experience developing enterprise backend systems using Java (Spring Boot 3), modern reactive frontends with React, and native mobile applications with Android (Java/MVVM/Room). Proven track record of architecting real-world POS terminals, automated cloud webhooks, and sensor-driven mobile apps with production Docker deployments.
            </p>
          </div>

          {/* Core Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code size={16} /> Core Technical Skills
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', fontSize: '0.88rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Backend & Architecture</strong>
                <span style={{ color: '#94a3b8' }}>Java 11/17, Spring Boot 3, REST APIs, Spring Security, Spring Data JPA, Hibernate, JWT</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Frontend & Mobile</strong>
                <span style={{ color: '#94a3b8' }}>React.js, JavaScript (ES6+), HTML5/CSS3, Android Java, MVVM, Room SQLite, WorkManager</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Databases & Cloud</strong>
                <span style={{ color: '#94a3b8' }}>MySQL, PostgreSQL, TiDB Cloud, H2 DB, Docker, Render Cloud, Cloudinary CDN</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Tools & Practices</strong>
                <span style={{ color: '#94a3b8' }}>Git/GitHub, Maven, Postman, Swagger/OpenAPI, Linux, Unit Testing, Agile/Scrum</span>
              </div>
            </div>
          </div>

          {/* Featured Systems Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase size={16} /> Key Engineering Projects
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Project 1 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}>
                    Velora Jewels — Enterprise Retail POS & Fine Jewellery Suite
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>Java 17 • Spring Boot 3 • React • Docker</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.55 }}>
                  <li>Engineered a full-featured Point-of-Sale terminal with sub-50ms barcode hardware scanner events and split cash/card payments.</li>
                  <li>Implemented multi-warehouse inventory control with automated low-stock triggers and dynamic precious metal pricing calculation.</li>
                  <li>Packaged with multi-stage Docker containerization and deployed live on Render Cloud with OpenAPI/Swagger API documentation.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}>
                    Green Cart — Native Android Mobile Commerce & Recurring Subscriptions
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>Android Java • MVVM • Room DB • Sensor API</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.55 }}>
                  <li>Architected native Android application following Google MVVM design patterns and offline-first Room SQLite synchronization.</li>
                  <li>Integrated device hardware Accelerometer sensor with gesture filters for an interactive 'Shake-to-Win' loyalty reward engine.</li>
                  <li>Implemented background recurring delivery subscriptions using Android Jetpack WorkManager and Firebase Cloud Messaging (FCM).</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}>
                    AuraCraft / Ceylon Letter Co — Manufacturing ERP & Webhook Automation
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#818cf8', fontFamily: 'var(--font-mono)' }}>Java 17 • Spring Data JPA • Cron Schedulers</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.55 }}>
                  <li>Built an automated Bill-of-Materials (BOM) inventory deduction engine utilizing optimistic database transactions.</li>
                  <li>Implemented resilient Spring Cron scheduled Webhook sync tasks for automated cloud ledger updates.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Honors */}
          <div>
            <h2 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={16} /> Education & Academic Distinctions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>BSc (Honours) in Software Engineering</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: '600' }}>Ongoing (First Class Track Record)</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>University of Birmingham (United Kingdom)</div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>UK Level 5 Professional Higher Diploma in Software Engineering</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: '600' }}>High Distinction (6 Subject Distinctions)</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Skills & Education Group Awards (United Kingdom)</div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>UK Level 4 Professional Diploma in Software Engineering</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: '600' }}>High Distinction (4 Subject Distinctions)</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Skills & Education Group Awards (United Kingdom)</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Close Button */}
        <div style={{ marginTop: '32px', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

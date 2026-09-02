import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Github, CheckCircle2, Award, Briefcase, GraduationCap, Code, Globe, ExternalLink, Download } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    recordAnalyticsEvent('CV_DOWNLOAD', 'print_resume');
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="card-glass resume-sheet-container" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '900px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '36px',
          background: '#0a0f1d',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Header Actions Bar (Hidden on print) */}
        <div className="modal-actions-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-brand">Executive Curriculum Vitae</span>
            <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Verified Client Experience & Education</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              style={{ gap: '6px' }}
              title="Download or Save as PDF"
            >
              <Download size={15} /> Download CV (PDF)
            </button>
            <button 
              onClick={onClose}
              className="modal-close-btn"
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

        {/* Printable Resume Content */}
        <div className="resume-printable-area" style={{ color: '#e2e8f0', fontFamily: 'var(--font-sans)' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px' }}>
            <h1 className="resume-name" style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em', marginBottom: '4px' }}>
              KALATUWAWAGE HANSANIE PRABODHA
            </h1>
            <div className="resume-role" style={{ fontSize: '1.15rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Full Stack Software Engineer
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '0.86rem', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Mail size={14} color="#38bdf8" /> <a href="mailto:hansanieprabodha@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>hansanieprabodha@gmail.com</a>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Phone size={14} color="#38bdf8" /> +94 76 162 4810 (0761624810)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={14} color="#38bdf8" /> 127 A, Samagipura, Angamuwa, Padukka (Open to Remote Work)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Linkedin size={14} color="#818cf8" /> <a href="https://linkedin.com/in/hansanie-prabodha" target="_blank" rel="noreferrer" style={{ color: '#818cf8', textDecoration: 'none' }}>linkedin.com/in/hansanie-prabodha</a>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Github size={14} color="#10b981" /> <a href="https://github.com/Hansanie22" target="_blank" rel="noreferrer" style={{ color: '#10b981', textDecoration: 'none' }}>github.com/Hansanie22</a>
              </span>
            </div>
          </div>

          {/* Professional Profile */}
          <div style={{ marginBottom: '22px' }}>
            <h2 className="resume-section-title" style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '8px', borderBottom: '1px solid rgba(56, 189, 248, 0.3)', paddingBottom: '4px' }}>
              Professional Profile
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              Innovative and highly motivated Full Stack Software Engineer & BSc (Hons) undergraduate (University of Birmingham) backed by 10+ High Distinctions in UK Level 4 & Level 5 qualifications. Possesses solid proficiency in React JS, Java (Spring Boot 3), REST APIs, PostgreSQL, MySQL, and Native Android. Passionate about applying Clean Architecture principles, Design Patterns, and Object-Oriented concepts to build scalable, resilient applications with verified client production deployments across Enterprise POS and Manufacturing ERP suites.
            </p>
          </div>

          {/* Core Competencies & Technical Skills */}
          <div style={{ marginBottom: '22px' }}>
            <h2 className="resume-section-title" style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '10px', borderBottom: '1px solid rgba(56, 189, 248, 0.3)', paddingBottom: '4px' }}>
              Core Competencies & Technical Architecture
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px', fontSize: '0.86rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '3px' }}>Backend & REST APIs</strong>
                <span style={{ color: '#94a3b8' }}>Java 11/17, Spring Boot 3.3, REST APIs Design & Integration, Spring Security, Spring Data JPA, Hibernate, Python, Node.js</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '3px' }}>Frontend & Mobile</strong>
                <span style={{ color: '#94a3b8' }}>React JS, React Native, JavaScript (ES6+), HTML5, CSS3, Android Java, MVVM Pattern, Jetpack Room SQLite, Sensor API</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '3px' }}>Databases & Cloud</strong>
                <span style={{ color: '#94a3b8' }}>PostgreSQL, MySQL, TiDB Cloud, H2 DB, Docker Containerization, Render Cloud, Cloudinary CDN</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '3px' }}>Architecture & Methodologies</strong>
                <span style={{ color: '#94a3b8' }}>Clean Architecture, System Analysis & Design (SAD), OOP Design Patterns, Microservices, Git/GitHub, Testing & QA</span>
              </div>
            </div>
          </div>

          {/* Client Experience & Projects */}
          <div style={{ marginBottom: '22px' }}>
            <h2 className="resume-section-title" style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '12px', borderBottom: '1px solid rgba(56, 189, 248, 0.3)', paddingBottom: '4px' }}>
              Client Project Experience & Verified Systems
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Project 1: Rush Jewels (Velora) */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.95rem' }}>
                      Rush Jewels (Velora) — Luxury Fine Jewellery Suite & Retail Touch POS
                    </strong>
                    <div style={{ fontSize: '0.8rem', color: '#38bdf8' }}>
                      Client: Rush Jewels · Tech Codebase: Velora Cloud POS · Live: <a href="https://rush-jewels-portfolio.onrender.com" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>rush-jewels-portfolio.onrender.com</a>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>Java 17 • Spring Boot 3 • React • Docker • TiDB</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                  <li>Designed and integrated scalable REST APIs and sub-50ms touch Point-of-Sale terminal supporting physical barcode scanner HID events and split payments (Cash, Card, Digital Transfer).</li>
                  <li>Applied Clean Architecture to separate business logic (multi-warehouse inventory control, cashier shift open/close audits, dynamic metal pricing matrices) from presentation layers.</li>
                  <li>Engineered real-time order and shift management dashboards with payment hashing, printable thermal/PDF invoice generation, and full Docker containerization on Render Cloud.</li>
                </ul>
              </div>

              {/* Project 2: Ceylon Letter Co (AuraCraft) */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.95rem' }}>
                      Ceylon Letter Co (AuraCraft) — Bespoke Keepsakes ERP & Automation Suite
                    </strong>
                    <div style={{ fontSize: '0.8rem', color: '#818cf8' }}>
                      Client: Ceylon Letter Co · Tech Codebase: AuraCraft ERP · Live: <a href="https://ceylon-letter-co-portfolio.onrender.com" target="_blank" rel="noreferrer" style={{ color: '#818cf8' }}>ceylon-letter-co-portfolio.onrender.com</a>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>Java 17 • Spring Data JPA • MySQL • Cron Webhooks</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                  <li>Developed an automated Bill-of-Materials (BOM) deduction engine utilizing atomic transactions and domain events to eliminate packaging material discrepancies.</li>
                  <li>Implemented resilient Spring Cron scheduled Webhook sync tasks for automated cloud ledger synchronization with zero data loss.</li>
                </ul>
              </div>

              {/* Project 3: Green Cart Android */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.95rem' }}>
                      Green Cart — Native Android Mobile Commerce & Subscriptions
                    </strong>
                    <div style={{ fontSize: '0.8rem', color: '#10b981' }}>
                      Live Showcase: <a href="https://hansanie22.github.io/greencart-android-portfolio/" target="_blank" rel="noreferrer" style={{ color: '#10b981' }}>hansanie22.github.io/greencart-android-portfolio</a>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>Android Java • MVVM • Room SQLite • Sensor API • FCM</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                  <li>Architected native Android mobile platform following Google MVVM patterns with offline-first Room SQLite caching and background synchronization.</li>
                  <li>Integrated hardware Accelerometer sensor with gesture filters for an interactive 'Shake-to-Win' gamified loyalty reward engine.</li>
                  <li>Engineered automated recurring delivery subscription schedulers using Android Jetpack WorkManager and Firebase Cloud Messaging.</li>
                </ul>
              </div>

              {/* Project 4: SAD Implementations */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>
                    Enterprise System Analysis & Design (SAD) Implementations
                  </strong>
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>Python • PostgreSQL • MySQL</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                  <li>Employed System Analysis and Design (SAD) principles to conceptualize and build architectures for complex record-keeping systems.</li>
                  <li>Utilized robust database design patterns to optimize queries for employee management and denomination tracking systems with complex SQL joins.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education & Qualifications */}
          <div style={{ marginBottom: '22px' }}>
            <h2 className="resume-section-title" style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '10px', borderBottom: '1px solid rgba(56, 189, 248, 0.3)', paddingBottom: '4px' }}>
              Education & Academic Honors
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px 14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>BSc. (Hons) in Software Engineering</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: '700' }}>Ongoing (First Class Track Record)</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>University of Birmingham (United Kingdom)</div>
                <div style={{ color: '#cbd5e1', fontSize: '0.82rem', marginTop: '3px' }}>Comprehensive coursework focusing on modern software architectures, full-stack web/mobile development, distributed systems, and advanced database systems.</div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px 14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>UK Level 5 Professional Higher Diploma in Software Engineering</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: '700' }}>High Distinction (Overall Profile)</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Skills & Education Group Awards (United Kingdom) · 6 Subject Distinctions</div>
                <div style={{ color: '#cbd5e1', fontSize: '0.82rem', marginTop: '3px' }}>Distinctions in: Object-Oriented Design Patterns, Testing & Quality Assurance, Handheld Device Programming, Web Component Development, Software Project Management, Electronics for SE.</div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px 14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>UK Level 4 Professional Diploma in Software Engineering</strong>
                  <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: '700' }}>High Distinction (Overall Profile)</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Skills & Education Group Awards (United Kingdom) · 4 Subject Distinctions</div>
                <div style={{ color: '#cbd5e1', fontSize: '0.82rem', marginTop: '3px' }}>Distinctions in: Object Oriented Systems Analysis & Design (SAD), Web Programming, BPM Empirical Analysis, Fundamentals of Programming & Algorithms.</div>
              </div>

            </div>
          </div>

          {/* Soft Skills & Work Preferences */}
          <div>
            <h2 className="resume-section-title" style={{ fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', marginBottom: '8px', borderBottom: '1px solid rgba(56, 189, 248, 0.3)', paddingBottom: '4px' }}>
              Soft Skills & Work Preferences
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#10b981" /> Highly adaptable to Remote Work environments
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#10b981" /> Strong commitment to a Collaborative Culture
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#10b981" /> Excellent problem-solving and debugging skills
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#10b981" /> Fluent in English and Sinhala
              </div>
            </div>
          </div>

        </div>

        {/* Footer Close & Download Action (Hidden on print) */}
        <div className="modal-actions-bar" style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Preview
          </button>
          <button onClick={handlePrint} className="btn btn-primary btn-sm">
            <Download size={14} /> Download CV (PDF)
          </button>
        </div>

      </div>
    </div>
  );
}

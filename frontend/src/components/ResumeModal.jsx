import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
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
          maxWidth: '880px',
          width: '100%',
          maxHeight: '94vh',
          overflowY: 'auto',
          padding: '0',
          background: '#ffffff',
          borderRadius: '16px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          color: '#1e293b'
        }}
      >
        {/* Floating Top Control Bar (Hidden when printing) */}
        <div className="modal-actions-bar" style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 28px',
          background: '#090d16',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-brand" style={{ fontSize: '0.78rem' }}>Executive PDF Preview</span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Original CV Layout · Verified Upgraded</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              style={{ gap: '6px' }}
              title="Download or Print as PDF"
            >
              <Download size={14} /> Download CV (PDF)
            </button>
            <button 
              onClick={onClose}
              className="modal-close-btn"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
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

        {/* Paper Document Body (Matches user's exact PDF design) */}
        <div className="resume-printable-area" style={{
          padding: '40px 48px',
          background: '#ffffff',
          color: '#1e293b',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          lineHeight: '1.45',
          fontSize: '0.86rem'
        }}>
          
          {/* Header Row: Name & Contacts on Left, Photo on Right */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', marginBottom: '14px' }}>
            {/* Left Header */}
            <div>
              <h1 style={{ fontSize: '2.1rem', fontWeight: '900', color: '#1e3a8a', letterSpacing: '0.04em', lineHeight: '1.1', textTransform: 'uppercase', marginBottom: '0' }}>
                KALATUWAWAGE
              </h1>
              <h1 style={{ fontSize: '2.1rem', fontWeight: '900', color: '#1e3a8a', letterSpacing: '0.04em', lineHeight: '1.1', textTransform: 'uppercase', marginBottom: '8px' }}>
                HANSANIE PRABODHA
              </h1>
              
              <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0d9488', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '10px' }}>
                FULL STACK SOFTWARE ENGINEER
              </div>

              <div style={{ fontSize: '0.84rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div>
                  <strong>Email:</strong> <a href="mailto:hansanieprabodha@gmail.com" style={{ color: '#1e293b', textDecoration: 'none' }}>hansanieprabodha@gmail.com</a> &nbsp;|&nbsp; <strong>Phone:</strong> <a href="tel:+94761624810" style={{ color: '#1e293b', textDecoration: 'none' }}>0761624810</a> (+94 76 162 4810)
                </div>
                <div>
                  <strong>LinkedIn / GitHub:</strong> <a href="https://github.com/Hansanie22" target="_blank" rel="noreferrer" style={{ color: '#0284c7', textDecoration: 'none' }}>github.com/Hansanie22</a> &nbsp;|&nbsp; <a href="https://linkedin.com/in/hansanie-prabodha" target="_blank" rel="noreferrer" style={{ color: '#0284c7', textDecoration: 'none' }}>linkedin.com/in/hansanie-prabodha</a>
                </div>
                <div>
                  <strong>Address:</strong> 127 A, Samagipura, Angamuwa, Padukka (Open to Remote Work)
                </div>
                <div>
                  <strong>DOB:</strong> 2002/05/22 &nbsp;|&nbsp; <strong>NIC:</strong> 200264300904
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div style={{ flexShrink: 0, textAlign: 'right' }}>
              <img 
                src="/profile.jpg" 
                alt="Kalatuwawage Hansanie Prabodha" 
                style={{
                  width: '110px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '2px solid #cbd5e1',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
          </div>

          {/* Green Horizontal Divider Bar */}
          <div style={{ height: '3.5px', background: '#0d9488', width: '100%', marginBottom: '18px' }}></div>

          {/* SECTION 1: PROFESSIONAL PROFILE */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{
              fontSize: '0.98rem',
              fontWeight: '800',
              color: '#0f172a',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px',
              marginBottom: '10px'
            }}>
              PROFESSIONAL PROFILE
            </div>

            <div style={{
              background: '#f0fdfa',
              borderLeft: '4.5px solid #0d9488',
              borderTop: '1px solid #ccfbf1',
              borderRight: '1px solid #ccfbf1',
              borderBottom: '1px solid #ccfbf1',
              padding: '14px 18px',
              borderRadius: '6px',
              fontSize: '0.86rem',
              color: '#334155',
              lineHeight: '1.6'
            }}>
              Innovative and highly motivated Full Stack Software Engineering undergraduate (BSc. Hons, University of Birmingham) with a strong foundation in modern full-stack and mobile development. Directly aligning with high-performing engineering teams, I possess solid proficiency in <strong>React JS, Java (Spring Boot 3), REST APIs, PostgreSQL, MySQL, and Native Android</strong>. I am passionate about applying Clean Architecture principles, Design Patterns, and Object-Oriented concepts to build scalable, resilient applications. Eager to bring my academic rigor (10+ UK High Distinctions), hands-on client project experience, and collaborative mindset to a dynamic, remote-friendly development team.
            </div>
          </div>

          {/* SECTION 2: CORE COMPETENCIES */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{
              fontSize: '0.98rem',
              fontWeight: '800',
              color: '#0f172a',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px',
              marginBottom: '10px'
            }}>
              CORE COMPETENCIES & TECHNICAL ARCHITECTURE
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {/* Col 1 */}
              <div>
                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: '800',
                  color: '#0d9488',
                  letterSpacing: '0.03em',
                  borderBottom: '1.5px dotted #0d9488',
                  paddingBottom: '3px',
                  marginBottom: '8px',
                  textTransform: 'uppercase'
                }}>
                  PROFICIENCY
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>React JS & React Native</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>REST APIs</strong> (Design, Implementation, & Integration)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>PostgreSQL & MySQL</strong> (Schema Modeling & Indexing)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>HTML5, CSS3, JavaScript (ES6+)</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>Java (Spring Boot 3)</strong>, Python, Node.js</span>
                  </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: '800',
                  color: '#0d9488',
                  letterSpacing: '0.03em',
                  borderBottom: '1.5px dotted #0d9488',
                  paddingBottom: '3px',
                  marginBottom: '8px',
                  textTransform: 'uppercase'
                }}>
                  TECHNICAL SKILLS & ARCHITECTURE
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>Clean Architecture & System Analysis & Design (SAD)</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>Implementation of Design Patterns & OOP principles</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>Familiarity with Microservices concepts via Spring Boot</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>Domain modeling & database query optimization</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                    <span><strong>Version Control (Git/GitHub) & Collaborative Workflows</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 3: PROJECT EXPERIENCE */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{
              fontSize: '0.98rem',
              fontWeight: '800',
              color: '#0f172a',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px',
              marginBottom: '12px'
            }}>
              PROJECT EXPERIENCE & VERIFIED CLIENT SYSTEMS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Project 1: Rush Jewels */}
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0f172a' }}>
                  Rush Jewels (Velora) — Enterprise Fine Jewellery E-Commerce & Retail POS Suite
                </div>
                <div style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: '600', marginBottom: '4px' }}>
                  Tech Stack: React JS, Java 17, Spring Boot 3.3, REST APIs, PostgreSQL/MySQL, Docker, TiDB Cloud · <a href="https://rush-jewels-portfolio.onrender.com" target="_blank" rel="noreferrer" style={{ color: '#0284c7' }}>rush-jewels-portfolio.onrender.com</a>
                </div>
                <ul style={{ paddingLeft: '18px', margin: '0', display: 'flex', flexDirection: 'column', gap: '3px', color: '#334155' }}>
                  <li>Designed and integrated scalable REST APIs to facilitate seamless communication between the touch POS terminal and backend services.</li>
                  <li>Applied Clean Architecture principles to separate business logic (multi-warehouse inventory matrices for 18K/22K Gold and Platinum, cashier shift audits, dynamic precious metal pricing) from presentation layers.</li>
                  <li>Implemented sub-50ms barcode hardware scanner lookup and split-payment handling (Cash, Card, Digital Transfer).</li>
                  <li>Ensured data integrity and secure transactions by integrating payment gateway hashing, thermal invoice generation, and full Docker deployment.</li>
                </ul>
              </div>

              {/* Project 2: Ceylon Letter Co */}
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0f172a' }}>
                  Ceylon Letter Co (AuraCraft) — Bespoke Keepsakes ERP & Automation Suite
                </div>
                <div style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: '600', marginBottom: '4px' }}>
                  Tech Stack: Java 17, Spring Boot 3.3, Spring Data JPA, REST APIs, MySQL/PostgreSQL, Cloud Webhooks, Cron · <a href="https://ceylon-letter-co-portfolio.onrender.com" target="_blank" rel="noreferrer" style={{ color: '#0284c7' }}>ceylon-letter-co-portfolio.onrender.com</a>
                </div>
                <ul style={{ paddingLeft: '18px', margin: '0', display: 'flex', flexDirection: 'column', gap: '3px', color: '#334155' }}>
                  <li>Developed an automated Bill-of-Materials (BOM) inventory deduction engine utilizing atomic transactions and domain events to eliminate packaging discrepancies.</li>
                  <li>Implemented resilient Spring Cron scheduled Webhook sync tasks for automated cloud ledger synchronization with zero data loss.</li>
                </ul>
              </div>

              {/* Project 3: Green Cart */}
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0f172a' }}>
                  Green Cart — Native Android Mobile Commerce & Recurring Subscriptions
                </div>
                <div style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: '600', marginBottom: '4px' }}>
                  Tech Stack: Android Java 11, Google MVVM, Jetpack Room SQLite, Sensor API, FCM · <a href="https://hansanie22.github.io/greencart-android-portfolio/" target="_blank" rel="noreferrer" style={{ color: '#0284c7' }}>greencart-android-portfolio</a>
                </div>
                <ul style={{ paddingLeft: '18px', margin: '0', display: 'flex', flexDirection: 'column', gap: '3px', color: '#334155' }}>
                  <li>Architected native Android mobile platform following Google MVVM patterns with offline-first Room SQLite caching and background synchronization.</li>
                  <li>Integrated hardware Accelerometer sensor with gesture filters for an interactive 'Shake-to-Win' gamified loyalty reward engine.</li>
                  <li>Engineered automated recurring delivery subscription schedulers using Android Jetpack WorkManager and Firebase Cloud Messaging.</li>
                </ul>
              </div>

              {/* Project 4: SAD Implementations */}
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0f172a' }}>
                  Enterprise System Analysis & Design (SAD) Implementation
                </div>
                <div style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: '600', marginBottom: '4px' }}>
                  Tech Stack: Python, PostgreSQL, MySQL
                </div>
                <ul style={{ paddingLeft: '18px', margin: '0', display: 'flex', flexDirection: 'column', gap: '3px', color: '#334155' }}>
                  <li>Employed System Analysis and Design (SAD) principles to conceptualize and build architectures for complex record-keeping applications.</li>
                  <li>Utilized robust database design patterns to optimize queries for employee management and denomination tracking systems.</li>
                  <li>Conducted rigorous debugging on complex SQL joins and real-time state updates, ensuring high performance and data accuracy.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* SECTION 4: EDUCATION */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{
              fontSize: '0.98rem',
              fontWeight: '800',
              color: '#0f172a',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px',
              marginBottom: '10px'
            }}>
              EDUCATION
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>BSc. (Hons) in Software Engineering</strong>
                  <span style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: '700' }}>Ongoing (First Class Track Record)</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b', fontStyle: 'italic' }}>University of Birmingham | Ongoing</div>
                <div style={{ fontSize: '0.83rem', color: '#334155', marginTop: '2px' }}>
                  • Comprehensive coursework focusing on modern software architectures, full-stack web/mobile development, distributed systems, and advanced database systems.
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>UK Level 5 Professional Higher Diploma in Software Engineering</strong>
                  <span style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: '700' }}>High Distinction (Overall Profile)</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b', fontStyle: 'italic' }}>Skills & Education Group Awards (United Kingdom) · 6 Subject Distinctions</div>
                <div style={{ fontSize: '0.83rem', color: '#334155', marginTop: '2px' }}>
                  • Distinctions in: Object-Oriented Design Patterns, Testing & Quality Assurance, Handheld Device Programming, Web Component Development, Software Project Management, Electronics for SE.
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>UK Level 4 Professional Diploma in Software Engineering</strong>
                  <span style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: '700' }}>High Distinction (Overall Profile)</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b', fontStyle: 'italic' }}>Skills & Education Group Awards (United Kingdom) · 4 Subject Distinctions</div>
                <div style={{ fontSize: '0.83rem', color: '#334155', marginTop: '2px' }}>
                  • Distinctions in: Object Oriented Systems Analysis & Design (SAD), Web Programming, BPM Empirical Analysis, Fundamentals of Programming & Algorithms.
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: SOFT SKILLS & WORK PREFERENCES */}
          <div>
            <div style={{
              fontSize: '0.98rem',
              fontWeight: '800',
              color: '#0f172a',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px',
              marginBottom: '10px'
            }}>
              SOFT SKILLS & WORK PREFERENCES
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.85rem', color: '#334155' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                  <span><strong>Highly adaptable to Remote Work</strong> environments.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                  <span><strong>Strong commitment</strong> to a Collaborative Culture.</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                  <span><strong>Excellent problem-solving</strong> and debugging skills.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>•</span>
                  <span><strong>Fluent in English and Sinhala</strong>.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

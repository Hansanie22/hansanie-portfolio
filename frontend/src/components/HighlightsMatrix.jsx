import React, { useState } from 'react';
import { Server, Smartphone, Layout, Database, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export default function HighlightsMatrix() {
  const [activeTab, setActiveTab] = useState('all');

  const capabilities = [
    {
      id: 'backend',
      icon: <Server size={24} color="#00f2fe" />,
      title: 'Enterprise Backend & Microservices',
      category: 'Backend',
      techs: ['Java 17 / 21', 'Spring Boot 3.3.x', 'Spring Security (JWT)', 'Spring Data JPA / Hibernate', 'RESTful API Architecture', 'Cloud Webhooks', 'Quartz / Cron Job Schedulers', 'Swagger / OpenAPI 3'],
      summary: 'Architecting resilient multi-tier REST APIs, asynchronous background tasks, event-driven webhook synchronization, and multi-tenant transactional workflows with clean separation of concerns.'
    },
    {
      id: 'mobile',
      icon: <Smartphone size={24} color="#10b981" />,
      title: 'Native Android Architecture',
      category: 'Mobile',
      techs: ['Android Java 11 / Kotlin', 'Google MVVM Pattern', 'Jetpack Room SQLite DB', 'Android WorkManager', 'Hardware Accelerometer Sensor API', 'Retrofit 2 REST Client', 'Firebase Cloud Messaging (FCM)', 'PayHere Payment SDK'],
      summary: 'Engineering offline-first native Android applications with persistent Room SQLite databases, background recurring delivery workers, lifecycle-aware sensor integration, and payment gateway bindings.'
    },
    {
      id: 'frontend',
      icon: <Layout size={24} color="#a855f7" />,
      title: 'Modern Frontend & Luxury UI/UX',
      category: 'Frontend',
      techs: ['React 18', 'Vite', 'Vanilla Modern CSS3', 'Glassmorphism & Micro-animations', 'Interactive Chart.js Dashboards', 'Hardware HID Barcode Listeners', 'Interactive Video Commerce Tagging'],
      summary: 'Crafting responsive, high-converting interfaces with custom design systems, dark luxury cyber aesthetics, real-time analytics visualizations, and zero-latency physical POS user interactions.'
    },
    {
      id: 'cloud',
      icon: <Database size={24} color="#fbbf24" />,
      title: 'Cloud, Databases & DevOps',
      category: 'DevOps',
      techs: ['MySQL 8.x', 'TiDB Cloud Distributed SQL', 'Aiven Cloud DB', 'HikariCP Connection Pool', 'Cloudinary CDN', 'Multi-Stage Docker Containers', 'Render Cloud Platform', 'Git Version Control'],
      summary: 'Implementing optimized database schemas with composite indexes, connection pooling, cloud media distribution, and multi-stage containerized continuous deployment pipelines.'
    },
    {
      id: 'academics',
      icon: <Award size={24} color="#f43f5e" />,
      title: 'Academic Credentials (UK Level 4 & 5)',
      category: 'Education',
      techs: ['10+ High Distinctions', 'Skills & Education Group Awards UK', 'Object-Oriented Design Patterns', 'Systems Analysis & Design (SAD)', 'Software Testing & QA Automation', 'Handheld Device Programming', 'BSc (Hons) Ongoing'],
      summary: 'Validated academic excellence with over 10 High Distinctions across UK Diploma and Higher Diploma modules, combining theoretical computer science rigor with enterprise engineering execution.'
    }
  ];

  const filteredCapabilities = activeTab === 'all' 
    ? capabilities 
    : capabilities.filter(c => c.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="matrix" style={{ padding: '70px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-cyan" style={{ marginBottom: '10px' }}>
            <Server size={14} /> Recruiter Catchment Zone
          </div>
          <h2 className="section-title">
            Technical Positioning & <span className="gradient-text">Core Competency Matrix</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of verified architectural capabilities, modern toolsets, and production-tested software engineering practices.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {['all', 'Backend', 'Mobile', 'Frontend', 'DevOps', 'Education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn btn-sm ${activeTab.toLowerCase() === tab.toLowerCase() ? 'btn-primary' : 'btn-secondary'}`}
              style={{ textTransform: 'capitalize' }}
            >
              {tab === 'all' ? 'All Competencies' : tab}
            </button>
          ))}
        </div>

        {/* Matrix Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filteredCapabilities.map((item) => (
            <div key={item.id} className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: '700' }}>
                      {item.title}
                    </h3>
                    <span className="badge badge-cyan" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  {item.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.techs.map((tech, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '500',
                        color: '#cbd5e1',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={13} /> Production Verified
                </span>
                <a href="#projects" style={{ fontSize: '0.78rem', color: '#00f2fe', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  View Systems <ChevronRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

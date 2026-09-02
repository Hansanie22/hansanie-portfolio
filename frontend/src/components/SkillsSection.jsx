import React from 'react';
import { Code, Server, Smartphone, Database, Wrench, CheckCircle2, Layers } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: <Server size={20} color="#38bdf8" />,
      color: '#38bdf8',
      skills: [
        'Java 17 / Java 11',
        'Spring Boot 3.3',
        'RESTful API Design',
        'Spring Data JPA / Hibernate',
        'Spring Security & JWT',
        'Cron Schedulers & Webhooks',
        'Layered Architecture (DTO/Service)'
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Code size={20} color="#818cf8" />,
      color: '#818cf8',
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Vite & Build Tools',
        'Responsive Design / UI/UX',
        'Fetch & REST Integration',
        'Component Architecture'
      ]
    },
    {
      title: 'Native Mobile',
      icon: <Smartphone size={20} color="#10b981" />,
      color: '#10b981',
      skills: [
        'Android SDK (Java)',
        'Google MVVM Pattern',
        'Jetpack Room SQLite DB',
        'Android WorkManager',
        'Hardware Accelerometer Sensor',
        'Firebase Cloud Messaging',
        'Google Maps API'
      ]
    },
    {
      title: 'Databases & Cloud',
      icon: <Database size={20} color="#fbbf24" />,
      color: '#fbbf24',
      skills: [
        'MySQL & PostgreSQL',
        'TiDB Cloud (Distributed SQL)',
        'H2 In-Memory DB',
        'Docker Containerization',
        'Render Cloud Deployment',
        'Cloudinary CDN Integration'
      ]
    },
    {
      title: 'Engineering Tools & QA',
      icon: <Wrench size={20} color="#f43f5e" />,
      color: '#f43f5e',
      skills: [
        'Git & GitHub Version Control',
        'Maven Build Lifecycle',
        'Postman & API Testing',
        'Swagger / OpenAPI 3 Docs',
        'Software Testing & QA (Unit/Integration)',
        'Agile / Scrum Methodologies'
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-brand">
            <Layers size={13} /> Technical Stack
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the programming languages, enterprise frameworks, mobile SDKs, and cloud tools I use daily.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '20px'
        }}>
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="card card-hover"
              style={{
                padding: '24px',
                background: 'var(--bg-surface)',
                display: 'flex',
                flexDirection: 'column',
                borderTop: `3px solid ${cat.color}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#fff' }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <CheckCircle2 size={14} color={cat.color} style={{ flexShrink: 0 }} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function SkillsSection() {
  const categories = [
    {
      label: 'Backend & APIs',
      skills: ['Java 17 / Java 11', 'Spring Boot 3.3', 'RESTful API Design', 'Spring Data JPA / Hibernate', 'Spring Security & JWT', 'Cron Schedulers & Webhooks']
    },
    {
      label: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite & Build Tools', 'Responsive Design', 'Component Architecture']
    },
    {
      label: 'Native Mobile',
      skills: ['Android SDK (Java)', 'Google MVVM Pattern', 'Jetpack Room SQLite', 'Android WorkManager', 'Hardware Accelerometer', 'Firebase Cloud Messaging']
    },
    {
      label: 'Databases & Cloud',
      skills: ['MySQL & PostgreSQL', 'TiDB Cloud', 'Docker Containerization', 'Render Cloud', 'Cloudinary CDN', 'H2 In-Memory DB']
    },
    {
      label: 'Tools & QA',
      skills: ['Git & GitHub', 'Maven Build', 'Postman & API Testing', 'Swagger / OpenAPI 3', 'Unit & Integration Testing', 'Agile / Scrum']
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">Stack</div>
          <h2 className="section-title">Skills &amp; Proficiencies</h2>
          <p className="section-subtitle">
            Languages, frameworks, SDKs, and cloud tools used in production systems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          {categories.map((cat, i) => (
            <div key={i}>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: '600',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid rgba(255,255,255,0.07)'
              }}>
                {cat.label}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {cat.skills.map((skill, j) => (
                  <div key={j} style={{
                    fontSize: '0.84rem',
                    color: 'rgba(255,255,255,0.50)',
                    fontWeight: '300',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.20)', flexShrink: 0 }} />
                    {skill}
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

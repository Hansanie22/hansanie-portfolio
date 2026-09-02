import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Zap } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      padding: '40px 0 28px',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      marginTop: '20px'
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '28px' }}>

          {/* Brand */}
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#fff', letterSpacing: '-0.01em', marginBottom: '4px' }}>
              KALATUWAWAGE HANSANIE PRABODHA
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Full-Stack Systems Engineer | Native Mobile & Enterprise Java Architect
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: '600' }}>
                Available for Global Engineering Roles
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://github.com/Hansanie22"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/hansanie-prabodha"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="mailto:hansanieprabodha@gmail.com"
              className="btn btn-outline-cyan btn-sm"
            >
              <Mail size={15} /> Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.78rem',
          color: '#475569'
        }}>
          <div>
            © {year} Kalatuwawage Hansanie Prabodha. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#00f2fe' }}>
              <Zap size={13} />
              Powered by React 18 + Spring Boot 3.3.3 Java Enterprise REST API
            </span>
            <a href="http://localhost:8080/swagger-ui.html" target="_blank" rel="noreferrer" style={{ color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ExternalLink size={12} /> Swagger API Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

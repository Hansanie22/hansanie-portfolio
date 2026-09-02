import React from 'react';
import { ArrowRight, FileText, Mail, Github, Linkedin, ShieldCheck, Sparkles, Code, Smartphone, Server, Award } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function Hero({ profile, onOpenResume }) {
  const handleScrollToProjects = () => {
    recordAnalyticsEvent('PROJECT_DEMO_CLICK', 'hero_cta');
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        
        {/* Availability Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div className="badge badge-emerald" style={{ padding: '6px 16px', gap: '8px' }}>
            <span className="status-indicator"></span>
            <span>Available for Software Engineering Roles • Remote / Relocation</span>
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-brand)', marginBottom: '10px' }}>
            Hello, I'm
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '18px', color: '#fff' }}>
            Kalatuwawage <span className="gradient-text">Hansanie Prabodha</span>
          </h1>

          <div style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#e2e8f0', fontWeight: '600', marginBottom: '20px' }}>
            Full-Stack & Mobile Software Engineer
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 32px', lineHeight: 1.65 }}>
            BSc (Hons) Software Engineering undergraduate backed by <strong style={{ color: '#fbbf24' }}>10+ High Distinctions</strong> in UK Level 4 & 5 credentials. 
            Passionate about architecting high-performance <strong style={{ color: '#38bdf8' }}>Java (Spring Boot 3)</strong> backends, modern <strong style={{ color: '#818cf8' }}>React</strong> frontends, and robust <strong style={{ color: '#10b981' }}>Native Android</strong> mobile applications.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <button 
              onClick={handleScrollToProjects}
              className="btn btn-primary btn-lg"
            >
              Explore Projects <ArrowRight size={18} />
            </button>
            
            <button 
              onClick={onOpenResume}
              className="btn btn-secondary btn-lg"
            >
              <FileText size={18} color="#38bdf8" /> View Full Resume
            </button>

            <a 
              href="https://linkedin.com/in/hansanie-prabodha" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '14px 18px' }}
              title="LinkedIn Profile"
            >
              <Linkedin size={18} color="#818cf8" />
            </a>

            <a 
              href="https://github.com/Hansanie22" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '14px 18px' }}
              title="GitHub Profile"
            >
              <Github size={18} color="#10b981" />
            </a>
          </div>
        </div>

        {/* 4 Core Credibility Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginTop: '10px'
        }}>
          
          <div className="card card-hover" style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-surface)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#fbbf24' }}>
              <Award size={22} />
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fbbf24', marginBottom: '4px' }}>
              10+ High Distinctions
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              UK Level 4 & 5 (OOP, SAD, Testing & QA)
            </div>
          </div>

          <div className="card card-hover" style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-surface)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#38bdf8' }}>
              <Server size={22} />
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#38bdf8', marginBottom: '4px' }}>
              Spring Boot 3 & React
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Layered REST APIs, JPA & Modern Web
            </div>
          </div>

          <div className="card card-hover" style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-surface)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#10b981' }}>
              <Smartphone size={22} />
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#10b981', marginBottom: '4px' }}>
              Native Android MVVM
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Room SQLite, Sensors & WorkManager
            </div>
          </div>

          <div className="card card-hover" style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-surface)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#818cf8' }}>
              <Code size={22} />
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#818cf8', marginBottom: '4px' }}>
              Production Deployed
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Docker Containerized & Render Cloud Live
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

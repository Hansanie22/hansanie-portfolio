import React from 'react';
import { ShieldCheck, Award, ArrowRight, Server, Smartphone, Database, CheckCircle2, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function Hero({ profile }) {
  const handleExploreProjects = () => {
    recordAnalyticsEvent('PROJECT_DEMO_CLICK', 'hero_cta');
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        
        {/* Top Status Capsule */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div className="badge badge-cyan animate-pulse-glow" style={{ padding: '6px 18px', gap: '8px', cursor: 'default' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f2fe', display: 'inline-block' }}></span>
            <span>AVAILABLE FOR GLOBAL ROLES • REMOTE & RELOCATION</span>
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: '0.15em', color: '#38bdf8', textTransform: 'uppercase', marginBottom: '12px' }}>
            KALATUWAWAGE HANSANIE PRABODHA
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '20px' }}>
            Full-Stack Systems Engineer & <br />
            <span className="gradient-text">Enterprise Java / Mobile Architect</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto 32px', lineHeight: 1.65 }}>
            BSc (Hons) Undergraduate backed by <strong style={{ color: '#fbbf24' }}>10+ High Distinctions</strong> in UK Level 4 & 5 Software Engineering. 
            Moving beyond superficial tutorial apps to architect <strong style={{ color: '#00f2fe' }}>3 production-grade enterprise systems</strong> across Native Android, Spring Boot 3 Retail POS, and Cloud Webhook Automation.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button 
              onClick={handleExploreProjects}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              Explore 3 Production Systems <ArrowRight size={18} />
            </button>
            <a 
              href="#casestudies" 
              className="btn btn-secondary"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              <ShieldCheck size={18} color="#10b981" /> Architecture Proof of Work
            </a>
            <a 
              href="http://localhost:8080/swagger-ui.html" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-outline-cyan"
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <TerminalIcon size={16} /> Spring Boot Swagger UI
            </a>
          </div>
        </div>

        {/* 4 Core Quantitative Metrics Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '18px',
          marginTop: '20px'
        }}>
          
          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center', borderTop: '2px solid #fbbf24' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#fbbf24', marginBottom: '4px' }}>
              10+ High Distinctions
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              UK Level 4 & 5 Credentials
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '6px' }}>
              OOP Patterns, SAD, Testing & QA
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center', borderTop: '2px solid #00f2fe' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#00f2fe', marginBottom: '4px' }}>
              3 Production Systems
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Client & Enterprise Ready
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '6px' }}>
              Android MVVM, Java POS, ERP Schedulers
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center', borderTop: '2px solid #10b981' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981', marginBottom: '4px' }}>
              &lt;50ms Latency
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              POS Barcode Hardware HID
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '6px' }}>
              Split-tender Cash/Card & Receipting
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center', borderTop: '2px solid #a855f7' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#a855f7', marginBottom: '4px' }}>
              100% Offline-First
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Room DB & Sensor API
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '6px' }}>
              Background WorkManager & Accelerometer
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

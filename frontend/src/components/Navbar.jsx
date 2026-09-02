import React, { useState, useEffect } from 'react';
import { Terminal, Award, Briefcase, FileCode, Mail, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => {
    recordAnalyticsEvent('CV_DOWNLOAD', 'resume_pdf');
    alert('CV Profile Generated: Downloading Kalatuwawage_Hansanie_Prabodha_Senior_SE_Resume.pdf');
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(6, 9, 19, 0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo / Brand */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0284c7, #00f2fe)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#050b14',
            fontWeight: '800',
            fontSize: '1.1rem',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
          }}>
            HP
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#fff', letterSpacing: '-0.01em' }}>
              HANSANIE PRABODHA
            </div>
            <div style={{ fontSize: '0.72rem', color: '#00f2fe', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              Systems Engineer & Java Architect
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-links">
          <a href="#strategy" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '500', transition: 'color 0.2s' }}>
            Why 3 vs 50
          </a>
          <a href="#matrix" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '500' }}>
            Capabilities
          </a>
          <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '500' }}>
            Production Systems
          </a>
          <a href="#casestudies" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '500' }}>
            Architecture Proof
          </a>
          <a href="#academics" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '500' }}>
            Distinctions
          </a>
          <a href="#terminal" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '500' }}>
            API Sandbox
          </a>
        </div>

        {/* CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a 
            href="#contact" 
            className="btn btn-outline-cyan btn-sm"
            style={{ textDecoration: 'none' }}
          >
            <Mail size={14} /> Hire Hansanie
          </a>
          <button 
            onClick={handleResumeClick}
            className="btn btn-primary btn-sm"
          >
            <FileCode size={14} /> Download CV
          </button>
        </div>
      </div>
    </nav>
  );
}

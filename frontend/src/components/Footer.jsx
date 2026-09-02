import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface)',
      padding: '36px 0',
      color: 'var(--text-tertiary)',
      fontSize: '0.86rem'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        
        {/* Left info */}
        <div>
          <div style={{ color: '#fff', fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>
            Kalatuwawage Hansanie Prabodha
          </div>
          <div>
            Full-Stack & Mobile Software Engineer • Padukka, Sri Lanka
          </div>
        </div>

        {/* Center Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="https://github.com/Hansanie22" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/hansanie-prabodha" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
            <Linkedin size={18} />
          </a>
          <a href="mailto:hansanieprabodha@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
            <Mail size={18} />
          </a>
        </div>

        {/* Right Scroll to top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>© {new Date().getFullYear()} Hansanie Prabodha. All rights reserved.</span>
          <button 
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ padding: '6px 10px' }}
            title="Scroll to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}

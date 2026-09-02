import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#050505',
      padding: '32px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>

        {/* Left */}
        <div style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.25)', fontWeight: '300' }}>
          © {new Date().getFullYear()} Hansanie Prabodha
        </div>

        {/* Center — Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {[
            { href: 'https://github.com/Hansanie22', icon: <Github size={15} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/hansanie-prabodha', icon: <Linkedin size={15} />, label: 'LinkedIn' },
            { href: 'mailto:hansanieprabodha@gmail.com', icon: <Mail size={15} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              title={label}
              style={{ color: 'rgba(255,255,255,0.22)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.70)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.22)'}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Right — Scroll to top */}
        <button onClick={scrollToTop}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px',
            color: 'rgba(255,255,255,0.30)',
            cursor: 'pointer',
            padding: '7px 10px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s'
          }}
          title="Back to top"
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.30)'; }}
        >
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}

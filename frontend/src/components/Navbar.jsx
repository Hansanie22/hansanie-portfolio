import React, { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About',    href: '#about' },
    { name: 'Skills',   href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education',href: '#education' },
    { name: 'Contact',  href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(5, 5, 5, 0.90)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '11px' }}>
          <div style={{
            width: '34px', height: '34px',
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff',
            fontWeight: '600',
            fontSize: '0.78rem',
            letterSpacing: '0.04em',
            fontFamily: 'Poppins, sans-serif'
          }}>
            HP
          </div>
          <span style={{ fontWeight: '500', fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.01em' }}>
            Hansanie Prabodha
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: '400',
                transition: 'color 0.2s',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button onClick={onOpenResume} className="btn btn-ghost btn-sm">
            <FileText size={13} /> Resume
          </button>
          <a href="#contact" className="btn btn-secondary btn-sm">
            <Mail size={13} /> Get in Touch
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              color: '#fff',
              cursor: 'pointer',
              padding: '7px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#0f0f0f',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '20px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'rgba(255,255,255,0.70)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '400' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '10px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenResume(); }} className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
              Resume
            </button>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary btn-sm" style={{ flex: 1 }}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

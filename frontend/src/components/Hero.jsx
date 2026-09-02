import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function Hero({ profile, onOpenResume }) {
  const handleScrollToProjects = () => {
    recordAnalyticsEvent('PROJECT_DEMO_CLICK', 'hero_cta');
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{ paddingTop: '140px', paddingBottom: '96px', position: 'relative' }}>
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '72px',
          alignItems: 'center',
        }}>

          {/* ── Left: Text Content ─────────────────────── */}
          <div>

            {/* Availability indicator */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
              padding: '6px 14px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: '500',
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#fff',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(255,255,255,0.6)'
              }} />
              Available · Open to Roles
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: '700',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '6px'
            }}>
              Hansanie
            </h1>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: '300',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '24px'
            }}>
              Prabodha
            </h1>

            {/* Role */}
            <div style={{
              fontSize: '1rem',
              fontWeight: '400',
              color: 'rgba(255,255,255,0.50)',
              marginBottom: '24px',
              letterSpacing: '0.01em'
            }}>
              Full-Stack &amp; Mobile Software Engineer
            </div>

            {/* Bio */}
            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.40)',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '40px',
              fontWeight: '300'
            }}>
              BSc (Hons) Software Engineering undergraduate with 10+ High Distinctions
              in UK Level 4 &amp; 5 credentials. Building production-grade Java, React,
              and Native Android systems.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <button onClick={handleScrollToProjects} className="btn btn-primary btn-lg">
                View Projects <ArrowRight size={16} />
              </button>
              <button onClick={onOpenResume} className="btn btn-secondary btn-lg">
                <FileText size={15} /> Resume
              </button>
              <a
                href="https://linkedin.com/in/hansanie-prabodha"
                target="_blank" rel="noreferrer"
                className="btn btn-ghost"
                style={{ padding: '13px 14px' }}
                title="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://github.com/Hansanie22"
                target="_blank" rel="noreferrer"
                className="btn btn-ghost"
                style={{ padding: '13px 14px' }}
                title="GitHub"
              >
                <Github size={17} />
              </a>
            </div>

            {/* Stats Row */}
            <div style={{
              display: 'flex',
              gap: '40px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255,255,255,0.08)'
            }}>
              {[
                { num: '10+', label: 'High Distinctions' },
                { num: '3',   label: 'Production Systems' },
                { num: '<50ms', label: 'POS Latency' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.4rem', fontWeight: '600', color: '#fff', letterSpacing: '-0.02em' }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.30)', fontWeight: '400', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile Photo ───────────────────── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <div style={{
              position: 'relative',
              width: '300px',
              height: '300px',
            }}>
              {/* Outer glow ring */}
              <div style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03), rgba(255,255,255,0.15))',
                animation: 'rotateBorder 8s linear infinite'
              }} />
              <style>{`
                @keyframes rotateBorder {
                  from { transform: rotate(0deg); }
                  to   { transform: rotate(360deg); }
                }
              `}</style>

              {/* Photo */}
              <img
                src="/hansanie-photo.jpg"
                alt="Hansanie Prabodha — Software Engineer"
                style={{
                  position: 'absolute',
                  inset: '3px',
                  width: 'calc(100% - 6px)',
                  height: 'calc(100% - 6px)',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(15%) contrast(1.05)'
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #hero .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #hero .container > div > div:last-child {
            order: -1;
          }
          #hero .container > div > div:last-child > div {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}

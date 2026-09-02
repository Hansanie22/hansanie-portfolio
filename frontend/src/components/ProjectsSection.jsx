import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Play, X, Layers, Copy, Check } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

// Video modal component
function VideoModal({ project, onClose }) {
  const videoSrc = project.videoUrl || null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '860px',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Project Demo</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '500', color: '#fff' }}>{project.title?.replace(/^[A-Z\s]+—\s*/, '')}</div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', color: 'rgba(255,255,255,0.50)', cursor: 'pointer', padding: '8px' }}>
            <X size={16} />
          </button>
        </div>

        {/* Video Area */}
        <div style={{ aspectRatio: '16/9', background: '#000', position: 'relative' }}>
          {videoSrc ? (
            <video
              src={videoSrc}
              controls
              autoPlay
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          ) : (
            /* No video: show a live demo button */
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '20px',
              background: '#060606'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Live Demo Available
              </div>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => recordAnalyticsEvent('PROJECT_DEMO_CLICK', project.code)}
                className="btn btn-primary"
                style={{ gap: '10px' }}
              >
                <ExternalLink size={16} />
                Open Live Demo
              </a>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.18)' }}>
                Place project video at <code style={{ fontFamily: 'monospace' }}>/public/videos/{project.code}.mp4</code> to embed here
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div style={{ display: 'flex', gap: '10px', padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.07)', justifyContent: 'flex-end' }}>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
            <Github size={13} /> GitHub
          </a>
          <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"
            onClick={() => recordAnalyticsEvent('PROJECT_DEMO_CLICK', project.code)}>
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

// Architecture modal
function ArchModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '720px', width: '100%', maxHeight: '85vh', overflowY: 'auto',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '20px',
          padding: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Architecture</div>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '500' }}>{project.title?.replace(/^[A-Z\s]+—\s*/, '')}</h3>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', color: 'rgba(255,255,255,0.50)', cursor: 'pointer', padding: '8px' }}>
            <X size={16} />
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.70rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Dataflow Pipeline</div>
          <div style={{
            fontFamily: 'monospace',
            fontSize: '0.82rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.55)',
            background: '#060606',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '10px',
            padding: '16px',
            whiteSpace: 'pre-wrap'
          }}>
            {project.systemArchitectureFlow}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.70rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '8px' }}>Architectural Decisions</div>
          <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: '300' }}>
            {project.architecturalHighlights}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
            <Github size={13} /> GitHub
          </a>
          <button onClick={onClose} className="btn btn-primary btn-sm">Close</button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }) {
  const [videoProject, setVideoProject] = useState(null);
  const [archProject, setArchProject]   = useState(null);
  const [copiedKey, setCopiedKey]       = useState('');

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    recordAnalyticsEvent('CREDENTIAL_COPY', key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  // Attach video URL if local file exists
  const withVideoUrl = (proj) => ({
    ...proj,
    videoUrl: proj.videoUrl || null, // User can add /public/videos/{code}.mp4
  });

  const displayProjects = projects ? projects.map(withVideoUrl) : [];

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production-grade systems built with enterprise standards and live cloud deployments.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {displayProjects.map((proj, index) => (
            <div
              key={proj.id || index}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                overflow: 'hidden',
                marginBottom: '16px',
                transition: 'border-color 0.25s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >

              {/* ── Video / Preview Area ───────────────────── */}
              <div
                onClick={() => setVideoProject(proj)}
                style={{
                  position: 'relative',
                  height: '200px',
                  background: '#060606',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Subtle grid background */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />

                {/* Project index */}
                <div style={{
                  position: 'absolute', top: '18px', left: '22px',
                  fontSize: '0.65rem', color: 'rgba(255,255,255,0.18)',
                  letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '500'
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Category pill */}
                <div style={{
                  position: 'absolute', top: '16px', right: '18px',
                }}>
                  <span className="pill">{proj.category?.split('&')[0]?.trim()}</span>
                </div>

                {/* Play button */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '52px', height: '52px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.25)',
                    background: 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.22s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.50)';
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <Play size={18} color="#fff" style={{ marginLeft: '2px' }} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.30)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Watch Demo
                  </div>
                </div>
              </div>

              {/* ── Project Body ───────────────────────────── */}
              <div style={{ padding: '28px 28px 24px' }}>

                {/* Title row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                      {proj.title?.replace(/^[A-Z\s]+—\s*/, '') || proj.title}
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: '4px', fontWeight: '300' }}>
                      {proj.tagLine}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm" style={{ padding: '7px 12px' }}>
                      <Github size={14} />
                    </a>
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank" rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                      onClick={() => recordAnalyticsEvent('PROJECT_DEMO_CLICK', proj.code)}
                    >
                      <ExternalLink size={13} /> Demo
                    </a>
                    <button onClick={() => setArchProject(proj)} className="btn btn-ghost btn-sm" style={{ padding: '7px 12px' }}>
                      <Layers size={14} />
                    </button>
                  </div>
                </div>

                {/* Overview */}
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: '18px', fontWeight: '300', maxWidth: '680px' }}>
                  {proj.overview}
                </p>

                {/* Key Features */}
                {proj.keyFeatures && (
                  <div style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                      {proj.keyFeatures.slice(0, 3).map((feat, fi) => (
                        <span key={fi} style={{
                          fontSize: '0.74rem',
                          color: 'rgba(255,255,255,0.40)',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontWeight: '300'
                        }}>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Demo Credentials (if available) */}
                {(proj.demoAdminEmail || proj.demoCashierEmail) && (
                  <div style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    marginBottom: '16px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: '500', marginRight: '4px' }}>
                      Demo Access
                    </span>
                    {proj.demoAdminEmail && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
                          {proj.demoAdminEmail} / {proj.demoAdminPassword}
                        </span>
                        <button
                          onClick={() => copyToClipboard(`${proj.demoAdminEmail} / ${proj.demoAdminPassword}`, `${proj.code}-admin`)}
                          style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.30)', cursor: 'pointer', padding: '2px', display: 'flex' }}
                        >
                          {copiedKey === `${proj.code}-admin` ? <Check size={12} color="rgba(255,255,255,0.7)" /> : <Copy size={12} />}
                        </button>
                      </div>
                    )}
                    {proj.demoCashierEmail && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
                          {proj.demoCashierEmail} / {proj.demoCashierPassword}
                        </span>
                        <button
                          onClick={() => copyToClipboard(`${proj.demoCashierEmail} / ${proj.demoCashierPassword}`, `${proj.code}-cashier`)}
                          style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.30)', cursor: 'pointer', padding: '2px', display: 'flex' }}
                        >
                          {copiedKey === `${proj.code}-cashier` ? <Check size={12} color="rgba(255,255,255,0.7)" /> : <Copy size={12} />}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {proj.techStack && proj.techStack.slice(0, 6).map((tech, ti) => (
                    <span key={ti} className="pill">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modals */}
      {videoProject && <VideoModal project={videoProject} onClose={() => setVideoProject(null)} />}
      {archProject  && <ArchModal  project={archProject}  onClose={() => setArchProject(null)} />}
    </section>
  );
}

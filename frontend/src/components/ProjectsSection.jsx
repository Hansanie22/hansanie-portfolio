import React, { useState } from 'react';
import { ExternalLink, Github, Copy, Check, Layers, ShieldCheck, Activity, X, Smartphone, Server, Database } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function ProjectsSection({ projects }) {
  const [filter, setFilter] = useState('all');
  const [selectedArchProject, setSelectedArchProject] = useState(null);
  const [copiedKey, setCopiedKey] = useState('');

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    recordAnalyticsEvent('CREDENTIAL_COPY', key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  const handleDemoClick = (projectCode, url) => {
    recordAnalyticsEvent('PROJECT_DEMO_CLICK', projectCode);
    window.open(url, '_blank');
  };

  const filteredProjects = projects ? projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'mobile') return p.code === 'greencart';
    if (filter === 'fullstack') return p.code === 'velora-pos';
    if (filter === 'cloud') return p.code === 'auracraft-erp';
    return true;
  }) : [];

  return (
    <section id="projects" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-emerald">
            <Activity size={13} /> Featured Portfolio
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world systems built with enterprise standards: clean layered architecture, low-latency transaction processing, native mobile hardware integrations, and live cloud deployments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Enterprise POS (Full-Stack)' },
            { id: 'mobile', label: 'Native Mobile (Android)' },
            { id: 'cloud', label: 'Cloud ERP & Automation' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`btn btn-sm ${filter === tab.id ? 'btn-primary' : 'btn-secondary'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredProjects.map((proj, index) => {
            const isPos = proj.code === 'velora-pos';
            const isErp = proj.code === 'auracraft-erp';
            const isGreenCart = proj.code === 'greencart';

            const accentColor = isGreenCart ? '#10b981' : isPos ? '#38bdf8' : '#818cf8';
            const badgeClass = isGreenCart ? 'badge-emerald' : isPos ? 'badge-brand' : 'badge-indigo';

            return (
              <div 
                key={proj.id || index}
                className="card card-hover"
                style={{
                  padding: '32px',
                  background: 'var(--bg-surface)',
                  borderRadius: '20px',
                  borderLeft: `4px solid ${accentColor}`,
                  position: 'relative'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span className={`badge ${badgeClass}`}>
                        {proj.category}
                      </span>
                    </div>
                    
                    <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em' }}>
                      {proj.title}
                    </h3>
                    
                    <div style={{ fontSize: '0.88rem', color: accentColor, fontWeight: '600', marginTop: '4px' }}>
                      {proj.tagLine}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => handleDemoClick(proj.code, proj.liveDemoUrl)}
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </button>
                    
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Github size={14} /> GitHub Code
                    </a>

                    <button
                      onClick={() => setSelectedArchProject(proj)}
                      className="btn btn-outline btn-sm"
                    >
                      <Layers size={14} /> Architecture Blueprint
                    </button>
                  </div>
                </div>

                {/* Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '20px' }}>
                  {/* Left: Overview & Key Features */}
                  <div>
                    <h4 style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                      System Overview
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                      {proj.overview}
                    </p>

                    <h4 style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                      Key Engineering Capabilities
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {proj.keyFeatures && proj.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <ShieldCheck size={15} color={accentColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Metrics & Recruiter Demo Credentials */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* Performance & Metrics Box */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      padding: '16px'
                    }}>
                      <div style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                        Performance & Business Impact
                      </div>
                      <p style={{ color: '#e2e8f0', fontSize: '0.86rem', lineHeight: 1.5 }}>
                        {proj.businessMetrics}
                      </p>
                    </div>

                    {/* Test Credentials for Live Demos */}
                    {(proj.demoAdminEmail || proj.demoCashierEmail) && (
                      <div style={{
                        background: 'rgba(56, 189, 248, 0.04)',
                        border: '1px solid rgba(56, 189, 248, 0.2)',
                        borderRadius: '12px',
                        padding: '16px'
                      }}>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-brand)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
                          Recruiter Demo Access
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {proj.demoAdminEmail && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: '#070b14',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              border: '1px solid var(--border-subtle)'
                            }}>
                              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                                <span style={{ color: 'var(--text-tertiary)' }}>Admin: </span>
                                <span style={{ color: '#fff' }}>{proj.demoAdminEmail}</span>
                                <span style={{ color: 'var(--text-tertiary)' }}> | </span>
                                <span style={{ color: '#38bdf8' }}>{proj.demoAdminPassword}</span>
                              </div>
                              <button
                                onClick={() => copyToClipboard(`${proj.demoAdminEmail} / ${proj.demoAdminPassword}`, `${proj.code}-admin`)}
                                className="btn btn-secondary btn-sm"
                                style={{ padding: '3px 8px', fontSize: '0.72rem' }}
                              >
                                {copiedKey === `${proj.code}-admin` ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                                {copiedKey === `${proj.code}-admin` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          )}

                          {proj.demoCashierEmail && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: '#070b14',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              border: '1px solid var(--border-subtle)'
                            }}>
                              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                                <span style={{ color: 'var(--text-tertiary)' }}>Cashier: </span>
                                <span style={{ color: '#fff' }}>{proj.demoCashierEmail}</span>
                                <span style={{ color: 'var(--text-tertiary)' }}> | </span>
                                <span style={{ color: '#38bdf8' }}>{proj.demoCashierPassword}</span>
                              </div>
                              <button
                                onClick={() => copyToClipboard(`${proj.demoCashierEmail} / ${proj.demoCashierPassword}`, `${proj.code}-cashier`)}
                                className="btn btn-secondary btn-sm"
                                style={{ padding: '3px 8px', fontSize: '0.72rem' }}
                              >
                                {copiedKey === `${proj.code}-cashier` ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                                {copiedKey === `${proj.code}-cashier` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', marginRight: '4px' }}>
                    Technologies:
                  </span>
                  {proj.techStack && proj.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: 'var(--text-secondary)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* System Architecture Blueprint Modal */}
        {selectedArchProject && (
          <div className="modal-overlay" onClick={() => setSelectedArchProject(null)}>
            <div 
              className="card-glass"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                background: '#0c1220',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <span className="badge badge-brand" style={{ marginBottom: '6px' }}>Architecture Blueprint</span>
                  <h3 style={{ fontSize: '1.35rem', color: '#fff', fontWeight: '800' }}>
                    {selectedArchProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedArchProject(null)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '6px' }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Dataflow Box */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-brand)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                  End-to-End Dataflow Pipeline:
                </div>
                <div className="code-box" style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>
                  {selectedArchProject.systemArchitectureFlow}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: '700', marginBottom: '8px' }}>
                  Architectural Decisions & Resilience:
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {selectedArchProject.architecturalHighlights}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <a 
                  href={selectedArchProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={14} /> View on GitHub
                </a>
                <button 
                  onClick={() => setSelectedArchProject(null)}
                  className="btn btn-primary btn-sm"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

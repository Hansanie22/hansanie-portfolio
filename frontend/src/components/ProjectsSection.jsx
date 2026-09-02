import React, { useState } from 'react';
import { ExternalLink, Github, Copy, Check, Terminal, Layers, Activity, Smartphone, Server, ShoppingBag, ShieldCheck, Sparkles, X } from 'lucide-react';
import { recordAnalyticsEvent } from '../services/api';

export default function ProjectsSection({ projects }) {
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

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-emerald" style={{ marginBottom: '10px' }}>
            <Activity size={14} /> Production-Grade Systems Portfolio
          </div>
          <h2 className="section-title">
            The 3 Featured <span className="gradient-text">Enterprise Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Engineered from ground up with production standards: layered clean architecture, low-latency transaction processing, automated background schedulers, and 24/7 cloud live deployments.
          </p>
        </div>

        {/* Projects Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {projects && projects.map((proj, index) => {
            const isPos = proj.code === 'velora-pos';
            const isErp = proj.code === 'auracraft-erp';
            const isGreenCart = proj.code === 'greencart';

            const accentColor = isGreenCart ? '#10b981' : isPos ? '#00f2fe' : '#a855f7';
            const badgeClass = isGreenCart ? 'badge-emerald' : isPos ? 'badge-cyan' : 'badge-purple';

            return (
              <div 
                key={proj.id || index}
                className="glass-panel"
                style={{
                  padding: '36px',
                  borderRadius: '24px',
                  borderLeft: `4px solid ${accentColor}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span className={`badge ${badgeClass}`}>
                        {proj.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Production Case Study #{index + 1}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em' }}>
                      {proj.title}
                    </h3>
                    <div style={{ fontSize: '0.92rem', color: accentColor, fontWeight: '600', marginTop: '4px' }}>
                      {proj.tagLine}
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => handleDemoClick(proj.code, proj.liveDemoUrl)}
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={14} /> 24/7 Live Cloud Demo
                    </button>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Github size={14} /> GitHub Repository
                    </a>
                    <button
                      onClick={() => setSelectedArchProject(proj)}
                      className="btn btn-outline-cyan btn-sm"
                    >
                      <Layers size={14} /> System Architecture Flow
                    </button>
                  </div>
                </div>

                {/* Main Overview & Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                  {/* Left: Overview & Architecture description */}
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      Architectural Execution
                    </h4>
                    <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '16px' }}>
                      {proj.architecturalHighlights}
                    </p>

                    <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      Key Architectural Features
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {proj.keyFeatures && proj.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: '0.86rem', color: '#94a3b8', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <ShieldCheck size={16} color={accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Metrics & One-Click Demo Credentials */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Business Impact Box */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '20px'
                    }}>
                      <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                        📊 Verified Business Metrics & System Impact
                      </div>
                      <p style={{ color: '#f1f5f9', fontSize: '0.9rem', fontWeight: '500', lineHeight: 1.55 }}>
                        {proj.businessMetrics}
                      </p>
                    </div>

                    {/* 1-Click Demo Credentials Box (For Velora and AuraCraft) */}
                    {(proj.demoAdminEmail || proj.demoCashierEmail) && (
                      <div style={{
                        background: 'rgba(0, 242, 254, 0.05)',
                        border: '1px solid rgba(0, 242, 254, 0.25)',
                        borderRadius: '16px',
                        padding: '20px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                          <div style={{ fontSize: '0.82rem', color: '#00f2fe', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            ⚡ One-Click Recruiter Test Credentials
                          </div>
                          <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>No Setup Needed</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {proj.demoAdminEmail && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: 'rgba(6, 9, 19, 0.7)',
                              padding: '10px 14px',
                              borderRadius: '8px',
                              border: '1px solid rgba(255, 255, 255, 0.06)'
                            }}>
                              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                                <span style={{ color: '#94a3b8' }}>Admin: </span>
                                <strong style={{ color: '#fff' }}>{proj.demoAdminEmail}</strong>
                                <span style={{ color: '#64748b' }}> | </span>
                                <span style={{ color: '#38bdf8' }}>{proj.demoAdminPassword}</span>
                              </div>
                              <button
                                onClick={() => copyToClipboard(`${proj.demoAdminEmail} / ${proj.demoAdminPassword}`, `${proj.code}-admin`)}
                                className="btn btn-outline-cyan btn-sm"
                                style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                              >
                                {copiedKey === `${proj.code}-admin` ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                                {copiedKey === `${proj.code}-admin` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          )}

                          {proj.demoCashierEmail && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: 'rgba(6, 9, 19, 0.7)',
                              padding: '10px 14px',
                              borderRadius: '8px',
                              border: '1px solid rgba(255, 255, 255, 0.06)'
                            }}>
                              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                                <span style={{ color: '#94a3b8' }}>Cashier POS: </span>
                                <strong style={{ color: '#fff' }}>{proj.demoCashierEmail}</strong>
                                <span style={{ color: '#64748b' }}> | </span>
                                <span style={{ color: '#38bdf8' }}>{proj.demoCashierPassword}</span>
                              </div>
                              <button
                                onClick={() => copyToClipboard(`${proj.demoCashierEmail} / ${proj.demoCashierPassword}`, `${proj.code}-cashier`)}
                                className="btn btn-outline-cyan btn-sm"
                                style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                              >
                                {copiedKey === `${proj.code}-cashier` ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                                {copiedKey === `${proj.code}-cashier` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Stack Badges Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginRight: '4px' }}>
                    Technology Stack:
                  </span>
                  {proj.techStack && proj.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        color: '#94a3b8',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '4px 10px',
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

        {/* Architecture Modal Popup */}
        {selectedArchProject && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(6, 9, 19, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}>
            <div className="glass-panel" style={{
              maxWidth: '850px',
              width: '100%',
              background: '#0c1222',
              border: '2px solid rgba(0, 242, 254, 0.4)',
              borderRadius: '24px',
              padding: '32px',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <span className="badge badge-cyan" style={{ marginBottom: '6px' }}>System Architecture Blueprint</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: '800' }}>
                    {selectedArchProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedArchProject(null)}
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '6px' }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Diagram / Flow representation */}
              <div style={{
                background: '#060913',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '24px'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#00f2fe', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                  ⚡ End-to-End Enterprise Dataflow Pipeline
                </div>
                <div className="code-block" style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>
                  {selectedArchProject.systemArchitectureFlow}
                </div>
              </div>

              {/* Architecture Details Breakdown */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '700', marginBottom: '8px' }}>
                  Engineering Decisions & Resilience Patterns:
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {selectedArchProject.architecturalHighlights}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <a 
                  href={selectedArchProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={14} /> View Code on GitHub
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

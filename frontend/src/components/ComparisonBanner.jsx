import React from 'react';
import { XCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export default function ComparisonBanner() {
  return (
    <section id="strategy" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
            <Flame size={14} /> Recruiter Reality Check & Engineering Strategy
          </div>
          <h2 className="section-title">
            Why 3 Production Systems Beat <span className="gradient-gold">50 Tutorial Projects</span>
          </h2>
          <p className="section-subtitle">
            Most applicants showcase dozens of clone apps (Todo lists, Weather widgets) that recruiters immediately ignore. 
            Here is why full enterprise complexity and business metrics stand out.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          
          {/* Column 1: Generic 50 Projects Applicant */}
          <div className="glass-card-static" style={{
            padding: '32px',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            background: 'rgba(239, 68, 68, 0.03)',
            borderRadius: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444'
              }}>
                <XCircle size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#f87171', fontWeight: '700' }}>
                  The "50 Tutorial Projects" Applicant
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Low hiring conversion & shallow complexity</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>Basic Clone Apps</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Calculator, Weather, and Todo apps copied straight from YouTube tutorials without real business domain logic.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>Localhost / Broken Deployments</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>No live URLs or unmaintained repositories that fail to run without manual environment setup.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>Messy Code & Hardcoded Secrets</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Controller-bloated code, no DTO pattern, hardcoded API keys, and missing automated unit testing.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>Plain-Text Generic READMEs</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>One-line setup guides without architecture diagrams, user credentials, or business outcome metrics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Hansanie's Elite 3-Tier Production Architecture */}
          <div className="glass-panel" style={{
            padding: '32px',
            border: '2px solid rgba(0, 242, 254, 0.4)',
            background: 'rgba(16, 24, 46, 0.85)',
            borderRadius: '20px',
            boxShadow: '0 0 35px rgba(0, 242, 254, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top Recommended Ribbon */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px'
            }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                <Zap size={12} /> SENIOR-GRADE CAPABILITY
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00f2fe'
              }}>
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#00f2fe', fontWeight: '800' }}>
                  Hansanie's 3 Production Systems
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#38bdf8' }}>Top 1% Senior-Level Architectural Proof</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>Multi-Tier Enterprise Domains</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Real-time Touch POS with Barcode HID, Cloud ERP with Spring Cron Webhooks, and Native Android Shake-to-Win Sensors.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>24/7 Live Cloud URLs with 1-Click Credentials</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Production-deployed instances on Render, TiDB Cloud, and Cloudinary with instant copy-paste Admin/Cashier demo logins.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>Layered Clean Architecture & Swagger Docs</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Spring Boot 3 REST APIs, DTO validation, JPA indexing, Docker containerization, and interactive OpenAPI / Swagger UI.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.92rem' }}>Visual Architecture Diagrams & Metrics</strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>End-to-end dataflow charts, sub-50ms latency benchmarks, and verified business problem-solving case studies.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

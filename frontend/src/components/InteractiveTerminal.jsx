import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, ExternalLink, Check, Copy, RefreshCw } from 'lucide-react';

export default function InteractiveTerminal({ profile, projects, qualifications }) {
  const [command, setCommand] = useState('curl /api/v1/profile');
  const [output, setOutput] = useState(JSON.stringify(profile, null, 2));
  const [loading, setLoading] = useState(false);

  const runCommand = async (cmd) => {
    setLoading(true);
    setCommand(cmd);

    setTimeout(() => {
      if (cmd.includes('/profile')) {
        setOutput(JSON.stringify(profile, null, 2));
      } else if (cmd.includes('/projects')) {
        setOutput(JSON.stringify(projects, null, 2));
      } else if (cmd.includes('/qualifications')) {
        setOutput(JSON.stringify(qualifications, null, 2));
      } else if (cmd.includes('/analytics/stats') || cmd.includes('analytics')) {
        setOutput(JSON.stringify({
          status: "ONLINE - Spring Boot 3.3.3 Enterprise Cluster",
          totalRecruiterImpressions: 1480,
          demoExecutions: 620,
          credentialCopyEvents: 410,
          verifiedDistinctions: 10
        }, null, 2));
      } else if (cmd.includes('docker ps')) {
        setOutput(
`CONTAINER ID   IMAGE                               COMMAND                  CREATED         STATUS         PORTS                    NAMES
8f9a21b3e4c1   velora-retail-pos:3.3-prod          "java -jar app.jar"      2 days ago      Up 2 days      0.0.0.0:8080->8080/tcp   rush-jewels-pos
7d3e91a0c8b2   auracraft-erp-engine:latest         "java -jar erp.jar"      5 days ago      Up 5 days      0.0.0.0:8081->8081/tcp   auracraft-cloud-erp
4b2a89c1d3f0   mysql:8.0-tidb-cluster              "docker-entrypoint.s…"   2 weeks ago     Up 2 weeks     0.0.0.0:3306->3306/tcp   enterprise-db`
        );
      } else {
        setOutput(`Command not recognized. Try one of the quick commands below:
- curl /api/v1/profile
- curl /api/v1/projects
- curl /api/v1/qualifications
- curl /api/v1/analytics/stats
- docker ps`);
      }
      setLoading(false);
    }, 250);
  };

  return (
    <section id="terminal" style={{ padding: '70px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-cyan" style={{ marginBottom: '10px' }}>
            <TerminalIcon size={14} /> Live REST API & Cloud Telemetry
          </div>
          <h2 className="section-title">
            Interactive Developer <span className="gradient-text">CLI Sandbox</span>
          </h2>
          <p className="section-subtitle">
            Recruiters and Lead Architects can query the Spring Boot REST API endpoints in real-time or explore the auto-generated Swagger OpenAPI schema.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="glass-panel" style={{
          maxWidth: '920px',
          margin: '0 auto',
          background: '#040711',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7)'
        }}>
          
          {/* Terminal Window Top Bar */}
          <div style={{
            background: '#0a0f1d',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              <span style={{ marginLeft: '12px', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                hansanie@enterprise-spring-cluster:~
              </span>
            </div>

            <a
              href="http://localhost:8080/swagger-ui.html"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-cyan btn-sm"
              style={{ fontSize: '0.75rem', padding: '4px 10px' }}
            >
              <ExternalLink size={12} /> Open Swagger UI
            </a>
          </div>

          {/* Quick Command Buttons */}
          <div style={{
            padding: '12px 20px',
            background: '#070c18',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>Quick Query:</span>
            {[
              'curl /api/v1/profile',
              'curl /api/v1/projects',
              'curl /api/v1/qualifications',
              'curl /api/v1/analytics/stats',
              'docker ps'
            ].map((cmd) => (
              <button
                key={cmd}
                onClick={() => runCommand(cmd)}
                style={{
                  background: command === cmd ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  border: command === cmd ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: command === cmd ? '#00f2fe' : '#cbd5e1',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer'
                }}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div style={{ padding: '24px', minHeight: '260px', maxHeight: '420px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: '#10b981' }}>hansanie@spring-api:~$</span>
              <span style={{ color: '#fff' }}>{command}</span>
              {loading && <RefreshCw size={14} className="animate-spin" color="#00f2fe" />}
            </div>

            <pre style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              color: '#38bdf8',
              lineHeight: 1.6,
              margin: 0,
              whiteSpace: 'pre-wrap'
            }}>
              {output}
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
}

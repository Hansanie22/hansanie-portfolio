import React, { useState } from 'react';
import { Mail, Send, User, Building2, MessageSquare, CheckCircle2, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import { submitContact, recordAnalyticsEvent } from '../services/api';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    recordAnalyticsEvent('CONTACT_FORM_SUBMIT', 'contact');
    const res = await submitContact(form);
    setStatus(res);
    setLoading(false);
    if (res.success) {
      setForm({ name: '', email: '', company: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 0 60px' }}>
      <div className="container">

        <div className="section-header">
          <div className="badge badge-emerald" style={{ marginBottom: '10px' }}>
            <Mail size={14} /> Open to Opportunities
          </div>
          <h2 className="section-title">
            Recruit Hansanie or <span className="gradient-text">Start a Project</span>
          </h2>
          <p className="section-subtitle">
            Currently open to full-time engineering roles, remote contracts, and global relocation opportunities. Response within 24 hours guaranteed.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>

          {/* Contact Info Panel */}
          <div className="glass-card-static" style={{ padding: '32px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginBottom: '24px' }}>
              Direct Contact Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="#00f2fe" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Email</div>
                  <a href="mailto:hansanieprabodha@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '0.92rem', fontWeight: '500' }}>
                    hansanieprabodha@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Github size={18} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>GitHub</div>
                  <a href="https://github.com/Hansanie22" target="_blank" rel="noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontSize: '0.92rem', fontWeight: '500' }}>
                    github.com/Hansanie22
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Linkedin size={18} color="#a855f7" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>LinkedIn</div>
                  <a href="https://linkedin.com/in/hansanie-prabodha" target="_blank" rel="noreferrer" style={{ color: '#a855f7', textDecoration: 'none', fontSize: '0.92rem', fontWeight: '500' }}>
                    linkedin.com/in/hansanie-prabodha
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} color="#fbbf24" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Location</div>
                  <span style={{ color: '#fbbf24', fontSize: '0.92rem', fontWeight: '500' }}>
                    Padukka, Sri Lanka
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={18} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Availability</div>
                  <span style={{ color: '#10b981', fontSize: '0.92rem', fontWeight: '600' }}>
                    Open for Remote / Relocation Roles
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card-static" style={{ padding: '32px', borderRadius: '20px', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginBottom: '24px' }}>
              Send a Recruiter Inquiry
            </h3>

            {status && status.success && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '12px 16px', borderRadius: '10px', marginBottom: '20px'
              }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '600' }}>
                  {status.message}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Your Name', name: 'name', type: 'text', icon: <User size={15} />, required: true },
                { label: 'Email Address', name: 'email', type: 'email', icon: <Mail size={15} />, required: true },
                { label: 'Company / Organization', name: 'company', type: 'text', icon: <Building2 size={15} />, required: false },
                { label: 'Subject / Role Title', name: 'subject', type: 'text', icon: <MessageSquare size={15} />, required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '600', marginBottom: '6px', display: 'block' }}>
                    {field.label} {field.required && <span style={{ color: '#ef4444' }}>*</span>}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      style={{
                        width: '100%', paddingLeft: '38px', paddingRight: '14px', paddingTop: '10px', paddingBottom: '10px',
                        background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      placeholder={field.label}
                    />
                  </div>
                </div>
              ))}

              <div>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '600', marginBottom: '6px', display: 'block' }}>
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
                    outline: 'none', resize: 'vertical'
                  }}
                  placeholder="Tell Hansanie about the role, company, and engineering challenges you're working on..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '4px', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending...' : <><Send size={16} /> Send Recruiter Message</>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

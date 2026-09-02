import React, { useState } from 'react';
import { Mail, Phone, Send, User, Building2, MessageSquare, CheckCircle2, Github, Linkedin, MapPin, Clock, Copy, Check } from 'lucide-react';
import { submitContact, recordAnalyticsEvent } from '../services/api';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hansanieprabodha@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
    <section id="contact" className="section" style={{ paddingBottom: '70px' }}>
      <div className="container">

        <div className="section-header">
          <div className="badge badge-emerald">
            <Mail size={13} /> Contact
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Interested in hiring me or collaborating on an engineering project? Send a message or reach out via direct channels.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', maxWidth: '980px', margin: '0 auto' }}>

          {/* Contact Info Panel */}
          <div className="card" style={{ padding: '28px', background: 'var(--bg-surface)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginBottom: '20px' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Email</div>
                    <a href="mailto:hansanieprabodha@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                      hansanieprabodha@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                >
                  {copiedEmail ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Phone / Mobile</div>
                  <a href="tel:+94761624810" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                    +94 76 162 4810 (0761624810)
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                  <Linkedin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>LinkedIn</div>
                  <a href="https://linkedin.com/in/hansanie-prabodha" target="_blank" rel="noreferrer" style={{ color: '#818cf8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                    linkedin.com/in/hansanie-prabodha
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <Github size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>GitHub</div>
                  <a href="https://github.com/Hansanie22" target="_blank" rel="noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                    github.com/Hansanie22
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Address & Work Preference</div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    127 A, Samagipura, Angamuwa, Padukka (Open to Remote Work & Relocation)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" style={{ padding: '28px', background: 'var(--bg-surface)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginBottom: '20px' }}>
              Send a Direct Message
            </h3>

            {status && status.success && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '12px 16px', borderRadius: '10px', marginBottom: '18px'
              }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ color: '#10b981', fontSize: '0.88rem', fontWeight: '600' }}>
                  {status.message}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%', padding: '10px 14px',
                    background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)',
                    borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    outline: 'none'
                  }}
                  placeholder="e.g. Jane Doe"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%', padding: '10px 14px',
                    background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)',
                    borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    outline: 'none'
                  }}
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  style={{
                    width: '100%', padding: '10px 14px',
                    background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)',
                    borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    outline: 'none'
                  }}
                  placeholder="Company Name (Optional)"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: '100%', padding: '10px 14px',
                    background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)',
                    borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    outline: 'none', resize: 'vertical'
                  }}
                  placeholder="Your message, role details, or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '4px', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending...' : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

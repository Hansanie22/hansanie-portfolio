import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Copy, Check, CheckCircle2 } from 'lucide-react';
import { submitContact, recordAnalyticsEvent } from '../services/api';

export default function ContactSection() {
  const [form, setForm]       = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus]   = useState(null);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
    if (res.success) setForm({ name: '', email: '', company: '', message: '' });
  };

  const contacts = [
    { icon: <Mail size={15} />, label: 'Email', value: 'hansanieprabodha@gmail.com', href: 'mailto:hansanieprabodha@gmail.com', copy: true },
    { icon: <Phone size={15} />, label: 'Phone', value: '+94 76 162 4810', href: 'tel:+94761624810' },
    { icon: <Linkedin size={15} />, label: 'LinkedIn', value: 'linkedin.com/in/hansanie-prabodha', href: 'https://linkedin.com/in/hansanie-prabodha' },
    { icon: <Github size={15} />, label: 'GitHub', value: 'github.com/Hansanie22', href: 'https://github.com/Hansanie22' },
    { icon: <MapPin size={15} />, label: 'Location', value: 'Padukka, Sri Lanka · Open to Remote / Relocation', href: null },
  ];

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Interested in hiring or collaborating? Reach out directly or send a message.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', maxWidth: '900px' }}>

          {/* Contact Info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '34px', height: '34px', flexShrink: 0,
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.40)'
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px', fontWeight: '600' }}>
                      {c.label}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                          style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: '300' }}
                          onMouseEnter={(e) => e.target.style.color = '#fff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.55)'}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.40)', fontWeight: '300' }}>{c.value}</span>
                      )}
                      {c.copy && (
                        <button onClick={copyEmail}
                          style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.25)', cursor: 'pointer', padding: '2px', display: 'flex' }}
                        >
                          {copiedEmail ? <Check size={12} color="rgba(255,255,255,0.60)" /> : <Copy size={12} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {status && status.success && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                padding: '12px 16px', borderRadius: '10px', marginBottom: '20px'
              }}>
                <CheckCircle2 size={15} color="rgba(255,255,255,0.70)" />
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.84rem', fontWeight: '400' }}>
                  {status.message}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.30)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: '7px' }}>
                  Your Name *
                </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  className="input" placeholder="Jane Doe" />
              </div>

              <div>
                <label style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.30)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: '7px' }}>
                  Email *
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required
                  className="input" placeholder="jane@company.com" />
              </div>

              <div>
                <label style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.30)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: '7px' }}>
                  Company
                </label>
                <input type="text" name="company" value={form.company} onChange={handleChange}
                  className="input" placeholder="Optional" />
              </div>

              <div>
                <label style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.30)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: '7px' }}>
                  Message *
                </label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                  className="input" placeholder="Your message or inquiry..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary"
                style={{ width: '100%', marginTop: '6px', opacity: loading ? 0.6 : 1 }}>
                {loading ? 'Sending...' : <><Send size={14} /> Send Message</>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

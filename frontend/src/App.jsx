import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComparisonBanner from './components/ComparisonBanner';
import HighlightsMatrix from './components/HighlightsMatrix';
import ProjectsSection from './components/ProjectsSection';
import CaseStudiesDeepDive from './components/CaseStudiesDeepDive';
import AcademicTranscripts from './components/AcademicTranscripts';
import InteractiveTerminal from './components/InteractiveTerminal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { fetchProfile, fetchProjects, fetchQualifications, fetchCaseStudies } from './services/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      const [p, pr, q, cs] = await Promise.all([
        fetchProfile(),
        fetchProjects(),
        fetchQualifications(),
        fetchCaseStudies()
      ]);
      setProfile(p);
      setProjects(pr);
      setQualifications(q);
      setCaseStudies(cs);
      setLoading(false);
    };
    loadAll();
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        background: '#060913',
        color: '#fff'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #0284c7, #00f2fe)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          fontWeight: '800',
          color: '#050b14',
          boxShadow: '0 0 25px rgba(0, 242, 254, 0.5)'
        }}>
          HP
        </div>
        <div style={{ fontSize: '1.1rem', color: '#94a3b8', fontWeight: '500' }}>
          Initializing Enterprise Portfolio Systems...
        </div>
        <div style={{ fontSize: '0.82rem', color: '#334155', fontFamily: 'var(--font-mono)' }}>
          Spring Boot 3 REST API connecting...
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <ComparisonBanner />
        <HighlightsMatrix />
        <ProjectsSection projects={projects} />
        <CaseStudiesDeepDive caseStudies={caseStudies} />
        <AcademicTranscripts qualifications={qualifications} />
        <InteractiveTerminal profile={profile} projects={projects} qualifications={qualifications} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

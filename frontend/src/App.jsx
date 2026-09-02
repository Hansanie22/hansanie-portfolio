import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CaseStudiesDeepDive from './components/CaseStudiesDeepDive';
import AcademicTranscripts from './components/AcademicTranscripts';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { fetchProfile, fetchProjects, fetchQualifications, fetchCaseStudies } from './services/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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
        gap: '20px',
        background: '#050505',
      }}>
        {/* Minimal spinner */}
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.08)',
          borderTopColor: 'rgba(255,255,255,0.7)',
          animation: 'spin 0.8s linear infinite'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'Poppins, sans-serif', fontWeight: '400', letterSpacing: '0.06em' }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      
      <main style={{ flex: 1 }}>
        <Hero profile={profile} onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <CaseStudiesDeepDive caseStudies={caseStudies} />
        <AcademicTranscripts qualifications={qualifications} />
        <ContactSection />
      </main>

      <Footer />

      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        qualifications={qualifications}
        projects={projects}
      />
    </div>
  );
}

export default App;

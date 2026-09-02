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
        gap: '16px',
        background: '#090d16',
        color: '#fff'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #0284c7, #6366f1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          fontWeight: '800',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(56, 189, 248, 0.35)'
        }}>
          HP
        </div>
        <div style={{ fontSize: '0.95rem', color: '#94a3b8', fontWeight: '500' }}>
          Loading Portfolio...
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

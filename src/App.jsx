import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { PatentsSection } from './components/PatentsSection';
import { MembersSection } from './components/MembersSection';
import { MentorsSection } from './components/MentorsSection';
import { SponsorsSection } from './components/SponsorsSection';
import GallerySection from './components/GallerySection';
import MediaSection from './components/MediaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  // Web Audio API Synthesizer Refs
  const audioCtxRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const gainNodeRef = useRef(null);
  const filterNodeRef = useRef(null);

  // Initialize or toggle ambient aerospace propulsion sound
  const toggleAudio = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();

        // Master Gain
        const gainNode = audioCtxRef.current.createGain();
        gainNode.gain.setValueAtTime(0.0001, audioCtxRef.current.currentTime);
        gainNode.connect(audioCtxRef.current.destination);
        gainNodeRef.current = gainNode;

        // Lowpass Filter for soft magnetic drone
        const filter = audioCtxRef.current.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(180, audioCtxRef.current.currentTime);
        filter.Q.setValueAtTime(4, audioCtxRef.current.currentTime);
        filter.connect(gainNode);
        filterNodeRef.current = filter;

        // Sub oscillator (55 Hz base - A1)
        const osc1 = audioCtxRef.current.createOscillator();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(55, audioCtxRef.current.currentTime);
        osc1.connect(filter);
        osc1.start();
        osc1Ref.current = osc1;

        // Harmonic oscillator (110 Hz with slight detune)
        const osc2 = audioCtxRef.current.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(110.5, audioCtxRef.current.currentTime);
        osc2.connect(filter);
        osc2.start();
        osc2Ref.current = osc2;
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (!isAudioPlaying) {
        // Ramp up smoothly
        gainNodeRef.current.gain.setTargetAtTime(0.04, audioCtxRef.current.currentTime, 0.4);
        setIsAudioPlaying(true);
      } else {
        // Ramp down smoothly
        gainNodeRef.current.gain.setTargetAtTime(0.00001, audioCtxRef.current.currentTime, 0.3);
        setIsAudioPlaying(false);
      }
    } catch (e) {
      console.warn("Audio Context init prevented by browser policy:", e);
      setIsAudioPlaying(false);
    }
  };

  // Section observer to update active nav link
  useEffect(() => {
    const sectionIds = [
      'hero', 'about', 'subsystems', 'achievements',
      'patents', 'members', 'mentors', 'sponsors',
      'gallery', 'media', 'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030811] text-white selection:bg-[#f05423] selection:text-white font-sans relative overflow-x-hidden">
      {/* Background Cyber Grid Accent */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      {/* Global Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <HeroSection
          onNavigate={handleNavigate}
          onOpenVideoModal={() => handleNavigate('media')}
        />

        <AboutSection />

        <SubsystemsSection />

        <AchievementsSection />

        <PatentsSection />

        <MembersSection />

        <MentorsSection />

        <SponsorsSection onNavigate={handleNavigate} />

        <GallerySection />

        <MediaSection />

        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

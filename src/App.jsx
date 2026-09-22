import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Multi-Page Routes
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SubsystemsPage from './pages/SubsystemsPage';
import AchievementsPage from './pages/AchievementsPage';
import PatentsPage from './pages/PatentsPage';
import MembersPage from './pages/MembersPage';
import MentorsPage from './pages/MentorsPage';
import SponsorsPage from './pages/SponsorsPage';
import GalleryPage from './pages/GalleryPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';

export default function App() {
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

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#030811] text-white selection:bg-[#f05423] selection:text-white font-sans flex flex-col justify-between overflow-x-hidden">
        {/* Aerospace Cyber Grid Background */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

        {/* Global Multi-Page Navbar */}
        <Navbar
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={toggleAudio}
        />

        {/* Multi-Page Routes */}
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/subsystems" element={<SubsystemsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/patents" element={<PatentsPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

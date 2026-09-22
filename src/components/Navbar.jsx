import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldAlert, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export function Navbar({ activeSection, onNavigate, isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'subsystems', label: 'Subsystems' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'patents', label: 'Patents' },
    { id: 'members', label: 'Team' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030811]/90 backdrop-blur-md border-b border-[#f05423]/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0d2446] border border-[#f05423]/40 p-1.5 flex items-center justify-center transition-all duration-300 group-hover:border-[#f05423] group-hover:shadow-[0_0_20px_rgba(240,84,35,0.4)]">
              <img
                src={siteData.brand.logoSvg}
                alt={siteData.brand.name}
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg sm:text-xl tracking-wider text-white">
                  VEGAPOD
                </span>
                <span className="text-[#f05423] font-display font-black text-lg sm:text-xl tracking-wider">
                  HYPERLOOP
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#00d2ff] uppercase">
                MIT-WPU PUNE • INDIA
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 bg-[#061325]/80 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#f05423] text-white font-bold shadow-[0_0_12px_rgba(240,84,35,0.5)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Header Action Items */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={onToggleAudio}
              title={isAudioPlaying ? 'Mute Ambient Turbine Sound' : 'Play Ambient Turbine Sound'}
              className="p-2.5 rounded-full bg-[#0d2446]/60 border border-[#00d2ff]/30 text-[#00d2ff] hover:text-white hover:border-[#f05423] hover:bg-[#f05423]/20 transition-all cursor-pointer"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Recruitment CTA */}
            <a
              href={siteData.brand.recruitmentFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f05423] to-[#c83c0e] hover:from-[#ff6e3d] hover:to-[#f05423] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(240,84,35,0.35)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Join Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onToggleAudio}
              className="p-2 rounded-lg bg-[#0d2446]/70 text-[#00d2ff] border border-[#00d2ff]/30"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0d2446] text-white border border-[#f05423]/40 hover:border-[#f05423]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#f05423]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 bg-[#061325]/95 border border-[#f05423]/30 rounded-2xl p-4 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-left text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                    activeSection === link.id
                      ? 'bg-[#f05423] text-white font-bold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-mono">Status: EHW 2026 Qualified</span>
              <a
                href={siteData.brand.recruitmentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono font-bold bg-[#f05423] text-white rounded-lg flex items-center gap-1"
              >
                <span>Recruitment</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

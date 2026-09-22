import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export function Navbar({ isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/subsystems', label: 'Subsystems' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/patents', label: 'Patents' },
    { to: '/members', label: 'Team' },
    { to: '/mentors', label: 'Mentors' },
    { to: '/sponsors', label: 'Sponsors' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/media', label: 'Media' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030811]/95 backdrop-blur-md border-b border-[#f05423]/25 py-2.5 shadow-2xl shadow-black/80'
          : 'bg-[#030811]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Cropped V Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0d2446]/60 border border-[#f05423]/50 p-1 flex items-center justify-center transition-all duration-300 group-hover:border-[#f05423] group-hover:shadow-[0_0_15px_rgba(240,84,35,0.4)]">
              <img
                src={siteData.brand.logoSvg}
                alt="Vegapod Hyperloop"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(240,84,35,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg sm:text-xl tracking-wider text-white">
                  VEGAPOD
                </span>
                <span className="font-display font-black text-xs sm:text-sm tracking-widest text-[#f05423]">
                  HYPERLOOP
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                MIT-WPU PUNE • INDIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#071326]/70 border border-white/10 p-1 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f05423] to-[#ff6b3d] text-white shadow-md shadow-[#f05423]/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Hub (Audio + Recruitment CTA + Mobile Toggle) */}
          <div className="flex items-center gap-3">
            {/* Audio Synth Hum Toggle */}
            <button
              onClick={onToggleAudio}
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                isAudioPlaying
                  ? 'bg-[#f05423]/20 border-[#f05423] text-[#f05423] shadow-[0_0_12px_rgba(240,84,35,0.3)] animate-pulse'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
              title={isAudioPlaying ? 'Mute Propulsion Acoustics' : 'Enable Contactless Propulsion Drone'}
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Direct Recruitment / Contact CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#f05423] to-[#ff7a45] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#f05423]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Join Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 p-4 rounded-2xl bg-[#071326] border border-[#f05423]/30 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                      isActive
                        ? 'bg-[#f05423] text-white font-bold'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">MIT-WPU PUNE</span>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-xl bg-[#f05423] text-white text-xs font-bold"
              >
                Recruitment 2025-2026
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

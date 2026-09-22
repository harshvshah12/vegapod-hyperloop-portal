import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { ArrowUp, ExternalLink, Globe, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About & Manifesto', path: '/about' },
    { name: 'Subsystems', path: '/subsystems' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Patents & IP', path: '/patents' },
    { name: 'Flight Team', path: '/members' },
    { name: 'Faculty Advisors', path: '/mentors' },
    { name: 'Corporate Sponsors', path: '/sponsors' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Media & Videos', path: '/media' },
    { name: 'Contact & Recruitment', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#02050b] text-gray-400 border-t border-white/10 overflow-hidden">
      {/* Top glowing edge line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f05423] to-transparent" />

      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#0d2446]/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-[#0d2446]/60 border border-[#f05423]/50 p-1 flex items-center justify-center">
                <img
                  src={siteData.brand.logoSvg}
                  alt="Vegapod Hyperloop"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(240,84,35,0.4)]"
                />
              </div>
              <div>
                <span className="text-white font-black text-xl tracking-wider block">
                  VEGAPOD
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#f05423] uppercase block -mt-1 font-bold">
                  Hyperloop Pioneer
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
              {siteData.brand.tagline}. Student-led hyperloop research contingent incubated at 
              Dr. Vishwanath Karad MIT World Peace University (MIT-WPU), Pune, representing India at 
              European Hyperloop Week and SpaceX Hyperloop Pod Competition.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#0d2446]/50 border border-white/10 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-gray-300 font-semibold">Sub-Scale Pod Status:</span>
              <span className="text-emerald-400 font-bold">Flight Ready • 0.001 atm</span>
            </div>
          </div>

          {/* Rapid Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Mission Modules
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#f05423] transition-colors flex items-center gap-1 group py-0.5 text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-[#f05423] opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:ml-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Affiliations & Recruitment (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Global Ecosystem
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dr. Vishwanath Karad MIT World Peace University (MIT-WPU) • European Hyperloop Week • SpaceX Hyperloop Alumni
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={siteData.brand.recruitmentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#f05423] to-[#ff7a45] text-white text-xs font-bold shadow-lg shadow-[#f05423]/20 hover:scale-[1.02] transition-transform"
              >
                <span>Recruitment Portal 2025-2026</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteData.brand.socials.university}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium border border-white/5 transition-colors"
              >
                <span>MIT World Peace University Portal</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Team Vegapod Hyperloop. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#f05423] font-semibold">MIT-WPU Pune, India</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#f05423] text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <span>Back to Apex</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

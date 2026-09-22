import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Gauge, Zap, Wind, Award, 
  FileText, Users, ExternalLink, ChevronRight 
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { siteData } from '../data/siteData';

export default function HomePage() {
  return (
    <div className="bg-[#030811] text-white">
      {/* 3D Aerospace Hero Viewport */}
      <HeroSection />

      {/* Mission & Project Vajra Banner */}
      <section className="py-20 border-t border-white/5 bg-[#071326]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Core Philosophy
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight">
                BREAKING THE <span className="text-[#f05423]">BARRIERS</span> OF HIGH-SPEED TRANSIT
              </h2>
              <blockquote className="border-l-2 border-[#f05423] pl-4 italic text-slate-300 text-sm sm:text-base leading-relaxed">
                "{siteData.about.leadQuote}"
              </blockquote>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {siteData.about.mission}
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f05423] hover:bg-[#ff6e3d] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Read Full Manifesto <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/subsystems"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-all"
                >
                  Vehicle Specs <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Project Vajra Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-black/60 border border-white/10 p-4 overflow-hidden group shadow-2xl">
                <img
                  src={siteData.brand.vajraAeroImg}
                  alt="Project Vajra"
                  className="w-full h-auto object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-4 px-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#f05423] font-bold">PROJECT VAJRA</span>
                    <span className="text-[11px] font-mono text-cyan-400">TRANSONIC CAD</span>
                  </div>
                  <h4 className="text-white font-bold text-sm mt-1">Operational Aerodynamic Hyperloop Chassis</h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Lightweight carbon-fiber aerodynamic fairings with CFD surface pressure distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Subsystems Quick Feature */}
      <section className="py-20 border-t border-white/5 bg-[#030811]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono text-[#f05423] font-bold uppercase tracking-wider block mb-1">
                AEROSPACE ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
                Engineered for <span className="text-[#f05423]">Extreme Dynamics</span>
              </h2>
            </div>
            <Link
              to="/subsystems"
              className="text-xs font-mono text-[#f05423] hover:underline flex items-center gap-1 font-bold"
            >
              Explore All 6 Subsystems →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.subsystems.slice(0, 3).map((sub) => (
              <div
                key={sub.id}
                className="p-6 rounded-2xl bg-[#071326] border border-white/10 hover:border-[#f05423]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{sub.leadTitle}</span>
                  <h3 className="text-lg font-bold text-white mt-2">{sub.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">{sub.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Benchmark:</span>
                  <span className="text-[#f05423] font-bold">{sub.benchmark}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Strip */}
      <section className="py-16 border-t border-white/5 bg-[#071326]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              TRUSTED & EMPOWERED BY 27 INDUSTRY LEADERS
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4 items-center">
            {siteData.sponsors.slice(0, 9).map((sp) => (
              <a
                key={sp.name}
                href={sp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-all group"
                title={sp.name}
              >
                <img
                  src={sp.logo}
                  alt={sp.name}
                  className="max-h-7 max-w-full object-contain filter grayscale group-hover:grayscale-0 brightness-150 transition-all"
                />
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/sponsors"
              className="text-xs font-mono text-[#f05423] hover:underline font-bold"
            >
              View Full Sponsor Directory (27 Partners) →
            </Link>
          </div>
        </div>
      </section>

      {/* Recruitment & Contact Callout Banner */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-r from-[#0d2446]/40 via-[#030811] to-[#0d2446]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/40 text-[#f05423] text-xs font-mono font-bold uppercase tracking-wider">
              2025-2026 CAMPAIGN
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              Ready to Pioneer the <span className="text-[#f05423]">Next Frontier</span>?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We are actively accepting recruitment applications for MIT-WPU students and discussing sponsorship packages for European Hyperloop Week.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href={siteData.brand.recruitmentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f05423] to-[#ff7a45] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#f05423]/30 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Fill Recruitment Form <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all inline-flex items-center gap-2"
              >
                Contact Command <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

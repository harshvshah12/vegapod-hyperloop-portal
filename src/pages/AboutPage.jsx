import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { siteData } from '../data/siteData';
import { ShieldCheck, Building2, MapPin, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#030811] min-h-screen text-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" /> Institutional Heritage
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white">
              ABOUT <span className="text-[#f05423]">VEGAPOD</span>
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Founded in 2018 at Dr. Vishwanath Karad MIT World Peace University, Pune. 
              Engineering the 5th mode of transportation through student innovation.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">INCUBATION</span>
              <span className="text-white font-bold">MIT-WPU PUNE</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">ESTABLISHED</span>
              <span className="text-[#f05423] font-bold">2018</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">TEAM CAPACITY</span>
              <span className="text-cyan-400 font-bold">40+ ENGINEERS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main About Component with Manifesto, Project Vajra, and Press Archive */}
      <AboutSection />
    </div>
  );
}

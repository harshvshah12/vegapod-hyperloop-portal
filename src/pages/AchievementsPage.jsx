import React from 'react';
import { AchievementsSection } from '../components/AchievementsSection';
import { Award, Compass, Flag, Globe } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function AchievementsPage() {
  return (
    <div className="pt-24 bg-[#030811] min-h-screen text-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" /> Competition Track Record
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white">
              GLOBAL <span className="text-[#f05423]">ACHIEVEMENTS</span>
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              From SpaceX Headquarters in Hawthorne, California to European Hyperloop Week in 
              Delft, Edinburgh, Zurich, and Groningen. Consistent podium placements and technical scrutiny clearances.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">SPACEX 2019</span>
              <span className="text-white font-bold">Top 3 Asia / 1,600</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">EHW 2024 ZURICH</span>
              <span className="text-[#f05423] font-bold">Global Outreach Award</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">EHW 2026</span>
              <span className="text-cyan-400 font-bold">Emerging Talent Award</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Achievements Component with 2019-2026 Interactive Timeline */}
      <AchievementsSection />
    </div>
  );
}

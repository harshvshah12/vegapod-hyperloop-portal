import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Magnet, Zap, Cpu, Flame, Globe, ChevronRight, Activity, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  Shield: Shield,
  Magnet: Magnet,
  Zap: Zap,
  Cpu: Cpu,
  Flame: Flame,
  Globe: Globe,
};

export function SubsystemsSection() {
  const [activeTab, setActiveTab] = useState(siteData.subsystems[0].id);

  const currentSubsystem = siteData.subsystems.find((s) => s.id === activeTab) || siteData.subsystems[0];
  const IconComponent = iconMap[currentSubsystem.icon] || Shield;

  return (
    <section id="subsystems" className="relative py-28 bg-[#040b17] text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446] border border-[#00d2ff]/40 text-[#00d2ff] font-mono text-xs uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight">
            ENGINEERING <span className="text-[#f05423]">SUBSYSTEMS</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            High-precision multidisciplinary systems built from the ground up to conquer sub-atmospheric friction and electromagnetic levitation.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {siteData.subsystems.map((sub) => {
            const SubIcon = iconMap[sub.icon] || Shield;
            const isActive = activeTab === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#f05423] to-[#c83c0e] text-white font-bold shadow-[0_0_20px_rgba(240,84,35,0.4)] scale-105'
                    : 'bg-[#061325] hover:bg-[#0d2446] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <SubIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#f05423]'}`} />
                <span>{sub.name.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Subsystem Detailed Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSubsystem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-[#f05423]/30 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00d2ff] font-bold uppercase tracking-widest mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
                  <span>{currentSubsystem.tag}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white mb-4">
                  {currentSubsystem.name}
                </h3>
                <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
                  {currentSubsystem.description}
                </p>

                {/* Key Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSubsystem.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#061325]/80 border border-slate-800/80 flex flex-col justify-center"
                    >
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-white mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Diagram / Architectural Badge */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-[#061325] to-[#0a1e3a] border border-[#00d2ff]/20 text-center relative overflow-hidden">
                <div className="w-28 h-28 rounded-full bg-[#0d2446] border-2 border-[#f05423] flex items-center justify-center shadow-[0_0_30px_rgba(240,84,35,0.3)] mb-6">
                  <IconComponent className="w-14 h-14 text-[#f05423]" />
                </div>
                <span className="text-xs font-mono uppercase text-[#00d2ff] tracking-widest font-bold">
                  VALIDATED BENCHMARK
                </span>
                <h4 className="text-xl font-display font-bold text-white mt-1">
                  100% Cleared European Scrutiny
                </h4>
                <p className="text-xs text-slate-400 mt-2 max-w-xs leading-normal">
                  All design, fail-safe redundancy, and mechanical calculations undergo continuous peer review by industry leaders and EHW technical judges.
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-[#f05423] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Competition Ready Prototype</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

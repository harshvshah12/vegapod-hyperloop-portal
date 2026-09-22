import React from 'react';
import { SubsystemsSection } from '../components/SubsystemsSection';
import { Gauge, Cpu, Zap, Wind, Shield, Layers } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function SubsystemsPage() {
  return (
    <div className="pt-24 bg-[#030811] min-h-screen text-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" /> Engineering Architecture
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white">
              CORE <span className="text-[#f05423]">SUBSYSTEMS</span>
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Modular hardware architecture split across 6 specialized engineering disciplines, 
              built and validated to clear rigorous European Hyperloop Week Testing & Safety Documentation (TSD).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">LEV. CLEARANCE</span>
              <span className="text-white font-bold">12 - 16 mm</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">INVERTER TOPOLOGY</span>
              <span className="text-[#f05423] font-bold">Quasi-Z-Source</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">BRAKE CLAMP</span>
              <span className="text-cyan-400 font-bold">Fail-Safe 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Subsystems Component */}
      <SubsystemsSection />
    </div>
  );
}

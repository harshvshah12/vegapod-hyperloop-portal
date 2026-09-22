import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCw, Gauge, Zap, Wind, Shield, ChevronRight, Award, Compass, ExternalLink } from 'lucide-react';
import { HyperloopCanvas } from './3d/HyperloopCanvas';
import { siteData } from '../data/siteData';

export function HeroSection({ onNavigate, onOpenVideoModal }) {
  const [speedMode, setSpeedMode] = useState('cruise'); // 'stationary' | 'cruise' | 'supersonic'
  const [activeHotspot, setActiveHotspot] = useState(null);

  const speedData = {
    stationary: {
      speed: '0',
      unit: 'KM/H',
      label: 'DIAGNOSTIC DOCK',
      desc: 'Static levitation scrutiny mode with full 360° orbit inspection.',
      accel: '0.0 m/s²',
      power: 'Standby (1.2 kW)',
      gap: '15.0 mm'
    },
    cruise: {
      speed: '250',
      unit: 'KM/H',
      label: 'EHW TRACK CRUISE',
      desc: 'Nominal linear induction acceleration inside continuous sub-atmospheric guide tube.',
      accel: '1.2 G',
      power: '42.5 kW',
      gap: '14.2 mm'
    },
    supersonic: {
      speed: '1,200',
      unit: 'KM/H',
      label: 'SUPERSONIC FLIGHT',
      desc: 'Sub-scale hyperloop transit velocity near sonic barrier in near-vacuum envelope.',
      accel: '2.8 G',
      power: '85.0 kW',
      gap: '16.5 mm'
    }
  };

  const hotspotDetails = {
    aero: {
      title: 'Aerodynamic Aeroshell',
      subtitle: 'Carbon Fiber Reinforced Polymer Fairing',
      desc: 'Optimized via high-fidelity Computational Fluid Dynamics (CFD) for ultra-low drag coefficient in low pressure environments.',
      stat: 'Cd < 0.18'
    },
    maglev: {
      title: 'Electromagnetic Levitation',
      subtitle: 'Halbach Array & Static Levitation Rig',
      desc: 'Generates non-contact repulsive levitation clearance of 15 mm over conductive sub-tracks, eliminating wheel friction.',
      stat: '15mm Airgap'
    },
    propulsion: {
      title: 'Linear Induction Motor (LIM)',
      subtitle: 'Double-Sided Stator with Quasi-Z Inverter',
      desc: 'First student-made LIM in India providing instantaneous contactless electromagnetic acceleration up to 85 kW.',
      stat: '85 kW Pulse'
    },
    chassis: {
      title: 'Modular Multi-Plate Chassis',
      subtitle: 'Published Patent (INA 2026)',
      desc: 'Revolutionary structural framework allowing modular component reconfiguration, high torsional stiffness, and rapid maintenance.',
      stat: 'Patented 2026'
    }
  };

  const current = speedData[speedMode];

  return (
    <section id="hero" className="relative min-h-screen w-full pt-20 flex flex-col justify-between overflow-hidden bg-[#030811]">
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <HyperloopCanvas
          speedMode={speedMode}
          activeHotspot={activeHotspot}
          onSelectHotspot={(hotspot) => setActiveHotspot(activeHotspot === hotspot ? null : hotspot)}
        />
        {/* Subtle vignette gradients */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030811] via-transparent to-[#030811]/60" />
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-[#030811] to-transparent" />
      </div>

      {/* Main Overlay UI Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-10 pointer-events-none">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          
          {/* Left Column: Mission Badge & Headlines */}
          <div className="max-w-2xl pointer-events-auto">
            {/* Top Qualification Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2446]/80 border border-[#f05423]/40 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(240,84,35,0.25)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#f05423] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                EUROPEAN HYPERLOOP WEEK & SPACEX ALUMNI
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white"
            >
              BUILDING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f05423] via-[#ff6e3d] to-[#00d2ff]">
                FUTURE OF TRANSIT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-xl"
            >
              India's premier university hyperloop initiative incubated at <strong>MIT-WPU</strong>. Crafting sub-scale supersonic pods with electromagnetic levitation, linear induction propulsion, and vacuum telemetry.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onNavigate('subsystems')}
                className="px-6 py-3.5 rounded-full bg-[#f05423] hover:bg-[#ff6e3d] text-white font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(240,84,35,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Pod Engineering</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('achievements')}
                className="px-6 py-3.5 rounded-full bg-[#0d2446]/80 hover:bg-[#0e2950] text-white border border-[#00d2ff]/40 hover:border-[#00d2ff] font-mono text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-[#00d2ff]" />
                <span>Our Achievements</span>
              </button>

              <button
                onClick={onOpenVideoModal}
                className="px-4 py-3.5 rounded-full bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-mono text-xs uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 text-[#f05423] fill-[#f05423]" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Telemetry HUD & Mode Switcher */}
          <div className="w-full lg:w-80 flex flex-col gap-4 pointer-events-auto">
            {/* Speed Gauge & Live Diagnostics Card */}
            <div className="glass-card rounded-2xl p-5 border border-[#f05423]/30 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#00d2ff]">
                  REAL-TIME TELEMETRY
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-[#f05423] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f05423] animate-ping" />
                  LIVE SIM
                </span>
              </div>

              {/* Huge Speed Display */}
              <div className="flex items-baseline gap-2 my-2">
                <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                  {current.speed}
                </span>
                <span className="font-mono text-sm font-bold text-[#f05423]">
                  {current.unit}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-300 border-b border-slate-800 pb-3 mb-3">
                <span className="text-[#00d2ff] font-semibold">{current.label}:</span> {current.desc}
              </div>

              {/* Telemetry Micro Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#061325]/70 rounded-lg p-2 border border-slate-800">
                  <div className="text-[9px] font-mono text-slate-400">ACCEL</div>
                  <div className="text-xs font-mono font-bold text-white">{current.accel}</div>
                </div>
                <div className="bg-[#061325]/70 rounded-lg p-2 border border-slate-800">
                  <div className="text-[9px] font-mono text-slate-400">THRUST</div>
                  <div className="text-xs font-mono font-bold text-white">{current.power}</div>
                </div>
                <div className="bg-[#061325]/70 rounded-lg p-2 border border-slate-800">
                  <div className="text-[9px] font-mono text-slate-400">AIRGAP</div>
                  <div className="text-xs font-mono font-bold text-[#00d2ff]">{current.gap}</div>
                </div>
              </div>
            </div>

            {/* Velocity Mode Selector */}
            <div className="glass-card rounded-2xl p-3 border border-slate-800 flex flex-col gap-1.5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 px-2">
                VELOCITY REGIME
              </span>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { id: 'stationary', label: '0 KM/H', sub: 'Inspect' },
                  { id: 'cruise', label: '250 KM/H', sub: 'Cruise' },
                  { id: 'supersonic', label: '1200 KM/H', sub: 'Supersonic' }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSpeedMode(mode.id)}
                    className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                      speedMode === mode.id
                        ? 'bg-gradient-to-b from-[#f05423] to-[#c83c0e] text-white shadow-[0_0_15px_rgba(240,84,35,0.4)]'
                        : 'bg-[#061325]/60 hover:bg-[#0d2446] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold leading-tight">{mode.label}</div>
                    <div className="text-[9px] font-sans opacity-80">{mode.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Hotspot Info Popup if clicked */}
            <AnimatePresence>
              {activeHotspot && hotspotDetails[activeHotspot] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-card rounded-2xl p-4 border border-[#00d2ff]/40 bg-[#0d2446]/90 shadow-2xl"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#f05423] font-bold">
                      INSPECTED SUBSYSTEM
                    </span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <h4 className="font-display font-bold text-base text-white mt-1">
                    {hotspotDetails[activeHotspot].title}
                  </h4>
                  <p className="text-[11px] font-mono text-[#00d2ff] mb-2">
                    {hotspotDetails[activeHotspot].subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hotspotDetails[activeHotspot].desc}
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-700/60 flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">Benchmark:</span>
                    <span className="text-[#f05423] font-bold">{hotspotDetails[activeHotspot].stat}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom KPI Marquee Strip */}
      <div className="relative z-10 w-full bg-[#061325]/90 border-t border-slate-800/80 backdrop-blur-md py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="border-r border-slate-800/60 last:border-0">
              <div className="font-display font-black text-xl sm:text-2xl text-white">40+</div>
              <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">Engineers at MIT-WPU</div>
            </div>
            <div className="border-r border-slate-800/60 last:border-0">
              <div className="font-display font-black text-xl sm:text-2xl text-[#f05423]">TOP 2 GLOBAL</div>
              <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">Mech / Elec Subsystems</div>
            </div>
            <div className="border-r border-slate-800/60 last:border-0">
              <div className="font-display font-black text-xl sm:text-2xl text-[#00d2ff]">3 PATENTS</div>
              <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">Chassis & Maglev IP</div>
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-2xl text-white">4 CONSECUTIVE</div>
              <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">Years Demo in Europe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

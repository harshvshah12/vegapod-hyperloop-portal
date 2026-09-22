import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Zap, Wind, Shield, ChevronRight, Play, RotateCw, X, Radio, ArrowRight } from 'lucide-react';
import { HyperloopCanvas } from './3d/HyperloopCanvas';
import { siteData } from '../data/siteData';

export function HeroSection() {
  const [speedMode, setSpeedMode] = useState('cruise'); // 'stationary' | 'cruise' | 'supersonic'
  const [activeHotspot, setActiveHotspot] = useState(null);

  const speedData = {
    stationary: {
      speed: '0',
      unit: 'KM/H',
      label: 'DIAGNOSTIC SCRUTINY',
      desc: 'Static levitation analysis with full 360° orbital scrutiny.',
      accel: '0.0 m/s²',
      power: 'Standby 1.2 kW',
      gap: '15.0 mm',
      regime: 'Vacuum Dock'
    },
    cruise: {
      speed: '250',
      unit: 'KM/H',
      label: 'EHW TRACK CRUISE',
      desc: 'Nominal linear induction acceleration inside continuous sub-atmospheric guide tube.',
      accel: '1.2 G',
      power: '42.5 kW',
      gap: '14.2 mm',
      regime: 'Nominal Velocity'
    },
    supersonic: {
      speed: '1,200',
      unit: 'KM/H',
      label: 'SUPERSONIC FLIGHT',
      desc: 'Near-vacuum aerodynamic trajectory approaching sonic envelope under peak LIM excitation.',
      accel: '2.8 G',
      power: '85.0 kW',
      gap: '16.5 mm',
      regime: 'Near Sonic Barrier'
    }
  };

  const hotspotData = {
    aero: {
      title: 'CFD Aerodynamic Fairings',
      subtitle: 'Project Vajra Carbon-Composite Shell',
      desc: 'Engineered for sub-atmospheric aerodynamics with optimized stagnation pressure dispersion and minimal drag coefficient at transonic velocities.',
      stat: 'Transonic Cd 0.12'
    },
    maglev: {
      title: 'Electrodynamic Levitation Skids',
      subtitle: 'Halbach Permanent Magnet Array',
      desc: 'Passive and active suspension generating 15mm contactless levitation clearance over conductive track rails, eliminating mechanical rolling friction.',
      stat: '15mm Airgap'
    },
    propulsion: {
      title: 'Linear Induction Motor (LIM)',
      subtitle: 'Double-Sided Stator with Quasi-Z Inverter',
      desc: 'First student-developed Linear Induction Motor in India delivering up to 85 kW pulsed electromagnetic thrust directly onto reaction plates.',
      stat: '85 kW Pulse'
    },
    chassis: {
      title: 'Modular Multi-Plate Chassis',
      subtitle: 'Published Indian Patent (INA 2026)',
      desc: 'Patented high-strength structural framework allowing modular component layout, high torsional rigidity, and rapid maintenance access.',
      stat: 'Patent Published'
    }
  };

  const current = speedData[speedMode];

  return (
    <section className="relative w-full bg-[#030811] text-white pt-24 pb-16 overflow-hidden">
      {/* Subtle Aerospace Coordinate Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Mission Header: Clean, Unobstructed, Framing the Pod */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446]/80 border border-[#f05423]/40 text-white text-xs font-mono font-bold tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#f05423] animate-ping" />
              MIT-WPU PUNE • EUROPEAN HYPERLOOP WEEK & SPACEX ALUMNI
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white">
              VEGAPOD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f05423] to-[#ff7a45]">HYPERLOOP</span>
            </h1>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Autonomous sub-scale high-speed vacuum mobility pod engineered by 40+ multidisciplinary engineers at MIT-WPU Pune.
            </p>
          </div>

          {/* Quick Aerospace Benchmarks */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono shrink-0">
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10 text-right">
              <span className="text-slate-400 block text-[10px] uppercase">Tube Atmosphere</span>
              <span className="text-[#00d2ff] font-bold text-sm">0.001 atm</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10 text-right">
              <span className="text-slate-400 block text-[10px] uppercase">LIM Propulsion</span>
              <span className="text-[#f05423] font-bold text-sm">85 kW Pulse</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10 text-right">
              <span className="text-slate-400 block text-[10px] uppercase">Magnetic Gap</span>
              <span className="text-emerald-400 font-bold text-sm">15.0 mm</span>
            </div>
          </div>
        </div>

        {/* 3D AEROSPACE HERO STAGE (UNOBSTRUCTED CENTERPIECE) */}
        <div className="relative mt-6 rounded-3xl bg-gradient-to-b from-[#071326] via-[#030811] to-[#071326] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Top Stage Cockpit Toolbar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
              <RotateCw className="w-3.5 h-3.5 text-[#f05423] animate-spin" style={{ animationDuration: '6s' }} />
              <span>3D INTERACTIVE POD • ORBIT & ZOOM ENABLED</span>
            </div>

            <div className="pointer-events-auto hidden sm:flex items-center gap-1 p-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono">
              <span className="text-slate-400 text-[10px] uppercase px-2 font-bold">INSPECT:</span>
              <button
                onClick={() => setActiveHotspot(activeHotspot === 'aero' ? null : 'aero')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  activeHotspot === 'aero' ? 'bg-[#f05423] text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                AERO
              </button>
              <button
                onClick={() => setActiveHotspot(activeHotspot === 'maglev' ? null : 'maglev')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  activeHotspot === 'maglev' ? 'bg-[#00d2ff] text-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                MAGLEV
              </button>
              <button
                onClick={() => setActiveHotspot(activeHotspot === 'propulsion' ? null : 'propulsion')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  activeHotspot === 'propulsion' ? 'bg-[#f05423] text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                LIM MOTOR
              </button>
              <button
                onClick={() => setActiveHotspot(activeHotspot === 'chassis' ? null : 'chassis')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  activeHotspot === 'chassis' ? 'bg-[#00d2ff] text-black shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                PATENT
              </button>
            </div>
          </div>

          {/* 3D WebGL Canvas Viewport - Full View with No Heavy Text Overlays */}
          <div className="w-full h-[520px] sm:h-[600px] lg:h-[660px] relative">
            <HyperloopCanvas
              speedMode={speedMode}
              activeHotspot={activeHotspot}
              onSelectHotspot={(hotspot) => setActiveHotspot(activeHotspot === hotspot ? null : hotspot)}
            />

            {/* Bottom floating telemetry & speed controller dock */}
            <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-none">
              
              {/* Speed Mode Selector Buttons */}
              <div className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/15 shadow-2xl">
                <button
                  onClick={() => setSpeedMode('stationary')}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    speedMode === 'stationary'
                      ? 'bg-white/20 text-white shadow-md border border-white/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  0 KM/H
                  <span className="block text-[10px] text-slate-400 font-normal">Static Dock</span>
                </button>

                <button
                  onClick={() => setSpeedMode('cruise')}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    speedMode === 'cruise'
                      ? 'bg-gradient-to-r from-[#f05423] to-[#ff7a45] text-white shadow-lg shadow-[#f05423]/40 border border-[#f05423]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  250 KM/H
                  <span className="block text-[10px] text-slate-200 font-normal">EHW Cruise</span>
                </button>

                <button
                  onClick={() => setSpeedMode('supersonic')}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    speedMode === 'supersonic'
                      ? 'bg-gradient-to-r from-[#00d2ff] to-[#0099ff] text-black shadow-lg shadow-[#00d2ff]/40 border border-[#00d2ff]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  1,200 KM/H
                  <span className="block text-[10px] text-slate-800 font-normal font-bold">Supersonic</span>
                </button>
              </div>

              {/* Real-time Dynamic Telemetry Readout Box */}
              <div className="pointer-events-auto px-5 py-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-6 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Velocity</span>
                  <span className="text-xl sm:text-2xl font-black text-white">{current.speed} <span className="text-xs text-[#f05423] font-bold">{current.unit}</span></span>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Acceleration</span>
                  <span className="text-sm sm:text-base font-bold text-white">{current.accel}</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">LIM Power</span>
                  <span className="text-sm sm:text-base font-bold text-cyan-400">{current.power}</span>
                </div>
              </div>
            </div>

            {/* Hotspot Drawer (Floats on Top Right Without Blocking the Pod) */}
            <AnimatePresence>
              {activeHotspot && hotspotData[activeHotspot] && (
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  className="absolute top-16 right-4 sm:right-6 z-30 w-80 sm:w-96 p-5 rounded-2xl bg-[#071326]/95 backdrop-blur-xl border border-[#f05423]/50 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[11px] font-mono text-[#f05423] font-bold uppercase tracking-wider">
                      INSPECTED SUBSYSTEM
                    </span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-white">
                    {hotspotData[activeHotspot].title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 block mt-0.5">
                    {hotspotData[activeHotspot].subtitle}
                  </span>

                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    {hotspotData[activeHotspot].desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#f05423]/20 border border-[#f05423]/40 text-[#f05423] text-[11px] font-mono font-bold">
                      {hotspotData[activeHotspot].stat}
                    </span>
                    <Link
                      to="/subsystems"
                      className="text-xs font-semibold text-white hover:text-[#f05423] flex items-center gap-1"
                    >
                      View Specs <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Quick Route Portal Navigation Bento */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/subsystems"
            className="group p-5 rounded-2xl bg-[#071326]/60 border border-white/10 hover:border-[#f05423]/50 hover:bg-[#071326] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#f05423] font-bold">01 / ENGINEERING</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="mt-2 text-white font-bold text-base">6 Core Subsystems</h4>
            <p className="mt-1 text-slate-400 text-xs">Linear Induction Motor, Halbach Levitation, High-Voltage inverters & Thermal.</p>
          </Link>

          <Link
            to="/achievements"
            className="group p-5 rounded-2xl bg-[#071326]/60 border border-white/10 hover:border-[#f05423]/50 hover:bg-[#071326] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#f05423] font-bold">02 / COMPETITION</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="mt-2 text-white font-bold text-base">2019-2026 Timeline</h4>
            <p className="mt-1 text-slate-400 text-xs">SpaceX Hyperloop Pod Competition to European Hyperloop Week podiums.</p>
          </Link>

          <Link
            to="/patents"
            className="group p-5 rounded-2xl bg-[#071326]/60 border border-white/10 hover:border-[#f05423]/50 hover:bg-[#071326] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#f05423] font-bold">03 / INTELLECTUAL PROPERTY</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="mt-2 text-white font-bold text-base">3 Published Patents</h4>
            <p className="mt-1 text-slate-400 text-xs">Modular chassis, beam emergency braking, and electrodynamic levitation device.</p>
          </Link>

          <Link
            to="/members"
            className="group p-5 rounded-2xl bg-[#071326]/60 border border-white/10 hover:border-[#f05423]/50 hover:bg-[#071326] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#f05423] font-bold">04 / FLIGHT CONTINGENT</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="mt-2 text-white font-bold text-base">Team & Alumni Directory</h4>
            <p className="mt-1 text-slate-400 text-xs">23 active engineers, captains, subsystem heads, and multi-year alumni network.</p>
          </Link>
        </div>

      </div>
    </section>
  );
}

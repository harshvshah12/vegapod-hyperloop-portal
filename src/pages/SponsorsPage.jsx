import React from 'react';
import { SponsorsSection } from '../components/SponsorsSection';
import { ShieldCheck, Handshake, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function SponsorsPage() {
  return (
    <div className="pt-24 bg-[#030811] min-h-screen text-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Corporate Ecosystem
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white">
              INDUSTRY <span className="text-[#f05423]">PARTNERS</span>
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Proudly empowered by 27 leading corporations in power electronics, CAD simulation, 
              precision instrumentation, and advanced hardware manufacturing.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">TOTAL PARTNERS</span>
              <span className="text-white font-bold">27 Corporations</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">COLLABORATION</span>
              <span className="text-[#f05423] font-bold">Hardware & Tech</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sponsors Component with 27 Logo Grid */}
      <SponsorsSection onNavigate={() => {}} />

      {/* Sponsorship Inquiry Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0d2446]/60 via-[#071326] to-[#0d2446]/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Partner with Team Vegapod Hyperloop</h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Gain global brand visibility at European Hyperloop Week, connect with top engineering talent from MIT-WPU, 
              and showcase your technology on an international aerospace stage.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f05423] to-[#ff7a45] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#f05423]/25"
          >
            <span>Inquire for Partnership</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

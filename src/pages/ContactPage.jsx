import React from 'react';
import ContactSection from '../components/ContactSection';
import { Mail, Building2, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ContactPage() {
  return (
    <div className="pt-24 bg-[#030811] min-h-screen text-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Mail className="w-3.5 h-3.5" /> Communications Terminal
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white">
              CONTACT & <span className="text-[#f05423]">RECRUITMENT</span>
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Connect with Team Vegapod Hyperloop for student recruitment, corporate sponsorship, 
              academic research partnerships, or general media inquiries.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">CAMPUS BASE</span>
              <span className="text-white font-bold">MIT-WPU Pune</span>
            </div>
            <div className="p-3 rounded-xl bg-[#071326] border border-white/10">
              <span className="text-slate-500 block text-[10px]">RESPONSE TIME</span>
              <span className="text-[#f05423] font-bold">&lt; 48 Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Component with Official Recruitment Portal Card and Transmission Form */}
      <ContactSection />
    </div>
  );
}

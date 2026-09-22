import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, User, Sparkles, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export function PatentsSection() {
  return (
    <section id="patents" className="relative py-28 bg-[#040b17] text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446] border border-[#f05423]/40 text-[#f05423] font-mono text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ORIGINAL INTELLECTUAL PROPERTY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight">
            INTELLECTUAL PROPERTY & <span className="text-[#f05423]">PATENTS</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Engineering breakthroughs conceived and developed by Team Vegapod students and faculty advisors, officially published with the Indian Patent Office (INA).
          </p>
        </div>

        {/* Patents List */}
        <div className="space-y-16">
          {siteData.patents.map((patent, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={patent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-3xl p-6 sm:p-10 border border-[#f05423]/25 shadow-2xl relative overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Patent Diagram / Mockup */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl group">
                      <img
                        src={patent.image}
                        alt={patent.title}
                        className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061325]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs font-mono text-slate-300">
                        <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          Field: {patent.field}
                        </span>
                        <span className="bg-[#f05423]/80 px-2.5 py-1 rounded-md text-white font-bold">
                          {patent.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Patent Details */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{patent.status}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {patent.field}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-2 mb-4 leading-snug">
                      {patent.title}
                    </h3>

                    <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                      {patent.description}
                    </p>

                    {/* Inventors List */}
                    <div>
                      <span className="text-xs font-mono text-[#00d2ff] font-bold uppercase tracking-wider block mb-2">
                        Inventors & Faculty Advisory
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {patent.inventors.map((inventor, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#061325] border border-slate-700/80 text-xs font-mono text-slate-200"
                          >
                            <User className="w-3 h-3 text-[#f05423]" />
                            <span>{inventor}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

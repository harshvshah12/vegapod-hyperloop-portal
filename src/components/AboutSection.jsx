import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Building2, Users2, ShieldCheck, ArrowRight, X, ZoomIn, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export function AboutSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="about" className="relative py-28 bg-[#030811] text-white overflow-hidden cyber-grid-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#f05423]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446] border border-[#f05423]/40 text-[#f05423] font-mono text-xs uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>ORIGIN & VISION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight">
            BREAKING <span className="text-[#f05423]">BARRIERS</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg leading-relaxed">
            Pioneering the fifth mode of transportation from the research laboratories of Dr. Vishwanath Karad MIT World Peace University.
          </p>
        </div>

        {/* Feature Grid: Manifesto & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          
          {/* Left Block: The Philosophy */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-[#f05423]/25 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f05423]/10 rounded-full blur-2xl" />
            
            <span className="text-6xl font-display font-black text-[#f05423]/20 float-left mr-3 leading-none">
              V
            </span>
            <p className="text-lg sm:text-xl text-slate-200 font-sans leading-relaxed mb-6 font-light">
              <strong className="text-white font-semibold">Vision challenges conformity.</strong> Conformity creates conventions. Conventions build barriers that prevent a better future. But when visionary engineers come together, they remove the barriers to progress.
            </p>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              By removing the financial, technological, safety, and environmental risks—and by eliminating the wasted time, stress, and complications of travel—we are taking the world where it wants to go. We're moving the world faster forward.
            </p>

            <div className="p-4 rounded-2xl bg-[#061325]/80 border border-slate-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#0d2446] text-[#00d2ff]">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">40+ Student-Led Engineers</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Comprising talents across mechanical, electrical, electronics, computer science, and business management at MIT-WPU.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Vajra Aero Showcase */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-[#00d2ff]/30 shadow-2xl glass-card">
              <img
                src={siteData.brand.vajraAeroImg}
                alt="Project Vajra Hyperloop Pod"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-[#030811]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-2.5 py-1 rounded bg-[#f05423] text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                  PROJECT VAJRA
                </span>
                <h3 className="text-2xl font-display font-black text-white mt-2">
                  Engineered for Extreme Velocity
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Sub-scale aerodynamic hyperloop prototype with contactless propulsion and phase-change cooling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Press & Media Highlights Carousel */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#00d2ff] font-mono text-xs uppercase tracking-wider mb-2">
                <Newspaper className="w-4 h-4" />
                <span>GLOBAL MEDIA COVERAGE</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-white">
                In The Headlines
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Extensive regional and international newspaper features recognizing Vegapod's milestones at European Hyperloop Week.
            </p>
          </div>

          {/* Press Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteData.pressArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-[#f05423] transition-all cursor-pointer group hover:-translate-y-1 shadow-lg"
              >
                <div className="h-44 w-full relative overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061325] via-transparent to-transparent" />
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#0d2446]/80 text-[#00d2ff] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-3 bg-[#061325]/90">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#f05423] font-bold">
                    {article.source}
                  </span>
                  <h4 className="text-xs font-sans font-medium text-slate-200 mt-1 line-clamp-2 leading-tight">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox for Article Inspection */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[90vh] bg-[#061325] border border-[#f05423]/40 rounded-3xl p-4 sm:p-6 overflow-hidden flex flex-col shadow-2xl"
              >
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-[#f05423] font-bold tracking-wider uppercase">
                      {selectedArticle.source}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {selectedArticle.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-full bg-[#0d2446] hover:bg-[#f05423] text-white transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 flex-1 overflow-auto flex items-center justify-center rounded-2xl bg-black/60 p-2">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="max-h-[70vh] w-auto object-contain rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

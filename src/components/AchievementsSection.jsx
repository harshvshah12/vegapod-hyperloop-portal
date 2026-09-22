import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Calendar, MapPin, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export function AchievementsSection() {
  const [selectedYear, setSelectedYear] = useState('ALL');

  const filteredAchievements = selectedYear === 'ALL'
    ? siteData.achievements
    : siteData.achievements.filter((a) => a.year === selectedYear);

  const years = ['ALL', '2026', '2025', '2024', '2023', '2022', '2021', '2019'];

  return (
    <section id="achievements" className="relative py-28 bg-[#030811] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0d2446]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446] border border-[#f05423]/40 text-[#f05423] font-mono text-xs uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>GLOBAL TRACK RECORD</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight">
            OUR JOURNEY <span className="text-[#f05423]">THROUGH TIME</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Representing India consistently across international engineering arenas—from SpaceX headquarters in California to European Hyperloop Week across Europe.
          </p>
        </div>

        {/* Year Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-16">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                selectedYear === y
                  ? 'bg-[#f05423] text-white shadow-[0_0_15px_rgba(240,84,35,0.4)] scale-105'
                  : 'bg-[#061325] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {y === 'ALL' ? 'All Milestones' : y}
            </button>
          ))}
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-[#f05423] before:via-[#00d2ff] before:to-transparent">
          {filteredAchievements.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.year + item.location}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#061325] border-2 border-[#f05423] flex items-center justify-center z-20 shadow-[0_0_12px_rgba(240,84,35,0.8)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff]" />
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-[#f05423]/50 transition-all shadow-xl group">
                    
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#f05423]/20 border border-[#f05423]/40 text-[#f05423] font-mono text-xs font-bold">
                        {item.year}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#00d2ff]">
                        <MapPin className="w-3.5 h-3.5 text-[#f05423]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-[#f05423] transition-colors">
                      {item.highlight}
                    </h3>

                    <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Subsystem Honors Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.subsystems.map((sub, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#061325] border border-slate-700/80 text-xs font-mono text-slate-300"
                        >
                          ✓ {sub}
                        </span>
                      ))}
                    </div>

                    {/* Photo Thumbnails */}
                    {item.images && item.images.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 border-t border-slate-800/80">
                        {item.images.slice(0, 3).map((img, imgIdx) => (
                          <div key={imgIdx} className="h-24 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                            <img
                              src={img}
                              alt={`${item.year} evidence`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* European Hyperloop Week Highlight Feature Box */}
        <div className="mt-24 glass-card rounded-3xl p-8 sm:p-12 border border-[#00d2ff]/30 relative overflow-hidden bg-gradient-to-r from-[#061325] to-[#0a1e3a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono text-[#00d2ff] font-bold tracking-widest uppercase">
                THE GLOBAL BATTLEGROUND
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-white mt-1 mb-4">
                European Hyperloop Week (EHW)
              </h3>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                European Hyperloop Week (EHW) is the premier annual gathering advancing hyperloop technology across the world. Gathering university innovators, industry titans, academia, and government leadership, teams present full-scale sub-systems and compete on dedicated test tracks to validate real-world feasibility.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={siteData.brand.socials.ehw}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f05423] hover:bg-[#ff6e3d] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Visit EHW Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
              <img
                src="/gallery/ehw-track.jpg"
                alt="European Hyperloop Week Track"
                className="w-full h-56 object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

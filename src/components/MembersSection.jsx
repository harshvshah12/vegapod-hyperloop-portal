import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Linkedin, GraduationCap, Sparkles, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export function MembersSection() {
  const [activeTab, setActiveTab] = useState('Leads');
  const [isAlumniView, setIsAlumniView] = useState(false);
  const [alumniYear, setAlumniYear] = useState('2025');

  const subsystems = Object.keys(siteData.members);

  return (
    <section id="members" className="relative py-28 bg-[#030811] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#0d2446]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#f05423]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446] border border-[#f05423]/40 text-[#f05423] font-mono text-xs uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>THE CREW BEHIND THE POD</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight">
            MEET THE TEAM THAT MAKES <br />
            <span className="text-[#f05423]">THE MAGIC HAPPEN</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Proud multidisciplinary students at Dr. Vishwanath Karad MIT World Peace University dedicating thousands of hours to engineering innovation.
          </p>

          {/* Active Members vs. Alumni Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#061325] border border-slate-800">
            <button
              onClick={() => setIsAlumniView(false)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                !isAlumniView
                  ? 'bg-[#f05423] text-white shadow-[0_0_15px_rgba(240,84,35,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Current Engineers (2025–26)
            </button>
            <button
              onClick={() => setIsAlumniView(true)}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                isAlumniView
                  ? 'bg-[#00d2ff] text-[#030811] shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Proud Alumni</span>
            </button>
          </div>
        </div>

        {/* View 1: Active Team Members by Subsystem */}
        {!isAlumniView && (
          <div>
            {/* Subsystem Filter Tabs */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
              {subsystems.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveTab(sub)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === sub
                      ? 'bg-[#0d2446] text-[#00d2ff] border border-[#00d2ff] font-bold shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                      : 'bg-[#061325]/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Member Cards Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {siteData.members[activeTab]?.map((member, i) => (
                <motion.div
                  key={member.name + member.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-[#f05423]/60 transition-all group shadow-xl hover:-translate-y-1.5"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#061325] to-[#0a1e3a]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                      onError={(e) => {
                        e.target.src = '/members/VAIBHAV.png'; // Fallback
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-transparent opacity-80" />

                    {/* LinkedIn Hover Overlay Button */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 p-2 rounded-full bg-[#0d2446]/80 text-[#00d2ff] hover:bg-[#f05423] hover:text-white border border-[#00d2ff]/40 transition-all backdrop-blur-md opacity-0 group-hover:opacity-100"
                        title={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] font-mono text-[#00d2ff] uppercase font-bold tracking-wider block">
                        {member.subsystem}
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-4 bg-[#061325]/90 border-t border-slate-800/80">
                    <h3 className="text-base font-display font-bold text-white group-hover:text-[#f05423] transition-colors line-clamp-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* View 2: Alumni Section */}
        {isAlumniView && (
          <div>
            {/* Alumni Year Cohort Filter */}
            <div className="flex items-center justify-center gap-3 mb-10">
              {['2025', '2024'].map((year) => (
                <button
                  key={year}
                  onClick={() => setAlumniYear(year)}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    alumniYear === year
                      ? 'bg-[#00d2ff] text-[#030811] shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                      : 'bg-[#061325] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Cohort of {year}
                </button>
              ))}
            </div>

            {/* Alumni Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {siteData.alumni[alumniYear]?.map((alumnus, i) => (
                <motion.div
                  key={alumnus.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00d2ff]/60 transition-all shadow-xl group hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
                    <img
                      src={alumnus.image}
                      alt={alumnus.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] font-mono text-[#f05423] uppercase font-bold tracking-wider block">
                        EX-MEMBER
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#061325]/90 border-t border-slate-800">
                    <h3 className="text-base font-display font-bold text-white line-clamp-1">
                      {alumnus.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {alumnus.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}

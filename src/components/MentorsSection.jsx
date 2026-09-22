import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Linkedin, Globe, Building } from 'lucide-react';
import { siteData } from '../data/siteData';

export function MentorsSection() {
  return (
    <section id="mentors" className="relative py-28 bg-[#040b17] text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446] border border-[#00d2ff]/40 text-[#00d2ff] font-mono text-xs uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight">
            FACULTY ADVISORS & <span className="text-[#f05423]">MENTORS</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Guiding Team Vegapod with rigorous engineering ethics, structural analysis, and continuous technological stewardship.
          </p>
          <div className="mt-4 text-xs font-mono text-slate-400 tracking-wider">
            DEPARTMENT OF MECHANICAL ENGINEERING • MIT WORLD PEACE UNIVERSITY
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-[#f05423]/50 transition-all shadow-2xl flex flex-col items-center text-center group hover:-translate-y-2"
            >
              {/* Photo Frame */}
              <div className="relative w-36 h-36 rounded-2xl overflow-hidden mb-6 border-2 border-[#0d2446] group-hover:border-[#f05423] transition-colors shadow-xl">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="text-xs font-mono text-[#00d2ff] font-bold uppercase tracking-wider">
                {mentor.title}
              </span>
              <h3 className="text-xl font-display font-black text-white mt-1 mb-2">
                {mentor.name}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-4">
                {mentor.department}
              </p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6 flex-1">
                {mentor.bio}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full justify-center">
                {mentor.website && (
                  <a
                    href={mentor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#061325] text-slate-300 hover:text-white hover:bg-[#f05423] transition-all border border-slate-800"
                    title="Faculty Website"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                {mentor.linkedin && (
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#061325] text-slate-300 hover:text-white hover:bg-[#00d2ff] hover:text-[#030811] transition-all border border-slate-800"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Heart, ExternalLink, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export function SponsorsSection({ onNavigate }) {
  return (
    <section id="sponsors" className="relative py-28 bg-[#030811] text-white overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#f05423]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2446] border border-[#f05423]/40 text-[#f05423] font-mono text-xs uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#f05423]" />
            <span>INDUSTRY PARTNERSHIPS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight">
            A HEARTFELT <span className="text-[#f05423]">THANK YOU</span> <br />
            TO OUR SPONSORS
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Empowered by world-class leaders in power electronics, automotive engineering, instrumentation, and precision manufacturing.
          </p>
        </div>

        {/* Sponsors Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {siteData.sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="glass-card rounded-2xl p-5 flex flex-col items-center justify-center aspect-[16/10] border border-slate-800 hover:border-[#f05423]/60 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#f05423]/10 bg-[#061325]/70"
            >
              <div className="w-full h-14 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-[85%] object-contain filter brightness-90 contrast-125 group-hover:brightness-105 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-[#00d2ff] font-bold">{sponsor.name}</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#f05423]" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Sponsor Gratitude Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#f05423]/30 bg-gradient-to-r from-[#061325] via-[#0d2446]/50 to-[#061325]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Fueling the Next Breakthrough in Supersonic Mobility
            </h3>
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
              We, at Team Vegapod Hyperloop, extend our deepest gratitude to all our valued sponsors for their unwavering support and belief in our vision. Your generous contributions in components, high-voltage silicon, test gear, and mentorship allow us to represent India on the global podium and inspire future generations of engineers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-[#f05423] hover:bg-[#ff6e3d] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(240,84,35,0.4)] transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Partner With Vegapod</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

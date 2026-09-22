import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import { Youtube, Play, ExternalLink, Video, Compass, Radio, X, Share2 } from 'lucide-react';

export default function MediaSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: "promo-2026",
      title: "Team Vegapod Hyperloop | Road to European Hyperloop Week",
      desc: "Watch the engineering journey, manufacturing behind the scenes, and dynamic testing of our sub-scale hyperloop prototype at international scrutiny.",
      duration: "04:12",
      tag: "Feature Film",
      category: "Engineering & Innovation",
      youtubeUrl: "https://www.youtube.com/@vegapodhyperloop",
      embedQuery: "https://www.youtube.com/embed?listType=search&list=Vegapod+Hyperloop+MIT+WPU"
    },
    {
      id: "workshop-bts",
      title: "Workshop Chronicles: Building the Linear Induction Motor",
      desc: "Deep dive into how our mechanical and electrical teams engineered India's first student-made linear induction motor and quasi-Z-source inverter.",
      duration: "06:45",
      tag: "Technical Deep-Dive",
      category: "Propulsion & Power",
      youtubeUrl: "https://www.youtube.com/@vegapodhyperloop",
      embedQuery: "https://www.youtube.com/embed?listType=search&list=Vegapod+Linear+Induction+Motor"
    },
    {
      id: "ehw-highlights",
      title: "European Hyperloop Week Podium & Track Scrutiny",
      desc: "Highlights from our international scrutiny tests, vacuum chamber evaluations, track runs, and global award ceremonies across Europe.",
      duration: "05:30",
      tag: "Competition Reel",
      category: "Global Championship",
      youtubeUrl: "https://www.youtube.com/@vegapodhyperloop",
      embedQuery: "https://www.youtube.com/embed?listType=search&list=Vegapod+European+Hyperloop+Week"
    }
  ];

  return (
    <section id="media" className="py-24 relative overflow-hidden bg-[#071326]">
      {/* Dynamic Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#f05423]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#00d2ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-semibold uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5" /> Broadcast & Media
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cinematic <span className="text-[#f05423]">Stream</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Follow the high-speed pulse of Team Vegapod. Watch technical documentaries,
            trackside testing at European Hyperloop Week, and student innovation in real-time.
          </p>

          {/* YouTube Channel Badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/40 border border-white/10 shadow-lg">
            <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <Youtube className="w-4 h-4" />
            </div>
            <span className="text-white font-bold text-sm tracking-wide">
              Official YouTube: <span className="text-red-400">{siteData.mediaHub.youtubeHandle}</span>
            </span>
            <a
              href={siteData.mediaHub.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-xs font-semibold text-[#f05423] hover:underline flex items-center gap-1"
            >
              Subscribe <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, index) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl bg-[#030811] border border-white/10 hover:border-[#f05423]/50 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative h-52 bg-gradient-to-br from-[#0d2446] to-[#030811] overflow-hidden">
                {/* Visual Backdrop Pattern */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#00d2ff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Video Image Fallback or Graphic */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#f05423]/20 border border-[#f05423]/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f05423] transition-all duration-300 shadow-lg shadow-[#f05423]/30">
                    <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                  </div>
                  <span className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                    {vid.category}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                  {vid.duration}
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#f05423]/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  {vid.tag}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f05423] transition-colors line-clamp-2">
                    {vid.title}
                  </h3>
                  <p className="mt-2.5 text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {vid.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#f05423] transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Watch Episode
                  </button>

                  <a
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-500" />
                    YouTube Hub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Social Hub Connect */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#0d2446]/40 via-[#030811] to-[#0d2446]/40 border border-white/10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* LinkedIn */}
            <a
              href={siteData.brand.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 md:pt-0 group hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-base">LinkedIn Network</h4>
              <p className="text-gray-400 text-xs mt-1">Professional updates, research papers & vacancies</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                Connect on LinkedIn →
              </span>
            </a>

            {/* Instagram */}
            <a
              href={siteData.brand.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 md:pt-0 md:pl-6 group hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-pink-600/20 border border-pink-500/40 flex items-center justify-center text-pink-400 mb-3 group-hover:scale-110 transition-transform">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-base">Instagram Feed</h4>
              <p className="text-gray-400 text-xs mt-1">Behind-the-scenes stories, reels & campus tests</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-pink-400">
                Follow @vegapodhyperloop →
              </span>
            </a>

            {/* YouTube */}
            <a
              href={siteData.brand.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 md:pt-0 md:pl-6 group hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mb-3 group-hover:scale-110 transition-transform">
                <Youtube className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-base">YouTube Channel</h4>
              <p className="text-gray-400 text-xs mt-1">Full scrutiny runs, documentaries & animations</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-red-400">
                Subscribe on YouTube →
              </span>
            </a>

            {/* European Hyperloop Week */}
            <a
              href={siteData.brand.socials.ehw}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 md:pt-0 md:pl-6 group hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-[#f05423]/20 border border-[#f05423]/40 flex items-center justify-center text-[#f05423] mb-3 group-hover:scale-110 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-base">European Hyperloop Week</h4>
              <p className="text-gray-400 text-xs mt-1">Official annual global competition portal</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#f05423]">
                Visit EHW Portal →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-[#f05423] text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#030811] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
            >
              {/* Responsive Video Container */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(activeVideo.title)}&autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Footer info */}
              <div className="p-6 bg-[#071326] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#f05423]/20 border border-[#f05423]/40 text-[#f05423] text-xs font-semibold mb-1">
                    {activeVideo.category}
                  </div>
                  <h3 className="text-white font-bold text-lg">{activeVideo.title}</h3>
                </div>
                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Youtube className="w-4 h-4" /> Open in YouTube
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

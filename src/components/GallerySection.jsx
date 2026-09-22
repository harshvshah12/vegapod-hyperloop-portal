import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Tag, Calendar, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['All', 'EHW 2025', 'EHW 2024', 'EHW 2023', 'EHW 2022', 'SpaceX 2019', 'Track'];

  const filteredGallery = selectedCategory === 'All'
    ? siteData.gallery
    : siteData.gallery.filter(item => item.year === selectedCategory || item.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredGallery.length);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#030811]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f05423]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" /> Photographic Archive
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Visual <span className="text-[#f05423]">Expedition</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            From the workshops of MIT-WPU Pune to the testing tracks of California, Delft, Edinburgh, Zurich, and Groningen.
            Explore authentic moments of cutting-edge hyperloop development.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? siteData.gallery.length 
                : siteData.gallery.filter(item => item.year === cat || item.category === cat).length;

              if (cat !== 'All' && count === 0) return null;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#f05423] to-[#ff7a45] text-white shadow-lg shadow-[#f05423]/25 scale-105'
                      : 'bg-[#0d2446]/40 text-gray-400 hover:text-white hover:bg-[#0d2446]/80 border border-white/5'
                  }`}
                >
                  {cat}
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    selectedCategory === cat ? 'bg-black/30 text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item, index) => (
              <motion.div
                key={`${item.image}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-[#071326] border border-white/5 shadow-xl hover:border-[#f05423]/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Ambient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-[#030811]/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-[#030811]/80 backdrop-blur-md border border-[#f05423]/40 text-[#f05423] text-[11px] font-bold tracking-wide flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {item.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#030811]/80 backdrop-blur-md border border-white/10 text-cyan-400 text-[11px] font-medium flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {item.category}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-md group-hover:text-[#f05423] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                    <span className="text-[11px]">Click to inspect in aerospace zoom</span>
                  </div>
                </div>

                {/* Hover Glow Edge */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f05423]/40 rounded-2xl pointer-events-none transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Track Notice Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d2446]/60 via-[#071326]/80 to-[#0d2446]/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f05423]/15 border border-[#f05423]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#f05423]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">Archived Media & High-Resolution Telemetry</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                Full competition video runs, engineering CAD breakdowns, and telemetry logs available for academic research.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@vegapodhyperloop"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-[#f05423] text-white text-xs sm:text-sm font-semibold border border-white/10 hover:border-[#f05423] transition-all duration-300"
          >
            Visit YouTube Channel →
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && filteredGallery[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-[#f05423] text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#f05423] text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#f05423] text-white transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
                <img
                  src={filteredGallery[activeImageIndex].image}
                  alt={filteredGallery[activeImageIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f05423]/20 border border-[#f05423]/50 text-[#f05423] text-xs font-semibold">
                    {filteredGallery[activeImageIndex].year}
                  </span>
                  <span className="text-gray-400 text-xs font-mono">
                    {activeImageIndex + 1} / {filteredGallery.length}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl">
                  {filteredGallery[activeImageIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import confetti from 'canvas-confetti';
import { 
  Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight, 
  ExternalLink, Building2, UserPlus, Globe, ShieldCheck 
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: 'Sponsorship & Partnership',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift aerospace transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f05423', '#00d2ff', '#ffffff', '#0d2446']
        });
      } catch (err) {
        // graceful confetti fallback
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030811]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#f05423]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423]/10 border border-[#f05423]/30 text-[#f05423] text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" /> Communications Terminal
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Connect with <span className="text-[#f05423]">Vegapod</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Whether you want to sponsor our vehicle for European Hyperloop Week, collaborate on advanced R&D,
            or join our student engineering contingent at MIT-WPU, our transmission lines are open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Recruitment Callout (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Recruitment VIP Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#f05423]/20 via-[#0d2446]/40 to-[#030811] border-2 border-[#f05423]/40 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-[#f05423]/20 group-hover:text-[#f05423]/40 transition-colors">
                <UserPlus className="w-24 h-24 -mt-4 -mr-4 transform rotate-12" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05423] text-white text-[11px] font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> Official Recruitment
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Join the Flight Contingent
              </h3>
              <p className="mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                MIT-WPU engineering, business, and design students: we are recruiting for the 
                upcoming European Hyperloop Week campaign. Work on levitation, Linear Induction Motors, 
                high-voltage inverters, and carbon-aero chassis.
              </p>

              <div className="mt-6">
                <a
                  href={siteData.brand.recruitmentFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f05423] to-[#ff6b3d] text-white font-bold text-sm shadow-xl shadow-[#f05423]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Fill Official Application Form <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* University & Location Dossier */}
            <div className="p-6 rounded-2xl bg-[#071326]/80 border border-white/10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0d2446] border border-white/10 flex items-center justify-center text-[#f05423] shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Incubation Laboratory</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Faculty of Engineering & Technology, Dr. Vishwanath Karad MIT World Peace University (MIT-WPU),
                    Paud Road, Kothrud, Pune, Maharashtra 411038, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#0d2446] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Direct Transmissions</h4>
                  <a
                    href="mailto:contact@vegapodhyperloop.in"
                    className="text-gray-300 hover:text-[#f05423] text-xs mt-1 block transition-colors font-mono"
                  >
                    contact@vegapodhyperloop.in
                  </a>
                  <a
                    href="mailto:sponsorship@vegapodhyperloop.in"
                    className="text-gray-400 hover:text-[#f05423] text-xs block transition-colors font-mono mt-0.5"
                  >
                    sponsorship@vegapodhyperloop.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#0d2446] border border-white/10 flex items-center justify-center text-[#f05423] shrink-0 mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Global Coordinates</h4>
                  <p className="text-gray-400 text-xs mt-1 font-mono">
                    18.5186° N, 73.8153° E • Pune Innovation Hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#071326]/90 border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Transmission Dispatched!</h3>
                  <p className="mt-3 text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#f05423] font-bold">{formData.name}</span>. 
                    Our team captains and subsystem leads have received your transmission and will review it promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        purpose: 'Sponsorship & Partnership',
                        message: ''
                      });
                    }}
                    className="mt-8 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Full Name <span className="text-[#f05423]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Sarabhai"
                        className="w-full px-4 py-3 rounded-xl bg-[#030811] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-all text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address <span className="text-[#f05423]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#030811] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Organization / College */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Organization / University
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. MIT-WPU or Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#030811] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-all text-sm"
                      />
                    </div>

                    {/* Transmission Purpose */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Subject / Category
                      </label>
                      <select
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#030811] border border-white/10 text-white focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-all text-sm"
                      >
                        <option value="Sponsorship & Partnership">Sponsorship & Industry Partnership</option>
                        <option value="Engineering Collaboration">Engineering & Technical R&D</option>
                        <option value="Student Recruitment">Student Recruitment / Application</option>
                        <option value="Press & Media">Press & Media Inquiry</option>
                        <option value="General Inquiry">General Inquiries</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Transmission Details <span className="text-[#f05423]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project specifications, sponsorship inquiries, or engineering questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#030811] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f05423] to-[#ff6b3d] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#f05423]/25 hover:opacity-95 active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting to Pod Command...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Dispatch Secure Transmission
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

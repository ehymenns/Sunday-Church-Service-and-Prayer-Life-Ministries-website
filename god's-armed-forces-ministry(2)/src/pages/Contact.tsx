import React from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="overflow-hidden relative">
      {/* Background Spectrum */}
      <div className="absolute top-0 left-0 w-full h-[600px] spectrum-path -z-10 skew-y-3 transform translate-y-[-100px]"></div>
      
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="font-headline text-secondary font-bold tracking-[0.2em] uppercase text-sm">Get In Touch</span>
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-primary leading-tight mt-4">
                The Outcome You Get From Our Service Will <span className="text-tertiary">Convince You</span>.
              </h1>
              <p className="text-xl text-on-surface-variant mt-6 max-w-lg leading-relaxed">
                Whether you seek spiritual guidance, prayer, or information about our weekly activities, God's Armed Forces is here to serve you.
              </p>
            </div>

            {/* Contact Details Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-8 rounded-xl space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <h3 className="font-headline font-bold text-lg">Visit Us</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Paramount Community, Guffanti Housing Estate Along Rounder Aiyetoro Road, Abeokuta, Ogun State
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl space-y-4">
                <span className="material-symbols-outlined text-secondary text-3xl">call</span>
                <h3 className="font-headline font-bold text-lg">Call Us</h3>
                <p className="text-on-surface-variant text-sm">
                  08062456851<br/>07055512584
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl space-y-4 md:col-span-2 flex items-center gap-6">
                <div className="bg-primary-container p-4 rounded-full">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg">Email Us</h3>
                  <p className="text-on-surface-variant">ogbuehi2016@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl shadow-xl border border-white/20">
              <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">Send a Prayer Request</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" 
                      placeholder="John Doe" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" 
                      placeholder="john@example.com" 
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Subject</label>
                  <select className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Counselling Session</option>
                    <option>Giving/Tithes</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline resize-none" 
                    placeholder="How can we pray for you today?" 
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-headline font-bold text-lg hover:bg-tertiary transition-all shadow-lg active:scale-[0.98]" type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container rounded-full -z-10 blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl relative h-[500px] group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Um7cLFPHJdkfA7yh3Hpcm9KkxOyq_x1LZ3BkGAqTmwl_pLJ_agp6aksyrEZBB0btnOCmVHZOCm2m0LL4t8LR6HECyTMogBbrkRycPK6llIMuk9da49chH6mQjRfCHxBnrIAqAIE1bHyuYHM95aXv40ZJt7CdXnIxs_AN3ZeRbuJkoG-pkCEFC9js-OrSWVAXmE7-InUYJ6u6K4q61T9ioP0-H9gqbCtMpMu1fXvW9Op6_VwvHcV2_X9pq_bEGZ2pvOIXNC1tmgjt" 
            alt="Location Map" 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 glass-card p-6 rounded-2xl max-w-sm">
            <h4 className="font-headline font-bold text-primary mb-2">Church Headquarters</h4>
            <p className="text-on-surface-variant text-sm">Find us at Paramount Community, Guffanti Housing Estate. We look forward to welcoming you.</p>
            <button className="mt-4 text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Open in Google Maps <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

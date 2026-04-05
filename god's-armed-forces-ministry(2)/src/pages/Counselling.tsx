import React from 'react';
import { motion } from 'motion/react';

export default function Counselling() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full spectrum-glow opacity-10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="inline-block bg-tertiary text-on-tertiary px-4 py-1.5 rounded-full text-xs font-headline font-bold uppercase tracking-widest mb-6">Spiritual Guidance</span>
              <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight mb-6">
                Counselling
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-8">
                In moments of uncertainty, spiritual counsel provides the clarity and strength needed to navigate life's challenges. Our ministers are here to offer prayerful support and biblical guidance for your soul's journey.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <span className="text-sm font-semibold text-on-surface">Your Confidentiality is assured</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-700">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgUPb6SRQGUbXdvQmXxAOFNVk_yEfDq6PG2pxjlQSQd9jfXJz89WbN8Yk9sY3h3FD0SjiDXmG3C5sAGM5PuZEjier67RIKXNO8YZN-n1FB3YJF_buV2OHzc0Zkvj7kSiCy5fiQvlt3M5wefwROa0nEwBoNgSQ2Uu_d4MlPdQ_dprfNKuFNPt6OTp4tsHyVkul4Ca3MLc6KYfrUOUN4mGaeCBfhtS0XGzEsN01u1F5hYYhTCL1zzADIQ9CPnY8gPXtt5Sbnm7l0W2IZ" 
                  alt="Counselling Session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="italic text-on-surface-variant font-body text-sm">
                  "In moments of uncertainty, spiritual counsel provides the clarity and strength needed to navigate life's challenges."
                </p>
                <p className="mt-2 font-headline font-bold text-primary">Galatians 6:2</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Counselling Form Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-container-lowest rounded-[2rem] shadow-sm p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="mb-12">
              <h3 className="text-3xl font-headline font-bold text-primary mb-2">Request Consultation</h3>
              <p className="text-on-surface-variant">Please fill out the form below with your details and specific needs for counselling.</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-headline font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Name of Client</label>
                <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Your full name" type="text"/>
              </div>
              <div>
                <label className="block text-sm font-headline font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Gender</label>
                <select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-headline font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Age</label>
                <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Enter your age" type="number"/>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-headline font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Purpose for Consulting Us</label>
                <textarea className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Briefly describe the reason for your request" rows={4}></textarea>
              </div>
              <div className="md:col-span-2 mt-8">
                <button className="w-full bg-primary text-on-primary font-headline font-extrabold text-lg py-5 rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
                  <span className="material-symbols-outlined">send</span>
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface-container-high rounded-[2rem] p-10 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-headline font-bold mb-4">Why Spiritual Counselling?</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Our approach combines biblical wisdom with practical compassion. Whether you are facing marital difficulties, career crossroads, or spiritual dryness, our dedicated team is trained to listen with empathy and guide with truth.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-surface overflow-hidden bg-surface-container">
                    <img 
                      src={`https://picsum.photos/seed/pastor${i}/100/100`} 
                      alt="Counselor" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-surface overflow-hidden bg-primary-container flex items-center justify-center text-primary font-bold text-sm">
                  +4
                </div>
              </div>
              <p className="text-sm self-center font-medium">Meet our dedicated ministerial counseling team</p>
            </div>
          </div>
          <div className="bg-secondary-container rounded-[2rem] p-10 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-6xl text-on-secondary-container mb-4">emergency</span>
            <h4 className="text-xl font-headline font-bold text-on-secondary-container mb-2">Emergency Prayer</h4>
            <p className="text-on-secondary-container/80 mb-6">Need immediate spiritual support?</p>
            <a className="bg-on-secondary-container text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity" href="tel:08062456851">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

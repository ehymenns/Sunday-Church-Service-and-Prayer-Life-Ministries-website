import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-12 pb-24 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-secondary/5"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-headline uppercase tracking-[0.2em] text-primary mb-4 text-sm font-bold">About Our Ministry</p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8">
                Sunday Church Service & <span className="text-primary">Prayer Life</span> Ministries International
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                A.K.A <span className="font-bold text-on-surface">God's Armed Forces</span>. We are a spiritual vanguard dedicated to the total restoration of souls through the power of fervent prayer and the word.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">verified</span>
                  Divine Authority
                </div>
                <div className="px-6 py-3 bg-tertiary-container text-on-tertiary-container rounded-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">volunteer_activism</span>
                  Community Driven
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 bg-surface-container-high">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc9h74ixuu6kQ4StNmp2ipc7z60Ih37x_TfeYebBreRG1wjOj-i2T7-dgTk240C32aUgI7dCA_0KIDnfIqaGfz5enp_Ne_8OO90lb0fkaNOg3nrOzr4iBzRm_xg9fGAv0vZHagAEbbe0oyIBGbtN_ABODb1xiPFU77-BJY1ihvoePngMoIFCoLOp5qMU7_d25UZjoDlZWWhgc8t8s_F3pgTPzuCQHGBuYfsByebU4SxV9MF3FTpRH__SiVp3L1KBXvAQeqjvyDmeIo" 
                  alt="Worship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl shadow-xl max-w-xs -rotate-2 border border-white/20">
                <p className="italic text-lg font-medium text-on-surface-variant mb-4">"The Outcome You Get From Our Service Will Convince You"</p>
                <p className="font-headline text-xs uppercase tracking-widest font-bold text-primary">— Our Motto</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Identity & Mission Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Our Identity */}
            <div className="md:col-span-7 bg-surface-container-lowest p-12 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold mb-6">Our Identity</h2>
                <p className="text-lg text-on-surface-variant leading-loose mb-8">
                  As God's Armed Forces, we identify as a militant spiritual body equipped for the rescue of the captive. We are not just a congregation; we are a disciplined movement of believers focused on spiritual warfare, holiness, and the manifestation of God's kingdom on earth.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-surface rounded-2xl">
                  <span className="block text-3xl font-black text-primary">25+</span>
                  <span className="text-xs font-headline uppercase text-slate-500">Years of Grace</span>
                </div>
                <div className="text-center p-4 bg-surface rounded-2xl">
                  <span className="block text-3xl font-black text-secondary">50k+</span>
                  <span className="text-xs font-headline uppercase text-slate-500">Restored Souls</span>
                </div>
                <div className="text-center p-4 bg-surface rounded-2xl">
                  <span className="block text-3xl font-black text-tertiary">12+</span>
                  <span className="text-xs font-headline uppercase text-slate-500">Global Missions</span>
                </div>
              </div>
            </div>

            {/* Total Restoration Mission */}
            <div className="md:col-span-5 spectrum-gradient p-1 rounded-[2.5rem]">
              <div className="bg-surface-container-lowest h-full w-full rounded-[2.4rem] p-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
                </div>
                <h2 className="text-3xl font-extrabold mb-4">Total Restoration</h2>
                <p className="font-headline text-primary font-bold tracking-widest uppercase mb-6">Our Mission</p>
                <p className="text-on-surface-variant leading-relaxed">
                  Our mandate is the total restoration of the human dignity and spiritual heritage through the accurate teaching of the word and the prophetic power of prayer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-secondary/20 rounded-full"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-surface-container-high">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHtLEafegowDNv27CmoKypqGopO_jszHESEy4SFmUe0PLuJwSF6jKrd7q3y0eYv3kWEPcRR_WedlPyKtmw1LXGeRxglB-DFnWoTGrL7c96M7FnztXq3HLxCd5uT4jX9s3mBWQHNdk9vIYKWdv198pqo8vId6ElTqsjlI9iCCpfacMCWLp5zzNUYgIscwrDKyk3xXeWZpOIorxiy9N9ps8ILS9AysmGoxCU5mGKhzix7KvUSczI_zOq94PYPWjwRD-9LArVrFDHdoD-" 
                  alt="The Pastor" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 spectrum-gradient rounded-full opacity-20 blur-xl"></div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-headline uppercase tracking-widest text-secondary mb-4 font-bold">Divine Leadership</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Guided by the <span className="text-primary">Spirit</span></h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-loose">
                <p>
                  Led by our Founder and President, our leadership team is committed to the apostolic mandate of building a prayerful generation. Under this visionary guidance, God's Armed Forces has grown into a global beacon of hope and restoration.
                </p>
                <p>
                  We believe in the priesthood of all believers and are dedicated to equipping every member of our "Army" with the spiritual weapons necessary for victory in every area of life.
                </p>
              </div>
              <div className="mt-12 flex gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all">
                  <span className="material-symbols-outlined">mail</span>
                  Contact Leadership
                </button>
                <button className="text-primary font-bold px-8 py-4 rounded-xl border border-primary/20 hover:bg-primary/5 transition-all">
                  Read Biographies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-24 text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA5SmDZTKBj7VrSiiwIwFBGX5yNBUPxCQmb2Z63u1yeJXySiSvoUI-SVT7yauQE-nl9z3qV34p-wwuOuUlmVaLgEVeXnut0rPBbGKKbxwrzgaQDcLFQSmXlC95zEL1I4THemBmPN9Lht2CxxnJ_Pdh6zYUvKkGeQ1wHNSUyflIajChot4FBkcDaWdBQ7Q2jL1LQ-KP-4wgQxzEv4Vtf7P_QSSV7A021nw91VmZ4_Zr9-_j3IV86noMVfbmQVRClC_w78bOXNko7IrS" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-surface to-surface"></div>
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[100px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto space-y-12"
        >
          <div className="space-y-6">
            <h2 className="font-extrabold font-headline leading-[1.1] text-on-surface text-4xl md:text-6xl lg:text-7xl max-w-5xl mx-auto">
              Sunday Church Service and <br className="hidden md:block"/>
              <span className="text-primary">Prayer Life Ministries International</span>
            </h2>
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="h-px w-12 md:w-20 bg-secondary"></div>
              <div className="bg-secondary-container/30 text-secondary border border-secondary/20 px-6 py-2 rounded-full font-bold text-sm md:text-lg tracking-[0.2em] uppercase">
                A.K.A God's Armed Forces
              </div>
              <div className="h-px w-12 md:w-20 bg-secondary"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto font-medium italic">
            "What God Cannot Do Through Us, Do Not Exist."
          </p>

          <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center pt-4">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-bold text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
              Join Our Next Service
            </button>
            <button className="bg-white border border-outline-variant/50 text-on-surface px-10 py-5 rounded-xl font-bold text-xl hover:bg-surface-container-low transition-all duration-300">
              Learn Our Vision
            </button>
          </div>

          {/* Founder Portrait */}
          <div className="relative pt-16 max-w-md mx-auto">
            <div className="relative z-20 bg-surface-container-lowest p-3 rounded-[2.5rem] shadow-2xl border border-white/50">
              <div className="rounded-[2rem] overflow-hidden aspect-[4/5] bg-surface-container">
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujp7-BaRB7bGZZJmmKw5B-hfTruiW_46Vr7K5QEXFZCJ_-HCSbqz8Zwhc82LVRy2qgxhMZO4GCRJQdwkrDQlqFIU1GRua_ifyjI6xboikJs00SViGhXJqexE5x3aLf4u4JP0ktYWQTEk8Nl5d4DHD7jOUhFmE3h9OKf_bLjzN8XXv1_96_Tuwhb3Q9Gd8kDuinF_vBLwkWoFdpk8i0VF43MA0FSwDESCF_U8iUDERTWoFccEADJRLVQi7sZLQya9IxE8EnwFFNDO8I" 
                  alt="Disciple Oguehi Sunday Eugene Ikechukwu" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-6 pb-2 px-6 text-left">
                <h3 className="text-2xl font-bold font-headline">Disciple Oguehi Sunday Eugene Ikechukwu</h3>
                <p className="text-secondary font-bold font-label text-sm uppercase tracking-[0.15em] mt-1">Founder & President</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-12 z-30 bg-tertiary text-on-tertiary p-8 rounded-3xl shadow-2xl max-w-xs -rotate-2 hidden md:block">
              <span className="material-symbols-outlined text-4xl block mb-2">format_quote</span>
              <p className="font-headline font-bold text-xl italic leading-tight">
                "The Outcome You Get From Our Service Will Convince You"
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Weekly Activities Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mb-4">Weekly Activities</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-on-surface-variant text-lg">Connect with us throughout the week for spiritual empowerment and soul refreshing sessions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sunday */}
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:bg-surface-bright transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="inline-block bg-tertiary text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">Sunday Service</div>
              <h3 className="text-3xl font-bold font-headline mb-4">Impartation Service</h3>
              <p className="text-on-surface-variant leading-relaxed">A grand celebration of worship, word, and divine impartation to start your week with fire.</p>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-surface-container">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="text-xl font-bold font-headline">9 - 11am</span>
            </div>
          </div>

          {/* Wednesday */}
          <div className="bg-surface-container-low p-8 rounded-3xl hover:bg-surface-bright transition-all duration-300">
            <div className="inline-block bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">Wednesday Service</div>
            <h3 className="text-2xl font-bold font-headline mb-3 leading-tight">Wealth and Power Impartation</h3>
            <p className="text-sm text-on-surface-variant mb-6">Midweek recharge focused on kingdom principles of success.</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
              <span className="font-bold text-sm">5:30 - 7:00PM</span>
            </div>
          </div>

          {/* Friday */}
          <div className="bg-surface-container-low p-8 rounded-3xl hover:bg-surface-bright transition-all duration-300">
            <div className="inline-block bg-yellow-500 text-on-surface px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">Friday Service</div>
            <h3 className="text-2xl font-bold font-headline mb-3 leading-tight">Voice of the Soul</h3>
            <p className="text-sm text-on-surface-variant mb-6">Deep spiritual connection and soul-winning ministrations.</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
              <span className="font-bold text-sm">5:30 - 7:00PM</span>
            </div>
          </div>

          {/* Last Day Vigil */}
          <div className="md:col-span-4 bg-primary text-on-primary p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB83rJD-3LDuENCtLbpK8eyFqyeQ2W9F2QOFeeYArd7KfX49eHaMbPfuG52byNO5W_EMemvVnNthqDHlcTIrWZAbydqwthuioypDVa9z9_wf_cCfu2QqB5T13mFljmZfbVkv0x-if0xO0f2o-GLbNfN8oZS5XRU45QIrdrm1rN-fR7VwPpmOPRayZSwm2LzitGx8E0xtTziajhesjf3kJvJj7skjv3QMTjJEhEAp1PhR_DZvxOVMPfphidi5xkw9MoG9jo88xw8Qmsr" 
                alt="Vigil Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary-container">nightlight</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-secondary-container">Monthly Event</span>
              </div>
              <h3 className="text-4xl font-extrabold font-headline">Last Day of Every Month</h3>
              <h4 className="text-3xl font-bold font-headline mt-2 text-secondary-container">Vigil</h4>
              <p className="text-lg opacity-90 mt-4 max-w-xl">Join us for a night of power as we transition into the new month with prophetic declarations and intense prayer.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <div className="bg-secondary-container text-on-secondary-container px-8 py-6 rounded-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-1">Time</p>
                <p className="text-3xl font-black font-headline">10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 spectrum-glow">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-8">auto_awesome</span>
          <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-on-surface mb-10 leading-tight">
            "What God Cannot Do <br className="hidden md:block"/> Through Us, <span className="text-tertiary">Do Not Exist</span>"
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-on-surface">Spiritual Empowerment</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-on-surface">Community Support</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-on-surface">Prophetic Direction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

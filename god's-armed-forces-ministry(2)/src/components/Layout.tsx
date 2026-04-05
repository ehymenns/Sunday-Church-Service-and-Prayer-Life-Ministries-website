import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Counselling', path: '/counselling' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-[0_20px_40px_rgba(25,28,28,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden bg-white shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApOGLBHniQDhSZO5Yue-mkMZi0Op96Per9xpFQvPX6G9j2bbBGbYeJ1p-_HV-0k22wypk_BJq2BySou8kyVDOckxDvo2BhmrhOwMlpZPGUqB_pUhgKY8c1fhUrWq65B__QnArGGwa840p6L0mktzfwLDzk-sZ3QI2i_ni4h9DkLidLi0YXjJ3_UKhHjTbkeOcN2e4Pecykm96t91lnXbu_WTla7dFhFFrJab4FuY6idsZ-a76KqY3RFZ8y1o-4Zu7_VJzuwJFgP4Jy" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-primary hidden sm:block">
            God's Armed Forces
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                location.pathname === link.path 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-on-surface-variant hover:text-tertiary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/counselling"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold active:scale-95 duration-150 transition-all hover:bg-tertiary shadow-sm text-sm"
        >
          Request Counselling
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-black font-headline">God's Armed Forces</h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Sunday Church Service and Prayer Life Ministries International. 
            Empowering believers for a life of dominion.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined text-sm">public</span>
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-secondary-container">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-white/80 hover:text-secondary-container transition-all text-sm">Home</Link></li>
            <li><Link to="/about" className="text-white/80 hover:text-secondary-container transition-all text-sm">About Us</Link></li>
            <li><Link to="/counselling" className="text-white/80 hover:text-secondary-container transition-all text-sm">Counselling</Link></li>
            <li><Link to="/contact" className="text-white/80 hover:text-secondary-container transition-all text-sm">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-secondary-container">Our Motto</h4>
          <p className="text-white/90 text-lg italic border-l-4 border-secondary-container pl-4 py-2">
            "The Outcome You Get From Our Service Will Convince You"
          </p>
          <div className="pt-4 flex flex-wrap gap-2">
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Sunday Service</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Prayer Life</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Armed Forces</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60 text-xs uppercase tracking-widest">
          © Sunday Church Service and Prayer Life Ministries International A.K.A God's Armed Forces. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

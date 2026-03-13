"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Tin tức', href: '#news' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'py-4 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo - Nodo Style Boldness */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-primary group-hover:bg-primary-hover rounded-2xl flex items-center justify-center text-white font-black text-2xl transition-all duration-300 shadow-xl shadow-primary/20 rotate-0 group-hover:-rotate-12">
              A
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white" />
            </div>
            <span className="text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">
              AMZ<span className="text-secondary">.</span>
            </span>
          </Link>

          {/* Desktop Nav - Clean & Modern */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-bold text-foreground/70 hover:text-primary transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            {/* CTA Button - Aigocy Black Button Style */}
            <Link 
              href="#contact" 
              className="px-8 py-3.5 bg-foreground text-white rounded-full font-bold text-sm hover:bg-primary hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10 flex items-center gap-2 group"
            >
              Liên hệ ngay
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-xl text-foreground shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col items-center justify-center p-8"
          >
            <button 
              className="absolute top-8 right-8 w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <nav className="flex flex-col gap-10 text-center">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl font-black hover:text-primary transition-colors tracking-tight"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  href="#contact" 
                  className="inline-block mt-4 px-12 py-5 bg-primary text-white rounded-full font-black text-xl shadow-2xl shadow-primary/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Liên hệ
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

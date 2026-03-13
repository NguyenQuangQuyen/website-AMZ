"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background text-foreground">
      {/* Background Glowing Orbs - Aigocy Style */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white border border-black/5 text-primary text-sm font-black mb-8 shadow-sm tracking-widest uppercase">
              <Sparkles size={16} /> Empowering Innovation
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-10 leading-[0.9] tracking-tighter">
              GIÁ TRỊ <br />
              <span className="text-primary italic">TẠO NÊN</span> <br />
              <span className="relative inline-block">
                KHÁC BIỆT
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-4 left-0 h-4 bg-secondary/40 -z-10 rounded-full" 
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              AMZ dẫn đầu trong việc cung cấp hệ sinh thái giải pháp công nghệ tiên tiến, 
              biến thách thức thành cơ hội thông qua trí tuệ nhân tạo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-foreground text-white rounded-full font-black text-lg hover:bg-primary transition-all duration-300 shadow-2xl shadow-black/20 flex items-center gap-3 group">
                Bắt đầu ngay <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>
              <button className="px-10 py-5 bg-white border-2 border-black/5 text-foreground rounded-full font-black text-lg hover:border-primary/20 transition-all duration-300 flex items-center gap-2">
                Xem Video <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ml-2"><div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-primary border-b-[6px] border-b-transparent ml-1" /></div>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/5 pt-12 w-full max-w-4xl"
          >
            {[
              { label: 'Dự án thành công', val: '50+' },
              { label: 'Đối tác tin cậy', val: '100+' },
              { label: 'Chuyên gia AI', val: '20+' },
              { label: 'Năm kinh nghiệm', val: '12+' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-black text-foreground mb-2">{stat.val}</span>
                <span className="text-xs text-foreground/40 font-bold uppercase tracking-widest text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements - Aigocy style */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[20%] left-[10%] hidden xl:block"
      >
        <div className="w-20 h-20 bg-white/40 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center transform -rotate-12">
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-secondary" />
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[20%] right-[10%] hidden xl:block"
      >
        <div className="w-24 h-24 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-xl flex items-center justify-center transform rotate-12">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
             <div className="w-6 h-1 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

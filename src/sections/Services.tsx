"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AppWindow, Globe, Smartphone, Settings2, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      num: '01',
      title: 'Sản phẩm ứng dụng',
      desc: 'Chương trình thiết kế đơn giản, thân thiện and bảo mật cao. Giúp tối ưu hóa and rút ngắn thời gian làm việc.',
      icon: <AppWindow size={40} className="text-primary group-hover:text-white transition-colors" />
    },
    {
      num: '02',
      title: 'Sản phẩm Online',
      desc: 'Website giao diện đẹp, độc đáo, sáng tạo. Hệ thống truy cập trực tiếp mang tính ứng dụng cao cho doanh nghiệp.',
      icon: <Globe size={40} className="text-secondary group-hover:text-white transition-colors" />
    },
    {
      num: '03',
      title: 'Ứng dụng Smartphone',
      desc: 'Thiết kế ứng dụng trên thiết bị thông minh, giúp người dùng tiếp cận sản phẩm mọi lúc mọi nơi.',
      icon: <Smartphone size={40} className="text-primary group-hover:text-white transition-colors" />
    },
    {
      num: '04',
      title: 'Sản phẩm đặc thù',
      desc: 'Nhận thiết kế các sản phẩm theo yêu cầu chuyên biệt của từng mô hình doanh nghiệp.',
      icon: <Settings2 size={40} className="text-secondary group-hover:text-white transition-colors" />
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background text-foreground">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Dịch vụ chúng tôi</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black leading-tight"
            >
              Chúng Tôi Cung Cấp Những <br />
              <span className="text-primary italic">Phần mềm Cao cấp</span>
            </motion.h2>
          </div>
          <p className="text-xl text-foreground/40 max-w-sm font-medium mb-4">
            Giải pháp công nghệ toàn diện giúp doanh nghiệp bứt phá trong kỷ nguyên số.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 bg-white border border-black/5 rounded-[3.5rem] hover:bg-foreground hover:border-foreground transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover Background Number */}
              <span className="absolute -bottom-4 -right-4 text-[10rem] font-black text-black/5 group-hover:text-white/5 transition-all duration-500 pointer-events-none uppercase">
                {item.num}
              </span>

              <div className="mb-10 w-20 h-20 bg-background rounded-3xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm relative z-10">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors tracking-tight relative z-10">
                {item.title}
              </h3>
              <p className="text-foreground/50 text-base leading-relaxed group-hover:text-white/60 transition-colors font-medium relative z-10">
                {item.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 relative z-10">
                Tìm hiểu thêm <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

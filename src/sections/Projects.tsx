"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Trục liên thông ESB',
      cat: 'Giải pháp hệ thống',
      desc: 'Cung cấp khả năng gọi dịch vụ đồng bộ/không đồng bộ liên thông hệ thống.',
      className: 'md:col-span-2 md:row-span-2',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    },
    {
      title: 'Nền tảng Backbase',
      cat: 'Ngân hàng số',
      desc: 'Giải pháp toàn diện cho ngân hàng tương tác trên nền tảng số.',
      className: 'md:col-span-1 md:row-span-1',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop'
    },
    {
      title: 'Chuyển đổi số',
      cat: 'Tư vấn chiến lược',
      desc: 'Thực hiện chuyển đổi số cho Giáo dục, Tài chính, Nha khoa...',
      className: 'md:col-span-1 md:row-span-1',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2064&auto=format&fit=crop'
    },
    {
      title: 'Cổng thanh toán',
      cat: 'Fintech',
      desc: 'Giải pháp an toàn, hạn chế rủi ro thanh toán trực tuyến.',
      className: 'md:col-span-3 md:row-span-1',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Dự án của chúng tôi</span>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black leading-tight"
            >
              Các Dự Án <span className="text-primary italic relative inline-block">Tiêu Biểu</span>
            </motion.h2>
          </div>
          <button className="px-10 py-5 bg-white/10 hover:bg-primary text-white backdrop-blur-md rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-xl flex items-center gap-3">
            Xem tất cả dự án <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[800px]">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5 ${item.className}`}
            >
              {/* Image with zoom effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent p-12 flex flex-col justify-end">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 py-2 px-6 rounded-full backdrop-blur-md border border-primary/20">
                    {item.cat}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                    <Plus size={32} />
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">{item.title}</h3>
                <p className="text-lg text-white/50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

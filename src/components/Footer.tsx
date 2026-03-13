"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white/50 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-10 group">
               <span className="text-4xl font-black text-white group-hover:text-primary transition-colors tracking-tighter">AMZ<span className="text-secondary">.</span></span>
            </Link>
            <p className="text-base leading-relaxed mb-10 font-medium">
              Dẫn đầu kỷ nguyên số với hệ sinh thái giải pháp công nghệ toàn diện và trí tuệ nhân tạo đột phá.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black text-xl mb-10 tracking-tight">Dịch vụ</h4>
            <ul className="space-y-5 text-base font-medium">
              <li><Link href="#services" className="hover:text-primary transition-colors">Phần mềm ứng dụng</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Giải pháp Web & Online</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Ứng dụng Smartphone</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Tư vấn Chuyển đổi số</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black text-xl mb-10 tracking-tight">Liên hệ</h4>
            <ul className="space-y-5 text-base font-medium">
              <li className="flex gap-3">
                <span className="text-primary font-black">A:</span> 
                44 Tràng Tiền, Hoàn Kiếm, HN
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-black">P:</span> 
                0965 279 666
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-black">E:</span> 
                info@amzet.vn
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black text-xl mb-10 tracking-tight">Download</h4>
            <p className="text-sm mb-8 font-medium">Trải nghiệm dịch vụ trên mọi nền tảng.</p>
            <div className="flex flex-col gap-4">
              <div className="h-16 bg-white/5 border border-white/5 rounded-2xl flex items-center px-6 cursor-pointer hover:bg-white/10 transition-all group">
                <div className="mr-4 text-2xl group-hover:scale-110 transition-transform"></div>
                <div className="text-[10px] uppercase font-black leading-tight">App Store <br/><span className="text-white text-base">Download</span></div>
              </div>
              <div className="h-16 bg-white/5 border border-white/5 rounded-2xl flex items-center px-6 cursor-pointer hover:bg-white/10 transition-all group">
                <div className="mr-4 text-2xl group-hover:scale-110 transition-transform">▶</div>
                <div className="text-[10px] uppercase font-black leading-tight">Google Play <br/><span className="text-white text-base">Get it on</span></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-medium">© 2024 AMZ Technology. All Rights Reserved.</p>
          <button 
            onClick={scrollToTop}
            className="w-16 h-16 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-primary/40 hover:-translate-y-2 transition-all duration-300"
          >
            <ArrowUp size={32} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Liên hệ</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Kết nối với <br />
              <span className="text-primary italic">chúng tôi Today</span>
            </h2>
            <p className="text-xl text-foreground/50 mb-12 max-w-xl font-medium">
              Bạn có ý tưởng hay dự án cần triển khai? Hãy để lại thông tin, đội ngũ của chúng tôi sẽ liên hệ tư vấn giải pháp tối ưu nhất.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 tracking-tight">Địa chỉ</h4>
                  <p className="text-foreground/40 text-sm font-medium">44 Tràng Tiền, Hoàn Kiếm, Hà Nội</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 tracking-tight">Số điện thoại</h4>
                  <p className="text-foreground/40 text-sm font-medium">0965 279 666</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0">
                  <Mail className="text-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 tracking-tight">Email</h4>
                  <p className="text-foreground/40 text-sm font-medium">info@amzet.vn</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 tracking-tight">Giờ làm việc</h4>
                  <p className="text-foreground/40 text-sm font-medium">8AM – 5PM (Thứ 2 - 6)</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="p-12 bg-background rounded-[3.5rem] border border-black/5 shadow-2xl shadow-black/5 relative overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-[200px] h-[200px] bg-primary/10 rounded-full blur-3xl -z-10" />
              
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest ml-1 text-foreground/40">Họ và tên</label>
                    <input type="text" className="w-full p-5 rounded-2xl bg-white border border-black/5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest ml-1 text-foreground/40">Email</label>
                    <input type="email" className="w-full p-5 rounded-2xl bg-white border border-black/5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" placeholder="email@example.com" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest ml-1 text-foreground/40">Lời nhắn</label>
                  <textarea rows={4} className="w-full p-5 rounded-2xl bg-white border border-black/5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" placeholder="Tôi muốn tư vấn về..." />
                </div>
                
                <button type="button" className="w-full py-6 bg-foreground text-white rounded-2xl font-black text-lg hover:bg-primary transition-all duration-300 shadow-xl shadow-black/10 flex items-center justify-center gap-3 group">
                  Gửi yêu cầu <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

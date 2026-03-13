"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Tầm nhìn',
      desc: 'Trở thành một công ty giàu mạnh; đổi mới sáng tạo; linh hoạt; cơ cấu tinh gọn; góp sức xây dựng đất nước.',
      icon: <Target className="text-white" size={32} />,
      color: 'bg-primary shadow-lg shadow-primary/30'
    },
    {
      title: 'Sứ mệnh',
      desc: 'Giúp khách hàng nhận thức được năng lực tiềm ẩn và nâng họ lên một tầm cao mới dựa trên sáng tạo.',
      icon: <Lightbulb className="text-white" size={32} />,
      color: 'bg-secondary shadow-lg shadow-secondary/30'
    },
    {
      title: 'Con người',
      desc: 'Nhân tố chính tạo nên thành công với đội ngũ được đào tạo theo tiêu chuẩn quốc tế (OCP, MCSE, CCSP...).',
      icon: <Users className="text-white" size={32} />,
      color: 'bg-foreground shadow-lg shadow-black/20'
    },
    {
      title: 'Giá trị cốt lõi',
      desc: 'Trung thực, cởi mở, tôn trọng và có trách nhiệm với khách hàng, đối tác và cộng đồng.',
      icon: <ShieldCheck className="text-white" size={32} />,
      color: 'bg-primary/80 shadow-lg shadow-primary/20'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-20" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Về chúng tôi</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Đội ngũ tư vấn <br />
              <span className="text-primary relative italic">
                hàng đầu
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20 rounded-full" />
              </span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed mb-10 max-w-xl font-medium">
              AMZ cung cấp cho khách hàng với các dịch vụ tư vấn hàng đầu. Chúng tôi tin rằng con người là nhân tố chính 
              tạo nên thành công.
            </p>
            
            <div className="p-10 bg-background rounded-[2.5rem] border border-black/5 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
               <p className="text-2xl font-black text-foreground italic leading-snug">
                "Mang lại cuộc sống thịnh vượng cho mọi thành viên và sự thành công đột phá cho khách hàng."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">AMZ</div>
                <div>
                   <p className="font-black text-sm uppercase tracking-widest">Ban lãnh đạo</p>
                   <p className="text-xs text-foreground/40 font-bold uppercase">Technology Agency</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {values.map((item, i) => (
              <div key={i} className="p-10 bg-white border border-black/5 rounded-[3rem] hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-foreground/50 text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

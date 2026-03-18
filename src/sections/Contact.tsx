"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 italic">
              STOP THINKING START DOING
            </h2>
            <p className="text-white/70 text-base leading-relaxed font-medium">
              Chúng tôi tự hào là công ty cung cấp dịch vụ hiện đại và uy tín
              hàng đầu tại Việt Nam. Hãy chia sẻ với chúng tôi những vấn đề mà
              doanh nghiệp của bạn đang gặp phải, chúng tôi sẵn sàng cung cấp
              các giải pháp và phần mềm hiện đại, tối ưu nhất cho bạn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-primary/30 flex items-center gap-3 shrink-0"
            >
              Liên hệ chúng tôi
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

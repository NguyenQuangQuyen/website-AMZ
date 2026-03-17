"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[450px] lg:min-h-screen flex items-center overflow-hidden pt-12 lg:pt-20 bg-[#001b3d] text-white" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#001b3d' }}>
      {/* CSS Override for Mobile Height - ensures desktop style is preserved but mobile is tight */}
      <style jsx>{`
        @media (max-width: 1023px) {
          section { min-height: 450px !important; height: 450px !important; }
          .hero-container { margin-top: 20px !important; }
          .hero-content { margin-left: 0 !important; justify-content: center !important; text-align: center; }
          .hero-text { max-width: 100% !important; }
          .hero-p { margin-left: auto !important; margin-right: auto !important; margin-bottom: 30px !important; }
        }
      `}</style>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner.png"
          alt="Technology Background"
          className="w-full h-full object-cover object-center opacity-80 lg:opacity-40"
        />
        {/* Transparent overlay for mobile to let image show fully, gradient for desktop */}
        <div className="absolute inset-0 bg-[#001b3d]/20 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001b3d]/90 via-[#001b3d]/60 to-transparent hidden lg:block" />
      </div>

      {/* Decorative Blue Squares - Top Left */}
      <div className="absolute top-[30%] left-[8%] z-10 hidden lg:flex flex-col gap-2">
        <div className="flex gap-2">
            <div className="w-10 h-10 bg-[#001b3d]/50 border border-white/5" />
            <div className="w-10 h-10 bg-[#1d75d9]" />
        </div>
        <div className="w-10 h-10 bg-[#1d75d9]/60" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 mt-10 hero-container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="flex hero-content" style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '10%' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl hero-text"
            style={{ maxWidth: '800px' }}
          >
            {/* White Pill Badge */}
            <div 
              style={{
                display: 'inline-block',
                padding: '8px 32px',
                borderRadius: '9999px',
                backgroundColor: '#ffffff',
                color: '#001b3d',
                fontSize: '12px',
                fontWeight: 900,
                marginBottom: '40px',
                boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em'
              }}
            >
              AMZ
            </div>
            
            <h1 
              style={{
                fontSize: 'clamp(40px, 8vw, 84px)',
                color: '#ffffff',
                fontWeight: 900,
                marginBottom: '32px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Giải pháp toàn diện,<br />
              dịch vụ <span style={{ color: '#1d75d9' }}>hoàn hảo.</span>
            </h1>

            <p 
              className="hero-p"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: '#ffffff',
                marginBottom: '48px',
                maxWidth: '650px',
                lineHeight: 1.6,
                fontWeight: 600
              }}
            >
              Chúng tôi luôn luôn tin tưởng và nỗ lực phấn đấu hết mình nhằm cung cấp các sản phẩm, 
              dịch vụ hoàn hảo mang lại giá trị cho khách hàng, cho xã hội.
            </p>
            
            {/* <div style={{ display: 'flex' }}>
              <a 
                href="#"
                style={{
                  padding: '16px 40px',
                  backgroundColor: '#1d75d9',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(29, 117, 217, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                PROFILE AMZ
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Bottom Centered Pill Tab */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 20
        }}
      >
      </div>
    </section>
  );
};

export default Hero;
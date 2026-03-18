"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

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
    { name: 'Trang chủ', href: '/', hasDropdown: false },
    { name: 'Giới thiệu', href: '#about', hasDropdown: false },
    { name: 'Dịch vụ & giải pháp', href: '#services', hasDropdown: false },
    { name: 'Dự án', href: '#projects', hasDropdown: false },
    { name: 'Tin tức', href: '#news', hasDropdown: false },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: '#ffffff',
          boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo - Left */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img 
                src="/images/logo header.svg" 
                alt="AMZ Logo" 
                style={{ height: '50px', width: 'auto' }} 
              />
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 16px',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#001b3d',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#1d75d9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#001b3d'; }}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={14} style={{ opacity: 0.5 }} />}
              </Link>
            ))}
          </nav>

          {/* Right Side - Language & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }} className="desktop-cta">
            <Link
              href="contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                backgroundColor: '#1d75d9',
                color: '#ffffff',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(29, 117, 217, 0.3)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1559a7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1d75d9'; }}
            >
              Liên hệ
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#001b3d',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Responsive CSS */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60, backgroundColor: '#ffffff' }}>
          <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid #f1f5f9' }}>
            <img 
              src="/images/logo header.svg" 
              alt="AMZ Logo" 
              style={{ height: '40px', width: 'auto' }} 
            />
            <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#001b3d' }}>
              <X size={26} />
            </button>
          </div>
          <nav style={{ padding: '24px' }}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{ display: 'block', padding: '16px 0', fontSize: '20px', fontWeight: 700, color: '#001b3d', textDecoration: 'none', borderBottom: '1px solid #f8fafc' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

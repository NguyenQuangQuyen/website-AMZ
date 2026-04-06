"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

const serviceItems = [
  { name: "Dịch vụ Viễn thông", href: "/services/vien-thong" },
  { name: "Giải pháp doanh nghiệp (Odoo)", href: "/services/odoo" },
  { name: "Tài chính – ngân hàng", href: "/services/tai-chinh-ngan-hang" },
  { name: "Cổng thanh toán", href: "/services/cong-thanh-toan" },
  { name: "Thương mại điện tử", href: "/services/thuong-mai-dien-tu" },
  { name: "Phát triển Blockchain", href: "/services/blockchain" },
];

const nangLucItems = [
  { name: "Phát triển Web App", href: "/services/phat-trien-web-app" },
  { name: "Lập trình Back End", href: "/services/lap-trinh-back-end" },
  { name: "Lập trình Front End", href: "/services/lap-trinh-front-end" },
  { name: "Lập Trình Mobile", href: "/services/lap-trinh-mobile" },
  { name: "Giải pháp lưu trữ", href: "/services/giai-phap-luu-tru" },
  { name: "BigData", href: "/services/bigdata" },
];

const aboutItems = [
  { name: "Về chúng tôi", href: "/about", highlight: true },
  { name: "Tại sao chọn AMZ?", href: "/about/tai-sao-chon-amz" },
  { name: "Năng lực", href: "#", hasSubmenu: true },
];

const newsItems = [
  { name: "Tin nội bộ", href: "/news/tin-noi-bo", highlight: true },
  { name: "Tuyển dụng", href: "/news/tuyen-dung" },
];

// Generic dropdown hook
function useDropdown() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const open_ = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const close_ = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };
  return { open, open_, close_, setOpen };
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = useDropdown();
  const about = useDropdown();
  const news = useDropdown();
  const [nangLucOpen, setNangLucOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownStyle = (open: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    minWidth: "260px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
    borderTop: "3px solid #1d75d9",
    overflow: "visible",
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(-8px)",
    pointerEvents: open ? "auto" : "none",
    transition: "opacity 0.22s ease, transform 0.22s ease",
    zIndex: 100,
  });

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#ffffff",
          boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <img
              src="/images/logo header.svg"
              alt="AMZ Logo"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            className="desktop-nav"
          >
            {/* Trang chủ */}
            <NavLink href="/">Trang chủ</NavLink>

            {/* Giới thiệu dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={about.open_}
              onMouseLeave={() => {
                about.close_();
                setNangLucOpen(false);
              }}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: about.open ? "#1d75d9" : "#001b3d",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
              >
                Giới thiệu
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 0.25s ease",
                    transform: about.open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div style={dropdownStyle(about.open)}>
                {aboutItems.map((item, i) =>
                  item.hasSubmenu ? (
                    <div
                      key={i}
                      style={{ position: "relative" }}
                      onMouseEnter={() => setNangLucOpen(true)}
                      onMouseLeave={() => setNangLucOpen(false)}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 24px",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: nangLucOpen ? "#1d75d9" : "#001b3d",
                          background: nangLucOpen ? "#f0f7ff" : "transparent",
                          borderBottom: "1px solid #f1f5f9",
                          cursor: "pointer",
                          transition: "color 0.18s, background 0.18s",
                        }}
                      >
                        <span>{item.name}</span>
                        <ChevronRight size={14} />
                      </div>
                      {/* Submenu */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "100%",
                          minWidth: "220px",
                          background: "#fff",
                          borderRadius: "10px",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                          borderTop: "3px solid #1d75d9",
                          overflow: "hidden",
                          opacity: nangLucOpen ? 1 : 0,
                          transform: nangLucOpen
                            ? "translateX(4px)"
                            : "translateX(-4px)",
                          pointerEvents: nangLucOpen ? "auto" : "none",
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                          zIndex: 101,
                        }}
                      >
                        {nangLucItems.map((s, j) => (
                          <DropdownItem
                            key={j}
                            href={s.href}
                            onClose={() => {
                              about.setOpen(false);
                              setNangLucOpen(false);
                            }}
                          >
                            {s.name}
                          </DropdownItem>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <DropdownItem
                      key={i}
                      href={item.href}
                      onClose={() => about.setOpen(false)}
                      highlight={item.highlight}
                    >
                      {item.name}
                    </DropdownItem>
                  ),
                )}
              </div>
            </div>

            {/* Dịch vụ & giải pháp dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={services.open_}
              onMouseLeave={services.close_}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: services.open ? "#1d75d9" : "#001b3d",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
              >
                Dịch vụ &amp; giải pháp
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 0.25s ease",
                    transform: services.open
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>
              <div style={dropdownStyle(services.open)}>
                {serviceItems.map((s, i) => (
                  <DropdownItem
                    key={i}
                    href={s.href}
                    onClose={() => services.setOpen(false)}
                  >
                    {s.name}
                  </DropdownItem>
                ))}
              </div>
            </div>

            {/* Dự án */}
            <NavLink href="/projects">Dự án</NavLink>

            {/* Tin tức dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={news.open_}
              onMouseLeave={news.close_}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: news.open ? "#1d75d9" : "#001b3d",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
              >
                Tin tức
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 0.25s ease",
                    transform: news.open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div style={dropdownStyle(news.open)}>
                {newsItems.map((s, i) => (
                  <DropdownItem
                    key={i}
                    href={s.href}
                    onClose={() => news.setOpen(false)}
                  >
                    {s.name}
                  </DropdownItem>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexShrink: 0,
            }}
            className="desktop-cta"
          >
            <Link
              href="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                backgroundColor: "#1d75d9",
                color: "#ffffff",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(29,117,217,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1559a7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1d75d9";
              }}
            >
              Liên hệ <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            style={{
              display: "none",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              color: "#001b3d",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          backgroundColor: "#ffffff",
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          <img
            src="/images/logo header.svg"
            alt="AMZ Logo"
            style={{ height: "40px", width: "auto" }}
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#001b3d",
            }}
          >
            <X size={26} />
          </button>
        </div>
        <nav
          style={{
            padding: "24px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 80px)",
          }}
        >
          {[
            { name: "Trang chủ", href: "/" },
            { name: "Giới thiệu", href: "#about" },
            { name: "Về chúng tôi", href: "#about" },
            { name: "Tại sao chọn AMZ?", href: "#about" },
            { name: "Dịch vụ & giải pháp", href: "#services" },
            ...serviceItems,
            { name: "Dự án", href: "/projects" },
            { name: "Tin tức", href: "#news" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              style={{
                display: "block",
                padding: "14px 0",
                fontSize: serviceItems.includes(
                  item as (typeof serviceItems)[0],
                )
                  ? "15px"
                  : "18px",
                fontWeight: 700,
                color: serviceItems.includes(item as (typeof serviceItems)[0])
                  ? "#6b7280"
                  : "#001b3d",
                textDecoration: "none",
                borderBottom: "1px solid #f8fafc",
                paddingLeft: serviceItems.includes(
                  item as (typeof serviceItems)[0],
                )
                  ? "16px"
                  : "0",
                transform: isMobileMenuOpen
                  ? "translateX(0)"
                  : "translateX(40px)",
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: `transform 0.3s ease ${i * 0.03 + 0.1}s, opacity 0.3s ease ${i * 0.03 + 0.1}s`,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "24px",
              padding: "14px 32px",
              backgroundColor: "#1d75d9",
              color: "#ffffff",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              transform: isMobileMenuOpen
                ? "translateX(0)"
                : "translateX(40px)",
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: "transform 0.3s ease 0.5s, opacity 0.3s ease 0.5s",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Liên hệ <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </>
  );
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "8px 16px",
        fontSize: "18px",
        fontWeight: 700,
        color: hovered ? "#1d75d9" : "#001b3d",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

function DropdownItem({
  href,
  children,
  onClose,
  highlight,
}: {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
  highlight?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        padding: "14px 24px",
        fontSize: "15px",
        fontWeight: 700,
        color: highlight ? "#1d75d9" : hovered ? "#1d75d9" : "#001b3d",
        textDecoration: "none",
        background: hovered ? "#f0f7ff" : "transparent",
        borderBottom: "1px solid #f1f5f9",
        transition: "color 0.18s, background 0.18s",
      }}
    >
      {children}
    </Link>
  );
}

export default Header;

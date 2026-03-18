"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: "#001b3d", overflow: "hidden" }}>

      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/images/banner.png" alt="Banner" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,27,61,0.92) 0%, rgba(0,27,61,0.65) 55%, rgba(0,27,61,0.15) 100%)" }} />
      </div>

      {/* Decorative squares — desktop only */}
      <div className="hero-deco" style={{ position: "absolute", top: "30%", left: "6%", zIndex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ width: "40px", height: "40px", background: "rgba(0,27,61,0.5)", border: "1px solid rgba(255,255,255,0.05)" }} />
          <div style={{ width: "40px", height: "40px", background: "#1d75d9" }} />
        </div>
        <div style={{ width: "40px", height: "40px", background: "rgba(29,117,217,0.6)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          {/* Badge */}
          <div style={{ display: "inline-block", padding: "8px 32px", borderRadius: "9999px", backgroundColor: "#ffffff", color: "#001b3d", fontSize: "12px", fontWeight: 900, marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.2em", boxShadow: "0 10px 30px rgba(255,255,255,0.15)" }}>
            AMZ
          </div>

          <h1 style={{ fontSize: "clamp(32px, 6vw, 84px)", color: "#ffffff", fontWeight: 900, marginBottom: "24px", lineHeight: 1.1, letterSpacing: "-0.02em", fontFamily: "Montserrat, sans-serif" }}>
            Giải pháp toàn diện,<br />
            dịch vụ <span style={{ color: "#1d75d9" }}>hoàn hảo.</span>
          </h1>

          <p style={{ fontSize: "clamp(15px, 1.8vw, 20px)", color: "rgba(255,255,255,0.85)", marginBottom: "40px", maxWidth: "580px", lineHeight: 1.7, fontWeight: 500 }}>
            Chúng tôi luôn luôn tin tưởng và nỗ lực phấn đấu hết mình nhằm cung cấp các sản phẩm, dịch vụ hoàn hảo mang lại giá trị cho khách hàng, cho xã hội.
          </p>

          <a href="contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 36px", backgroundColor: "#1d75d9", color: "#fff", borderRadius: "9999px", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", boxShadow: "0 4px 20px rgba(29,117,217,0.45)", transition: "background-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#155eb0")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1d75d9")}
          >
            Liên hệ ngay
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-deco { display: flex; }
        .hero-content { margin-left: 10%; max-width: 700px; }
        @media (max-width: 1024px) {
          .hero-content { margin-left: 0; max-width: 100%; }
        }
        @media (max-width: 768px) {
          .hero-deco { display: none !important; }
          .hero-content { text-align: center; }
          .hero-content p { margin-left: auto; margin-right: auto; }
          .hero-content a { margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

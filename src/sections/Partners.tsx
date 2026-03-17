"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { src: "/images/logo_fpt-1.png", alt: "FPT" },
  { src: "/images/logo_cmc-1.png", alt: "CMC" },
  { src: "/images/logo_mobiphone-1.png", alt: "MobiFone" },
  { src: "/images/logo_vinaphone-1.png", alt: "VinaPhone" },
  { src: "/images/logo_tp_bank-1.png", alt: "TPBank" },
  { src: "/images/logo_sun_group-1.png", alt: "Sun Group" },
];

// Duplicate for seamless loop
const looped = [...partners, ...partners];

export default function Partners() {
  return (
    <section style={{ background: "#f8fafc", padding: "64px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span style={{
            background: "#001b3d", color: "#fff", borderRadius: "9999px",
            padding: "8px 28px", fontSize: "14px", fontWeight: 600,
            letterSpacing: "0.05em", display: "inline-block", marginBottom: "20px",
          }}>
            Đối tác của chúng tôi
          </span>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 38px)", fontFamily: "Montserrat, sans-serif",
            fontWeight: 700, color: "#001b3d", margin: 0,
          }}>
            Được tin tưởng bởi các{" "}
            <span style={{ color: "#1d75d9" }}>doanh nghiệp hàng đầu</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        <div className="partners-fade-left" />
        <div className="partners-fade-right" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: "48px", width: "max-content", alignItems: "center" }}
        >
          {looped.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px 36px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "160px",
                height: "80px",
                flexShrink: 0,
              }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={48}
                style={{ objectFit: "contain", filter: "grayscale(30%)", maxHeight: "48px", width: "auto" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

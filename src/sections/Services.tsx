"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8h.01M11 8h6M7 12h10" /></svg>),
    title: "Giải pháp doanh nghiệp",
    desc: "Chúng tôi cung cấp giải pháp ERP toàn diện và phù hợp, giúp doanh nghiệp tối ưu quy trình, tối ưu nguồn lực, quản lý hiệu quả tài nguyên và nâng cao năng suất.",
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>),
    title: "Dịch vụ viễn thông",
    desc: "Cung cấp cho nhà mạng các giải pháp như VoIP, Roaming, các hệ thống Billing, BSS/OSS... giúp các nhà mạng đạt được nhiều lợi ích về hoạt động kinh doanh.",
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" /></svg>),
    title: "Ngân hàng số",
    desc: "AMZ đồng hành cùng nhiều ngân hàng trong quá trình chuyển đổi số với các giải pháp tổng thể, chất lượng, đáp ứng các tiêu chuẩn khắt khe nhất về công nghệ và nguồn lực.",
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h4" /></svg>),
    title: "Cổng thanh toán",
    desc: "Đối với lĩnh vực thanh toán, AMZ cung cấp giải pháp Payment Gateway mạnh về bảo mật, đa dạng về hình thức thanh toán bao gồm cả ngân hàng, ví điện tử, ngân hàng số...",
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    title: "An ninh mạng",
    desc: "Cung cấp các giải pháp bảo mật toàn diện, bảo vệ hệ thống và dữ liệu doanh nghiệp trước các mối đe dọa mạng ngày càng tinh vi, đảm bảo hoạt động liên tục và an toàn.",
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>),
    title: "Phân tích dữ liệu",
    desc: "Khai thác sức mạnh của dữ liệu lớn với các giải pháp phân tích thông minh, giúp doanh nghiệp đưa ra quyết định chính xác và nhanh chóng dựa trên dữ liệu thực tế.",
  },
];

const PAGE_SIZE = 4;
const totalPages = Math.ceil(services.length / PAGE_SIZE);

export default function Services() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > page ? 1 : -1);
    setPage(next);
  };

  const visible = services.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section style={{ background: "linear-gradient(135deg,#e8edf5 0%,#f0f4fa 50%,#dde4f0 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "300px", height: "300px", background: "rgba(200,210,230,0.4)", transform: "rotate(15deg)" }} />
        <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "250px", height: "250px", background: "rgba(200,210,230,0.3)", transform: "rotate(-10deg)" }} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <span style={{ background: "#001b3d", color: "#fff", borderRadius: "9999px", padding: "8px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em" }}>
            Dịch vụ cốt lõi
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", fontSize: "clamp(28px,4vw,44px)", fontFamily: "Montserrat,sans-serif", fontWeight: 700, color: "#001b3d", marginBottom: "48px" }}
        >
          Giải Pháp <span style={{ color: "#1d75d9" }}>Vượt Trội</span>
        </motion.h2>

        <div style={{ overflow: "hidden" }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={{
                enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d * -60, opacity: 0 }),
              }}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="services-grid"
            >
              {visible.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={{
                    rest: { y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
                    hover: { y: -8, boxShadow: "0 20px 40px rgba(29,117,217,0.35)" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ background: "#1a2332", borderRadius: "16px", padding: "32px 24px", display: "flex", flexDirection: "column", gap: "16px", cursor: "pointer", position: "relative", overflow: "hidden" }}
                >
                  {/* Glow top border on hover */}
                  <motion.div
                    variants={{ rest: { scaleX: 0, opacity: 0 }, hover: { scaleX: 1, opacity: 1 } }}
                    transition={{ duration: 0.3 }}
                    style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#1d75d9,#0dcaf0)", transformOrigin: "left", borderRadius: "16px 16px 0 0" }}
                  />
                  <motion.div
                    variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.12, rotate: 8 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    style={{ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg,#1d75d9,#0dcaf0)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                    {s.icon}
                  </motion.div>
                  <h3 style={{ color: "#fff", fontSize: "17px", fontWeight: 700, fontFamily: "Montserrat,sans-serif", margin: 0 }}>{s.title}</h3>
                  <p style={{ color: "#a0aec0", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "32px" }}>
          <button onClick={() => go(page - 1)} disabled={page === 0} aria-label="Trước"
            style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid #001b3d", background: "transparent", color: "#001b3d", cursor: page === 0 ? "not-allowed" : "pointer", opacity: page === 0 ? 0.3 : 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Trang ${i + 1}`}
                style={{ width: i === page ? "32px" : "8px", height: "8px", borderRadius: "9999px", background: i === page ? "#1d75d9" : "#b0bec5", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
            ))}
          </div>
          <button onClick={() => go(page + 1)} disabled={page === totalPages - 1} aria-label="Tiếp theo"
            style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid #001b3d", background: "transparent", color: "#001b3d", cursor: page === totalPages - 1 ? "not-allowed" : "pointer", opacity: page === totalPages - 1 ? 0.3 : 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const reasons = [
  "AMZ cung cấp các giải pháp tổng thể về Quản lý đầu tư, Quản lý tín cước, Quản lý dịch vụ GTGT. Các hệ thống phần mềm nghiệp vụ hỗ trợ các doanh nghiệp viễn thông.",
  "Với các giải pháp về Phần mềm lõi cho ngân hàng (Core Banking), Chấm điểm tín dụng, Internet Banking, Chứng khoán... AMZ sẽ làm hài lòng các đối tác khó tính nhất.",
  "Nếu quý doanh nghiệp đang tìm một giải pháp cho việc quản trị doanh nghiệp, Gói giải pháp ERP với rất nhiều chức năng của AMZ sẽ không làm quý doanh nghiệp thất vọng.",
];

const capabilities = [
  { icon: "🌐", label: "Phát triển Web App" },
  { icon: "📱", label: "Phát triển Mobile App" },
  { icon: "👤", label: "Lập trình Front-end" },
  { icon: "⚙️", label: "Lập trình Back-end" },
  { icon: "✅", label: "Kiểm thử phần mềm" },
  { icon: "🗄️", label: "BigData" },
  { icon: "🤖", label: "AI & IoT" },
  { icon: "₿", label: "Cryptocurrency" },
];

export default function WhyUs() {
  return (
    <section style={{ background: "#fff", padding: "80px 0", overflow: "hidden" }}>
      <div className="whyus-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ marginBottom: "24px" }}>
            <span style={{ background: "#001b3d", color: "#fff", borderRadius: "9999px", padding: "8px 24px", fontSize: "14px", fontWeight: 600 }}>
              Tại sao chọn chúng tôi?
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontFamily: "Montserrat,sans-serif", fontWeight: 700, color: "#b0bec5", lineHeight: 1.2, marginBottom: "20px" }}>
            Chúng tôi là <span style={{ color: "#1d75d9" }}>Chuyên gia</span><br />hàng đầu về CNTT
          </h2>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px" }}>
            Chúng tôi luôn luôn tin tưởng và nỗ lực phấn đấu hết mình nhằm cung cấp các sản phẩm, dịch vụ hoàn hảo mang lại giá trị cho khách hàng, cho xã hội.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ minWidth: "28px", height: "28px", borderRadius: "50%", background: i === 0 ? "#e53e3e" : i === 1 ? "#1d75d9" : "#38a169", color: "#fff", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {i + 1}
                </div>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{r}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ marginBottom: "24px" }}>
            <span style={{ background: "#1d75d9", color: "#fff", borderRadius: "9999px", padding: "8px 24px", fontSize: "14px", fontWeight: 600 }}>
              Năng lực chuyên môn
            </span>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -7, boxShadow: "0 16px 36px rgba(29,117,217,0.4)" }}
                style={{ background: "#1a2332", borderRadius: "12px", padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.2)", transition: "box-shadow 0.3s" }}
              >
                {/* top glow line */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,#1d75d9,#0dcaf0)", transformOrigin: "left", borderRadius: "12px 12px 0 0" }}
                />
                <motion.div
                  whileHover={{ scale: 1.18, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 16 }}
                  style={{ width: "52px", height: "52px", borderRadius: "12px", background: "linear-gradient(135deg,#1d75d9,#0dcaf0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                  {c.icon}
                </motion.div>
                <motion.span
                  whileHover={{ color: "#0dcaf0" }}
                  transition={{ duration: 0.2 }}
                  style={{ fontSize: "14px", fontWeight: 600, textAlign: "center", fontFamily: "Montserrat,sans-serif", color: "#ffffff" }}>
                  {c.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

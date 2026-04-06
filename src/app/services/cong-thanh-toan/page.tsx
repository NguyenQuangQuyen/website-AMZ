"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/sections/Partners";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const benefits = [
  {
    icon: "🔒",
    title: "Bảo mật chuẩn PCI DSS",
    desc: "Tuân thủ tiêu chuẩn bảo mật quốc tế PCI DSS Level 1, mã hóa dữ liệu end-to-end, bảo vệ thông tin thẻ tuyệt đối.",
  },
  {
    icon: "⚡",
    title: "Xử lý tốc độ cao",
    desc: "Xử lý hàng triệu giao dịch mỗi ngày với độ trễ dưới 100ms, uptime 99.99%, không gián đoạn dịch vụ.",
  },
  {
    icon: "🌐",
    title: "Đa phương thức thanh toán",
    desc: "Hỗ trợ thẻ tín dụng, thẻ ghi nợ, ví điện tử, QR code, chuyển khoản ngân hàng và thanh toán quốc tế.",
  },
  {
    icon: "📊",
    title: "Báo cáo thời gian thực",
    desc: "Dashboard quản lý giao dịch trực quan, báo cáo doanh thu theo thời gian thực, xuất báo cáo đa định dạng.",
  },
  {
    icon: "🔗",
    title: "Tích hợp dễ dàng",
    desc: "API RESTful chuẩn, SDK đa nền tảng (iOS, Android, Web), tài liệu kỹ thuật đầy đủ, hỗ trợ tích hợp 24/7.",
  },
  {
    icon: "🛡",
    title: "Chống gian lận thông minh",
    desc: "AI phát hiện giao dịch bất thường theo thời gian thực, giảm 70% tỷ lệ gian lận, bảo vệ doanh nghiệp tối đa.",
  },
];

const paymentMethods = [
  { name: "Visa / Mastercard", icon: "💳" },
  { name: "JCB / Amex", icon: "💳" },
  { name: "Napas", icon: "🏦" },
  { name: "MoMo", icon: "📱" },
  { name: "ZaloPay", icon: "📱" },
  { name: "VNPay QR", icon: "📷" },
  { name: "Internet Banking", icon: "🌐" },
  { name: "Apple Pay / Google Pay", icon: "📲" },
];

const flowSteps = [
  {
    step: "01",
    title: "Khách hàng đặt hàng",
    desc: "Khách hàng chọn sản phẩm và tiến hành thanh toán trên website/app của merchant.",
  },
  {
    step: "02",
    title: "Chuyển đến Payment Gateway",
    desc: "Hệ thống chuyển hướng đến trang thanh toán bảo mật của AMZ Payment Gateway.",
  },
  {
    step: "03",
    title: "Xác thực & Xử lý",
    desc: "Gateway xác thực thông tin, kết nối ngân hàng phát hành, xử lý giao dịch real-time.",
  },
  {
    step: "04",
    title: "Phản hồi kết quả",
    desc: "Kết quả giao dịch được trả về merchant và thông báo đến khách hàng tức thì.",
  },
  {
    step: "05",
    title: "Quyết toán",
    desc: "Tiền được chuyển vào tài khoản merchant theo chu kỳ quyết toán đã thỏa thuận.",
  },
];

export default function CongThanhToanPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero Banner ── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #0a1628 0%, #001b3d 60%, #0d2a4a 100%)",
            paddingTop: "120px",
            paddingBottom: "48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "8%",
              top: "30%",
              width: "32px",
              height: "32px",
              background: "#1d75d9",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "11%",
              top: "55%",
              width: "22px",
              height: "22px",
              background: "rgba(29,117,217,0.4)",
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              color: "#fff",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            Cổng thanh toán
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#94a3b8",
            }}
          >
            <Link href="/" className="project-detail-breadcrumb-link">
              Trang chủ
            </Link>
            <span>›</span>
            <Link href="/#services" className="project-detail-breadcrumb-link">
              Dịch vụ
            </Link>
            <span>›</span>
            <span style={{ color: "#fff" }}>Cổng thanh toán</span>
          </motion.div>
        </div>

        {/* ── Banner image ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=80"
            alt="Payment Gateway"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,27,61,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "13px",
                  marginBottom: "8px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Giải pháp
              </p>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(24px, 4vw, 40px)",
                  fontWeight: 900,
                  margin: 0,
                }}
              >
                Giải Pháp <span style={{ color: "#1d75d9" }}>Thanh Toán</span>{" "}
                Trực Tuyến
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ── Giới thiệu Payment Gateway ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#fff" }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="service-intro-grid"
          >
            <motion.div variants={fadeUp}>
              <h2
                style={{
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  marginBottom: "16px",
                }}
              >
                Giải pháp Cổng thanh toán trực tuyến (Payment Gateway) từ AMZ
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4b5563",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
              >
                AMZ cung cấp giải pháp cổng thanh toán trực tuyến toàn diện,
                giúp doanh nghiệp chấp nhận thanh toán từ mọi phương thức phổ
                biến nhất hiện nay. Hệ thống được xây dựng trên nền tảng công
                nghệ hiện đại, đảm bảo an toàn bảo mật tuyệt đối và trải nghiệm
                thanh toán mượt mà cho khách hàng.
              </p>
              <p
                style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.85 }}
              >
                Với kinh nghiệm triển khai cho hàng trăm doanh nghiệp từ startup
                đến tập đoàn lớn, AMZ Payment Gateway là lựa chọn tin cậy cho
                mọi quy mô kinh doanh.
              </p>
            </motion.div>

            {/* Payment Gateway logo card */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid #e5e7eb",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 900,
                      letterSpacing: "-1px",
                    }}
                  >
                    <span style={{ color: "#1d75d9" }}>PAYMENT</span>
                    <span style={{ color: "#f59e0b" }}>GATEWAY</span>
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "12px",
                  }}
                >
                  {paymentMethods.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#fff",
                        borderRadius: "8px",
                        padding: "10px 6px",
                        border: "1px solid #e5e7eb",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{m.icon}</span>
                      <span
                        style={{
                          fontSize: "9px",
                          color: "#6b7280",
                          textAlign: "center",
                          lineHeight: 1.3,
                        }}
                      >
                        {m.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Nghiệp vụ chính — Flow diagram ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#f8fafc" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 800,
                color: "#001b3d",
                marginBottom: "8px",
              }}
            >
              Nghiệp vụ chính của Cổng thanh toán trực tuyến mà AMZ mang đến
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "48px",
              }}
            >
              Quy trình xử lý giao dịch thanh toán được thiết kế tối ưu, đảm bảo
              an toàn và tốc độ.
            </motion.p>

            {/* Flow steps */}
            <motion.div variants={stagger} style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "28px",
                  top: "28px",
                  bottom: "28px",
                  width: "2px",
                  background: "linear-gradient(to bottom, #1d75d9, #6c3fc5)",
                  borderRadius: "1px",
                }}
                className="flow-line-desktop"
              />

              {flowSteps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                    marginBottom: "32px",
                    position: "relative",
                  }}
                >
                  {/* Step circle */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "#1d75d9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "14px",
                      boxShadow: "0 4px 16px rgba(29,117,217,0.35)",
                      zIndex: 1,
                    }}
                  >
                    {s.step}
                  </div>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      padding: "20px 24px",
                      flex: 1,
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#001b3d",
                        fontSize: "15px",
                        marginBottom: "6px",
                      }}
                    >
                      {s.title}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#4b5563",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Architecture diagram placeholder */}
            <motion.div
              variants={fadeUp}
              style={{
                marginTop: "48px",
                background: "#fff",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid #e5e7eb",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: "#001b3d",
                  fontSize: "15px",
                  marginBottom: "24px",
                }}
              >
                Kiến trúc hệ thống Payment Gateway
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "0",
                  alignItems: "center",
                }}
              >
                {[
                  { label: "Merchant", icon: "🏪", color: "#eff6ff" },
                  { label: "→", icon: "", color: "transparent" },
                  { label: "Payment Gateway", icon: "⚙", color: "#dbeafe" },
                  { label: "→", icon: "", color: "transparent" },
                  { label: "Ngân hàng", icon: "🏦", color: "#eff6ff" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ textAlign: "center", padding: "16px 8px" }}
                  >
                    {item.icon && item.icon !== "" ? (
                      <div
                        style={{
                          background: item.color,
                          borderRadius: "12px",
                          padding: "16px",
                          marginBottom: "8px",
                        }}
                      >
                        <span style={{ fontSize: "28px" }}>{item.icon}</span>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#001b3d",
                            margin: "8px 0 0",
                          }}
                        >
                          {item.label}
                        </p>
                      </div>
                    ) : (
                      <span
                        style={{
                          fontSize: "24px",
                          color: "#1d75d9",
                          fontWeight: 700,
                        }}
                      >
                        {item.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "12px",
                  marginTop: "24px",
                  paddingTop: "24px",
                  borderTop: "1px solid #f1f5f9",
                }}
              >
                {["Visa/MC", "Napas", "MoMo", "ZaloPay"].map((b, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8fafc",
                      borderRadius: "8px",
                      padding: "10px",
                      textAlign: "center",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#374151",
                      }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Lợi ích ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 800,
                color: "#001b3d",
                marginBottom: "8px",
              }}
            >
              Lợi ích của doanh nghiệp triển khai giải pháp Payment Gateway của{" "}
              <span style={{ color: "#1d75d9" }}>AMZ</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "40px",
              }}
            >
              Giải pháp toàn diện giúp doanh nghiệp tối ưu hóa quy trình thanh
              toán và tăng doanh thu.
            </motion.p>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
              className="service-3col-grid"
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "12px",
                    padding: "24px",
                    border: "1px solid #e5e7eb",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 8px 24px rgba(29,117,217,0.12)";
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#eff6ff",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      marginBottom: "16px",
                    }}
                  >
                    {b.icon}
                  </div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#001b3d",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    {b.title}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#4b5563",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: "#1d75d9", padding: "40px 24px" }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              textAlign: "center",
            }}
            className="stats-4col"
          >
            {[
              { num: "99.99%", label: "Uptime đảm bảo" },
              { num: "<100ms", label: "Thời gian xử lý" },
              { num: "50+", label: "Ngân hàng tích hợp" },
              { num: "10M+", label: "Giao dịch/ngày" },
            ].map((s, i) => (
              <div key={i}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 900,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "13px",
                    marginTop: "6px",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <Partners />
      </main>
      <Footer />
    </>
  );
}

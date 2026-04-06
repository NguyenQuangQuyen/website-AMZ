"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    title: "Dịch vụ Viễn thông",
    desc: "Giải pháp BSS/OSS toàn diện, hệ thống tính cước thời gian thực và nền tảng OTT thế hệ mới.",
    href: "/services/vien-thong",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
  },
  {
    title: "Giải pháp doanh nghiệp (Odoo)",
    desc: "Hệ thống ERP toàn diện giúp doanh nghiệp quản lý hiệu quả mọi quy trình vận hành.",
    href: "/services/odoo",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Tài chính – Ngân hàng",
    desc: "Giải pháp công nghệ tài chính hiện đại, bảo mật cao cho ngân hàng và tổ chức tài chính.",
    href: "/services/tai-chinh-ngan-hang",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Cổng thanh toán",
    desc: "Tích hợp cổng thanh toán đa kênh, an toàn và nhanh chóng cho mọi nền tảng.",
    href: "/services/cong-thanh-toan",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "Thương mại điện tử",
    desc: "Xây dựng nền tảng thương mại điện tử toàn diện, tối ưu trải nghiệm mua sắm.",
    href: "/services/thuong-mai-dien-tu",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    title: "Phát triển Blockchain",
    desc: "Ứng dụng công nghệ Blockchain vào các giải pháp tài chính, chuỗi cung ứng và hợp đồng thông minh.",
    href: "/services/blockchain",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    title: "Phát triển Web App",
    desc: "Xây dựng ứng dụng web hiện đại, hiệu suất cao với các công nghệ tiên tiến nhất.",
    href: "/services/phat-trien-web-app",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Lập trình Back End",
    desc: "Phát triển hệ thống backend mạnh mẽ, bảo mật và có khả năng mở rộng cao.",
    href: "/services/lap-trinh-back-end",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
  },
  {
    title: "Lập trình Front End",
    desc: "Thiết kế giao diện người dùng đẹp, mượt mà và tối ưu trải nghiệm trên mọi thiết bị.",
    href: "/services/lap-trinh-front-end",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Lập trình Mobile",
    desc: "Phát triển ứng dụng di động iOS và Android với hiệu suất cao và trải nghiệm native.",
    href: "/services/lap-trinh-mobile",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Giải pháp Lưu trữ",
    desc: "Giải pháp cơ sở dữ liệu và lưu trữ đám mây hiệu quả, tiết kiệm chi phí.",
    href: "/services/giai-phap-luu-tru",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  },
  {
    title: "BigData",
    desc: "Xử lý và phân tích dữ liệu lớn, cung cấp insights kinh doanh theo thời gian thực.",
    href: "/services/bigdata",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
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
            Dịch vụ & Giải pháp
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
            <span style={{ color: "#fff" }}>Dịch vụ</span>
          </motion.div>
        </div>

        {/* Services grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ padding: "64px 24px", background: "#f8fafc" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
              className="service-3col-grid"
            >
              {services.map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Link
                    href={s.href}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "16px",
                        padding: "28px",
                        border: "1px solid #e5e7eb",
                        height: "100%",
                        boxShadow: "0 2px 12px rgba(29,117,217,0.06)",
                        transition: "box-shadow 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow =
                          "0 12px 32px rgba(29,117,217,0.15)";
                        el.style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow = "0 2px 12px rgba(29,117,217,0.06)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          background: "#dbeafe",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "16px",
                        }}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1d75d9"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={s.icon} />
                        </svg>
                      </div>
                      <p
                        style={{
                          fontWeight: 700,
                          color: "#1e3a5f",
                          fontSize: "15px",
                          marginBottom: "10px",
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
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

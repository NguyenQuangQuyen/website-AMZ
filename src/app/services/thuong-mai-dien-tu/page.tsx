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
  visible: { transition: { staggerChildren: 0.1 } },
};

const models = [
  { code: "B2B", label: "Doanh nghiệp với Doanh nghiệp" },
  { code: "B2C", label: "Doanh nghiệp với Khách hàng" },
  { code: "B2E", label: "Doanh nghiệp với Nhân viên" },
  { code: "B2G", label: "Doanh nghiệp với Chính phủ" },
  { code: "G2B", label: "Chính phủ với Doanh nghiệp" },
  { code: "G2G", label: "Chính phủ với Chính phủ" },
  { code: "G2C", label: "Chính phủ với Công dân" },
  { code: "C2C", label: "Khách hàng với Khách hàng" },
  { code: "C2B", label: "Khách hàng với Doanh nghiệp" },
  { code: "B2B2C", label: "Sàn thương mại Điện tử" },
];

const modules = [
  { icon: "🛍", text: "Giới thiệu sản phẩm và bán hàng" },
  { icon: "🛒", text: "Sàn thương mại điện tử" },
  { icon: "💰", text: "Đấu giá trực tuyến" },
  { icon: "📋", text: "Booking dịch vụ" },
  { icon: "🌐", text: "Website so sánh giá" },
  { icon: "🏷", text: "Website mua đổi hàng hóa" },
];

const features = [
  {
    title: "Quản lý và tùy chỉnh",
    desc: "Hỗ trợ đồng quản lý, tích hợp module mới, tùy chỉnh giao diện và cấu hình hệ thống.",
  },
  {
    title: "Giao diện hiện đại",
    desc: "Thiết kế đẹp, responsive, tương thích đa thiết bị, tối ưu trải nghiệm.",
  },
  {
    title: "SEO và tìm kiếm",
    desc: "Thân thiện với các công cụ tìm kiếm, hỗ trợ SEO tốt.",
  },
  {
    title: "Tính năng sản phẩm và danh mục",
    desc: "Không giới hạn số lượng sản phẩm, danh mục đa cấp, menu đa cấp, slide show ảnh sản phẩm, đánh giá sản phẩm bằng sao, zoom ảnh.",
  },
  {
    title: "Quản trị nội dung",
    desc: "Hỗ trợ soạn thảo WYSIWYG, xuất bản tin chính dạng RSS, tạo album ảnh và playlist Video.",
  },
  {
    title: "Quản lý bán hàng",
    desc: "Quản lý khách hàng, đơn hàng, xuất hóa đơn PDF, theo dõi lịch sử mua hàng, giảm giá đơn nguyên, hỗ trợ coupon giảm giá.",
  },
  {
    title: "Thanh toán",
    desc: "Tích hợp các tiện ích xử lý giá, thiết kế, kết nối mạng xã hội, hỗ trợ trực tuyến (Skype, Yahoo, Live Chat).",
  },
  {
    title: "Báo cáo và thống kê",
    desc: "Cập nhật báo cáo theo ngày, nhập/xuất dữ liệu hàng ngày từ website.",
  },
  {
    title: "Tiện ích và kết nối",
    desc: "Tích hợp các tiện ích xử lý giá, thiết kế, kết nối mạng xã hội, hỗ trợ trực tuyến.",
  },
  {
    title: "Khác",
    desc: "Hỗ trợ đa ngôn ngữ, email marketing, affiliates, tạo kho dữ liệu, gửi feedback từ giao diện quản trị.",
  },
];

export default function ThuongMaiDienTuPage() {
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
            Thương mại điện tử
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
            <Link href="/services" className="project-detail-breadcrumb-link">
              Dịch vụ
            </Link>
            <span>›</span>
            <span style={{ color: "#fff" }}>Thương mại điện tử</span>
          </motion.div>
        </div>

        {/* Intro banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
            alt="Thương mại điện tử"
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,27,61,0.72)",
            }}
          >
            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "48px 24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#1d75d9",
                  fontWeight: 700,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                Thương mại điện tử
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  marginBottom: "24px",
                }}
              >
                Với sứ mệnh chiến lược "AMZ sẽ là bệ phóng cho ngành Thương mại
                điện tử nước nhà", chúng tôi sẽ đem đến giải pháp toàn diện để
                đáp ứng nghiệp vụ cho bạn.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#1d75d9",
                  color: "#fff",
                  padding: "11px 24px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Giải pháp nền tảng */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-block",
                background: "#f0f6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "20px",
                padding: "6px 18px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1d75d9",
                marginBottom: "28px",
              }}
            >
              Giải pháp nền tảng
            </motion.div>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "12px",
              }}
              className="ecom-models-grid"
            >
              {models.map((m, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "10px",
                    padding: "16px 12px",
                    textAlign: "center",
                    border: "1px solid #e5e7eb",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "#eff6ff";
                    el.style.borderColor = "#1d75d9";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "#f8fafc";
                    el.style.borderColor = "#e5e7eb";
                  }}
                >
                  <p
                    style={{
                      fontWeight: 800,
                      color: "#001b3d",
                      fontSize: "15px",
                      margin: "0 0 4px",
                    }}
                  >
                    {m.code}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Các mô hình */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "0 24px 64px", background: "#fff" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-block",
                background: "#f0f6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "20px",
                padding: "6px 18px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1d75d9",
                marginBottom: "28px",
              }}
            >
              Các mô hình
            </motion.div>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                maxWidth: "500px",
              }}
            >
              {modules.map((m, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>
                    {m.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#374151",
                      fontWeight: 500,
                    }}
                  >
                    {m.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Tính năng nổi bật */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#f8fafc" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-block",
                background: "#f0f6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "20px",
                padding: "6px 18px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1d75d9",
                marginBottom: "28px",
              }}
            >
              Tính năng nổi bật
            </motion.div>
            <motion.div
              variants={stagger}
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#1d75d9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#374151",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    <strong style={{ color: "#001b3d" }}>{f.title}:</strong>{" "}
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <Partners />
      </main>
      <Footer />
    </>
  );
}

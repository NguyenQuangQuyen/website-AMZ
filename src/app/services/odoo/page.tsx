"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/sections/Partners";
import { projects } from "@/data/projects";

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

const featuredProjects = projects
  .filter((p) => p.category === "ERP")
  .slice(0, 3);

const odooModules = [
  { icon: "💼", label: "Kế toán" },
  { icon: "📦", label: "Kho vận" },
  { icon: "🏭", label: "Sản xuất" },
  { icon: "👥", label: "Nhân sự" },
  { icon: "🛒", label: "Bán hàng" },
  { icon: "📊", label: "Báo cáo" },
];

const odooFeatures = [
  {
    icon: "🏢",
    title: "Quản lý Doanh Nghiệp Toàn Diện",
    desc: "Odoo tích hợp toàn bộ quy trình doanh nghiệp trên một nền tảng duy nhất — từ kế toán, kho vận, sản xuất đến CRM và nhân sự. Loại bỏ hoàn toàn sự phân mảnh dữ liệu giữa các phòng ban.",
  },
  {
    icon: "⚙",
    title: "Tối Ưu Quy Trình Kinh Doanh",
    desc: "Tự động hóa các quy trình lặp đi lặp lại, giảm thiểu sai sót thủ công và tăng tốc độ xử lý công việc. Workflow thông minh giúp phê duyệt và xử lý đơn hàng nhanh hơn 5 lần.",
  },
  {
    icon: "🔧",
    title: "Tích Hợp và Tùy Biến",
    desc: "Odoo có hơn 30 module chính thức và hàng nghìn ứng dụng bên thứ ba. AMZ tùy biến sâu theo đặc thù ngành nghề và quy trình riêng của từng doanh nghiệp Việt Nam.",
  },
];

const testimonials = [
  {
    name: "Mr. Lucas",
    role: "CEO, Công ty ABC",
    avatar: "L",
    stars: 5,
    text: "Odoo do AMZ triển khai đã giúp chúng tôi số hóa hoàn toàn quy trình vận hành, tiết kiệm 40% chi phí nhân sự và tăng hiệu suất đáng kể.",
  },
  {
    name: "Fisher Jho",
    role: "CFO, Tập đoàn XYZ",
    avatar: "F",
    stars: 5,
    text: "Hệ thống kế toán và báo cáo tài chính trên Odoo giúp chúng tôi đóng sổ tháng chỉ trong 2 ngày thay vì 2 tuần như trước đây.",
  },
  {
    name: "Donald Trew",
    role: "COO, Sun Group",
    avatar: "D",
    stars: 5,
    text: "AMZ triển khai Odoo ERP cho toàn bộ chuỗi cung ứng của chúng tôi. Tồn kho giảm 30%, hiệu suất sản xuất tăng 25% chỉ sau 6 tháng.",
  },
  {
    name: "Ms. Ngọc Huyền",
    role: "HR Director, FPT",
    avatar: "N",
    stars: 5,
    text: "Module nhân sự Odoo giúp chúng tôi quản lý 500+ nhân viên dễ dàng. Tính lương tự động, chấm công chính xác và báo cáo nhân sự real-time.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: "14px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function OdooPage() {
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
            Giải pháp Doanh Nghiệp
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
            <span style={{ color: "#fff" }}>Giải pháp Doanh Nghiệp (Odoo)</span>
          </motion.div>
        </div>

        {/* ── Intro Section ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ background: "#f0f6ff", padding: "56px 24px" }}
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
              <p
                style={{
                  color: "#1d75d9",
                  fontWeight: 600,
                  fontSize: "13px",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Giải pháp doanh nghiệp
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: 1.85,
                  marginBottom: "24px",
                }}
              >
                AMZ là đối tác triển khai <strong>Odoo ERP</strong> hàng đầu tại
                Việt Nam với đội ngũ hơn 50 chuyên gia có chứng chỉ Odoo chính
                thức. Chúng tôi đã triển khai thành công cho hơn{" "}
                <strong>200+ doanh nghiệp</strong> thuộc nhiều ngành nghề khác
                nhau. Odoo là nền tảng ERP mã nguồn mở linh hoạt nhất thế giới
                với hơn <strong>30 module tích hợp</strong> bao gồm kế toán, kho
                vận, sản xuất, CRM, nhân sự và thương mại điện tử.{" "}
                <span style={{ color: "#1d75d9", fontWeight: 600 }}>
                  AMZ tùy biến sâu theo đặc thù từng doanh nghiệp Việt Nam.
                </span>
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#1d75d9",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Liên hệ
              </Link>
            </motion.div>
            {/* Odoo logo + decorative */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "32px 48px",
                  boxShadow: "0 8px 32px rgba(29,117,217,0.12)",
                  border: "1px solid #e5e7eb",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    color: "#714B67",
                    letterSpacing: "-2px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#714B67" }}>oo</span>
                  <span style={{ color: "#00A09D" }}>doo</span>
                </div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#6b7280",
                    marginTop: "8px",
                  }}
                >
                  Open Source ERP
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {odooModules.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      borderRadius: "8px",
                      padding: "10px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      border: "1px solid #e5e7eb",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#001b3d",
                    }}
                  >
                    <span>{m.icon}</span> {m.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Stats banner ── */}
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
              { num: "200+", label: "Doanh nghiệp triển khai" },
              { num: "50+", label: "Chuyên gia Odoo" },
              { num: "30+", label: "Module tích hợp" },
              { num: "10+", label: "Năm kinh nghiệm" },
            ].map((s, i) => (
              <div key={i}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(28px, 3vw, 40px)",
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

        {/* ── Tính năng Odoo ── */}
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
              gridTemplateColumns: "1fr 1.2fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="service-intro-grid"
          >
            {/* Left: Odoo illustration */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Odoo ERP"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div
                style={{
                  background: "#f0f6ff",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#1d75d9",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Tại sao chọn chúng tôi?
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#4b5563",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  AMZ JSC là đối tác Odoo được chứng nhận chính thức tại Việt
                  Nam. Chúng tôi không chỉ triển khai mà còn đào tạo, hỗ trợ và
                  tùy biến hệ thống theo đúng quy trình nghiệp vụ của doanh
                  nghiệp bạn.
                </p>
              </div>
            </motion.div>

            {/* Right: Features */}
            <motion.div variants={stagger}>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  marginBottom: "32px",
                }}
              >
                Tính năng <span style={{ color: "#1d75d9" }}>ODOO</span>
              </motion.h2>
              {odooFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "28px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      borderRadius: "2px",
                      background: "#1d75d9",
                      alignSelf: "stretch",
                      flexShrink: 0,
                      minHeight: "60px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#001b3d",
                        fontSize: "15px",
                        marginBottom: "8px",
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#4b5563",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#f8fafc" }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="service-intro-grid"
          >
            {/* Left: Why AMZ */}
            <motion.div variants={fadeUp}>
              <p
                style={{
                  color: "#1d75d9",
                  fontWeight: 700,
                  fontSize: "13px",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                Tại sao chọn chúng tôi?
              </p>
              <h2
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  lineHeight: 1.3,
                  marginBottom: "20px",
                }}
              >
                TẠI SAO QUÝ KHÁCH HÀNG NÊN CHỌN GIẢI PHÁP ERP ODOO TỪ{" "}
                <span style={{ color: "#1d75d9" }}>AMZ JSC</span>
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4b5563",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Với kinh nghiệm triển khai hơn 200 dự án Odoo, AMZ hiểu rõ những
                thách thức đặc thù của doanh nghiệp Việt Nam. Chúng tôi cung cấp
                giải pháp toàn diện từ tư vấn, triển khai đến đào tạo và hỗ trợ
                sau triển khai.
              </p>
              {[
                "Đội ngũ chuyên gia Odoo được chứng nhận chính thức",
                "Tùy biến sâu theo quy trình nghiệp vụ Việt Nam",
                "Hỗ trợ 24/7 và bảo hành dài hạn",
                "Chi phí triển khai tối ưu, ROI cao",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    marginBottom: "12px",
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
                      marginTop: "1px",
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
                      color: "#4b5563",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Right: Module grid */}
            <motion.div variants={fadeUp}>
              <p
                style={{
                  color: "#1d75d9",
                  fontWeight: 700,
                  fontSize: "13px",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                Mảng giải pháp ERP
              </p>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#001b3d",
                  marginBottom: "24px",
                }}
              >
                Các module chính
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {[
                  {
                    icon: "💰",
                    label: "Tài chính",
                    desc: "Kế toán, thuế, ngân sách",
                  },
                  {
                    icon: "📦",
                    label: "Kho vận",
                    desc: "Tồn kho, nhập xuất kho",
                  },
                  {
                    icon: "🏭",
                    label: "Sản xuất",
                    desc: "MRP, kế hoạch sản xuất",
                  },
                  {
                    icon: "👥",
                    label: "Nhân sự",
                    desc: "HRM, lương, chấm công",
                  },
                  {
                    icon: "🛒",
                    label: "Bán hàng",
                    desc: "CRM, đơn hàng, báo giá",
                  },
                  {
                    icon: "🌐",
                    label: "Thương mại",
                    desc: "Website, eCommerce",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      borderRadius: "10px",
                      padding: "16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        background: "#eff6ff",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "18px",
                      }}
                    >
                      {m.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          color: "#001b3d",
                          fontSize: "13px",
                          margin: 0,
                        }}
                      >
                        {m.label}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#6b7280",
                          margin: 0,
                        }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Featured Projects ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
                marginBottom: "40px",
              }}
              className="service-intro-grid"
            >
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                Cùng Điểm Lại Dự Án{" "}
                <span style={{ color: "#1d75d9" }}>Tiêu Biểu</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "14px",
                  color: "#4b5563",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Những dự án ERP Odoo tiêu biểu mà AMZ đã triển khai thành công,
                mang lại giá trị thực tiễn cho các doanh nghiệp Việt Nam.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
              className="projects-3col-grid"
            >
              {featuredProjects.map((p, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div
                    className="project-card project-card-stagger"
                    style={{
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "240px",
                    }}
                  >
                    <div className="project-card-overlay project-overlay-default">
                      <span
                        style={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        {p.title}
                      </span>
                    </div>
                    <div className="project-card-overlay project-overlay-hover">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          padding: "12px",
                          textAlign: "center",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <p
                          className="overlay-text"
                          style={{
                            color: "#fff",
                            fontSize: "11.5px",
                            fontWeight: 600,
                            lineHeight: 1.45,
                            margin: 0,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 5,
                            WebkitBoxOrient: "vertical" as const,
                          }}
                        >
                          {p.desc}
                        </p>
                        <Link
                          href={`/projects/${p.id}`}
                          className="overlay-btn"
                          style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "50%",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            textDecoration: "none",
                            transition:
                              "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease",
                          }}
                        >
                          <span
                            style={{
                              color: "#1d75d9",
                              fontSize: "18px",
                              fontWeight: 300,
                              lineHeight: 1,
                            }}
                          >
                            +
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Testimonials ── */}
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
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                color: "#001b3d",
                marginBottom: "8px",
              }}
            >
              Đánh giá của <span style={{ color: "#1d75d9" }}>khách hàng</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "40px",
              }}
            >
              Những phản hồi thực tế từ các doanh nghiệp đã triển khai Odoo cùng
              AMZ.
            </motion.p>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
              className="testimonials-2col"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "#1d75d9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "16px",
                        flexShrink: 0,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          color: "#001b3d",
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#6b7280",
                          margin: 0,
                        }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <Stars count={t.stars} />
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#4b5563",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {t.text}
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

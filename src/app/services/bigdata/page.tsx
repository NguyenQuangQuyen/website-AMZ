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

const sidebarLinks = [
  {
    label: "Phát triển Web App",
    href: "/services/phat-trien-web-app",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Lập trình Back End",
    href: "/services/lap-trinh-back-end",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  },
  {
    label: "Lập trình Front End",
    href: "/services/lap-trinh-front-end",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    label: "Lập trình Mobile",
    href: "/services/lap-trinh-mobile",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    label: "Giải pháp Lưu trữ",
    href: "/services/giai-phap-luu-tru",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  },
  {
    label: "BigData",
    href: "/services/bigdata",
    active: true,
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const techStack = [
  { label: "Hadoop", image: "/images/Hadoop.jpg" },
  { label: "Data lakes", image: "/images/Data lakes.png" },
  { label: "Apache Spark", image: "/images/Apache Spark.png" },
  { label: "In-memory databases", image: "/images/In-memory databases.png" },
];

const featuredProject = {
  title: "Hệ thống Quản lý Doanh nghiệp",
  image: "/projects/saas.png",
  href: "/projects/3",
};

export default function BigDataPage() {
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
            BigData
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
            <span style={{ color: "#fff" }}>BigData</span>
          </motion.div>
        </div>

        {/* Banner năng lực */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #0a1628 0%, #001b3d 70%, #0d2a4a 100%)",
            padding: "48px 24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=60')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <p
              style={{
                color: "#94a3b8",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              NĂNG LỰC
            </p>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              BigData
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                lineHeight: 1.8,
                maxWidth: "600px",
              }}
            >
              Với sứ mệnh chiến lược: "AMZ sẽ là bệ phóng cho ngành Thương mại
              điện tử nước nhà", chúng tôi sẽ đem đến giải pháp toàn diện để đáp
              ứng nghiệp vụ cho bạn.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div style={{ background: "#f8fafc", padding: "48px 24px" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "260px 1fr",
              gap: "32px",
              alignItems: "start",
            }}
            className="service-intro-grid"
          >
            {/* Sidebar */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeUp}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  marginBottom: "24px",
                }}
              >
                {sidebarLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "14px 18px",
                      textDecoration: "none",
                      background: link.active ? "#1d75d9" : "#fff",
                      color: link.active ? "#fff" : "#374151",
                      fontSize: "14px",
                      fontWeight: link.active ? 700 : 500,
                      borderBottom:
                        i < sidebarLinks.length - 1
                          ? "1px solid #f3f4f6"
                          : "none",
                      transition: "background 0.2s",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={link.active ? "#fff" : "#1d75d9"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={link.icon} />
                    </svg>
                    {link.label}
                  </Link>
                ))}
              </motion.div>
              <motion.div
                variants={fadeUp}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, #0a1628 0%, #001b3d 100%)",
                  padding: "28px 24px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.2,
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=40')",
                    backgroundSize: "cover",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    Liên hệ với chúng tôi
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "28px",
                      fontWeight: 900,
                      lineHeight: 1.2,
                      marginBottom: "20px",
                    }}
                  >
                    0965 279 666
                  </p>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#1d75d9",
                      color: "#fff",
                      padding: "10px 24px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Liên hệ
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeUp}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "32px",
                  border: "1px solid #e5e7eb",
                  marginBottom: "24px",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#001b3d",
                    marginBottom: "16px",
                  }}
                >
                  Năng lực chuyên môn
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4b5563",
                    lineHeight: 1.8,
                    marginBottom: "28px",
                  }}
                >
                  Nhóm BI, dữ liệu lớn và phân tích của chúng tôi có nhiều kinh
                  nghiệm hỗ trợ nhiều khách hàng trong việc tạo ra các giải pháp
                  phân tích và BI mạnh mẽ. Những giải pháp này xử lý hiệu quả
                  khối lượng lớn dữ liệu kinh doanh, cung cấp các báo cáo theo
                  thời gian thực rất quan trọng để đưa ra các quyết định kinh
                  doanh sáng suốt và kịp thời.
                </p>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid #e5e7eb",
                    marginBottom: "28px",
                  }}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "16px",
                  }}
                  className="about-services-grid"
                >
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget.querySelector(
                            ".tech-icon",
                          ) as HTMLDivElement
                        ).style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget.querySelector(
                            ".tech-icon",
                          ) as HTMLDivElement
                        ).style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        className="tech-icon"
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "14px",
                          background: "#f0f6ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 16px rgba(29,117,217,0.15)",
                          transition: "transform 0.3s ease",
                          overflow: "hidden",
                          padding: "8px",
                        }}
                      >
                        <img
                          src={tech.image}
                          alt={tech.label}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#374151",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        {tech.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "32px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#001b3d",
                    marginBottom: "24px",
                  }}
                >
                  Cùng Điểm Lại <span style={{ color: "#1d75d9" }}>Dự Án</span>
                  <br />
                  Tiêu Biểu
                </h2>
                <Link
                  href={featuredProject.href}
                  style={{ textDecoration: "none", display: "inline-block" }}
                >
                  <div
                    style={{
                      width: "160px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(-4px)";
                      el.style.boxShadow = "0 12px 32px rgba(29,117,217,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
                    }}
                  >
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        background: "linear-gradient(135deg, #1d75d9, #2563eb)",
                        padding: "10px 12px",
                      }}
                    >
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: 600,
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {featuredProject.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

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

// Dùng 3 dự án viễn thông từ data
const featuredProjects = projects
  .filter((p) => p.category === "Viễn thông")
  .slice(0, 3);

const testimonials = [
  {
    name: "Mr. Lucas",
    role: "Product Manager, FPT",
    avatar: "L",
    stars: 5,
    text: "AMZ cung cấp giải pháp viễn thông xuất sắc, đội ngũ chuyên nghiệp và hỗ trợ tận tâm. Hệ thống hoạt động ổn định, hiệu suất cao vượt kỳ vọng.",
  },
  {
    name: "Fisher Jho",
    role: "CTO, Vinaphone",
    avatar: "F",
    stars: 5,
    text: "Giải pháp của AMZ giúp chúng tôi tối ưu hóa hạ tầng mạng và nâng cao chất lượng dịch vụ cho hàng triệu khách hàng trên toàn quốc.",
  },
  {
    name: "Donald Trew",
    role: "Director, MobiFone",
    avatar: "D",
    stars: 5,
    text: "Hệ thống tính cước và CRM do AMZ phát triển đã giúp chúng tôi giảm thiểu sai sót và tăng tốc độ xử lý giao dịch lên đến 300%.",
  },
  {
    name: "Ms. Ngọc Huyền",
    role: "PM, TPBank Telecom",
    avatar: "N",
    stars: 5,
    text: "Đội ngũ AMZ luôn sẵn sàng hỗ trợ 24/7, phản hồi nhanh chóng và giải quyết vấn đề hiệu quả. Chúng tôi rất hài lòng với dịch vụ.",
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

export default function VienThongPage() {
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
            Dịch vụ Viễn Thông
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
            <span style={{ color: "#fff" }}>Dịch vụ Viễn Thông</span>
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
                Dịch vụ Viễn thông
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: 1.85,
                  marginBottom: "24px",
                }}
              >
                AMZ là nhà cung cấp giải pháp phần mềm hàng đầu cho ngành Viễn
                thông tại Việt Nam với hơn 1000 đội ngũ lập trình viên giàu kinh
                nghiệm. Chúng tôi đã triển khai thành công các dự án lớn cho{" "}
                <strong>Viettel, Vinaphone, Mobiphone</strong> và nhiều tập đoàn
                viễn thông quốc tế. Với nền tảng công nghệ{" "}
                <strong>Java EE, Microservices</strong> và kiến trúc
                cloud-native, AMZ mang đến các giải pháp BSS/OSS toàn diện, hệ
                thống tính cước thời gian thực và nền tảng OTT thế hệ mới.{" "}
                <span style={{ color: "#1d75d9", fontWeight: 600 }}>
                  Tất cả giải pháp đều được tối ưu hóa cho hạ tầng viễn thông
                  quy mô lớn.
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
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    background: "#1d75d9",
                    borderRadius: "8px",
                    opacity: 0.9,
                  }}
                />
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(29,117,217,0.4)",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(29,117,217,0.3)",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    background: "#0d47a1",
                    borderRadius: "8px",
                    opacity: 0.8,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Full-width banner image — thu nhỏ và giữ tỉ lệ gốc ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            width: "80%", // Bạn có thể chỉnh sửa số này (ví dụ 70%, 90%)
            maxWidth: "1100px",
            margin: "0 auto",
            overflow: "hidden",
            position: "relative",
            borderRadius: "16px", // Bo góc cho đẹp mắt
            marginTop: "40px", // Thêm khoảng cách ở trên
            marginBottom: "40px", // Thêm khoảng cách ở dưới
          }}
        >
          <img
            src="/images/service-dichvuvienthong.jpg"
            alt="Viễn thông toàn cầu"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,27,61,0.25)",
            }}
          />
        </motion.div>

        {/* ── Dịch vụ section ── */}
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
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                color: "#001b3d",
                marginBottom: "32px",
              }}
            >
              Dịch vụ Viễn Thông
            </motion.h2>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "32px",
              }}
              className="service-cards-grid"
            >
              {[
                {
                  icon: "🏢",
                  title: "Tại sao Chọn AMZ?",
                  desc: "Hơn 10 năm kinh nghiệm triển khai các giải pháp viễn thông quy mô lớn cho các tập đoàn hàng đầu.",
                },
                {
                  icon: "⚡",
                  title: "Hỗ trợ chuyên nghiệp",
                  desc: "Đội ngũ kỹ sư 24/7 sẵn sàng hỗ trợ, đảm bảo uptime 99.99% cho toàn bộ hệ thống.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#0a1628",
                    borderRadius: "10px",
                    padding: "24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#1d75d9",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: "18px" }}>
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {card.title}
                    </p>
                    <p
                      style={{
                        color: "#94a3b8",
                        fontSize: "12px",
                        lineHeight: 1.6,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: "40px",
                alignItems: "center",
                marginBottom: "40px",
              }}
              className="service-detail-grid"
            >
              <motion.div
                variants={fadeUp}
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#001b3d",
                    marginBottom: "12px",
                  }}
                >
                  Dịch vụ AMZ luôn là tốt nhất
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4b5563",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  Chúng tôi cung cấp các giải pháp BSS/OSS toàn diện bao gồm hệ
                  thống tính cước thời gian thực, quản lý thuê bao, CRM viễn
                  thông và nền tảng OTT. Mỗi giải pháp được thiết kế riêng để
                  phù hợp với quy mô và nhu cầu đặc thù của từng nhà mạng.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                  }}
                >
                  {[
                    { icon: "🛡", label: "Bảo mật toàn diện" },
                    { icon: "📊", label: "Báo cáo đầy đủ" },
                    { icon: "💰", label: "Chi phí tối ưu" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        padding: "16px",
                        background: "#f8fafc",
                        borderRadius: "8px",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>{s.icon}</span>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#001b3d",
                          margin: 0,
                        }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Featured Projects ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#f8fafc" }}
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
                Những dự án viễn thông tiêu biểu mà AMZ đã triển khai thành
                công, mang lại giá trị thực tiễn cho các đối tác và khách hàng.
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
                    {/* Default overlay */}
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
                    {/* Hover overlay */}
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
          style={{ padding: "64px 24px", background: "#fff" }}
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
              Những phản hồi thực tế từ các đối tác và khách hàng của chúng tôi.
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
                    background: "#f8fafc",
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

        {/* ── CTA Banner ── */}

        <Partners />
      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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

const featuredProjects = [
  ...projects.filter((p) => p.category === "Viễn thông").slice(0, 3),
  ...projects.filter((p) => p.category === "ERP").slice(0, 2),
];

const serviceCards = [
  {
    icon: "🏦",
    title: "CORE BANKING",
    desc: "Hệ thống ngân hàng lõi thế hệ mới Core Banking của AMZ JSC. Tất cả đều tích hợp với Oracle, Temenos.",
  },
  {
    icon: "💳",
    title: "CREDIT CORE",
    desc: "Giải pháp quản lý tín dụng và xử lý khoản vay toàn diện, tích hợp với hệ thống ngân hàng hiện có.",
  },
  {
    icon: "🌐",
    title: "INTERNET BANKING",
    desc: "Hệ thống số hóa ngân hàng của AMZ sẽ giúp khách hàng tăng cơ hội nhận lại thị phần khách mới với các đối thủ.",
  },
  {
    icon: "📈",
    title: "AMZ STOCK",
    desc: "Giải pháp cho hệ thống giao dịch chứng khoán tốc độ cao, đáng tin cậy và tối ưu hóa.",
  },
  {
    icon: "📊",
    title: "BUSINESS INTELLIGENCE",
    desc: "Phân tích, báo cáo và khai thác dữ liệu, tối ưu hóa cho doanh nghiệp và khách hàng.",
  },
];

const testimonials = [
  {
    name: "Mr. Lucas",
    role: "Former Manager, VTS",
    avatar: "L",
    stars: 5,
    text: "Nhờ có sự tin tưởng và hợp tác với AMZ, Hệ thống của chúng tôi đã được nâng cấp và cải thiện đáng kể. Chúng tôi đã có thể tăng tốc độ xử lý giao dịch, cải thiện bảo mật, và tối ưu hóa quy trình làm việc. AMZ đã đồng hành cùng chúng tôi trong suốt quá trình này.",
  },
  {
    name: "Roben Jho",
    role: "Former Manager, FTech",
    avatar: "R",
    stars: 5,
    text: "Có thể nói tôi hoàn toàn hài lòng với chất lượng dịch vụ của AMZ khi làm việc cùng họ. Họ luôn lắng nghe, tư vấn chuyên sâu và đưa ra giải pháp tối ưu cho từng vấn đề cụ thể. Đội ngũ của AMZ rất chuyên nghiệp và nhiệt tình.",
  },
  {
    name: "Donald Frew",
    role: "Former Manager, FTech",
    avatar: "D",
    stars: 5,
    text: "Với những đóng góp của AMZ, chúng tôi đã có thể nâng cao chất lượng dịch vụ và tăng cường bảo mật hệ thống. Điều này đã giúp chúng tôi tạo ra một môi trường làm việc an toàn và hiệu quả hơn. Tôi rất hài lòng với sự hợp tác này.",
  },
  {
    name: "Ms. Ngọc Huyền",
    role: "Former Manager, VTS",
    avatar: "N",
    stars: 5,
    text: "Chúng tôi đã hợp tác với AMZ để giải quyết các vấn đề về an toàn và bảo mật. Họ đã cung cấp các giải pháp hiệu quả và đáng tin cậy. Tôi rất ấn tượng với sự chuyên nghiệp và tận tâm của đội ngũ AMZ.",
  },
];

// Slider state for featured projects
const DOTS = 5;

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

export default function TaiChinhNganHangPage() {
  // Carousel: show 3 cards at a time, auto-advance 1 card every 3s
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = up/next
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = featuredProjects.length; // 5

  const advance = (dir: 1 | -1) => {
    setDirection(dir);
    setStartIdx((prev) => {
      const next = prev + dir;
      if (next > total - 3) return 0;
      if (next < 0) return total - 3;
      return next;
    });
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => advance(1), 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startIdx]);

  // Get 3 visible cards (wrap around)
  const visibleProjects = [0, 1, 2].map(
    (offset) => featuredProjects[(startIdx + offset) % total],
  );

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
          {/* Chart decorative lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.08,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 40px, #1d75d9 40px, #1d75d9 41px), repeating-linear-gradient(90deg, transparent, transparent 60px, #1d75d9 60px, #1d75d9 61px)",
            }}
          />
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
            Tài chính – ngân hàng
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
            <span style={{ color: "#fff" }}>Tài chính – ngân hàng</span>
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
                  fontWeight: 700,
                  fontSize: "13px",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Giải pháp tài chính – ngân hàng
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: 1.85,
                  marginBottom: "24px",
                }}
              >
                AMZ cung cấp các giải pháp tài chính ngân hàng hiện đại, giúp
                tối ưu hóa quy trình, nâng cao trải nghiệm khách hàng và đảm bảo
                an toàn bảo mật. Với đội ngũ hơn 100 kỹ sư chuyên gia giàu kinh
                nghiệm, chúng tôi đồng hành cùng doanh nghiệp trên hành trình số
                hóa, mang lại hiệu quả tối ưu và lợi thế cạnh tranh.
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
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
                alt="Tài chính ngân hàng"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Service Cards ── */}
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
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                marginBottom: "20px",
              }}
              className="service-3col-grid"
            >
              {serviceCards.slice(0, 3).map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "12px",
                    padding: "24px",
                    border: "1px solid #e5e7eb",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 24px rgba(29,117,217,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#1d75d9",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginBottom: "14px",
                    }}
                  >
                    {card.icon}
                  </div>
                  <p
                    style={{
                      fontWeight: 800,
                      color: "#001b3d",
                      fontSize: "13px",
                      marginBottom: "8px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
                maxWidth: "740px",
              }}
              className="service-2col-grid"
            >
              {serviceCards.slice(3).map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "12px",
                    padding: "24px",
                    border: "1px solid #e5e7eb",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 24px rgba(29,117,217,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#1d75d9",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginBottom: "14px",
                    }}
                  >
                    {card.icon}
                  </div>
                  <p
                    style={{
                      fontWeight: 800,
                      color: "#001b3d",
                      fontSize: "13px",
                      marginBottom: "8px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
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
                Chúng tôi luôn tin tưởng và nỗ lực phấn đấu hết mình nhằm cung
                cấp các sản phẩm, dịch vụ hoàn hảo mang lại giá trị cho khách
                hàng, cho xã hội.
              </motion.p>
            </motion.div>

            {/* Sliding track — trượt ngang mượt, không nhấp nháy */}
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  transform: `translateX(calc(-${startIdx} * (100% / 3 + 20px * 2 / 3)))`,
                  transition:
                    "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                {featuredProjects.map((p) => (
                  <div
                    key={p.id}
                    style={{ flexShrink: 0, width: "calc((100% - 40px) / 3)" }}
                  >
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
                  </div>
                ))}
              </div>
            </div>

            {/* Dots + arrows */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              <button
                onClick={() => advance(-1)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid #d1d5db",
                  background: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#374151",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#1d75d9";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#1d75d9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#fff";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#374151";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#d1d5db";
                }}
              >
                ‹
              </button>
              {Array.from({ length: featuredProjects.length - 2 }).map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > startIdx ? 1 : -1);
                      setStartIdx(i);
                    }}
                    style={{
                      width: i === startIdx ? "20px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === startIdx ? "#1d75d9" : "#d1d5db",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s ease",
                    }}
                  />
                ),
              )}
              <button
                onClick={() => advance(1)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid #d1d5db",
                  background: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#374151",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#1d75d9";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#1d75d9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#fff";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#374151";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#d1d5db";
                }}
              >
                ›
              </button>
            </div>
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
                marginBottom: "40px",
              }}
            >
              Đánh giá của <span style={{ color: "#1d75d9" }}>khách hàng</span>
            </motion.h2>
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

        <Partners />
      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  visible: { transition: { staggerChildren: 0.1 } },
};

const serviceTypes = [
  { icon: "📍", label: "Theo dõi điểm đến số" },
  { icon: "🔐", label: "Khai thác tiền mã hóa" },
  { icon: "💎", label: "Phát triển ví Điện tử" },
  { icon: "📈", label: "Phát triển tiền điện tử" },
  { icon: "🪙", label: "Phát triển ICO" },
  { icon: "⛓", label: "Phát triển Blockchain tùy chỉnh", active: true },
];

const blockchainFeatures = [
  {
    icon: "🛡",
    title: "Bảo vệ",
    desc: "AMZ bảo vệ mọi tài sản kỹ thuật số của bạn. Chúng tôi sử dụng các phương pháp mã hóa tiên tiến nhất để đảm bảo an toàn tuyệt đối cho dữ liệu và tài sản của bạn trên blockchain. Hệ thống bảo mật đa lớp giúp ngăn chặn mọi cuộc tấn công.",
  },
  {
    icon: "👁",
    title: "Minh bạch",
    desc: "Nghiên cứu và ứng dụng công nghệ Blockchain, NFT, Metaverse để tạo ra các giải pháp minh bạch và đáng tin cậy. Mọi giao dịch đều được ghi lại bất biến trên blockchain, đảm bảo tính minh bạch tuyệt đối.",
  },
  {
    icon: "⚡",
    title: "Hiệu quả",
    desc: "Blockchain giúp loại bỏ các trung gian không cần thiết, tự động hóa quy trình thông qua smart contract. Điều này giúp giảm chi phí vận hành, tăng tốc độ xử lý và nâng cao hiệu quả hoạt động của doanh nghiệp.",
  },
];

const featuredProjects = projects
  .filter((p) => p.category === "Viễn thông")
  .slice(0, 5);

const testimonials = [
  {
    name: "Mr. Lucas",
    role: "Former Manager, VTS",
    avatar: "L",
    stars: 5,
    text: "Nhờ có sự tin tưởng và hợp tác với AMZ, hệ thống Blockchain của chúng tôi đã được triển khai thành công. Đội ngũ AMZ rất chuyên nghiệp và tận tâm trong suốt quá trình hợp tác.",
  },
  {
    name: "Roban Jho",
    role: "Former Manager, FTech",
    avatar: "R",
    stars: 5,
    text: "Có thể nói tôi hoàn toàn hài lòng với chất lượng dịch vụ của AMZ. Giải pháp Blockchain họ cung cấp đã giúp chúng tôi tối ưu hóa quy trình và tăng tính minh bạch đáng kể.",
  },
  {
    name: "Donald Frew",
    role: "Former Manager, FTech",
    avatar: "D",
    stars: 5,
    text: "Với những đóng góp của AMZ, chúng tôi đã có thể triển khai hệ thống smart contract hiệu quả. Điều này đã giúp chúng tôi tiết kiệm chi phí và tăng tốc độ xử lý giao dịch.",
  },
  {
    name: "Ms. Ngọc Huyền",
    role: "Former Manager, VTS",
    avatar: "N",
    stars: 5,
    text: "Chúng tôi đã hợp tác với AMZ để phát triển nền tảng NFT. Họ đã cung cấp các giải pháp sáng tạo và đáng tin cậy. Tôi rất ấn tượng với sự chuyên nghiệp của đội ngũ AMZ.",
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

export default function BlockchainPage() {
  const total = featuredProjects.length;
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
            Phát triển BlockChain
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
            <span style={{ color: "#fff" }}>Phát triển Blockchain</span>
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
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&q=80"
            alt="Blockchain"
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
                Phát triển Blockchain
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
                Với chuyên môn sâu rộng trong lĩnh vực Blockchain, AMZ cung cấp
                các giải pháp phần mềm tiên tiến, hiệu quả và an toàn nhất cho
                doanh nghiệp. Chúng tôi giúp bạn chuẩn bị sẵn sàng để đón nhận
                thế giới phi tập trung.
              </p>
              <Link
                href="/about"
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
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Service types */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "48px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "12px",
              }}
              className="blockchain-types-grid"
            >
              {serviceTypes.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: s.active ? "#1d75d9" : "#f8fafc",
                    borderRadius: "10px",
                    padding: "16px 10px",
                    textAlign: "center",
                    border: `1px solid ${s.active ? "#1d75d9" : "#e5e7eb"}`,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "22px",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {s.icon}
                  </span>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: s.active ? "#fff" : "#374151",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Tính năng Blockchain */}
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
              gridTemplateColumns: "1fr 1.2fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="service-intro-grid"
          >
            <motion.div
              variants={fadeUp}
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              <img
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&q=80"
                alt="Blockchain tech"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
            <motion.div variants={stagger}>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  marginBottom: "32px",
                }}
              >
                Tính năng <span style={{ color: "#1d75d9" }}>Blockchain</span>
              </motion.h2>
              {blockchainFeatures.map((f, i) => (
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
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "#1d75d9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#001b3d",
                        fontSize: "15px",
                        marginBottom: "6px",
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

        {/* Featured Projects carousel */}
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
                Chúng tôi luôn tin tưởng và nỗ lực phấn đấu hết mình nhằm cung
                cấp các sản phẩm, dịch vụ hoàn hảo mang lại giá trị cho khách
                hàng, cho xã hội.
              </motion.p>
            </motion.div>

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
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "#1d75d9";
                  b.style.color = "#fff";
                  b.style.borderColor = "#1d75d9";
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "#fff";
                  b.style.color = "#374151";
                  b.style.borderColor = "#d1d5db";
                }}
              >
                ‹
              </button>
              {Array.from({ length: total - 2 }).map((_, i) => (
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
              ))}
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
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "#1d75d9";
                  b.style.color = "#fff";
                  b.style.borderColor = "#1d75d9";
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "#fff";
                  b.style.color = "#374151";
                  b.style.borderColor = "#d1d5db";
                }}
              >
                ›
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
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

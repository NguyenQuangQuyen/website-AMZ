"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
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

const allNews = [
  {
    id: 1,
    date: "02/01/2025",
    title:
      "TESA Champions League 2024: AMZ Chinh Phục Ngôi Vương, Gắn Kết Tinh Thần Doanh Nghiệp",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    author: "admin",
  },
  {
    id: 2,
    date: "23/11/2024",
    title: "AMZ'S DAY 2024 – Hành Trình Gắn Kết và Chinh Phục Những Giới Hạn",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    author: "admin",
  },
  {
    id: 3,
    date: "17/09/2024",
    title:
      "AMZ Tổ Chức Quyên Góp Ủng Hộ Đồng Bào Bị Ảnh Hưởng Bởi Cơn Bão Số 3",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
    author: "admin",
  },
  {
    id: 4,
    date: "18/07/2024",
    title: "AMZ RACE 2024 – THÁCH THỨC VƯỢT TRÊN MỌI KHOẢNG CÁCH",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    author: "admin",
  },
  {
    id: 5,
    date: "29/07/2024",
    title: "JOBFAIR 2024 – AMZ & FPT Polytechnic",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    author: "admin",
  },
  {
    id: 6,
    date: "23/07/2024",
    title: "Du lịch 2024 – Hành trình Khám phá và Kết nối",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    author: "admin",
  },
  {
    id: 7,
    date: "10/05/2024",
    title: "AMZ tham dự Hội nghị Công nghệ Quốc tế 2024",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    author: "admin",
  },
  {
    id: 8,
    date: "15/03/2024",
    title: "Lễ kỷ niệm 11 năm thành lập AMZ – Hành trình phát triển bền vững",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    author: "admin",
  },
  {
    id: 9,
    date: "20/01/2024",
    title: "AMZ ra mắt giải pháp AI mới cho doanh nghiệp vừa và nhỏ",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    author: "admin",
  },
];

const PAGE_SIZE = 6;

export default function TinNoiBoPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allNews.length / PAGE_SIZE);
  const news = allNews.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
            Tin tức
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
            <span style={{ color: "#fff" }}>Tin tức</span>
          </motion.div>
        </div>

        {/* News grid */}
        <div style={{ background: "#f8fafc", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              key={page}
              variants={stagger}
              initial="hidden"
              animate="visible"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
              className="service-3col-grid"
            >
              {news.map((item) => (
                <motion.div key={item.id} variants={fadeUp}>
                  <Link
                    href={`/news/tin-noi-bo/${item.id}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
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
                        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Thumbnail */}
                      <div style={{ overflow: "hidden", height: "200px" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transition: "transform 0.4s ease",
                          }}
                          onMouseEnter={(e) => {
                            (
                              e.currentTarget as HTMLImageElement
                            ).style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            (
                              e.currentTarget as HTMLImageElement
                            ).style.transform = "scale(1)";
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div style={{ padding: "20px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            marginBottom: "10px",
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1d75d9"
                            strokeWidth="2"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span
                            style={{
                              fontSize: "12px",
                              color: "#1d75d9",
                              fontWeight: 500,
                            }}
                          >
                            {item.date}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#001b3d",
                            lineHeight: 1.5,
                            marginBottom: "16px",
                            minHeight: "63px",
                          }}
                        >
                          {item.title}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                background: "#e5e7eb",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="#9ca3af"
                              >
                                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                              </svg>
                            </div>
                            <span
                              style={{ fontSize: "12px", color: "#6b7280" }}
                            >
                              {item.author}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: "13px",
                              color: "#1d75d9",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            Xem thêm
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#1d75d9"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "48px",
              }}
            >
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  background: "#fff",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  opacity: page === 1 ? 0.4 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#374151",
                }}
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    border: p === page ? "none" : "1px solid #d1d5db",
                    background: p === page ? "#1d75d9" : "#fff",
                    color: p === page ? "#fff" : "#374151",
                    cursor: "pointer",
                    fontWeight: p === page ? 700 : 400,
                    fontSize: "14px",
                  }}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  background: "#fff",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  opacity: page === totalPages ? 0.4 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#374151",
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

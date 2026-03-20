"use client";

import { use, useState, useEffect, useRef, useCallback } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjectById } from "@/data/projects";

const allTestimonials = [
  {
    quote:
      "AMZ cung cấp giải pháp vận hành thông suốt, hỗ trợ chúng tôi xử lý các bài toán dữ liệu lớn và phức tạp với tốc độ xử lý mạnh chóng. Đội ngũ của họ luôn tận tâm và hiệu quả.",
    name: "Mr. Trường",
    role: "Managing Director",
    company: "Tập đoàn CMC",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    quote:
      "Giải pháp IoT của AMZ đã giúp chúng tôi chuyển đổi hoàn toàn quy trình vận hành nhà máy, từ thủ công sang tự động hóa thông minh. Hiệu suất tăng rõ rệt chỉ sau 3 tháng triển khai.",
    name: "Mr. Minh",
    role: "Factory Director",
    company: "Vinaphone",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    quote:
      "CRM của AMZ đã thay đổi hoàn toàn cách chúng tôi tương tác với khách hàng, mang lại kết quả kinh doanh vượt trội. Tỷ lệ chuyển đổi tăng 40% chỉ trong quý đầu tiên.",
    name: "Ms. Hương",
    role: "Sales Director",
    company: "TPBank",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    quote:
      "Hệ thống ERP của AMZ đã giúp chúng tôi có cái nhìn toàn diện về hoạt động doanh nghiệp và ra quyết định nhanh hơn. Thời gian lập báo cáo giảm từ 2 tuần xuống còn 2 ngày.",
    name: "Mr. Thành",
    role: "CEO",
    company: "Sun Group",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    quote:
      "Nền tảng OTT của AMZ đã giúp chúng tôi cung cấp trải nghiệm xem video chất lượng cao cho hàng triệu người dùng với chi phí băng thông giảm 60%.",
    name: "Ms. Trang",
    role: "Product Director",
    company: "FPT Telecom",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

type SlideItem = { idx: number; key: number };

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = getProjectById(Number(id));
  if (!project) notFound();

  // current = visible slide, prev = exiting slide
  const [current, setCurrent] = useState<SlideItem>({ idx: 0, key: 0 });
  const [exiting, setExiting] = useState<
    (SlideItem & { dir: "left" | "right" }) | null
  >(null);
  const [locked, setLocked] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keyRef = useRef(1);

  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (targetIdx: number, dir: "next" | "prev") => {
      if (locked) return;
      const next =
        (targetIdx + allTestimonials.length) % allTestimonials.length;
      if (next === current.idx) return;
      setLocked(true);
      // current becomes exiting, sliding out opposite to entry direction
      setExiting({
        idx: current.idx,
        key: current.key,
        dir: dir === "next" ? "left" : "right",
      });
      keyRef.current += 1;
      setCurrent({ idx: next, key: keyRef.current });
      setTimeout(() => {
        setExiting(null);
        setLocked(false);
      }, 420);
    },
    [locked, current],
  );

  const next = useCallback(
    () => goTo(current.idx + 1, "next"),
    [current.idx, goTo],
  );
  const prev = useCallback(
    () => goTo(current.idx - 1, "prev"),
    [current.idx, goTo],
  );

  useEffect(() => {
    timerRef.current = setTimeout(next, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current.idx, next]);

  const onDragStart = (x: number) => {
    dragStartX.current = x;
  };
  const onDragEnd = (x: number) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - x;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStartX.current = null;
  };

  const t = allTestimonials[current.idx];

  // entry animation class: next → from right, prev → from left
  const getEntryClass = (dir: "next" | "prev") =>
    dir === "next" ? "slide-enter-right" : "slide-enter-left";

  return (
    <>
      <Header />
      <main style={{ background: "#fff" }}>
        {/* Hero banner */}
        <div
          style={{
            background: "#0a1628",
            paddingTop: "120px",
            paddingBottom: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            {project.title}
          </h1>
          <div
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
            <Link href="/projects" className="project-detail-breadcrumb-link">
              Projects
            </Link>
            <span>›</span>
            <span style={{ color: "#fff" }}>{project.title}</span>
          </div>
        </div>

        {/* Content */}
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}
        >
          {/* Top: image + tech specs */}
          <div className="project-detail-top">
            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "320px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "28px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#1d75d9",
                    fontSize: "20px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ⚙
                </span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#001b3d",
                      fontSize: "13px",
                      marginBottom: "4px",
                    }}
                  >
                    Công nghệ
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.tech}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#1d75d9",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    👤
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#001b3d",
                        fontSize: "13px",
                        marginBottom: "2px",
                      }}
                    >
                      Ngôn ngữ
                    </p>
                    <p style={{ fontSize: "12px", color: "#6b7280" }}>
                      {project.language}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#1d75d9",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    🔷
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#1d75d9",
                        fontSize: "13px",
                        marginBottom: "2px",
                      }}
                    >
                      Framework
                    </p>
                    <p style={{ fontSize: "12px", color: "#6b7280" }}>
                      {project.framework}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#1d75d9",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    🗄
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#001b3d",
                        fontSize: "13px",
                        marginBottom: "2px",
                      }}
                    >
                      Database
                    </p>
                    <p style={{ fontSize: "12px", color: "#6b7280" }}>
                      {project.database}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#1d75d9",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    👥
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#001b3d",
                        fontSize: "13px",
                        marginBottom: "2px",
                      }}
                    >
                      Quy mô
                    </p>
                    <p style={{ fontSize: "12px", color: "#6b7280" }}>
                      {project.scale}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{ color: "#1d75d9", fontSize: "16px", flexShrink: 0 }}
                >
                  🔧
                </span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#001b3d",
                      fontSize: "13px",
                      marginBottom: "2px",
                    }}
                  >
                    Công cụ
                  </p>
                  <p style={{ fontSize: "12px", color: "#6b7280" }}>
                    {project.tools}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tổng quan */}
          <div style={{ marginTop: "48px" }}>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#001b3d",
                marginBottom: "16px",
              }}
            >
              Tổng quan
            </h2>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.8 }}>
              {project.overview}
            </p>
          </div>

          {/* Mục đích + Lợi ích */}
          <div className="project-detail-goals" style={{ marginTop: "40px" }}>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#001b3d",
                  marginBottom: "20px",
                }}
              >
                Mục đích chính
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {project.goals?.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
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
                      {g}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#001b3d",
                  marginBottom: "20px",
                }}
              >
                Lợi ích mang lại
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {project.benefits?.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#1d75d9",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {i + 1}
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#4b5563",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                color: "#001b3d",
                lineHeight: 1.3,
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              Đánh giá của <span style={{ color: "#1d75d9" }}>khách hàng</span>
            </h2>

            <div
              className="project-detail-testimonial"
              style={{ cursor: "grab", userSelect: "none" }}
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseUp={(e) => onDragEnd(e.clientX)}
              onMouseLeave={() => {
                dragStartX.current = null;
              }}
              onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
              onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
            >
              {/* Quote card with directional slide */}
              <div className="testimonial-slide-wrap">
                {/* Exiting slide */}
                {exiting && (
                  <div
                    key={`exit-${exiting.key}`}
                    className={
                      exiting.dir === "left"
                        ? "slide-exit-left"
                        : "slide-exit-right"
                    }
                  >
                    <QuoteCard
                      t={allTestimonials[exiting.idx]}
                      activeIdx={exiting.idx}
                      onPrev={prev}
                      onNext={next}
                      onDot={(i) => goTo(i, i > exiting.idx ? "next" : "prev")}
                    />
                  </div>
                )}
                {/* Entering slide — direction: next enters from right, prev enters from left */}
                <div
                  key={`enter-${current.key}`}
                  className={
                    locked
                      ? exiting
                        ? exiting.dir === "left"
                          ? "slide-enter-right"
                          : "slide-enter-left"
                        : ""
                      : ""
                  }
                >
                  <QuoteCard
                    t={t}
                    activeIdx={current.idx}
                    onPrev={prev}
                    onNext={next}
                    onDot={(i) => goTo(i, i > current.idx ? "next" : "prev")}
                  />
                </div>
              </div>

              {/* Image */}
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  maxHeight: "340px",
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: "100%",
                    height: "340px",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    transition: "opacity 0.4s ease",
                    opacity: locked ? 0.6 : 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Extracted card to avoid duplication
function QuoteCard({
  t,
  activeIdx,
  onPrev,
  onNext,
  onDot,
}: {
  t: (typeof allTestimonials)[0];
  activeIdx: number;
  onPrev: () => void;
  onNext: () => void;
  onDot: (i: number) => void;
}) {
  return (
    <div
      style={{
        background: "#f8fafc",
        borderRadius: "12px",
        padding: "32px",
        border: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          color: "#1d75d9",
          fontSize: "56px",
          lineHeight: 1,
          marginBottom: "8px",
          fontFamily: "Georgia, serif",
        }}
      >
        "
      </div>
      <p
        style={{
          fontSize: "14px",
          color: "#4b5563",
          lineHeight: 1.8,
          marginBottom: "24px",
          fontStyle: "italic",
        }}
      >
        {t.quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#1d75d9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: "18px",
            flexShrink: 0,
          }}
        >
          {t.name.charAt(t.name.lastIndexOf(" ") + 1)}
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
          <p style={{ fontSize: "12px", color: "#1d75d9", margin: 0 }}>
            {t.role}
          </p>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>
            {t.company}
          </p>
        </div>
      </div>
      {/* Dots + arrows */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          {allTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => onDot(i)}
              style={{
                width: i === activeIdx ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === activeIdx ? "#1d75d9" : "#d1d5db",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <ArrowBtn onClick={onPrev} label="‹" />
          <ArrowBtn onClick={onNext} label="›" />
        </div>
      </div>
    </div>
  );
}

function ArrowBtn({ onClick, label }: { onClick: () => void; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        border: `1px solid ${hovered ? "#1d75d9" : "#d1d5db"}`,
        background: hovered ? "#1d75d9" : "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: hovered ? "#fff" : "#374151",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </button>
  );
}

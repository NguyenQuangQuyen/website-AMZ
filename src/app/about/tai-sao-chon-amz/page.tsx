"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stats from "@/sections/Stats";
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

const processCards = [
  {
    iconPath:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "Quy trình minh bạch",
    items: [
      "Quy trình đề xuất trước khi bắt đầu",
      "Quy trình tuyển dụng chuyên nghiệp, rõ ràng",
      "Trao đổi trực tiếp Gặp mặt 3 bên: Đối tác, AMZ, Ứng viên",
      "Khách hàng dễ dàng theo dõi tiến độ",
    ],
  },
  {
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Tiết kiệm chi phí",
    items: [
      "Lập kế hoạch chi tiết ngay từ đầu",
      "Chọn công nghệ phù hợp",
      "Tiết kiệm chi phí bảo trì",
      "Hỗ trợ miễn phí tư cố vấn kỹ thuật giàu kinh nghiệm nếu có yêu cầu từ HDH",
    ],
  },
  {
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Tiết kiệm thời gian",
    items: [
      "Bàn giao sản phẩm đúng hạn",
      "Tối ưu hóa quy trình làm việc",
      "Quản lý tối các rủi ro",
    ],
  },
  {
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Đảm bảo an ninh",
    items: ["Thỏa thuận không tiết lộ", "Trung thực và uy tín"],
  },
];

const whyChooseItems = [
  {
    iconPath:
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Giá cả cạnh tranh",
    desc: "Chính sách giá hấp dẫn tùy theo quy mô dự án hoặc hợp đồng đầu tiên dài hạn (24 tháng+)",
  },
  {
    iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    title: "Khả năng mở rộng nhóm",
    desc: "Tài nguyên có thể mở rộng vòng 2-8 tuần theo yêu cầu của khách hàng",
  },
  {
    iconPath:
      "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Bảo mật",
    desc: "Các giao thức thông tin tiên tiến của chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế khắt khe nhau",
  },
  {
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    title: "Phát triển toàn chu kỳ",
    desc: "Chúng tôi cung cấp PM, BA, SA, DEV, TESTER & QA có thể bao gồm các dự án từ đầu đến cuối hoặc chỉ có thể bao gồm một giai đoạn của dự án",
  },
  {
    iconPath:
      "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    title: "Kinh nghiệm",
    desc: "Kinh nghiệm tốt trong nhiều lĩnh vực kinh doanh khác nhau",
  },
  {
    iconPath:
      "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Khách hàng vui vẻ",
    desc: "Nhiều mối quan hệ hợp tác lâu dài. 96,5% khách hàng trung thành. Dự án chất lượng tốt và đúng tiến độ. Tỷ lệ hoàn thành dự án 100%",
  },
];

const testimonials = [
  {
    quote:
      "AMZ cung cấp giải pháp vận hành thông suốt, hỗ trợ chúng tôi xử lý các bài toán dữ liệu lớn và phức tạp với tốc độ xử lý nhanh chóng. Đội ngũ của họ luôn tận tâm và hiệu quả.",
    name: "Mr. Trường",
    role: "Managing Director",
    company: "Tập đoàn CMC",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    quote:
      "Giải pháp của AMZ giúp chúng tôi tối ưu hóa hạ tầng và nâng cao chất lượng dịch vụ cho hàng triệu khách hàng. Tỷ lệ chuyển đổi tăng 40% chỉ trong quý đầu tiên.",
    name: "Mr. Minh",
    role: "Factory Director",
    company: "Vinaphone",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    quote:
      "Hệ thống do AMZ phát triển đã giúp chúng tôi giảm thiểu sai sót và tăng tốc độ xử lý giao dịch lên đến 300%. Đội ngũ hỗ trợ 24/7 rất chuyên nghiệp.",
    name: "Ms. Hương",
    role: "Sales Director",
    company: "TPBank",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    quote:
      "Thời gian lập báo cáo giảm từ 2 tuần xuống còn 2 ngày nhờ hệ thống ERP của AMZ. Chúng tôi có cái nhìn toàn diện hơn về hoạt động doanh nghiệp.",
    name: "Mr. Thành",
    role: "CEO",
    company: "Sun Group",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

type SlideItem = { idx: number; key: number };

const domesticPartners = [
  "FPT",
  "CMC CORP",
  "TPBank",
  "SUN GROUP",
  "mobifone",
  "vinaphone",
];
const intlPartners = ["NTT", "unitel", "TORO", "xperiencehr", "SAMSUNG"];
void domesticPartners;
void intlPartners;

export default function TaiSaoChonAMZPage() {
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
      const next = (targetIdx + testimonials.length) % testimonials.length;
      if (next === current.idx) return;
      setLocked(true);
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

  const t = testimonials[current.idx];

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
            Tại sao chọn AMZ?
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
            <Link href="/about" className="project-detail-breadcrumb-link">
              Giới thiệu
            </Link>
            <span>›</span>
            <span style={{ color: "#fff" }}>Tại sao chọn AMZ</span>
          </motion.div>
        </div>

        {/* 4 Process cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            padding: "64px 24px",
            background:
              "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #e0f2fe 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background chevron decorations */}
          <div
            style={{
              position: "absolute",
              left: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "120px",
              height: "200px",
              opacity: 0.08,
              background: "linear-gradient(135deg, #1d75d9, #2563eb)",
              clipPath:
                "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "120px",
              height: "200px",
              opacity: 0.08,
              background: "linear-gradient(135deg, #1d75d9, #2563eb)",
              clipPath:
                "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
            }}
          />

          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
            className="service-cards-grid"
          >
            {processCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(29,117,217,0.1)",
                  boxShadow: "0 2px 12px rgba(29,117,217,0.06)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 12px 32px rgba(29,117,217,0.15)";
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
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "20px",
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
                      flexShrink: 0,
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
                      <path d={card.iconPath} />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontWeight: 800,
                      color: "#1e3a5f",
                      fontSize: "17px",
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {card.items.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "#374151",
                          fontWeight: 500,
                          fontSize: "14px",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        {j + 1}.
                      </span>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#374151",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tại Sao Chọn AMZ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            padding: "64px 24px",
            background:
              "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #e0f2fe 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Chevron decorations */}
          <div
            style={{
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "160px",
              height: "280px",
              opacity: 0.07,
              background: "#1d75d9",
              clipPath:
                "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "160px",
              height: "280px",
              opacity: 0.07,
              background: "#1d75d9",
              clipPath:
                "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
            }}
          />

          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 800,
                color: "#1e3a5f",
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              Tại Sao Chọn <span style={{ color: "#1d75d9" }}>AMZ?</span>
            </motion.h2>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
              className="service-3col-grid"
            >
              {whyChooseItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "28px",
                    border: "1px solid rgba(29,117,217,0.1)",
                    boxShadow: "0 2px 12px rgba(29,117,217,0.06)",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 12px 32px rgba(29,117,217,0.15)";
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
                      width: "48px",
                      height: "48px",
                      background: "#dbeafe",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1d75d9"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={item.iconPath} />
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
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#4b5563",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <div style={{ padding: "64px 24px", background: "#fff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                color: "#001b3d",
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
              <div className="testimonial-slide-wrap">
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
                      t={testimonials[exiting.idx]}
                      activeIdx={exiting.idx}
                      total={testimonials.length}
                      onPrev={prev}
                      onNext={next}
                      onDot={(i) => goTo(i, i > exiting.idx ? "next" : "prev")}
                    />
                  </div>
                )}
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
                    total={testimonials.length}
                    onPrev={prev}
                    onNext={next}
                    onDot={(i) => goTo(i, i > current.idx ? "next" : "prev")}
                  />
                </div>
              </div>

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

        {/* Stats */}
        <Stats />

        {/* Partners */}
        <Partners />
      </main>
      <Footer />
    </>
  );
}

function QuoteCard({
  t,
  activeIdx,
  total,
  onPrev,
  onNext,
  onDot,
}: {
  t: (typeof testimonials)[0];
  activeIdx: number;
  total: number;
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          {Array.from({ length: total }).map((_, i) => (
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

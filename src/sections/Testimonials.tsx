"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Đội ngũ chuyên gia không chỉ mang đến kiến thức sâu rộng và kinh nghiệm phong phú, mà còn thể hiện sự cam kết và tinh thần làm việc chuyên nghiệp. Sự hỗ trợ tận tình và giải pháp sáng tạo của họ đã giúp dự án đạt được những kết quả xuất sắc và đáp ứng yêu cầu khắt khe của chúng tôi.",
    author: "FPT FIS",
  },
  {
    quote: "AMZ đã đồng hành cùng chúng tôi trong suốt quá trình chuyển đổi số. Giải pháp họ cung cấp không chỉ hiệu quả về mặt kỹ thuật mà còn rất phù hợp với đặc thù nghiệp vụ của ngân hàng. Chúng tôi hoàn toàn hài lòng với chất lượng dịch vụ.",
    author: "VIETTEL",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    const clamped = (next + testimonials.length) % testimonials.length;
    setDir(next > current ? 1 : -1);
    setCurrent(clamped);
  };

  return (
    <section style={{ background: "#0f1923", padding: "80px 0", overflow: "hidden" }}>
      <div className="testimonials-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* LEFT */}
        <div>
          <span style={{ color: "#1d75d9", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>
            Đánh giá của khách hàng
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: "20px" }}>
            Cam kết trải nghiệm{" "}
            <span style={{ color: "#1d75d9" }}>hoàn hảo</span>
          </h2>
          <p style={{ color: "#8a9bb0", fontSize: "14px", lineHeight: 1.8 }}>
            AMZ cam kết mang lại trải nghiệm tuyệt vời nhất cho khách hàng thông qua dịch vụ xuất sắc, giải pháp công nghệ tiên tiến và hỗ trợ tận tâm, đảm bảo sự hài lòng hoàn hảo.
          </p>
        </div>

        {/* RIGHT */}
        <div style={{ position: "relative" }}>
          <div style={{ overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -60, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* Quote mark */}
                <div style={{ color: "#1d75d9", fontSize: "64px", lineHeight: 1, marginBottom: "16px", fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ color: "#fff", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.8, marginBottom: "28px" }}>
                  {testimonials[current].quote}
                </p>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px", fontFamily: "Montserrat, sans-serif" }}>
                  {testimonials[current].author}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
            <button
              onClick={() => go(current - 1)}
              aria-label="Trước"
              style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #334155", background: "transparent", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#1d75d9")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#334155")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => go(current + 1)}
              aria-label="Tiếp theo"
              style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #334155", background: "transparent", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#1d75d9")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#334155")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

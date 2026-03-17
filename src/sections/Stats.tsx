"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { end: 2013, suffix: "", label: "Năm thành lập" },
  { end: 100, suffix: "+", label: "Nhân sự" },
  { end: 10, suffix: "+", label: "Quốc gia hợp tác" },
  { end: 100, suffix: "+", label: "Đối tác" },
  { end: 500, suffix: "+", label: "Dự án" },
];

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = end > 100 ? end - 200 : 0;
    const range = end - start;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + range * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return (
    <div ref={ref} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0dcaf0", fontFamily: "Montserrat, sans-serif", lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{ background: "linear-gradient(135deg, #1d75d9 0%, #6c3fc5 60%, #1d75d9 100%)", padding: "48px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", color: "#fff", fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 600, marginBottom: "36px" }}
        >
          Chúng tôi giúp khách hàng của mình tạo ra những thay đổi
        </motion.p>

        <div className="stats-row">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ textAlign: "center", flex: "1 1 100px" }}
            >
              <CountUp end={s.end} suffix={s.suffix} />
              <div style={{ color: "#fff", fontSize: "14px", marginTop: "8px", fontWeight: 500 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

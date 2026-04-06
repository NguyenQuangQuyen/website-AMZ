"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/sections/Partners";
import Stats from "@/sections/Stats";

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

const services = [
  { icon: "🏦", label: "Tài chính & Bảo hiểm" },
  { icon: "📡", label: "Thương mại Điện tử" },
  { icon: "📶", label: "Viễn thông" },
  { icon: "🤖", label: "AI IoT" },
  { icon: "💼", label: "CRM" },
  { icon: "📊", label: "ERP" },
  { icon: "🏢", label: "VTI phần mềm hóa" },
  { icon: "🏛", label: "Cổng cấp ngân hàng" },
];

const timeline = [
  {
    year: "2013",
    title: "Phát triển ban đầu",
    desc: "Thành lập công ty, xây dựng đội ngũ nòng cốt và triển khai các dự án đầu tiên.",
  },
  {
    year: "2016",
    title: "Mở rộng quy mô",
    desc: "Mở rộng sang các thị trường mới, tăng trưởng đội ngũ lên 50+ chuyên gia.",
  },
  {
    year: "2020",
    title: "Mở rộng toàn cầu",
    desc: "Hợp tác với các đối tác quốc tế, triển khai dự án tại 10+ quốc gia.",
  },
  {
    year: "2023",
    title: "Đổi mới sáng tạo",
    desc: "Ra mắt các giải pháp AI, Blockchain và Cloud-native thế hệ mới.",
  },
];

const directors = [
  {
    name: "Hoang Vuong",
    role: "Chủ tịch HĐQT",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Nguyễn Hoài Phương",
    role: "Tổng Giám Đốc",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  },
  {
    name: "Nguyễn Trung Tường",
    role: "Phó Tổng Giám Đốc",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Hoàng Lan Giang",
    role: "Giám Đốc Tài Chính",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
  {
    name: "Trần Văn Trường",
    role: "Giám Đốc Kỹ Thuật",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
];

const tabs = [
  {
    label: "Sứ mệnh",
    content:
      "Cung cấp các sản phẩm - dịch vụ - giải pháp công nghệ chất lượng, đẳng cấp thế giới, mang lại những giá trị vượt trội cho khách hàng, đóng góp tích cực vào sự phát triển của Việt Nam.",
  },
  {
    label: "Tầm nhìn",
    content:
      "Trở thành công ty công nghệ hàng đầu Đông Nam Á vào năm 2030, tiên phong trong chuyển đổi số và cung cấp các giải pháp AI, Blockchain, Cloud cho doanh nghiệp toàn cầu.",
  },
  {
    label: "Giá trị cốt lõi",
    content:
      "Chính trực — Sáng tạo — Tận tâm — Chuyên nghiệp. Chúng tôi đặt khách hàng làm trung tâm, không ngừng đổi mới và cam kết mang lại giá trị thực tiễn trong mọi dự án.",
  },
];

function TabSection() {
  const [active, setActive] = useState(0);
  return (
    <div style={{ marginTop: "8px" }}>
      {/* Tab headers */}
      <div
        style={{
          display: "flex",
          gap: "0",
          borderBottom: "2px solid rgba(255,255,255,0.15)",
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "10px 20px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 700,
              color: active === i ? "#1d75d9" : "rgba(255,255,255,0.6)",
              borderBottom:
                active === i ? "2px solid #1d75d9" : "2px solid transparent",
              marginBottom: "-2px",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div style={{ paddingTop: "20px", minHeight: "80px" }}>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "15px",
            lineHeight: 1.8,
            margin: 0,
            transition: "opacity 0.3s",
          }}
        >
          {tabs[active].content}
        </p>
      </div>
    </div>
  );
}

function DirectorCard({
  d,
}: {
  d: { name: string; role: string; image: string };
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 12px 32px rgba(29,117,217,0.25)"
          : "0 4px 16px rgba(0,0,0,0.08)",
        position: "relative",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <img
        src={d.image}
        alt={d.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          objectPosition: "top",
          display: "block",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      {/* Overlay: bottom on default → full center on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "rgba(29,117,217,0.82)"
            : "linear-gradient(to top, rgba(0,27,61,0.92) 0%, rgba(0,27,61,0.3) 50%, transparent 100%)",
          display: "flex",
          alignItems: hovered ? "center" : "flex-end",
          justifyContent: "center",
          padding: hovered ? "20px" : "14px",
          transition: "background 0.35s ease",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: hovered ? "15px" : "13px",
              margin: 0,
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
              transition: "font-size 0.3s ease",
            }}
          >
            {d.name}
          </p>
          <p
            style={{
              color: hovered ? "#bfdbfe" : "#93c5fd",
              fontSize: "11px",
              margin: hovered ? "6px 0 0" : "2px 0 0",
              transition: "color 0.3s, margin 0.3s",
            }}
          >
            {d.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
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
            paddingBottom: "64px",
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
          {/* Blue circle decoration */}
          <div
            style={{
              position: "absolute",
              right: "-80px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              border: "40px solid #1d75d9",
              opacity: 0.15,
            }}
          />

          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="service-intro-grid"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "13px",
                  marginBottom: "12px",
                }}
              >
                Về AMZ
              </p>
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 900,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Tư vấn và cung cấp
                <br />
                <span style={{ color: "#1d75d9" }}>Dịch vụ CNTT Toàn cầu.</span>
              </h1>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                Chúng tôi là công ty công nghệ hàng đầu Việt Nam, chuyên cung
                cấp các giải pháp phần mềm và dịch vụ CNTT cho doanh nghiệp
                trong và ngoài nước. Với đội ngũ hơn 100 chuyên gia giàu kinh
                nghiệm, chúng tôi cam kết mang lại giá trị thực tiễn cho khách
                hàng.
              </p>
              <TabSection />
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "24px",
                  }}
                >
                  {[
                    { num: "11", label: "Năm thành lập và phát triển" },
                    { num: "100+", label: "Nhân sự chuyên nghiệp" },
                    { num: "10+", label: "Quốc gia hợp tác" },
                    { num: "500+", label: "Dự án hoàn thành" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        textAlign: "center",
                        padding: "16px",
                        background: "rgba(29,117,217,0.1)",
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        style={{
                          color: "#1d75d9",
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
                          color: "#94a3b8",
                          fontSize: "12px",
                          marginTop: "6px",
                          lineHeight: 1.4,
                        }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Testimonial mini */}
                <div
                  style={{
                    marginTop: "20px",
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#1d75d9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    H
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
                      Mr. Hoàng Vương
                    </p>
                    <p
                      style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}
                    >
                      Chủ tịch HĐQT
                    </p>
                    <div
                      style={{ display: "flex", gap: "2px", marginTop: "2px" }}
                    >
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          style={{ color: "#f59e0b", fontSize: "11px" }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Chuyên môn trong ngành */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#fff" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <span
                style={{
                  background: "#f0f6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "20px",
                  padding: "8px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1d75d9",
                }}
              >
                ~ Chuyên môn trong ngành ~
              </span>
            </motion.div>
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "32px 20px",
              }}
              className="about-services-grid"
            >
              {[
                {
                  svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
                  label: "FinTech & Bảo hiểm",
                },
                {
                  svg: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.25 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
                  label: "Thương mại điện tử",
                },
                {
                  svg: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
                  label: "Viễn thông",
                },
                {
                  svg: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z",
                  label: "AI IoT",
                },
                {
                  svg: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                  label: "CRM",
                },
                {
                  svg: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
                  label: "ERP",
                },
                {
                  svg: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5h-2V13h-2v2.5H9V8h2v3h2V8h2v7.5z",
                  label: "Văn phòng hỗ trợ",
                },
                {
                  svg: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                  label: "Cung cấp nguồn lực",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget.querySelector(
                        ".icon-circle",
                      ) as HTMLDivElement
                    ).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget.querySelector(
                        ".icon-circle",
                      ) as HTMLDivElement
                    ).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="icon-circle"
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #1d75d9 0%, #2563eb 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 16px rgba(29,117,217,0.3)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d={s.svg} />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#374151",
                      margin: 0,
                      textAlign: "center",
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

        {/* Cam kết từ AMZ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "0 24px 64px", background: "#fff" }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="service-intro-grid"
          >
            <motion.div variants={fadeUp}>
              <div
                style={{
                  display: "inline-block",
                  background: "#fff3cd",
                  border: "1px solid #ffc107",
                  borderRadius: "20px",
                  padding: "6px 18px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#856404",
                  marginBottom: "28px",
                }}
              >
                Cam kết từ AMZ
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontWeight: 800,
                        color: "#001b3d",
                        fontSize: "16px",
                        margin: 0,
                      }}
                    >
                      Mr. Hoàng Vương
                    </p>
                    <p
                      style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}
                    >
                      TGĐ/Chủ tịch HĐQT
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        style={{ color: "#f59e0b", fontSize: "18px" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4b5563",
                    lineHeight: 1.85,
                    marginTop: "16px",
                  }}
                >
                  Chuyển đổi số kết hợp công nghệ tiên tiến với dịch vụ tận tâm
                  để mang lại giá trị vượt trội cho khách hàng. Chúng tôi cam
                  kết cung cấp giải pháp số hóa hàng đầu và hỗ trợ nhanh chóng,
                  đảm bảo sự hài lòng và thành công của bạn trong quá trình
                  chuyển mình.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80"
                alt="Team meeting"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline — chevron arrow style */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "64px 24px", background: "#f0f6ff" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {(() => {
              const items = [
                {
                  year: "2016",
                  active: false,
                  title: "Phát triển\nmạnh mẽ",
                  desc: "Trở thành đối tác tin cậy của các tập đoàn lớn, nhận được nhiều giải thưởng giá trị trong ngành",
                  iconPath:
                    "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
                },
                {
                  year: "2018",
                  active: false,
                  title: "Vươn ra\nthế giới",
                  desc: "AMZ hiện thực hóa mở rộng các mảng dự án quốc tế",
                  iconPath: "M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z",
                },
                {
                  year: "2020",
                  active: true,
                  title: "Mở rộng\nnghiên cứu",
                  desc: "Công ty tích hợp công nghệ AI vào các giải pháp của mình, mở rộng phạm vi dịch vụ và cải thiện hiệu suất",
                  iconPath:
                    "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
                },
                {
                  year: "2024",
                  active: false,
                  title: "Đầu tư\nsản phẩm",
                  desc: "Đánh dấu bước tiến lớn trong việc dẫn đầu xu hướng công nghệ và đáp ứng nhu cầu ngày càng cao của khách hàng.",
                  iconPath:
                    "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
                },
              ];
              return (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "0",
                  }}
                  className="about-services-grid"
                >
                  {items.map((t, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0 12px",
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          background: "#fff",
                          border: "2px solid #dbeafe",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 12px rgba(29,117,217,0.12)",
                          marginBottom: "20px",
                        }}
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="#1d75d9"
                        >
                          <path d={t.iconPath} />
                        </svg>
                      </div>
                      {/* Chevron */}
                      <div
                        style={{
                          width: "100%",
                          height: "52px",
                          background: t.active ? "#001b3d" : "#1d75d9",
                          clipPath:
                            i === 0
                              ? "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)"
                              : i === 3
                                ? "polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)"
                                : "polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: i > 0 ? "-1px" : "0",
                          marginBottom: "16px",
                        }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: "clamp(14px, 2vw, 18px)",
                          }}
                        >
                          {t.year}
                        </span>
                      </div>
                      {/* Title */}
                      <p
                        style={{
                          fontWeight: 800,
                          color: "#001b3d",
                          fontSize: "15px",
                          textAlign: "center",
                          marginBottom: "8px",
                          whiteSpace: "pre-line",
                          lineHeight: 1.3,
                        }}
                      >
                        {t.title}
                      </p>
                      {/* Desc */}
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#6b7280",
                          lineHeight: 1.65,
                          textAlign: "center",
                          margin: 0,
                        }}
                      >
                        {t.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </div>
        </motion.div>
        {/* Ban Giám Đốc */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ padding: "0 0 64px", background: "#fff" }}
        >
          {/* Section header banner */}
          <motion.div
            variants={fadeUp}
            style={{
              position: "relative",
              background: "#f1f3f5",
              padding: "20px 24px",
              marginBottom: "40px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Left decorative triangles */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #e2e5e9 25%, transparent 25%) no-repeat, linear-gradient(225deg, #e2e5e9 25%, transparent 25%) no-repeat",
                  backgroundSize: "60px 100%",
                  backgroundPosition: "0 0, 60px 0",
                }}
              />
            </div>
            {/* Right decorative triangles */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "100%",
                  background:
                    "linear-gradient(315deg, #e2e5e9 25%, transparent 25%) no-repeat, linear-gradient(45deg, #e2e5e9 25%, transparent 25%) no-repeat",
                  backgroundSize: "60px 100%",
                  backgroundPosition: "0 0, 60px 0",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontWeight: 800,
                color: "#001b3d",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              Ban Giám Đốc
            </h2>
          </motion.div>

          <div
            style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}
          >
            {/* Directors grid */}
            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
                marginBottom: "20px",
              }}
              className="about-services-grid"
            >
              {directors.slice(0, 4).map((d, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <DirectorCard d={d} />
                </motion.div>
              ))}
            </motion.div>
            {/* 5th director centered */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "calc(25% - 15px)" }}
                className="director-5th"
              >
                <DirectorCard d={directors[4]} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <Stats />

        <Partners />
      </main>
      <Footer />
    </>
  );
}

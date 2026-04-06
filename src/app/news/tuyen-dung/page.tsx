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

const jobs = [
  {
    id: 1,
    title: "Senior Backend Developer (Java)",
    department: "Engineering",
    location: "Hà Nội",
    type: "Full-time",
    level: "Senior",
    salary: "2,000 - 4,000 USD",
    tags: ["Java", "Spring Boot", "Microservices"],
    desc: "Phát triển và duy trì các hệ thống backend quy mô lớn cho khách hàng trong lĩnh vực tài chính và viễn thông.",
    requirements: [
      "5+ năm kinh nghiệm Java",
      "Thành thạo Spring Boot, Hibernate",
      "Kinh nghiệm Microservices",
      "Tiếng Anh giao tiếp tốt",
    ],
    benefits: [
      "Lương cạnh tranh + thưởng dự án",
      "Bảo hiểm sức khỏe cao cấp",
      "Đào tạo & chứng chỉ quốc tế",
      "Làm việc hybrid linh hoạt",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer (React/Vue)",
    department: "Engineering",
    location: "Hà Nội",
    type: "Full-time",
    level: "Middle",
    salary: "1,200 - 2,500 USD",
    tags: ["React", "Vue.js", "TypeScript"],
    desc: "Xây dựng giao diện người dùng hiện đại, tối ưu hiệu suất cho các ứng dụng web quy mô lớn.",
    requirements: [
      "3+ năm kinh nghiệm Frontend",
      "Thành thạo React hoặc Vue.js",
      "Kinh nghiệm TypeScript",
      "Hiểu biết về UX/UI",
    ],
    benefits: [
      "Môi trường làm việc sáng tạo",
      "MacBook Pro được cấp",
      "Team building hàng quý",
      "Review lương 2 lần/năm",
    ],
  },
  {
    id: 3,
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Hà Nội / Remote",
    type: "Full-time",
    level: "Middle",
    salary: "1,500 - 3,000 USD",
    tags: ["React Native", "iOS", "Android"],
    desc: "Phát triển ứng dụng di động cross-platform cho các khách hàng trong và ngoài nước.",
    requirements: [
      "3+ năm React Native",
      "Kinh nghiệm publish App Store/Google Play",
      "Hiểu biết native iOS/Android",
      "Kỹ năng debug tốt",
    ],
    benefits: [
      "Remote 2 ngày/tuần",
      "Thiết bị test được cấp",
      "Học bổng đào tạo 5 triệu/năm",
      "Cổ phần công ty (ESOP)",
    ],
  },
  {
    id: 4,
    title: "Business Analyst (BA)",
    department: "Product",
    location: "Hà Nội",
    type: "Full-time",
    level: "Middle - Senior",
    salary: "1,000 - 2,000 USD",
    tags: ["BA", "Agile", "Fintech"],
    desc: "Phân tích nghiệp vụ, thu thập yêu cầu và làm cầu nối giữa khách hàng và đội phát triển.",
    requirements: [
      "3+ năm kinh nghiệm BA",
      "Kinh nghiệm lĩnh vực Fintech/Telecom",
      "Thành thạo UML, BPMN",
      "Tiếng Anh tốt",
    ],
    benefits: [
      "Lộ trình thăng tiến rõ ràng",
      "Đi công tác nước ngoài",
      "Phụ cấp ăn trưa",
      "Thưởng hiệu suất hàng quý",
    ],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hà Nội",
    type: "Full-time",
    level: "Senior",
    salary: "2,000 - 3,500 USD",
    tags: ["Kubernetes", "AWS", "CI/CD"],
    desc: "Xây dựng và vận hành hạ tầng cloud, tự động hóa quy trình triển khai cho các hệ thống lớn.",
    requirements: [
      "4+ năm DevOps/SRE",
      "Thành thạo Kubernetes, Docker",
      "Kinh nghiệm AWS/GCP",
      "Scripting Python/Bash",
    ],
    benefits: [
      "AWS certification được tài trợ",
      "On-call allowance",
      "Thiết bị làm việc cao cấp",
      "Flexible working hours",
    ],
  },
  {
    id: 6,
    title: "QA Engineer",
    department: "Quality",
    location: "Hà Nội",
    type: "Full-time",
    level: "Junior - Middle",
    salary: "800 - 1,500 USD",
    tags: ["Selenium", "Postman", "Jira"],
    desc: "Đảm bảo chất lượng sản phẩm thông qua kiểm thử manual và automation cho các dự án lớn.",
    requirements: [
      "2+ năm kinh nghiệm QA",
      "Kinh nghiệm automation testing",
      "Thành thạo Selenium/Cypress",
      "Kỹ năng viết test case tốt",
    ],
    benefits: [
      "Đào tạo ISTQB",
      "Môi trường Agile năng động",
      "Phụ cấp xăng xe",
      "Bảo hiểm tai nạn 24/7",
    ],
  },
];

const perks = [
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Lương cạnh tranh",
    desc: "Review 2 lần/năm, thưởng dự án và hiệu suất hấp dẫn",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Sức khỏe & Phúc lợi",
    desc: "Bảo hiểm sức khỏe cao cấp, khám sức khỏe định kỳ hàng năm",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Đào tạo & Phát triển",
    desc: "Ngân sách học tập 10 triệu/năm, hỗ trợ chứng chỉ quốc tế",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Văn hóa đội nhóm",
    desc: "Team building hàng quý, du lịch công ty, sự kiện nội bộ thường xuyên",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Môi trường chuyên nghiệp",
    desc: "Quy trình Agile chuẩn quốc tế, công nghệ hiện đại nhất",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Lộ trình thăng tiến",
    desc: "Lộ trình career path rõ ràng, cơ hội thăng tiến nhanh",
  },
];

const levelColors: Record<string, string> = {
  "Junior - Middle": "#10b981",
  Middle: "#3b82f6",
  "Middle - Senior": "#8b5cf6",
  Senior: "#f59e0b",
};

function JobCard({
  job,
  onSelect,
}: {
  job: (typeof jobs)[0];
  onSelect: (j: (typeof jobs)[0]) => void;
}) {
  return (
    <div
      onClick={() => onSelect(job)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "28px",
        border: "1px solid #e5e7eb",
        cursor: "pointer",
        transition: "all 0.3s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 12px 32px rgba(29,117,217,0.15)";
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "#1d75d9";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
        el.style.transform = "translateY(0)";
        el.style.borderColor = "#e5e7eb";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: levelColors[job.level] || "#6b7280",
            background: `${levelColors[job.level]}18` || "#f3f4f6",
            padding: "3px 10px",
            borderRadius: "20px",
          }}
        >
          {job.level}
        </span>
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
            background: "#f3f4f6",
            padding: "3px 10px",
            borderRadius: "20px",
          }}
        >
          {job.department}
        </span>
      </div>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 800,
          color: "#001b3d",
          marginBottom: "8px",
          lineHeight: 1.4,
        }}
      >
        {job.title}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: "#4b5563",
          lineHeight: 1.6,
          marginBottom: "16px",
        }}
      >
        {job.desc}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "16px",
        }}
      >
        {job.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#1d75d9",
              background: "#eff6ff",
              padding: "3px 10px",
              borderRadius: "20px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "12px",
          color: "#6b7280",
          marginBottom: "16px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {job.location}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {job.type}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "16px",
          borderTop: "1px solid #f3f4f6",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: 800, color: "#1d75d9" }}>
          {job.salary}
        </span>
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
          Xem chi tiết
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
        </span>
      </div>
    </div>
  );
}
export default function TuyenDungPage() {
  const [selected, setSelected] = useState<(typeof jobs)[0] | null>(null);
  const [filter, setFilter] = useState("Tất cả");
  const departments = [
    "Tất cả",
    "Engineering",
    "Product",
    "Infrastructure",
    "Quality",
  ];
  const filtered =
    filter === "Tất cả" ? jobs : jobs.filter((j) => j.department === filter);

  return (
    <>
      <Header />
      <main>
        <div
          style={{
            background:
              "linear-gradient(135deg,#0a1628 0%,#001b3d 60%,#0d2a4a 100%)",
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              color: "#fff",
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            Tuyển Dụng
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
            <span style={{ color: "#fff" }}>Tuyển dụng</span>
          </motion.div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg,#1d75d9 0%,#1559a7 100%)",
            padding: "48px 24px",
          }}
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                CÙNG CHÚNG TÔI
              </p>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(24px,3vw,36px)",
                  fontWeight: 900,
                  lineHeight: 1.3,
                  marginBottom: "20px",
                }}
              >
                Xây dựng tương lai
                <br />
                công nghệ Việt Nam
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                AMZ là nơi những tài năng công nghệ được phát triển toàn diện.
                Chúng tôi tìm kiếm những người đam mê, sáng tạo và muốn tạo ra
                sự khác biệt thực sự.
              </p>
              <div style={{ display: "flex", gap: "32px" }}>
                {[
                  { num: "100+", label: "Nhân viên" },
                  { num: "11", label: "Năm kinh nghiệm" },
                  { num: "97%", label: "Hài lòng" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "28px",
                        fontWeight: 900,
                        margin: 0,
                      }}
                    >
                      {s.num}
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "12px",
                        margin: 0,
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {perks.slice(0, 4).map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    padding: "20px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={p.icon} />
                    </svg>
                  </div>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "13px",
                      margin: "0 0 4px",
                    }}
                  >
                    {p.title}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "11px",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div style={{ background: "#f8fafc", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  marginBottom: "8px",
                }}
              >
                Vị trí đang tuyển dụng
              </h2>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>
                Tìm kiếm cơ hội phù hợp với bạn
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "40px",
              }}
            >
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "24px",
                    border: `1px solid ${filter === d ? "#1d75d9" : "#d1d5db"}`,
                    background: filter === d ? "#1d75d9" : "#fff",
                    color: filter === d ? "#fff" : "#374151",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "24px",
              }}
              className="service-3col-grid"
            >
              {filtered.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <JobCard job={job} onSelect={setSelected} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  marginBottom: "8px",
                }}
              >
                Tại sao chọn AMZ?
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "24px",
              }}
              className="service-3col-grid"
            >
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "24px",
                    background: "#f8fafc",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
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
                      flexShrink: 0,
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
                      <path d={p.icon} />
                    </svg>
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#001b3d",
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {p.title}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#4b5563",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg,#0a1628 0%,#001b3d 100%)",
            padding: "64px 24px",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(22px,3vw,30px)",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              Không tìm thấy vị trí phù hợp?
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                marginBottom: "28px",
              }}
            >
              Gửi CV của bạn cho chúng tôi, chúng tôi sẽ liên hệ khi có vị trí
              phù hợp.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#1d75d9",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(29,117,217,0.4)",
              }}
            >
              Gửi CV ngay
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />

      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "relative",
              background: "#fff",
              borderRadius: "20px",
              padding: "40px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid #e5e7eb",
                background: "#f9fafb",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#6b7280",
              }}
            >
              ×
            </button>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: levelColors[selected.level],
                  background: `${levelColors[selected.level]}18`,
                  padding: "3px 10px",
                  borderRadius: "20px",
                }}
              >
                {selected.level}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#6b7280",
                  background: "#f3f4f6",
                  padding: "3px 10px",
                  borderRadius: "20px",
                }}
              >
                {selected.department}
              </span>
            </div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#001b3d",
                marginBottom: "8px",
              }}
            >
              {selected.title}
            </h2>
            <div
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "20px",
              }}
            >
              <span>{selected.location}</span>
              <span>•</span>
              <span>{selected.type}</span>
              <span>•</span>
              <span style={{ color: "#1d75d9", fontWeight: 700 }}>
                {selected.salary}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "24px",
              }}
            >
              {selected.tags.map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#1d75d9",
                    background: "#eff6ff",
                    padding: "3px 10px",
                    borderRadius: "20px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontWeight: 700,
                  color: "#001b3d",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                Yêu cầu
              </p>
              {selected.requirements.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#1d75d9",
                      marginTop: "6px",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#4b5563",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {r}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontWeight: 700,
                  color: "#001b3d",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                Quyền lợi
              </p>
              {selected.benefits.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                    marginBottom: "6px",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    style={{ marginTop: "3px", flexShrink: 0 }}
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#4b5563",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {b}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#1d75d9",
                color: "#fff",
                padding: "14px",
                borderRadius: "12px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Ứng tuyển ngay
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
}

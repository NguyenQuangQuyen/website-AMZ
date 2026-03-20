"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/sections/Partners";

const categories = [
  "Tất cả",
  "AI IoT",
  "CRM",
  "Cung cấp nguồn lực",
  "ERP",
  "Thương mại điện tử",
  "Văn phòng hỗ trợ",
  "Viễn thông",
];

const projects = [
  {
    id: 1,
    title: "Business Intelligence",
    category: "AI IoT",
    image: "/projects/fintech.png",
    desc: "Business Intelligence (BI) của AMZ cho phép doanh nghiệp khai thác dữ liệu từ nhiều nguồn khác nhau về khách hàng, thị trường, nhà cung...",
  },
  {
    id: 2,
    title: "Giải pháp AI IoT nhà máy",
    category: "AI IoT",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    desc: "Hệ thống AI IoT tích hợp cảm biến thông minh giúp tối ưu hóa quy trình sản xuất, giảm chi phí vận hành và nâng cao hiệu suất nhà máy...",
  },
  {
    id: 3,
    title: "Hệ thống giám sát thông minh",
    category: "AI IoT",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    desc: "Giải pháp giám sát thời gian thực với AI phân tích dữ liệu tự động, cảnh báo sớm sự cố và hỗ trợ ra quyết định nhanh chóng...",
  },
  {
    id: 4,
    title: "Nền tảng CRM thông minh",
    category: "CRM",
    image: "/projects/saas.png",
    desc: "Nền tảng CRM toàn diện giúp doanh nghiệp quản lý quan hệ khách hàng, tự động hóa quy trình bán hàng và tăng doanh thu hiệu quả...",
  },
  {
    id: 5,
    title: "CRM Bán lẻ đa kênh",
    category: "CRM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    desc: "Giải pháp CRM tích hợp đa kênh bán lẻ, đồng bộ dữ liệu khách hàng từ online đến offline, nâng cao trải nghiệm mua sắm...",
  },
  {
    id: 6,
    title: "CRM Chăm sóc khách hàng",
    category: "CRM",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    desc: "Hệ thống chăm sóc khách hàng tự động với AI chatbot, ticket management và phân tích hành vi người dùng theo thời gian thực...",
  },
  {
    id: 7,
    title: "Hệ thống quản lý nhân sự",
    category: "Cung cấp nguồn lực",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    desc: "Phần mềm HRM toàn diện quản lý toàn bộ vòng đời nhân viên từ tuyển dụng, onboarding đến đánh giá hiệu suất và phát triển nghề nghiệp...",
  },
  {
    id: 8,
    title: "Nền tảng tuyển dụng trực tuyến",
    category: "Cung cấp nguồn lực",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    desc: "Hệ thống tuyển dụng thông minh với AI sàng lọc hồ sơ, phỏng vấn video và quản lý pipeline ứng viên hiệu quả...",
  },
  {
    id: 9,
    title: "Phần mềm chấm công thông minh",
    category: "Cung cấp nguồn lực",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80",
    desc: "Giải pháp chấm công nhận diện khuôn mặt, tích hợp GPS và tự động tính lương, giảm thiểu sai sót và tiết kiệm thời gian quản lý...",
  },
  {
    id: 10,
    title: "Hệ thống Quản lý Doanh nghiệp",
    category: "ERP",
    image: "/projects/ecommerce.png",
    desc: "Giải pháp ERP tổng thể tích hợp tài chính, kho vận, sản xuất và nhân sự trên một nền tảng duy nhất, tối ưu hóa toàn bộ hoạt động doanh nghiệp...",
  },
  {
    id: 11,
    title: "ERP Sản xuất & Kho vận",
    category: "ERP",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    desc: "Module ERP chuyên biệt cho sản xuất và logistics, quản lý chuỗi cung ứng, tối ưu tồn kho và theo dõi đơn hàng real-time...",
  },
  {
    id: 12,
    title: "ERP Tài chính kế toán",
    category: "ERP",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    desc: "Hệ thống kế toán tài chính tự động hóa báo cáo, tuân thủ chuẩn mực kế toán Việt Nam và quốc tế, hỗ trợ ra quyết định chiến lược...",
  },
  {
    id: 13,
    title: "Cổng thanh toán trực tuyến",
    category: "Thương mại điện tử",
    image: "/projects/smarthome.png",
    desc: "Cổng thanh toán đa phương thức hỗ trợ thẻ ngân hàng, ví điện tử và QR code, bảo mật chuẩn PCI DSS và xử lý giao dịch tốc độ cao...",
  },
  {
    id: 14,
    title: "Sàn thương mại điện tử B2B",
    category: "Thương mại điện tử",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    desc: "Nền tảng B2B marketplace kết nối doanh nghiệp với nhà cung cấp, tích hợp quản lý đơn hàng, hợp đồng và thanh toán tự động...",
  },
  {
    id: 15,
    title: "Ứng dụng mua sắm di động",
    category: "Thương mại điện tử",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    desc: "App mua sắm mobile với giao diện trực quan, gợi ý sản phẩm AI, thanh toán 1-click và chương trình loyalty tích điểm thông minh...",
  },
  {
    id: 16,
    title: "Phần mềm văn phòng số",
    category: "Văn phòng hỗ trợ",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "Bộ công cụ văn phòng số tích hợp soạn thảo, bảng tính, trình chiếu và quản lý email trên nền tảng đám mây, cộng tác thời gian thực...",
  },
  {
    id: 17,
    title: "Hệ thống quản lý tài liệu",
    category: "Văn phòng hỗ trợ",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
    desc: "DMS thông minh với OCR nhận dạng văn bản, phân loại tự động, kiểm soát phiên bản và phân quyền truy cập bảo mật đa cấp...",
  },
  {
    id: 18,
    title: "Nền tảng họp trực tuyến",
    category: "Văn phòng hỗ trợ",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    desc: "Giải pháp họp video HD, chia sẻ màn hình, whiteboard ảo và ghi âm tự động, hỗ trợ tối đa 1000 người tham gia đồng thời...",
  },
  {
    id: 19,
    title: "Core Banking",
    category: "Viễn thông",
    image: "/projects/fintech.png",
    desc: "Hệ thống Core Banking thế hệ mới xử lý giao dịch tốc độ cao, tích hợp open banking API và hỗ trợ đầy đủ nghiệp vụ ngân hàng số...",
  },
  {
    id: 20,
    title: "Hệ thống Viễn thông 5G",
    category: "Viễn thông",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    desc: "Giải pháp hạ tầng viễn thông 5G toàn diện, quản lý mạng lưới thông minh, tối ưu băng thông và đảm bảo chất lượng dịch vụ...",
  },
  {
    id: 21,
    title: "Nền tảng OTT & Streaming",
    category: "Viễn thông",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    desc: "Hệ thống OTT streaming video chất lượng 4K, CDN phân tán toàn cầu, DRM bảo vệ bản quyền và phân tích hành vi người xem...",
  },
];

const PAGE_SIZE = 5;

function ProjectCard({
  p,
  featured = false,
}: {
  p: (typeof projects)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`project-card${featured ? " project-card-featured" : " project-card-stagger"}`}
      style={{
        backgroundImage: `url(${p.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Default overlay: title at bottom */}
      <div className="project-card-overlay project-overlay-default">
        <span
          style={{
            color: "#fff",
            fontWeight: featured ? 700 : 600,
            fontSize: featured ? "16px" : "14px",
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
            gap: featured ? "20px" : "10px",
            padding: featured ? "24px" : "12px",
            textAlign: "center",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <p
            className="overlay-text"
            style={{
              color: "#fff",
              fontSize: featured ? "15px" : "11.5px",
              fontWeight: 600,
              lineHeight: featured ? 1.6 : 1.45,
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: featured ? 99 : 5,
              WebkitBoxOrient: "vertical" as const,
            }}
          >
            {p.desc}
          </p>
          <Link
            href={`/projects/${p.id}`}
            className="overlay-btn"
            style={{
              width: featured ? "48px" : "34px",
              height: featured ? "48px" : "34px",
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              textDecoration: "none",
              transition:
                "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease",
            }}
          >
            <span
              style={{
                color: "#1d75d9",
                fontSize: featured ? "24px" : "18px",
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
  );
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [page, setPage] = useState(1);
  const [animKey, setAnimKey] = useState(0);

  const filtered =
    activeTab === "Tất cả"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const featured = paged[0];
  const rest = paged.slice(1);

  const handleTab = (tab: string) => {
    setActiveTab(tab);
    setPage(1);
    setAnimKey((k) => k + 1);
  };
  const handlePage = (p: number) => {
    setPage(p);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <Header />
      <main style={{ background: "#fff", paddingTop: "140px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px 48px",
          }}
        >
          {/* Hero */}
          <div className="projects-hero-grid">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1
                style={{
                  fontSize: "clamp(26px, 3vw, 36px)",
                  fontWeight: 800,
                  color: "#001b3d",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                Cùng nhau nhìn lại những kết quả{" "}
                <span style={{ color: "#1d75d9" }}>nổi bật</span> của chúng tôi
              </h1>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Chúng tôi luôn luôn tin tưởng và nỗ lực phấn đấu hết mình nhằm
                cung cấp các sản phẩm, dịch vụ hoàn hảo mang lại giá trị cho
                khách hàng, cho xã hội.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #e5e7eb", margin: "32px 0 0" }} />

          {/* Filter tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              marginBottom: "32px",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTab(cat)}
                className="project-tab-btn"
                onMouseEnter={(e) => {
                  if (activeTab !== cat)
                    e.currentTarget.style.color = "#1d75d9";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== cat)
                    e.currentTarget.style.color = "#6b7280";
                }}
                style={{
                  padding: "14px 18px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: activeTab === cat ? "#1d75d9" : "#6b7280",
                  background: "transparent",
                  borderBottom:
                    activeTab === cat
                      ? "2px solid #1d75d9"
                      : "2px solid transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          {filtered.length === 0 ? (
            <p
              style={{
                color: "#9ca3af",
                textAlign: "center",
                padding: "48px 0",
              }}
            >
              Không có dự án nào.
            </p>
          ) : (
            <div className="projects-grid projects-grid-animated" key={animKey}>
              {featured && <ProjectCard p={featured} featured />}
              <div className="projects-grid-small">
                {rest.map((p, i) => (
                  <div
                    key={p.id}
                    style={{ animationDelay: `${(i + 1) * 80}ms` }}
                  >
                    <ProjectCard p={p} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "32px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => handlePage(page - 1)}
                disabled={page === 1}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  color: page === 1 ? "#d1d5db" : "#374151",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  fontSize: "18px",
                  transition: "all 0.2s",
                }}
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => handlePage(p)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    border: "1px solid",
                    borderColor: page === p ? "#1d75d9" : "#e5e7eb",
                    background: page === p ? "#1d75d9" : "#fff",
                    color: page === p ? "#fff" : "#374151",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => handlePage(page + 1)}
                disabled={page === totalPages}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  color: page === totalPages ? "#d1d5db" : "#374151",
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  fontSize: "18px",
                  transition: "all 0.2s",
                }}
              >
                ›
              </button>
            </div>
          )}
        </div>

        <Partners />
      </main>
      <Footer />
    </>
  );
}

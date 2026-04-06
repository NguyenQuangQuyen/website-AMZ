"use client";

import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsData: Record<
  number,
  {
    id: number;
    date: string;
    author: string;
    title: string;
    blocks: (
      | { type: "text"; content: string }
      | { type: "image"; src: string; alt: string }
    )[];
  }
> = {
  1: {
    id: 1,
    date: "02/01/2025",
    author: "admin",
    title:
      "TESA Champions League 2024: AMZ Chinh Phục Ngôi Vương, Gắn Kết Tinh Thần Doanh Nghiệp",
    blocks: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
        alt: "TESA Champions League 2024",
      },
      {
        type: "text",
        content:
          "Ngày 27/12/2024, cuộc thi TESA Champions League 2024 đã chính thức khép lại với màn trình diễn xuất sắc của đội tuyển AMZ. Đây là giải đấu thể thao doanh nghiệp lớn nhất trong năm, quy tụ hàng chục đội tuyển từ các công ty công nghệ hàng đầu Việt Nam. AMZ đã vượt qua nhiều đối thủ mạnh để giành ngôi vô địch đầy thuyết phục.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
        alt: "Đội tuyển AMZ",
      },
      {
        type: "text",
        content:
          "Với tinh thần đoàn kết và quyết tâm cao, các thành viên đội tuyển AMZ đã thể hiện phong độ ấn tượng trong suốt giải đấu. Mỗi trận đấu là một câu chuyện về sự nỗ lực, phối hợp nhịp nhàng và ý chí không bỏ cuộc. Ban lãnh đạo công ty đã trực tiếp đến cổ vũ và động viên tinh thần cho toàn đội.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&q=80",
        alt: "Thi đấu",
      },
      {
        type: "text",
        content:
          "Không chỉ là một giải đấu thể thao, TESA Champions League 2024 còn là dịp để các doanh nghiệp giao lưu, kết nối và xây dựng mối quan hệ hợp tác bền vững. AMZ đã tận dụng cơ hội này để mở rộng mạng lưới đối tác và khẳng định vị thế của mình trong cộng đồng doanh nghiệp công nghệ.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=900&q=80",
        alt: "Khoảnh khắc chiến thắng",
      },
      {
        type: "text",
        content:
          "Chiến thắng tại TESA Champions League 2024 không chỉ là niềm tự hào của đội tuyển mà còn là nguồn cảm hứng cho toàn thể nhân viên AMZ. Đây là minh chứng rõ ràng nhất cho văn hóa doanh nghiệp mạnh mẽ, nơi mỗi cá nhân đều được khuyến khích phát triển toàn diện cả về chuyên môn lẫn thể chất.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=900&q=80",
        alt: "Lễ trao giải",
      },
      {
        type: "text",
        content:
          "Ban tổ chức giải đấu đã trao cúp vô địch và phần thưởng xứng đáng cho đội tuyển AMZ trong buổi lễ trao giải trang trọng. Đây là thành tích đáng tự hào, ghi dấu ấn quan trọng trong hành trình phát triển của công ty. Chúc mừng toàn thể đội tuyển AMZ đã mang về vinh quang này!",
      },
    ],
  },
  2: {
    id: 2,
    date: "23/11/2024",
    author: "admin",
    title: "AMZ'S DAY 2024 – Hành Trình Gắn Kết và Chinh Phục Những Giới Hạn",
    blocks: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
        alt: "AMZ'S DAY 2024",
      },
      {
        type: "text",
        content:
          "AMZ'S DAY 2024 là sự kiện thường niên được tổ chức nhằm tôn vinh những đóng góp của toàn thể nhân viên trong suốt một năm làm việc. Năm nay, sự kiện được tổ chức với quy mô lớn hơn bao giờ hết, với sự tham gia của hơn 200 nhân viên từ các phòng ban.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
        alt: "Hoạt động team building",
      },
      {
        type: "text",
        content:
          "Các hoạt động team building đa dạng và thú vị đã giúp các thành viên hiểu nhau hơn, tăng cường tinh thần đồng đội. Từ những trò chơi vận động đến các thử thách sáng tạo, mỗi hoạt động đều mang lại những tiếng cười và kỷ niệm đáng nhớ.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80",
        alt: "Lễ vinh danh",
      },
      {
        type: "text",
        content:
          "Điểm nhấn của sự kiện là lễ vinh danh những cá nhân và tập thể xuất sắc trong năm 2024. Ban lãnh đạo đã trao tặng các phần thưởng ý nghĩa và lời khen ngợi chân thành đến những người đã có đóng góp nổi bật cho sự phát triển của công ty.",
      },
    ],
  },
  3: {
    id: 3,
    date: "17/09/2024",
    author: "admin",
    title:
      "AMZ Tổ Chức Quyên Góp Ủng Hộ Đồng Bào Bị Ảnh Hưởng Bởi Cơn Bão Số 3",
    blocks: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80",
        alt: "Quyên góp từ thiện",
      },
      {
        type: "text",
        content:
          "Trước những thiệt hại nặng nề mà cơn bão số 3 gây ra cho đồng bào các tỉnh miền Bắc, toàn thể cán bộ nhân viên AMZ đã chung tay tổ chức chương trình quyên góp ủng hộ. Chỉ trong vòng 2 ngày, công ty đã thu được số tiền và hiện vật đáng kể để gửi đến những người dân bị ảnh hưởng.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80",
        alt: "Trao quà từ thiện",
      },
      {
        type: "text",
        content:
          "Đây là hành động thể hiện tinh thần tương thân tương ái, trách nhiệm xã hội của doanh nghiệp. AMZ luôn xác định rằng sự phát triển của công ty phải gắn liền với trách nhiệm đối với cộng đồng và xã hội. Mỗi đóng góp dù nhỏ đều mang ý nghĩa lớn lao trong lúc đồng bào gặp khó khăn.",
      },
    ],
  },
  4: {
    id: 4,
    date: "18/07/2024",
    author: "admin",
    title: "AMZ RACE 2024 – THÁCH THỨC VƯỢT TRÊN MỌI KHOẢNG CÁCH",
    blocks: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
        alt: "AMZ RACE 2024",
      },
      {
        type: "text",
        content:
          "AMZ RACE 2024 là giải chạy bộ nội bộ được tổ chức lần đầu tiên tại công ty, đánh dấu một bước ngoặt mới trong văn hóa thể thao của AMZ. Với chủ đề 'Vượt qua giới hạn bản thân', giải đấu đã thu hút sự tham gia nhiệt tình của hơn 150 nhân viên ở mọi lứa tuổi và vị trí.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80",
        alt: "Các vận động viên",
      },
      {
        type: "text",
        content:
          "Các cung đường chạy được thiết kế đa dạng với nhiều cự ly khác nhau, phù hợp với mọi trình độ. Không khí sôi động và tinh thần cổ vũ nhiệt tình của ban tổ chức đã tạo nên một ngày hội thể thao thực sự ý nghĩa và đáng nhớ cho toàn thể nhân viên AMZ.",
      },
    ],
  },
  5: {
    id: 5,
    date: "29/07/2024",
    author: "admin",
    title: "JOBFAIR 2024 – AMZ & FPT Polytechnic",
    blocks: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
        alt: "JOBFAIR 2024",
      },
      {
        type: "text",
        content:
          "AMZ đã tham gia Ngày hội việc làm JOBFAIR 2024 tại trường FPT Polytechnic với mục tiêu tìm kiếm và kết nối với những tài năng trẻ trong lĩnh vực công nghệ thông tin. Đây là cơ hội tuyệt vời để sinh viên tiếp cận trực tiếp với môi trường làm việc chuyên nghiệp tại AMZ.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80",
        alt: "Gian hàng AMZ",
      },
      {
        type: "text",
        content:
          "Gian hàng của AMZ đã thu hút đông đảo sinh viên đến tìm hiểu về cơ hội việc làm và thực tập. Đội ngũ tuyển dụng đã tư vấn nhiệt tình và chia sẻ những thông tin hữu ích về lộ trình phát triển nghề nghiệp tại công ty. Nhiều ứng viên tiềm năng đã được phỏng vấn ngay tại sự kiện.",
      },
    ],
  },
  6: {
    id: 6,
    date: "23/07/2024",
    author: "admin",
    title: "Du lịch 2024 – Hành trình Khám phá và Kết nối",
    blocks: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
        alt: "Du lịch 2024",
      },
      {
        type: "text",
        content:
          "Chuyến du lịch hè 2024 của AMZ đã diễn ra thành công tốt đẹp với hành trình khám phá vùng đất mới đầy thú vị. Toàn thể nhân viên đã có những ngày nghỉ ngơi, thư giãn và tận hưởng những khoảnh khắc gắn kết đáng nhớ bên nhau.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80",
        alt: "Khám phá thiên nhiên",
      },
      {
        type: "text",
        content:
          "Chuyến đi không chỉ là dịp để nghỉ ngơi mà còn là cơ hội để các thành viên trong công ty hiểu nhau hơn, xây dựng tình đồng nghiệp bền chặt. Những kỷ niệm từ chuyến đi sẽ là nguồn động lực để mọi người cùng nhau tiếp tục cống hiến và phát triển trong những tháng cuối năm.",
      },
    ],
  },
};

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const article = newsData[Number(id)];
  if (!article) notFound();

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
            padding: "120px 24px 48px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              color: "#fff",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 800,
              marginBottom: "16px",
              maxWidth: "800px",
              margin: "0 auto 16px",
              lineHeight: 1.4,
            }}
          >
            {article.title}
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
              marginTop: "16px",
            }}
          >
            <Link href="/" className="project-detail-breadcrumb-link">
              Trang chủ
            </Link>
            <span>›</span>
            <Link
              href="/news/tin-noi-bo"
              className="project-detail-breadcrumb-link"
            >
              Tin tức
            </Link>
            <span>›</span>
            <span style={{ color: "#fff" }}>Chi tiết</span>
          </motion.div>
        </div>

        {/* Article content */}
        <div style={{ background: "#fff", padding: "48px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "32px",
                paddingBottom: "20px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1d75d9"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#1d75d9",
                    fontWeight: 500,
                  }}
                >
                  {article.date}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#9ca3af"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <span style={{ fontSize: "13px", color: "#6b7280" }}>
                  {article.author}
                </span>
              </div>
            </div>

            {/* Blocks */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "28px" }}
            >
              {article.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {block.type === "image" ? (
                    <div
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      }}
                    >
                      <img
                        src={block.src}
                        alt={block.alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          maxHeight: "480px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ) : (
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#374151",
                        lineHeight: 1.9,
                        margin: 0,
                      }}
                    >
                      {block.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Back link */}
            <div
              style={{
                marginTop: "48px",
                paddingTop: "24px",
                borderTop: "1px solid #e5e7eb",
              }}
            >
              <Link
                href="/news/tin-noi-bo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#1d75d9",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Quay lại danh sách tin tức
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

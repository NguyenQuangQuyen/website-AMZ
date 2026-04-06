"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Thông tin chúng tôi thu thập",
    content: [
      "Thông tin cá nhân bạn cung cấp trực tiếp: họ tên, địa chỉ email, số điện thoại, tên công ty khi bạn điền vào biểu mẫu liên hệ hoặc đăng ký dịch vụ.",
      "Thông tin sử dụng: địa chỉ IP, loại trình duyệt, trang bạn truy cập, thời gian truy cập và các dữ liệu phân tích khác được thu thập tự động khi bạn sử dụng website.",
      "Thông tin từ cookie và công nghệ theo dõi tương tự để cải thiện trải nghiệm người dùng và phân tích lưu lượng truy cập.",
    ],
  },
  {
    title: "2. Mục đích sử dụng thông tin",
    content: [
      "Cung cấp, vận hành và cải thiện các dịch vụ của chúng tôi.",
      "Liên hệ với bạn để phản hồi yêu cầu, hỗ trợ kỹ thuật hoặc cung cấp thông tin về dịch vụ.",
      "Gửi thông tin cập nhật, bản tin và tài liệu marketing (bạn có thể hủy đăng ký bất kỳ lúc nào).",
      "Phân tích xu hướng sử dụng để nâng cao chất lượng dịch vụ và trải nghiệm người dùng.",
      "Tuân thủ các nghĩa vụ pháp lý và bảo vệ quyền lợi hợp pháp của chúng tôi.",
    ],
  },
  {
    title: "3. Chia sẻ thông tin",
    content: [
      "Chúng tôi không bán, trao đổi hoặc chuyển nhượng thông tin cá nhân của bạn cho bên thứ ba mà không có sự đồng ý của bạn.",
      "Chúng tôi có thể chia sẻ thông tin với các đối tác dịch vụ đáng tin cậy hỗ trợ vận hành website và cung cấp dịch vụ, với điều kiện họ đồng ý bảo mật thông tin.",
      "Chúng tôi có thể tiết lộ thông tin khi được yêu cầu bởi pháp luật hoặc để bảo vệ quyền lợi, tài sản hoặc sự an toàn của công ty và người dùng.",
    ],
  },
  {
    title: "4. Bảo mật thông tin",
    content: [
      "Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức phù hợp để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái phép, thay đổi, tiết lộ hoặc phá hủy.",
      "Dữ liệu được mã hóa trong quá trình truyền tải bằng giao thức SSL/TLS.",
      "Quyền truy cập vào thông tin cá nhân được giới hạn chỉ cho nhân viên có nhu cầu xử lý thông tin đó.",
      "Tuy nhiên, không có phương thức truyền tải qua Internet hoặc lưu trữ điện tử nào là an toàn 100%. Chúng tôi cam kết nỗ lực hết sức để bảo vệ thông tin của bạn.",
    ],
  },
  {
    title: "5. Cookie và công nghệ theo dõi",
    content: [
      "Website của chúng tôi sử dụng cookie để cải thiện trải nghiệm người dùng. Cookie là các tệp nhỏ được lưu trên thiết bị của bạn.",
      "Cookie thiết yếu: cần thiết cho hoạt động cơ bản của website.",
      "Cookie phân tích: giúp chúng tôi hiểu cách người dùng tương tác với website (Google Analytics).",
      "Cookie marketing: được sử dụng để hiển thị quảng cáo phù hợp.",
      "Bạn có thể kiểm soát và xóa cookie thông qua cài đặt trình duyệt của mình.",
    ],
  },
  {
    title: "6. Quyền của bạn",
    content: [
      "Quyền truy cập: bạn có quyền yêu cầu bản sao thông tin cá nhân chúng tôi lưu giữ về bạn.",
      "Quyền chỉnh sửa: bạn có quyền yêu cầu chúng tôi sửa thông tin không chính xác hoặc không đầy đủ.",
      "Quyền xóa: bạn có quyền yêu cầu xóa thông tin cá nhân trong một số trường hợp nhất định.",
      "Quyền phản đối: bạn có quyền phản đối việc xử lý thông tin cá nhân của mình trong một số trường hợp.",
      "Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua email: info@amzet.vn",
    ],
  },
  {
    title: "7. Lưu giữ dữ liệu",
    content: [
      "Chúng tôi lưu giữ thông tin cá nhân của bạn trong thời gian cần thiết để thực hiện các mục đích được mô tả trong chính sách này.",
      "Thông tin liên hệ được lưu giữ trong thời gian quan hệ kinh doanh còn hiệu lực và tối đa 3 năm sau khi kết thúc.",
      "Dữ liệu phân tích được lưu giữ tối đa 26 tháng.",
    ],
  },
  {
    title: "8. Liên kết bên thứ ba",
    content: [
      "Website của chúng tôi có thể chứa liên kết đến các website bên thứ ba. Chúng tôi không chịu trách nhiệm về chính sách bảo mật hoặc nội dung của các website đó.",
      "Chúng tôi khuyến khích bạn đọc chính sách quyền riêng tư của mọi website bạn truy cập.",
    ],
  },
  {
    title: "9. Thay đổi chính sách",
    content: [
      "Chúng tôi có thể cập nhật Chính sách Quyền riêng tư này theo thời gian. Chúng tôi sẽ thông báo về các thay đổi quan trọng bằng cách đăng thông báo nổi bật trên website.",
      "Ngày có hiệu lực của phiên bản hiện tại được ghi ở đầu trang. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi có nghĩa là bạn chấp nhận chính sách mới.",
    ],
  },
  {
    title: "10. Liên hệ",
    content: [
      "Nếu bạn có câu hỏi về Chính sách Quyền riêng tư này hoặc cách chúng tôi xử lý thông tin cá nhân, vui lòng liên hệ:",
      "Công ty Cổ phần Công nghệ AMZ",
      "Địa chỉ: Tầng 2, tòa nhà Savina Building, 44 Tràng Tiền, Quận Hoàn Kiếm, TP Hà Nội",
      "Email: info@amzet.vn",
      "Điện thoại: 0965 279 666",
    ],
  },
];

export default function ChinhSachQuyenRiengTuPage() {
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
              right: "10%",
              bottom: "20%",
              width: "20px",
              height: "20px",
              background: "rgba(29,117,217,0.4)",
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              color: "#fff",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            Chính sách Quyền riêng tư
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
            <span style={{ color: "#fff" }}>Chính sách Quyền riêng tư</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ color: "#64748b", fontSize: "13px", marginTop: "16px" }}
          >
            Cập nhật lần cuối: 01/01/2025
          </motion.p>
        </div>

        {/* Content */}
        <div style={{ background: "#f8fafc", padding: "64px 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid #e5e7eb",
                marginBottom: "24px",
                borderLeft: "4px solid #1d75d9",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                Công ty Cổ phần Công nghệ AMZ (<strong>"AMZ"</strong>,{" "}
                <strong>"chúng tôi"</strong>) cam kết bảo vệ quyền riêng tư của
                bạn. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và
                bảo vệ thông tin cá nhân khi bạn sử dụng website và dịch vụ của
                chúng tôi. Bằng cách sử dụng dịch vụ của chúng tôi, bạn đồng ý
                với các điều khoản trong chính sách này.
              </p>
            </motion.div>

            {/* Sections */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "#001b3d",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "#dbeafe",
                        borderRadius: "8px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1d75d9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    {section.title}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {section.content.map((item, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#1d75d9",
                            marginTop: "8px",
                            flexShrink: 0,
                          }}
                        />
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#4b5563",
                            lineHeight: 1.8,
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

            {/* Back */}
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Link
                href="/"
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
                Quay lại trang chủ
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

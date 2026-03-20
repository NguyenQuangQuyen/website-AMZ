"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    field: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const dotBg: React.CSSProperties = {
    backgroundImage: "radial-gradient(circle, #bfdbfe 1px, transparent 1px)",
    backgroundSize: "16px 16px",
  };

  // Styles dùng chung cho các ô nhập liệu
  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    padding: "16px 16px",
    fontSize: "15px",
    color: "#001b3d",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero / Title area */}
        <div
          className="contact-hero-wrap contact-outer-wrap"
          style={{
            paddingTop: "140px",
            paddingBottom: "32px",
            maxWidth: "1100px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{ color: "#2563eb", fontWeight: 600, fontSize: "14px" }}
            >
              Liên hệ
            </span>
          </div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#001b3d",
              lineHeight: 1.35,
              marginBottom: "10px",
            }}
          >
            Có một câu hỏi ?<br />
            Hãy liên hệ với chúng tôi
          </h1>
          <p style={{ fontSize: "13px", color: "#9ca3af", maxWidth: "520px" }}>
            Vui lòng điền vào biểu mẫu bên dưới và nhóm của chúng tôi sẽ phản
            hồi lại câu hỏi của bạn sớm nhất có thể.
          </p>
        </div>

        {/* 2-col content */}
        <div
          className="contact-outer-wrap"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "0",
          }}
        >
          <div
            className="contact-layout"
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* Left: info cards */}
            <div className="contact-info-panel">
              {/* Address */}
              <div
                style={{
                  position: "relative",
                  padding: "24px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  borderBottom: "1px solid #e5e7eb",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    ...dotBg,
                    position: "absolute",
                    inset: 0,
                    opacity: 0.6,
                  }}
                />
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#eff6ff" />
                    <circle
                      cx="20"
                      cy="17"
                      r="3"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M20 9c-4.4 0-8 3.6-8 8 0 5 8 13 8 13s8-8 8-13c0-4.4-3.6-8-8-8z"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <div style={{ position: "relative" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#001b3d",
                      fontSize: "13px",
                      marginBottom: "4px",
                    }}
                  >
                    Địa chỉ
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      lineHeight: 1.6,
                    }}
                  >
                    Tầng 2, tòa nhà Savina Building, 44 Tràng Tiền, Quận Hoàn
                    Kiếm, TP Hà Nội
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                style={{
                  position: "relative",
                  padding: "24px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  borderBottom: "1px solid #e5e7eb",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    ...dotBg,
                    position: "absolute",
                    inset: 0,
                    opacity: 0.6,
                  }}
                />
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#eff6ff" />
                    <path
                      d="M15 12h3l1 3-2 1.5a8 8 0 0 0 4.5 4.5L23 19l3 1v3a1.5 1.5 0 0 1-1.5 1.5C17 24.5 15 19 15 14.5A1.5 1.5 0 0 1 15 12z"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div style={{ position: "relative" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#001b3d",
                      fontSize: "13px",
                      marginBottom: "4px",
                    }}
                  >
                    Điện thoại
                  </p>
                  <p style={{ fontSize: "12px", color: "#6b7280" }}>
                    0965 279 666
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                style={{
                  position: "relative",
                  padding: "24px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    ...dotBg,
                    position: "absolute",
                    inset: 0,
                    opacity: 0.6,
                  }}
                />
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#eff6ff" />
                    <rect
                      x="10"
                      y="13"
                      width="20"
                      height="14"
                      rx="2"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <polyline
                      points="10,14 20,22 30,14"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div style={{ position: "relative" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#001b3d",
                      fontSize: "13px",
                      marginBottom: "4px",
                    }}
                  >
                    Email
                  </p>
                  <p style={{ fontSize: "12px", color: "#6b7280" }}>
                    info@amzet.vn
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div
              className="contact-form-panel"
              style={{ background: "#eef2fb", padding: "32px 28px" }}
            >
              {sent ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "350px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#dcfce7",
                      color: "#16a34a",
                      borderRadius: "50%",
                      padding: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#001b3d",
                      marginBottom: "4px",
                      fontSize: "16px",
                    }}
                  >
                    Gửi thành công!
                  </p>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>
                    Chúng tôi sẽ liên hệ lại với bạn sớm nhất.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px", // Tăng gap giữa các hàng
                  }}
                >
                  <div className="contact-form-row">
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#4b5563",
                          marginBottom: "8px",
                        }}
                      >
                        Họ và tên{" "}
                        <span style={{ color: "#9ca3af", fontWeight: 400 }}>
                          (required)
                        </span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Vui lòng nhập họ và tên*"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#4b5563",
                          marginBottom: "8px",
                        }}
                      >
                        Email{" "}
                        <span style={{ color: "#9ca3af", fontWeight: 400 }}>
                          (required)
                        </span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="Vui lòng nhập Email*"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#4b5563",
                          marginBottom: "8px",
                        }}
                      >
                        Số điện thoại{" "}
                        <span style={{ color: "#9ca3af", fontWeight: 400 }}>
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="Vui lòng nhập SDT"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#4b5563",
                          marginBottom: "8px",
                        }}
                      >
                        Lĩnh vực quan tâm{" "}
                        <span style={{ color: "#9ca3af", fontWeight: 400 }}>
                          (required)
                        </span>
                      </label>
                      <select
                        required
                        value={form.field}
                        onChange={(e) =>
                          setForm({ ...form, field: e.target.value })
                        }
                        style={{
                          ...inputStyle,
                          color: form.field ? "#001b3d" : "#9ca3af",
                        }}
                      >
                        <option value="" disabled>
                          Gia công phần mềm
                        </option>
                        <option value="web">Phát triển Web App</option>
                        <option value="mobile">Lập trình Mobile</option>
                        <option value="erp">
                          Giải pháp doanh nghiệp (ERP)
                        </option>
                        <option value="telecom">Dịch vụ Viễn thông</option>
                        <option value="banking">Ngân hàng số</option>
                        <option value="payment">Cổng thanh toán</option>
                        <option value="security">An ninh mạng</option>
                        <option value="data">Phân tích dữ liệu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#4b5563",
                        marginBottom: "8px",
                      }}
                    >
                      Tin nhắn
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Vui lòng nhập tin nhắn của bạn*"
                      style={{
                        ...inputStyle,
                        resize: "none",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "8px" }}>
                    <button
                      type="submit"
                      style={{
                        background: "#2563eb",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "15px",
                        padding: "16px 36px", // Nút bấm cũng to ra tương ứng
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Gửi ngay!
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className="contact-map"
          style={{ width: "100%", height: "380px", marginTop: "60px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3!2d105.7833!3d21.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5b4f3a1f4b%3A0x0!2zUGjhuqFtIEjDuW5n!5e0!3m2!1svi!2svn!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

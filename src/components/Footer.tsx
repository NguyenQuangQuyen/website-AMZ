"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        backgroundImage: "url('/images/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,21,41,0.88)",
        }}
      />

      {/* CTA Banner */}
      <div
        style={{
          position: "relative",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="footer-cta-wrap">
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(20px,2.5vw,28px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
                fontFamily: "Montserrat,sans-serif",
              }}
            >
              Bắt đầu nhỏ, suy nghĩ lớn
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "14px",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              Chúng tôi tự hào là công ty cung cấp dịch vụ hiện đại và uy tín
              hàng đầu tại Việt Nam. Hãy chia sẻ với chúng tôi những vấn đề mà
              doanh nghiệp của bạn đang gặp phải, chúng tôi sẵn sàng cung cấp
              các giải pháp và phần mềm hiện đại, tối ưu nhất cho bạn.
            </p>
          </div>
          <Link
            href="/contact"
            className="footer-cta-btn"
            style={{ flexShrink: 0, whiteSpace: "nowrap" }}
          >
            Liên hệ chúng tôi
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ position: "relative" }}>
        <div className="footer-grid-wrap">
          <div className="footer-main-grid">
            {/* Col 1: Logo + info */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <Link href="/">
                <Image
                  src="/images/amzet.com.vn logo16.svg"
                  alt="AMZ"
                  width={130}
                  height={45}
                />
              </Link>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    background: "#1d4ed8",
                    padding: "8px",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                >
                  <Shield size={16} color="#fff" />
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.5,
                  }}
                >
                  Công ty Cổ phần Công nghệ AMZ
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    background: "#1d4ed8",
                    padding: "8px",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                >
                  <Shield size={16} color="#fff" />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  MST: 0106235097
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    background: "#1d4ed8",
                    padding: "8px",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                >
                  <FileText size={16} color="#fff" />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  GPKD: Số 0106235097 do Sở KHĐT
                  <br />
                  Tp.Hà Nội cấp ngày 18/07/2013
                </p>
              </div>

              {/* Social */}
              <div style={{ display: "flex", gap: "10px", paddingTop: "4px" }}>
                {[
                  <path
                    key="fb"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />,
                  <path
                    key="li"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />,
                ].map((path, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "8px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.1)")
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      {path}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Contact */}
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "20px",
                  paddingBottom: "10px",
                  borderBottom: "2px solid #1d75d9",
                  display: "inline-block",
                }}
              >
                Thông tin liên hệ
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  { Icon: Phone, label: "Điện thoại", value: "0965 279 666" },
                  { Icon: Mail, label: "Email", value: "info@amzet.vn" },
                  {
                    Icon: MapPin,
                    label: "Địa chỉ",
                    value:
                      "Tầng 2, tòa nhà Savina Building, 44 Tràng Tiền, Quận Hoàn Kiếm, TP Hà Nội",
                  },
                ].map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        background: "#1d75d9",
                        padding: "8px",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={14} color="#fff" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.45)",
                          marginBottom: "2px",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.85)",
                          lineHeight: 1.5,
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  textUnderlineOffset: "4px",
                }}
              >
                Chính sách quyền riêng tư
              </a>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "20px",
                  paddingBottom: "10px",
                  borderBottom: "2px solid #1d75d9",
                  display: "inline-block",
                }}
              >
                Dịch vụ
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  "Dịch vụ Viễn thông",
                  "Giải pháp doanh nghiệp (Odoo)",
                  "Tài chính - ngân hàng",
                  "Cổng thanh toán",
                  "Thương mại điện tử",
                  "Phát triển Blockchain",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#60a5fa")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Fields */}
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "20px",
                  paddingBottom: "10px",
                  borderBottom: "2px solid #1d75d9",
                  display: "inline-block",
                }}
              >
                Lĩnh vực
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  "Phát triển Web App",
                  "Lập trình Back-end",
                  "Lập trình Front-end",
                  "Lập trình Mobile",
                  "Giải pháp Lưu trữ",
                  "Big Data",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#60a5fa")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
              Copyright © 2024 Công ty cổ phần công nghệ AMZ
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-cta-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px;
        }
        .footer-grid-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px;
        }
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.3fr 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 640px) {
          .footer-cta-wrap {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

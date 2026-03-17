import Image from "next/image";
import { Phone, Mail, MapPin, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[url('/images/footer.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="absolute inset-0 bg-[#001529]/85"></div>

      {/* CTA Section */}
      <div className="relative">
        <div className="pl-[15%] pr-[20%] py-12 flex items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Bắt đầu nhỏ, suy nghĩ lớn
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Chúng tôi tự hào là công ty cung cấp dịch vụ hiện đại và uy tín
              hàng đầu tại Việt Nam. Hãy chia sẻ với chúng tôi những vấn đề mà
              doanh nghiệp của bạn đang gặp phải, chúng tôi sẵn sàng cung cấp
              các giải pháp và phần mềm hiện đại, tối ưu nhất cho bạn.
            </p>
          </div>
          <a href="#contact" className="footer-cta-btn">
            Liên hệ chúng tôi
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative pl-[15%] pr-16 py-12">
        <div className="grid grid-cols-4 gap-10">
          {/* Col 1: Logo + Company Info */}
          <div className="space-y-5">
            <Image
              src="/images/amzet.com.vn logo16.svg"
              alt="Nodo Smart Solutions"
              width={130}
              height={45}
            />

            <div className="flex items-start gap-3">
              <div className="bg-blue-700 p-2 rounded shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-white/80 leading-snug">
                Công ty Cổ phần Truyền thông <br />
                và Dịch vụ NODO
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-700 p-2 rounded shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/50 mb-0.5">MST: 0106235097</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-700 p-2 rounded shrink-0">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/50 mb-0.5">
                  GPKD: Số 0106235097 do Sở KHĐT Tp.Hà Nội <br />
                  cấp ngày 18/07/2013
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-base font-bold text-white">
                Thông tin liên hệ
              </h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">
                    Điện thoại: (+84) 24.6293.2083
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">
                    Email: lienhe@nodo.vn
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">
                    Địa chỉ: Tầng 3, Tòa nhà Audi, <br />
                    Số 8 Phạm Hùng, P.Mễ Trì, Q.Nam Từ Liêm
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
              >
                Chính sách quyền riêng tư
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <div className="mb-6">
              <h3 className="text-base font-bold text-white">Dịch vụ</h3>
            </div>
            <ul className="space-y-3">
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
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Fields */}
          <div>
            <div className="mb-6">
              <h3 className="text-base font-bold text-white">Lĩnh vực</h3>
            </div>
            <ul className="space-y-3">
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
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 text-center">
          <p className="text-sm text-white/50">
            Copyright © 2024 Công ty cổ phần công nghệ AMZ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMZ - Công ty cổ phần công nghệ AMZ",
  description: "AMZ cung cấp các giải pháp công nghệ đột phá, phần mềm ứng dụng cao cấp và dịch vụ tư vấn hàng đầu tại Việt Nam.",
  keywords: "AMZ, Công nghệ AMZ, Phần mềm ứng dụng, Chuyển đổi số, Fintech, AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

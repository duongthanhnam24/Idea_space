
import { Geist, Geist_Mono } from "next/font/google";
import logo from "../public/assets/images/logo.jpg"
import localFont from "next/font/local";
import "./globals.css";
export const metadata = {
  title: "Trang chủ - CÔNG TY CỔ PHẦN TRUYỀN THÔNG KHÔNG GIAN Ý TƯỞNG",
  description: "CÔNG TY THIẾT KẾ VÀ THI CÔNG QUẢNG CÁO UY TÍN VÀ CHUYÊN NGHIỆP",
  keywords: [
        "Nội Thất",
        "Sân Khấu Sự Kiện",
        "Logo",
        "Quà Tặng",
        "Xe Diễu Hành",
        "Trang Trí Ánh Sáng",
        "Biển Quảng Cáo",
        'Không Gian Ý Tưởng',
        "Thiết Kế",
        "Thi Công",
        "Quảng Cáo",
        "Công Ty Quảng Cáo",
        "Công Ty Thiết Kế",
        "Công Ty Thi Công",
    ],
  openGraph: {
    title: "Trang chủ CÔNG TY CỔ PHẦN TRUYỀN THÔNG KHÔNG GIAN Ý TƯỞNG",
    description: "CÔNG TY THIẾT KẾ VÀ THI CÔNG QUẢNG CÁO UY TÍN VÀ CHUYÊN NGHIỆP",
    images: [logo],
  },
};
const rosellinda = localFont({
  src: "../public/assets/fonts/SVN-Rosellinda Alyamore.otf",
  variable: "--font-rosellinda",
});
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}

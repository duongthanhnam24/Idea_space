

import logo from "../public/assets/images/logo.jpg"
import localFont from "next/font/local";
import "./globals.css";
import { organizationSchema } from "../schema/organization";
export const metadata = {
   metadataBase: new URL("https://khonggianytuong.com.vn"),
openGraph: {
    siteName: "Không Gian Ý Tưởng",
    type: "website",
    locale: "vi_VN",
    title: "Không Gian Ý Tưởng",
    description: "CÔNG TY CỔ PHẦN TRUYỀN THÔNG KHÔNG GIAN Ý TƯỞNG THIẾT KẾ VÀ THI CÔNG QUẢNG CÁO UY TÍN VÀ CHUYÊN NGHIỆP",
    images: [logo],
  },
   robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://khonggianytuong.com.vn/rss.xml"
    }
  },
  verification: {
    google: "EygZt3okPxu4doeoxOEO41KntFBLBEj3srhPhGwzYa8",
    yandex: ["28fe081a30b81754"],
    other: {
      "msvalidate.01": ["https://khonggianytuong.com.vn"],
    }
  },
  
  applicationName: "Không Gian Ý Tưởng",
  title: "Không Gian Ý Tưởng",
  description: "CÔNG TY CỔ PHẦN TRUYỀN THÔNG KHÔNG GIAN Ý TƯỞNG THIẾT KẾ VÀ THI CÔNG QUẢNG CÁO UY TÍN VÀ CHUYÊN NGHIỆP",
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
      <body>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
        {children}
        
      </body>
    </html>
  );
}

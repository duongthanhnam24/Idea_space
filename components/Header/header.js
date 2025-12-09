"use client"
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../public/assets/images/logo.jpg";
import Link from "next/link";
import {
  Dropdown,
  DropdownItem,
} from "flowbite-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 z-50">
      <div className="bg-[#235eb1] text-[14px] w-full">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 md:gap-0 h-auto md:h-[53px] px-4 sm:px-8 md:px-16 lg:px-[150px] xl:px-[300px] py-2 md:py-0">
          <p className="flex items-center justify-center space-x-1">
            <FaHome color="#fff" />
            <span className="text-white">Số 41 Đường Đông Hội, Đông Anh, Hà Nội</span>
          </p>

          <p className="flex items-center justify-center space-x-1">
            <FaPhoneAlt color="#fff" />
            <span className="text-white">0389-944-688</span>
          </p>

          <p className="flex items-center justify-center space-x-1">
            <HiOutlineMail color="#fff" />
            <span className="text-white">ytuongkg.media@gmail.com</span>
          </p>
        </div>
      </div>

      {/* --- Thanh menu chính --- */}
      <div className="flex justify-between items-center h-[80px] px-4 sm:px-8 md:px-16 lg:px-[150px] xl:px-[300px] bg-white relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src={logo.src} alt="logo" className="w-[60px] md:w-[70px]" />
        </Link>

        {/* Nút menu (mobile) */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu chính */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col absolute top-[80px] left-0 w-full bg-white border-t shadow-md z-50 h-fit"
              : "hidden h-full"
          } md:flex md:flex-row md:static md:w-2/3 md:justify-between items-center `}
        >
          
            <Link
             href="/gioi-thieu"
              className="py-3 md:py-0 px-4 text-[16px] font-medium hover:text-[#0f50a8]   text-center "
            
             >
              Giới Thiệu
            </Link>
          

          <Dropdown
            label="Dịch Vụ"
            inline
            className="!bg-white text-center !w-full md:!w-auto !text-[16px] !font-medium hover:text-[#0f50a8]"
          >
            <DropdownItem
              as={Link}
             href="/thiet-ke-logo"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế Logo
            </DropdownItem>
            <DropdownItem
              as={Link}
             href="/thiet-ke-cung-cap-qua-tang"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế Cung Cấp Quà Tặng
            </DropdownItem>
            <DropdownItem
              as={Link}
             href="/thiet-ke-thi-cong-noi-that"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Thi Công Nội Thất
            </DropdownItem>
            <DropdownItem
              as={Link}
             href="/thiet-ke-xe-dieu-hanh"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Sản Xuất Xe Diễu Hành Mô Hình
            </DropdownItem>
            <DropdownItem
              as={Link}
             href="/thiet-ke-gian-hang-san-khau-su-kien"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Thi Công Gian Hàng Sân Khấu Sự Kiện
            </DropdownItem>
            <DropdownItem
              as={Link}
             href="/thiet-ke-trang-tri-anh-sang-cua-duong-pho-va-toa-nha"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Trang Trí Ánh Sáng Của Đường Phố Và Tòa Nhà
            </DropdownItem>
            <DropdownItem
              as={Link}
             href="/thiet-ke-thi-cong-bieu-tuong-kien-truc-cong-chao-bien-quang-cao"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Thi Công Biểu Tượng Kiến Trúc, Cổng Chào, Biển Hiệu
              Quảng Cáo
            </DropdownItem>
          </Dropdown>

          <Link
           href="/du-an"
            className="py-3 md:py-0 px-4 text-[16px] font-medium hover:text-[#0f50a8] text-center"
          >
            Dự Án
          </Link>
          <Link
           href="/lien-he"
            className="py-3 md:py-0 px-4 text-[16px] font-medium hover:text-[#0f50a8] text-center"
          >
            Liên Hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}

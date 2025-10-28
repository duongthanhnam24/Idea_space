import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../../assests/images/logo.jpg";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  createTheme,
  ThemeProvider,
  Button,
} from "flowbite-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      <div className="bg-[#f8f9fa] text-[14px] w-full">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 md:gap-0 h-auto md:h-[53px] px-4 sm:px-8 md:px-16 lg:px-[150px] xl:px-[300px] py-2 md:py-0">
          <p className="flex items-center justify-center space-x-1">
            <FaHome color="#0f50a8" />
            <span>Số 41 Đường Đông Hội, Đông Anh, Hà Nội</span>
          </p>

          <p className="flex items-center justify-center space-x-1">
            <FaPhoneAlt color="#0f50a8" />
            <span>0389-944-688</span>
          </p>

          <p className="flex items-center justify-center space-x-1">
            <HiOutlineMail color="#0f50a8" />
            <span>ytuongkg.media@gmail.com</span>
          </p>
        </div>
      </div>

      {/* --- Thanh menu chính --- */}
      <div className="flex justify-between items-center h-[80px] px-4 sm:px-8 md:px-16 lg:px-[150px] xl:px-[300px] bg-white relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-[60px] md:w-[70px]" />
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
              ? "flex flex-col absolute top-[80px] left-0 w-full bg-white border-t shadow-md z-50"
              : "hidden"
          } md:flex md:flex-row md:static md:w-2/3 md:justify-end items-center`}
        >
          <Link
            to="/gioi-thieu"
            className="py-3 md:py-0 px-4 text-[16px] font-medium hover:text-[#0f50a8] text-center"
          >
            Giới Thiệu
          </Link>

          <Dropdown
            label="Dịch Vụ"
            inline
            className="!bg-white text-center !w-full md:!w-auto"
          >
            <DropdownItem
              as={Link}
              to="/thiet-ke-logo"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế Logo
            </DropdownItem>
            <DropdownItem
              as={Link}
              to="/thiet-ke-cung-cap-qua-tang"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế Cung Cấp Quà Tặng
            </DropdownItem>
            <DropdownItem
              as={Link}
              to="/thiet-ke-thi-cong-noi-that"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Thi Công Nội Thất
            </DropdownItem>
            <DropdownItem
              as={Link}
              to="/thiet-ke-xe-dieu-hanh"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Sản Xuất Xe Diễu Hành Mô Hình
            </DropdownItem>
            <DropdownItem
              as={Link}
              to="/thiet-ke-gian-hang-san-khau-su-kien"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Thi Công Gian Hàng Sân Khấu Sự Kiện
            </DropdownItem>
            <DropdownItem
              as={Link}
              to="/thiet-ke-trang-tri-anh-sang-cua-duong-pho-va-toa-nha"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Trang Trí Ánh Sáng Của Đường Phố Và Tòa Nhà
            </DropdownItem>
            <DropdownItem
              as={Link}
              to="/thiet-ke-thi-cong-bieu-tuong-kien-truc-cong-chao-bien-quang-cao"
              className="!text-black hover:!bg-[#0f50a8] hover:!text-white"
            >
              Thiết Kế & Thi Công Biểu Tượng Kiến Trúc, Cổng Chào, Biển Hiệu
              Quảng Cáo
            </DropdownItem>
          </Dropdown>

          <Link
            to="/du-an"
            className="py-3 md:py-0 px-4 text-[16px] font-medium hover:text-[#0f50a8] text-center"
          >
            Dự Án
          </Link>
          <Link
            to="/lien-he"
            className="py-3 md:py-0 px-4 text-[16px] font-medium hover:text-[#0f50a8] text-center"
          >
            Liên Hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}

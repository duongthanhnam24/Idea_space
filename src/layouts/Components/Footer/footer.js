import logo from "../../../assests/images/logo-removebg-preview.png";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
export function Footer() {
  return (
    <div>
      <div className="bg-[#262626] mt-10 px-6 sm:px-10 md:px-[5.25rem] py-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between space-y-8 md:space-y-0">
        <div className="space-y-4">
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0">
            <img src={logo} alt="logo" className="w-[60px] mx-auto sm:mx-0" />
            <p className="text-sm text-left sm:text-base">
              CÔNG TY CỔ PHẦN TRUYỀN THÔNG KHÔNG GIAN Ý TƯỞNG
            </p>
          </div>

          <p className="text-[14px] text-left leading-relaxed">
            Cảm ơn quý khách hàng đã ghé thăm website của chúng tôi,
            <br />
            nếu bạn cần tư vấn thêm thông tin về sản phẩm hay dịch vụ <br />
            quảng cáo hãy gọi ngay cho chúng tôi nhé
          </p>

          <div className="space-y-2 text-sm sm:text-base">
            <p className="flex items-center space-x-2">
              <FaHome color="#0f50a8" />
              <span>Số 41 Đường Đông Hội, Đông Anh, Hà Nội</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt color="#0f50a8" />
              <span>0389-944-688</span>
            </p>
            <p className="flex items-center space-x-2">
              <HiOutlineMail color="#0f50a8" />
              <span>ytuongkg.media@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black h-[40px] w-full flex items-center justify-center px-2 text-center">
        <p className="text-xs text-white sm:text-sm">
          Copyright © 2025 Idea Space. All rights reserved.
        </p>
      </div>
    </div>
  );
}

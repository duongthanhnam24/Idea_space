import { HiHome } from "react-icons/hi";
import thietketlogo from "../../../public/assets/images/thiet-ke-logo.jpg";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";


export const metadata = {
  title: "Thiết Kế Logo - Bộ Nhận Diện Thương Hiệu - Không Gian Ý Tưởng",
  description: "Trong thời đại kinh doanh hiện nay, khi hàng ngàn thương hiệu ra đời mỗi ngày, logo và bộ nhận diện thương hiệu chính là “bộ mặt” giúp doanh nghiệp khác biệt – chuyên nghiệp – ghi dấu trong tâm trí khách hàng. Một logo đẹp không chỉ là hình ảnh minh họa, mà là biểu tượng thể hiện giá trị cốt lõi, phong cách và tầm nhìn của doanh nghiệp. Bên cạnh đó, bộ nhận diện thương hiệu giúp đồng bộ hình ảnh trên mọi phương tiện truyền thông, từ danh thiếp, hồ sơ năng lực, đồng phục nhân viên cho đến website và biển quảng cáo.",
    keywords: [
        "Thiết kế logo",
        "Dấu ấn đầu tiên của thương hiệu",
        "Logo biểu tượng",
        "Logo chữ",
        "Logo kết hợp",
        'Idea Space Logo',
    ]
};
function DesignLogo() {
  return (
    <>
      <div className="flex flex-wrap items-center space-x-2 max-w-[1200px] mx-auto px-4  h-10! my-6 text-sm sm:text-base">
        <HiHome />
        <Link href="/">Trang Chủ</Link>
        <RiArrowRightSLine />
        <p>Thiết Kế Logo</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mb-[40px]">
        <h1 className="text-[20px] sm:text-[22px] font-medium text-center md:text-left">
          THIẾT KẾ LOGO - BỘ NHẬN DIỆN THƯƠNG HIỆU <strong className="text-[20px]! sm:text-[22px]! font-medium!">KHÔNG GIAN Ý TƯỞNG</strong>
        </h1>

        <h2 className="mt-[30px] sm:mt-[40px] text-lg sm:text-xl">
          1. Tầm quan trọng của <strong>thiết kế logo</strong> và bộ nhận diện
          thương hiệu
        </h2>
        <p className="mt-[10px] text-base sm:text-lg w-full text-justify leading-relaxed">
          Trong thời đại kinh doanh hiện nay, khi hàng ngàn thương hiệu ra đời
          mỗi ngày, logo và bộ nhận diện thương hiệu chính là “bộ mặt” giúp
          doanh nghiệp khác biệt – chuyên nghiệp – ghi dấu trong tâm trí khách
          hàng. Một logo đẹp không chỉ là hình ảnh minh họa, mà là biểu tượng
          thể hiện giá trị cốt lõi, phong cách và tầm nhìn của doanh nghiệp. Bên
          cạnh đó, bộ nhận diện thương hiệu giúp đồng bộ hình ảnh trên mọi
          phương tiện truyền thông, từ danh thiếp, hồ sơ năng lực, đồng phục
          nhân viên cho đến website và biển quảng cáo.
        </p>

        <img
          src={thietketlogo.src}
          alt="Thiết Kế Logo - Không Gian Ý Tưởng"
          className="mt-10 w-full sm:w-[80%] lg:w-[70%] mx-auto"
        />

        <h2 className="mt-[30px] sm:mt-[40px] text-lg sm:text-xl">
          2. <strong>Thiết kế logo</strong> – Dấu ấn đầu tiên của thương hiệu
        </h2>
        <p className="text-base sm:text-lg w-full text-justify mt-[10px] leading-relaxed">
          Logo là yếu tố đầu tiên mà khách hàng nhìn thấy khi tiếp cận doanh
          nghiệp. Một logo chuyên nghiệp, độc đáo và dễ ghi nhớ sẽ tạo ấn tượng
          mạnh mẽ ngay từ lần đầu tiên. Các phong cách logo phổ biến hiện nay
          gồm:
        </p>

        <ul className="list-disc ml-6 sm:ml-[24px] text-base sm:text-lg space-y-1">
          <li>
            Logo biểu tượng (<strong>Symbol Logo</strong>): thể hiện đặc trưng
            sản phẩm, lĩnh vực hoặc ý nghĩa thương hiệu.
          </li>
          <li>
            Logo chữ (<strong>Wordmark/Lettermark</strong>): nhấn mạnh tên
            thương hiệu, phù hợp với doanh nghiệp muốn khẳng định tên tuổi.
          </li>
          <li>
            Logo kết hợp (<strong>Combination Mark</strong>): kết hợp hình ảnh
            và chữ, tạo nên bản sắc riêng và dễ nhận diện.
          </li>
        </ul>

        <p className="w-full text-base leading-relaxed text-justify sm:text-lg">
          Khi thiết kế logo, đội ngũ của Idea Space luôn nghiên cứu kỹ đặc điểm
          ngành nghề, khách hàng mục tiêu và giá trị thương hiệu để mang đến sản
          phẩm đẹp mắt, phù hợp, dễ ứng dụng và có tuổi thọ lâu dài.
        </p>
      </div>
    </>
  );
}

export default DesignLogo;

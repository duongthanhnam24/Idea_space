import { HiHome } from "react-icons/hi";
import xedieuhanh1 from "../../../public/assets/images/products/xedieuhanh1.png";
import xedieuhanh2 from "../../../public/assets/images/products/xedieuhanh2.png";
import xedieuhanh3 from "../../../public/assets/images/products/xedieuhanh3.png";
import xedieuhanh4 from "../../../public/assets/images/products/xedieuhanh4.png";
import xedieuhanh5 from "../../../public/assets/images/products/xedieuhanh5.png";
import xedieuhanh6 from "../../../public/assets/images/products/xedieuhanh6.png";
import xedieuhanh7 from "../../../public/assets/images/products/xedieuhanh7.png";
import xedieuhanh8 from "../../../public/assets/images/products/xedieuhanh8.png";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

export const metadata = {
  title: "Thiết Kế & Sản Xuất Xe Diễu Hành Mô Hình - Không Gian Ý Tưởng",
  description: "Với đội ngũ thiết kế sáng tạo và kinh nghiệm trong lĩnh vực thi công, chúng tôi mang đến giải pháp trọn gói từ ý tưởng – thiết kế – sản xuất – trang trí – vận hành, giúp khách hàng tạo nên những mô hình xe diễu hành độc đáo và thu hút mọi ánh nhìn.",
    keywords: [
       'Thiết Kế Xe Diễu Hành Mô Hình',
       'Sản Xuất Xe Diễu Hành Mô Hình',
       'Xe Diễu Hành Sáng Tạo',
       'Mô Hình Xe Diễu Hành',
       'Dịch Vụ Xe Diễu Hành',
    ]
};
function DesignCar() {
  return (
    <>
      <div className="flex flex-wrap items-center space-x-2 max-w-[1200px] mx-auto px-4  !h-[40px] my-6 text-sm sm:text-base">
        <HiHome />
        <Link href="/" className="hover:text-blue-600">
          Trang Chủ
        </Link>
        <RiArrowRightSLine />
        <p className="font-medium text-gray-700">
          Thiết Kế & Sản Xuất Xe Diễu Hành Mô Hình
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 space-y-8 mb-[40px]" >
        <h1 className="text-xl font-semibold md:text-2xl">
          THIẾT KẾ & SẢN XUẤT XE DIỄU HÀNH MÔ HÌNH <strong className="text-xl! font-medium! uppercase! sm:text-2xl!">KHÔNG GIAN Ý TƯỞNG</strong>
        </h1>

        <section>
          <h2 className="mt-6 text-lg font-medium md:text-xl">
            1. Giới thiệu về <strong className="text-lg! font-medium! md:text-xl!">XE DIỄU HÀNH MÔ HÌNH</strong>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-justify md:text-lg">
            Xe diễu hành mô hình là điểm nhấn không thể thiếu trong các lễ hội,
            sự kiện quảng bá thương hiệu, roadshow hay diễu hành văn hóa – thể
            thao. Một chiếc xe được thiết kế ấn tượng, mang đậm bản sắc thương
            hiệu không chỉ thu hút sự chú ý của công chúng mà còn góp phần
            truyền tải thông điệp một cách sống động và sáng tạo nhất.
          </p>
          <p className="mt-3 text-base leading-relaxed text-justify md:text-lg">
            Với đội ngũ thiết kế sáng tạo và kinh nghiệm trong lĩnh vực thi
            công, chúng tôi mang đến giải pháp trọn gói từ ý tưởng – thiết kế –
            sản xuất – trang trí – vận hành, giúp khách hàng tạo nên những mô
            hình xe diễu hành độc đáo và thu hút mọi ánh nhìn.
          </p>
          <img
            src={xedieuhanh1.src}
            alt="thiết kế xe diễu hành mô hình"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">
            2. Quy trình thiết kế & sản xuất
          </h2>
          <p className="mt-3 text-base text-justify md:text-lg">
            Để đảm bảo mỗi dự án đều đạt hiệu quả cao về thẩm mỹ và kỹ thuật,
            quy trình được thực hiện chuyên nghiệp qua các bước sau:
          </p>
          <ul className="ml-6 space-y-3 text-base list-disc md:text-lg">
            <li>
              Tiếp nhận yêu cầu & tư vấn ý tưởng: Lắng nghe nhu cầu và chủ đề sự
              kiện.
            </li>
            <li>
              Lên bản thiết kế 2D/3D chi tiết: Mô phỏng trực quan giúp khách
              hàng dễ hình dung mô hình xe.
            </li>
            <li>
              Gia công & thi công thực tế: Sử dụng vật liệu như khung sắt,
              composite, mica, đèn LED, decal in UV,… đảm bảo bền đẹp và an toàn
              khi vận hành.
            </li>
            <li>
              Trang trí & hoàn thiện: Lắp đặt hệ thống âm thanh – ánh sáng,
              phông nền, hiệu ứng đặc biệt.
            </li>
            <li>
              Kiểm tra & bàn giao: Đảm bảo xe hoạt động ổn định, đạt tiêu chuẩn
              kỹ thuật và thẩm mỹ.
            </li>
          </ul>
          <img
            src={xedieuhanh2.src}
            alt="quy trình sản xuất xe diễu hành"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">
            3. Ưu điểm dịch vụ của chúng tôi
          </h2>
          <ul className="ml-6 space-y-3 text-base list-disc md:text-lg">
            <li>
              Sáng tạo độc quyền: Thiết kế theo yêu cầu, mang dấu ấn riêng biệt
              của thương hiệu.
            </li>
            <li>
              Thi công an toàn – chắc chắn: Kết cấu kỹ thuật được tính toán kỹ
              để đảm bảo an toàn khi di chuyển.
            </li>
            <li>
              Đội ngũ chuyên nghiệp: Kỹ thuật viên, họa sĩ và thợ thi công giàu
              kinh nghiệm trong lĩnh vực mô hình sự kiện.
            </li>
            <li>
              Tiến độ nhanh – linh hoạt: Đáp ứng các sự kiện có thời gian gấp
              rút mà vẫn đảm bảo chất lượng.
            </li>
            <li>
              Giá thành hợp lý: Tối ưu chi phí, phù hợp với từng quy mô dự án.
            </li>
          </ul>
          <img
            src={xedieuhanh3.src}
            alt="ưu điểm xe diễu hành"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">4. Ứng dụng</h2>
          <p className="mt-3 text-base text-justify md:text-lg">
            Dịch vụ thiết kế & sản xuất xe diễu hành mô hình được sử dụng trong:
          </p>
          <ul className="ml-6 space-y-3 text-base list-disc md:text-lg">
            <li>Lễ hội, diễu hành văn hóa, thể thao</li>
            <li>Chương trình quảng bá thương hiệu, roadshow</li>
            <li>Lễ khai trương, kỷ niệm thành lập doanh nghiệp</li>
            <li>Sự kiện cộng đồng, hội chợ, triển lãm ngoài trời</li>
            <li>Truyền thông – quảng cáo sáng tạo theo chủ đề</li>
          </ul>
          <img
            src={xedieuhanh4.src}
            alt="ứng dụng xe diễu hành"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">
            5. Những Chiếc Xe Đã Từng Thiết Kế
          </h2>
          {[xedieuhanh5, xedieuhanh6, xedieuhanh7, xedieuhanh8].map(
            (img, i) => (
              <img
                key={i}
                src={img.src}
                alt={`xe diễu hành ${i + 1}`}
                className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
              />
            )
          )}
        </section>
      </div>
    </>
  );
}

export default DesignCar;

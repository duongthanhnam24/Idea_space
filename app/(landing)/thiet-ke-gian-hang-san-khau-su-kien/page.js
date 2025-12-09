import vinataba from "../../../public/assets/images/products/vinataba.png";
import bornpink from "../../../public/assets/images/products/bornpink2.png";
import travelEvent from "../../../public/assets/images/products/TravelEven1.png";
import Event1 from "../../../public/assets/images/products/Event1.png";

import Event3 from "../../../public/assets/images/products/Event3.png";
import esport1 from "../../../public/assets/images/products/esport.png";
import esport2 from "../../../public/assets/images/products/esport2.png";
import esport3 from "../../../public/assets/images/products/esport3.png";

import sankhauA80 from "../../../public/assets/images/gian_hang_trien_lam/z6944765441032_cd1b16dfe5db7334b889eabe32f9742c.jpg";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";


export const metadata = {
  title: "Thiết Kế & Thi Công Gian Hàng – Sân Khấu Sự Kiện",
  description: "Trong mỗi chương trình, hội chợ hay sự kiện, gian hàng và sân khấu không chỉ là nơi trưng bày sản phẩm hay diễn ra hoạt động, mà còn là bộ mặt thể hiện hình ảnh thương hiệu của doanh nghiệp. Một thiết kế ấn tượng, thi công chuyên nghiệp sẽ giúp thu hút ánh nhìn, tạo dấu ấn mạnh mẽ trong lòng khách hàng và đối tác.",
    keywords: [
    "thiết kế gian hàng sự kiện",
    "thi công gian hàng sự kiện",
    "thiết kế sân khấu sự kiện",
    "thi công sân khấu sự kiện",
    "dịch vụ thiết kế gian hàng",
    "dịch vụ thi công gian hàng",
    ]
};
function DesignState() {
  return (
    <>
      <div className="flex flex-wrap items-center space-x-2 max-w-[1200px] mx-auto px-4  !h-[40px] my-6 text-sm sm:text-base">
        <HiHome />
        <Link href="/">Trang Chủ</Link>
        <RiArrowRightSLine />
        <p>Thiết Kế & Thi Công Gian Hàng – Sân Khấu Sự Kiện</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mb-[40px]">
        <h1 className="text-[22px] font-medium uppercase">
          THIẾT KẾ & THI CÔNG GIAN HÀNG – SÂN KHẤU SỰ KIỆN
        </h1>

        <p className="mt-[10px] text-base md:text-lg w-full md:w-[90%] text-justify">
          Trong mỗi chương trình, hội chợ hay sự kiện, gian hàng và sân khấu
          không chỉ là nơi trưng bày sản phẩm hay diễn ra hoạt động, mà còn là
          bộ mặt thể hiện hình ảnh thương hiệu của doanh nghiệp. Một thiết kế ấn
          tượng, thi công chuyên nghiệp sẽ giúp thu hút ánh nhìn, tạo dấu ấn
          mạnh mẽ trong lòng khách hàng và đối tác.
        </p>

        <h2 className="mt-[40px] text-xl">
          1. Vai trò của <strong>thiết kế gian hàng – sân khấu sự kiện</strong>
        </h2>

        <ul className="list-disc ml-[24px] text-base md:text-lg">
          <li>
            Tăng độ nhận diện thương hiệu: Gian hàng và sân khấu được thiết kế
            theo tông màu, phong cách nhận diện riêng giúp doanh nghiệp nổi bật
            giữa hàng trăm đơn vị khác.
          </li>
          <li>
            Thu hút khách tham quan: Một không gian được bố trí hài hòa, sáng
            tạo giúp khách hàng dễ dàng tiếp cận sản phẩm và để lại ấn tượng
            tốt.
          </li>
          <li>
            Thể hiện sự chuyên nghiệp: Sự đầu tư trong thiết kế và thi công
            chính là lời khẳng định cho uy tín và tầm nhìn của doanh nghiệp.
          </li>
        </ul>

        <img
          src={vinataba.src}
          alt="Thiet ke san khau su kien"
          className="mt-[40px] w-full md:w-[70%] mx-auto"
        />

        <h2 className="mt-[40px] text-xl">2. Quy trình thiết kế & thi công</h2>
        <p className="text-base md:text-lg w-full md:w-[90%] text-justify mt-[10px]">
          Chúng tôi mang đến dịch vụ trọn gói từ ý tưởng đến hiện thực:
        </p>

        <ul className="list-disc ml-[24px] text-base md:text-lg">
          <li>
            Tiếp nhận yêu cầu & tư vấn giải pháp phù hợp với mục tiêu sự kiện.
          </li>
          <li>
            Lên bản thiết kế 2D/3D thể hiện rõ phong cách, bố cục, ánh sáng,
            chất liệu.
          </li>
          <li>
            Thi công thực tế bằng đội ngũ kỹ thuật giàu kinh nghiệm, đảm bảo
            tiến độ – an toàn – thẩm mỹ.
          </li>
          <li>
            Hoàn thiện & bàn giao đúng thời gian, hỗ trợ chỉnh sửa hoặc tháo dỡ
            sau chương trình.
          </li>
        </ul>

        <img
          src={bornpink.src}
          alt="Thiet ke san khau su kien"
          className="mt-[40px] w-full md:w-[70%] mx-auto"
        />

        <h2 className="mt-[40px] text-xl">3. Vì sao nên chọn chúng tôi</h2>
        <ul className="list-disc ml-[24px] text-base md:text-lg">
          <li>
            Kinh nghiệm nhiều năm trong lĩnh vực thiết kế – thi công gian hàng,
            sân khấu sự kiện.
          </li>
          <li>
            Đội ngũ sáng tạo & kỹ thuật chuyên nghiệp, luôn lắng nghe và hiện
            thực hóa ý tưởng của khách hàng.
          </li>
          <li>
            Trang thiết bị, vật liệu hiện đại, đảm bảo chất lượng và tính thẩm
            mỹ cao.
          </li>
          <li>Cam kết đúng tiến độ – đúng ngân sách – đúng yêu cầu.</li>
        </ul>

        <img
          src={travelEvent.src}
          alt="Thiet ke san khau su kien"
          className="mt-[40px] w-full md:w-[70%] mx-auto"
        />

        <h2 className="mt-[40px] text-xl">4. Những Dự Án Đã Từng Thực Hiện</h2>

        <div className="flex flex-col items-center space-y-10">
          <img
            src={Event1.src}
            alt="Thiet ke san khau su kien"
            className="w-full md:w-[70%]"
          />
          <img
            src={sankhauA80.src}
            alt="Thiet ke san khau su kien"
            className="w-full md:w-[70%]"
          />
          <img
            src={Event3.src}
            alt="Thiet ke san khau su kien"
            className="w-full md:w-[70%]"
          />
          <img
            src={esport1.src}
            alt="Thiet ke san khau su kien"
            className="w-full md:w-[70%]"
          />
          <img
            src={esport2.src}
            alt="Thiet ke san khau su kien"
            className="w-full md:w-[70%]"
          />
          <img
            src={esport3.src}
            alt="Thiet ke san khau su kien"
            className="w-full md:w-[70%]"
          />
        </div>
      </div>
    </>
  );
}

export default DesignState;

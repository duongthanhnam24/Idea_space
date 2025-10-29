import noithat1 from "../../assests/images/thi_cong_noi_that_gian_hang/16835807_1641793935836689_3846480540148624865_o.jpg";
import noithat2 from "../../assests/images/thi_cong_noi_that_gian_hang/23415193_1950948831587863_6103840747349541089_o.jpg";
import noithat3 from "../../assests/images/thi_cong_noi_that_gian_hang/23415492_1950948928254520_604068841349853287_o.jpg";
import noithat4 from "../../assests/images/thi_cong_noi_that_gian_hang/53506240_2626245827391490_3472509774967341056_n.jpg";
import noithat5 from "../../assests/images/thi_cong_noi_that_gian_hang/53625559_2626246480724758_2739831200863485952_n.jpg";
import noithat6 from "../../assests/images/thi_cong_noi_that_gian_hang/53814314_2626246090724797_4023653533306847232_n.jpg";
import noithat7 from "../../assests/images/thi_cong_noi_that_gian_hang/54207598_2626246444058095_6922673032662089728_n.jpg";
import noithat8 from "../../assests/images/thi_cong_noi_that_gian_hang/53930261_2626245690724837_6198135594837606400_n.jpg";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

function DesignInterior() {
  return (
    <>
      <div className="flex flex-wrap items-center space-x-2 max-w-[1200px] mx-auto px-4  !h-[40px] my-6 text-sm sm:text-base">
        <HiHome />
        <Link to="/">Trang Chủ</Link>
        <RiArrowRightSLine />
        <p>Thiết Kế & Thi Công Nội Thất</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 ">
        <h1 className="text-xl font-medium uppercase sm:text-2xl">
          THIẾT KẾ NỘI THẤT – KIẾN TẠO KHÔNG GIAN ĐẲNG CẤP VÀ TIỆN NGHI
        </h1>

        <h2 className="mt-10 text-lg sm:text-xl">1. Giới Thiệu</h2>

        <p className="mt-3 text-base text-justify sm:text-lg">
          Không gian sống và làm việc không chỉ đơn thuần là nơi để sinh hoạt
          hay lao động, mà còn là nơi thể hiện phong cách, gu thẩm mỹ và đẳng
          cấp của mỗi người.
        </p>

        <p className="mt-3 text-base text-justify sm:text-lg">
          Bởi vậy, thiết kế nội thất đã trở thành yếu tố quan trọng giúp mang
          lại sự hài hòa giữa công năng và nghệ thuật, tạo nên môi trường sống
          tiện nghi, đẹp mắt và truyền cảm hứng mỗi ngày.
        </p>

        <p className="mt-3 text-base text-justify sm:text-lg">
          Với đội ngũ kiến trúc sư, nhà thiết kế giàu kinh nghiệm, chúng tôi
          mang đến giải pháp thiết kế nội thất trọn gói, từ ý tưởng sáng tạo đến
          bản vẽ thi công chi tiết, giúp bạn hiện thực hóa không gian mơ ước một
          cách tối ưu nhất.
        </p>

        <img
          src={noithat1}
          alt="Thiet ke noi that"
          className="mt-10 w-full sm:w-[80%] lg:w-[70%] mx-auto"
        />

        <h2 className="mt-10 text-lg sm:text-xl">
          2. Dịch vụ thiết kế nội thất chúng tôi cung cấp
        </h2>

        <h3 className="mt-3 text-base font-semibold text-justify sm:text-lg">
          Thiết kế nội thất nhà ở
        </h3>
        <ul className="ml-6 space-y-1 text-base list-disc sm:text-lg">
          <li>Chung cư, căn hộ cao cấp</li>
          <li>Nhà phố, biệt thự, nhà liền kề</li>
          <li>Homestay, căn hộ cho thuê</li>
        </ul>

        <h3 className="mt-3 text-base font-semibold text-justify sm:text-lg">
          Thiết kế nội thất văn phòng
        </h3>
        <ul className="ml-6 space-y-1 text-base list-disc sm:text-lg">
          <li>
            Văn phòng công ty, coworking space, phòng họp, khu làm việc nhóm
          </li>
        </ul>

        <h3 className="mt-3 text-base font-semibold text-justify sm:text-lg">
          Thiết kế nội thất quán cà phê – nhà hàng – khách sạn
        </h3>
        <ul className="ml-6 space-y-1 text-base list-disc sm:text-lg">
          <li>
            Tạo điểm nhấn ấn tượng, thu hút khách hàng ngay từ cái nhìn đầu
            tiên.
          </li>
          <li>
            Bố trí hợp lý khu vực phục vụ, bếp, bar, quầy thu ngân và không gian
            khách ngồi.
          </li>
          <li>
            Thi công thực tế bằng đội ngũ kỹ thuật giàu kinh nghiệm, đảm bảo
            tiến độ – an toàn – thẩm mỹ.
          </li>
          <li>
            Phong cách đa dạng: hiện đại, tối giản, vintage, retro, châu Âu, Á
            Đông…
          </li>
        </ul>

        <h3 className="mt-3 text-base font-semibold text-justify sm:text-lg">
          Thiết kế nội thất showroom – cửa hàng
        </h3>
        <ul className="ml-6 space-y-1 text-base list-disc sm:text-lg">
          <li>Thiết kế không gian trưng bày khoa học, nổi bật sản phẩm.</li>
          <li>
            Kết hợp ánh sáng, vật liệu và màu sắc để tăng khả năng nhận diện
            thương hiệu.
          </li>
          <li>
            Áp dụng xu hướng thiết kế mới nhất, giúp không gian vừa đẹp vừa hiệu
            quả kinh doanh.
          </li>
        </ul>

        <img
          src={noithat2}
          alt="Thiet ke noi that"
          className="mt-10 w-full sm:w-[80%] lg:w-[70%] mx-auto"
        />

        <h2 className="mt-10 text-lg sm:text-xl">
          3. Phong cách thiết kế nổi bật
        </h2>
        <ul className="ml-6 space-y-1 text-base list-disc sm:text-lg">
          <li>
            Hiện đại (Modern): Đường nét tinh giản, chú trọng công năng và ánh
            sáng tự nhiên.
          </li>
          <li>
            Tối giản (Minimalism): Ít chi tiết, không gian thoáng đãng, thanh
            lịch.
          </li>
          <li>
            Cổ điển (Classic): Sang trọng, tỉ mỉ, thể hiện đẳng cấp và giá trị
            nghệ thuật.
          </li>
          <li>
            Scandinavian: Kết hợp tông sáng, vật liệu tự nhiên và ánh sáng hài
            hòa.
          </li>
          <li>
            Indochine (Đông Dương): Giao thoa giữa nét Á Đông truyền thống và
            phương Tây hiện đại.
          </li>
        </ul>

        <img
          src={noithat3}
          alt="Thiet ke noi that"
          className="mt-10 w-full sm:w-[80%] lg:w-[70%] mx-auto"
        />

        <h2 className="mt-10 text-lg sm:text-xl">
          4. Những Dự Án Đã Từng Thực Hiện
        </h2>
        <div className="flex flex-col items-center mt-6 space-y-10">
          <img
            src={noithat4}
            alt="Du an noi that"
            className="w-full sm:w-[80%] lg:w-[70%]"
          />
          <img
            src={noithat5}
            alt="Du an noi that"
            className="w-full sm:w-[80%] lg:w-[70%]"
          />
          <img
            src={noithat6}
            alt="Du an noi that"
            className="w-full sm:w-[80%] lg:w-[70%]"
          />
          <img
            src={noithat7}
            alt="Du an noi that"
            className="w-full sm:w-[80%] lg:w-[70%]"
          />
          <img
            src={noithat8}
            alt="Du an noi that"
            className="w-full sm:w-[80%] lg:w-[70%]"
          />
        </div>
      </div>
    </>
  );
}

export default DesignInterior;

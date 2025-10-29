import beverly4 from "../../assests/images/products/beverly4.jpg";
import movenpick3 from "../../assests/images/products/movenpick3.jpg";
import muongthanh from "../../assests/images/products/muongthanh2.jpg";
import kimbang from "../../assests/images/products/kimbang.jpg";
import kimbang2 from "../../assests/images/products/kimbang5.jpg";
import kimbang3 from "../../assests/images/products/kimbang6.jpg";
import yenlac from "../../assests/images/products/yenlacled2.jpg";
import ledduongpho from "../../assests/images/products/ledduongpho3.jpg";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

function DesignBuilding() {
  return (
    <>
      <div className="flex flex-wrap items-center space-x-2 max-w-[1200px] mx-auto px-4  !h-[40px] my-6 text-sm sm:text-base">
        <HiHome />
        <Link to="/" className="hover:text-blue-600">
          Trang Chủ
        </Link>
        <RiArrowRightSLine />
        <p className="font-medium text-gray-700">
          Thiết Kế & Trang Trí Ánh Sáng Của Đường Phố Và Tòa Nhà
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 space-y-8">
        <h1 className="text-xl font-semibold md:text-2xl">
          THIẾT KẾ & TRANG TRÍ ÁNH SÁNG CỦA ĐƯỜNG PHỐ VÀ TÒA NHÀ
        </h1>

        <section>
          <h2 className="mt-6 text-lg font-medium md:text-xl">
            1. Giới thiệu về{" "}
            <strong>
              Thiết Kế và Trang Trí Ánh Sáng Của Đường Phố Và Tòa Nhà
            </strong>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-justify md:text-lg">
            Ánh sáng không chỉ giúp chiếu sáng không gian mà còn là ngôn ngữ của
            cảm xúc và thẩm mỹ. Trong các sự kiện, dịp lễ hội, hay chiến dịch
            quảng bá thương hiệu, hệ thống chiếu sáng nghệ thuật đóng vai trò
            quan trọng trong việc tạo nên bầu không khí ấn tượng, thu hút ánh
            nhìn và lan tỏa năng lượng tích cực.
          </p>
          <p className="mt-3 text-base leading-relaxed text-justify md:text-lg">
            Với kinh nghiệm trong thiết kế và trang trí ánh sáng nghệ thuật cho
            đường phố, tòa nhà, và không gian công cộng, chúng tôi mang đến giải
            pháp toàn diện từ ý tưởng – thiết kế – thi công – vận hành, giúp mỗi
            công trình tỏa sáng theo phong cách riêng.
          </p>
          <img
            src={beverly4}
            alt="thiết kế trang trí ánh sáng"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">
            2. Dịch vụ <strong>thiết kế & trang trí ánh sáng</strong>
          </h2>
          <p className="mt-3 text-base text-justify md:text-lg">
            Chúng tôi cung cấp đa dạng dịch vụ trong lĩnh vực chiếu sáng mỹ
            thuật và trang trí:
          </p>
          <ul className="ml-6 space-y-3 text-base list-disc md:text-lg">
            <li>
              <strong>Trang trí ánh sáng đường phố:</strong> Thiết kế hệ thống
              đèn LED, dây đèn trang trí, cổng chào, đèn hình nghệ thuật theo
              từng chủ đề (Tết, lễ hội, kỷ niệm, quảng bá du lịch...).
            </li>
            <li>
              <strong>Chiếu sáng kiến trúc tòa nhà:</strong> Lắp đặt hệ thống
              đèn rọi, đèn led đổi màu, đèn viền kiến trúc giúp tòa nhà nổi bật,
              sang trọng và đậm chất nghệ thuật.
            </li>
            <li>
              <strong>
                Trang trí ánh sáng sự kiện – trung tâm thương mại – khu vui
                chơi:
              </strong>{" "}
              Tạo không gian ánh sáng sinh động và ấn tượng.
            </li>
            <li>
              <strong>Chiếu sáng cảnh quan đô thị:</strong> Tư vấn hệ thống
              chiếu sáng cây xanh, công viên, hồ nước, cầu đường, công trình
              công cộng.
            </li>
          </ul>
          <img
            src={movenpick3}
            alt="dịch vụ thiết kế ánh sáng"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">
            3. Quy trình thực hiện chuyên nghiệp
          </h2>
          <ul className="ml-6 space-y-3 text-base list-disc md:text-lg">
            <li>
              Khảo sát & tư vấn ý tưởng: Đo đạc thực tế, lắng nghe nhu cầu của
              khách hàng.
            </li>
            <li>
              Thiết kế ánh sáng 2D/3D mô phỏng thực tế: Giúp khách hàng hình
              dung được hiệu ứng ánh sáng.
            </li>
            <li>
              Thi công & lắp đặt: Sử dụng thiết bị chất lượng cao, an toàn và
              tiết kiệm điện năng.
            </li>
            <li>
              Kiểm tra, lập trình & bàn giao: Đảm bảo hoạt động ổn định và đạt
              hiệu quả nghệ thuật.
            </li>
          </ul>
          <img
            src={muongthanh}
            alt="quy trình thiết kế ánh sáng"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">
            4. Ưu điểm nổi bật
          </h2>
          <ul className="ml-6 space-y-3 text-base list-disc md:text-lg">
            <li>Thiết kế sáng tạo – độc quyền, phù hợp với từng công trình.</li>
            <li>
              Ứng dụng công nghệ LED hiện đại, tiết kiệm điện và thân thiện môi
              trường.
            </li>
            <li>Đội ngũ kỹ thuật giàu kinh nghiệm, chuyên nghiệp.</li>
            <li>Tiến độ nhanh, đảm bảo an toàn tuyệt đối.</li>
            <li>Giá thành hợp lý, giải pháp tối ưu chi phí.</li>
          </ul>
          <img
            src={kimbang}
            alt="ưu điểm thiết kế ánh sáng"
            className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
          />
        </section>

        <section>
          <h2 className="mt-8 text-lg font-medium md:text-xl">
            5. Những Tòa Nhà & Công Trình Đã Từng Trang Trí
          </h2>
          {[kimbang2, kimbang3, yenlac, ledduongpho].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`công trình ${i + 1}`}
              className="mt-8 w-full md:w-4/5 lg:w-[70%] mx-auto rounded-lg"
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default DesignBuilding;

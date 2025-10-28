import { SlideBanner } from "../../components/SlideBanner";
import { MdOutlineLocationCity } from "react-icons/md";
import { SlideIdea } from "../../components/SliderIdea";
import image from "../../../src/assests/images/tu-hao-di-san.jpg";
import sungroup from "../../../src/assests/images/sun-group.jpg";
import quavip from "../../../src/assests/images/qua-vip.jpg";
import bamuda from "../../../src/assests/images/BAMUDA.jpg";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaFileAlt } from "react-icons/fa";
import { FaMarker } from "react-icons/fa";
import { LiaHandshake } from "react-icons/lia";
import { ContactUs } from "../../components/FormMail";
import React from "react";

const data = [
  {
    type: "Thiết Kế & Thi Công Gian Hàng Sân Khấu Sự Kiện",
    project: [
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
      {
        name: "VINATABA - 40 NĂM TỰ HÀO DI SẢN",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: image,
      },
    ],
  },
  {
    type: "Thiết Kế & Sản Xuất Xe Diễu Hành Mô Hình - Biểu Trưng",
    project: [
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
      {
        name: "SUN-GROUP",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: sungroup,
      },
    ],
  },
  {
    type: "Thiết Kế & Cung Cấp Quà Tặng Cho Doanh Nghiệp",
    project: [
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
      {
        name: "Quà VIP (cao cấp)",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: quavip,
      },
    ],
  },
  {
    type: "Thiết Kế & Thi Công Trang Trí Ánh Sáng, Trang Trí Đường Phố",
    project: [
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
      {
        name: "Thi Công Đèn Trang Trí GAMUDA",
        shortDescription:
          "Biển quảng cáo có một vai trò rất quan trọng trong quá trình kinh doanh của bất kỳ [...]",
        image: bamuda,
      },
    ],
  },
];

function Home() {
  return (
    <div>
      <SlideBanner />
      <div className="px-4 sm:px-8 lg:px-[15px] space-y-24">
        {data.map((item) => (
          <div key={item.type}>
            <h3 className="mt-6 text-lg font-bold text-center sm:text-xl">
              {item.type}
            </h3>
            <div className="flex items-center justify-center mt-2 line-border">
              <MdOutlineLocationCity size={20} color="#0f50a8" />
            </div>
            <div className="mt-6">
              <SlideIdea data={item.project} />
            </div>
          </div>
        ))}

        <div>
          <h3 className="mt-6 text-lg font-bold text-center sm:text-xl">
            QUY TRÌNH LÀM VIỆC
          </h3>
          <div className="flex items-center justify-center mt-2 line-border"></div>

          <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-4 sm:gap-12 justify-items-center">
            {[
              {
                icon: <HiOutlineUserAdd size={80} />,
                title: "KHÔNG GIAN Ý TƯỞNG",
                desc: "Ngay khi nhận được thông tin của khách hàng, Tây Bắc sẽ lập tức liên hệ để trao đổi nhu cầu và khảo sát hiện trạng.",
              },
              {
                icon: <FaFileAlt size={80} />,
                title: "Báo giá và quy trình",
                desc: "Sau khi thống nhất ý tưởng và báo giá, công ty sẽ soạn thảo hợp đồng và tiến hành ký kết.",
              },
              {
                icon: <FaMarker size={80} />,
                title: "Khảo sát và ký hợp đồng",
                desc: "Hai bên thống nhất bản vẽ 3D cuối cùng, đo đạc lại thực tế và tiến hành sản xuất.",
              },
              {
                icon: <LiaHandshake size={80} />,
                title: "Bàn giao và quyết toán",
                desc: "Công ty cam kết thi công đúng tiến độ, chất lượng; nghiệm thu và bàn giao công trình hoàn chỉnh.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="w-full max-w-[400px] space-y-4 text-center"
              >
                <div className="group">
                  <div className="text-center border-[5px] border-[#0f50a8] group-hover:border-black p-6 rounded-full w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] mx-auto transition-all duration-300 ease-in-out flex items-center justify-center">
                    {React.cloneElement(step.icon, {
                      className: "group-hover:text-[#0f50a8] transition-all",
                    })}
                  </div>
                </div>
                <div className="px-2 space-y-2 sm:px-0">
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm sm:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-24 sm:my-28">
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;

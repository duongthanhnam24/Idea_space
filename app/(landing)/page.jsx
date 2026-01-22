
import { SlideBanner } from "../../components/SlideBanner";
import { MdOutlineLocationCity } from "react-icons/md";
import { SlideIdea } from "../../components/SliderIdea";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaFileAlt } from "react-icons/fa";
import { FaMarker } from "react-icons/fa";
import { LiaHandshake } from "react-icons/lia";
import { ContactUs } from "../../components/FormMail";
import React from "react";
import { data } from "../../data/data";
import trienlam from "../../public/assets/images/gian_hang_trien_lam/z6944765441032_cd1b16dfe5db7334b889eabe32f9742c.jpg"
import vinataba from "../../public/assets/images/products/vinataba.png"
import muongthanh from '../../public/assets/images/khach_san_Muong_Thanh/16819088_1642038825812200_6821429266978369594_o.jpg'
import PDJ from "../../public/assets/images/showroombichthuy/bichthuy1.jpg"
import xedieuhanhgiaiphongmiennam from "../../public/assets/images/xe_dieu_hanh/lo-dien-loat-xe-mo-hinh-dieu-hanh-dip-30-thang-4-2-17451271314111997469189.webp"
import Link from "next/link";
import Image from "next/image";
import { ProcessFlow } from "@/components/ProcessSection/ProcessFlow";
import { ChevronDownIcon } from "@/components/ProcessSection/Icons";
function Home() {

  return (
    <>

      <div>
        <SlideBanner />
        <div className="px-4 sm:px-8 lg:px-[15px] space-y-24">
          <div >
            <h3 className="my-10  text-center text-4xl md:text-4xl font-bold text-gray-900">
              Một Vài Dự Án
            </h3>
            <div className="flex items-center justify-center mt-2 line-border">
              <MdOutlineLocationCity size={20} color="#0f50a8" />
            </div>
            <div className="mt-6">
              {data && <SlideIdea data={data} />}
            </div>
          </div>


          {/* <div>
              <h3 className="mt-6 text-lg font-bold text-center sm:text-xl">
                QUY TRÌNH LÀM VIỆC CỦA <strong className="text-lg! font-bold! sm:text-xl!">KHÔNG GIAN Ý TƯỞNG</strong>
              </h3>
              <div className="flex items-center justify-center mt-2 line-border"></div>
              <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-4 sm:gap-12 justify-items-center">
                {[
                  {
                    icon: <HiOutlineUserAdd size={80} />,
                    title: "KHÔNG GIAN Ý TƯỞNG",
                    desc: "Ngay khi nhận được thông tin của khách hàng, Không Gian Ý Tưởng sẽ lập tức liên hệ để trao đổi nhu cầu và khảo sát hiện trạng.",
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
            </div> */}
          <div>
            <div className="bg-white  text-center px-4">
              <div className="mt-10">
                <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Quy Trình Thiết Kế & Thi Công</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">Chúng tôi mang đến giải pháp trọn gói chuyên nghiệp, minh bạch từ ý tưởng đến hiện thực.</p>
              </div>
              <div className="mt-8 flex justify-center animate-bounce text-gray-400">
                <ChevronDownIcon className="w-6 h-6" />
              </div>
            </div>
            <ProcessFlow />
          </div>
        </div>
        <div className="mt-24 sm:mt-28">
          <ContactUs />
        </div>
        <div className=" w-full  relative">
          <div className="w-1/3 bg-[#0f50a8] h-[800px] max-sm:h-[950px]  max-md:h-[1350px] max-lg:h-[1350px]">
            <h3 className="p-5  text-lg font-bold text-right sm:text-xl text-white">
              DỰ ÁN TIÊU BIỂU CỦA <strong className="text-lg! font-bold! sm:text-xl!">KHÔNG GIAN Ý TƯỞNG</strong>
            </h3>
          </div>
          <div className=" absolute top-20 flex space-x-7 left-64 max-sm:flex-col max-sm:left-5 max-sm:space-x-0 max-sm:space-y-7 max-sm:!mr-4 max-md:flex-col max-md:left-7 max-md:!mr-4 max-md:space-x-0 max-md:space-y-7 max-lg:flex-col max-lg:left-20 max-lg:!mr-4 max-lg:space-x-0 max-lg:space-y-7 max-xl:left-28 max-xl:mr-6 max-2xl:mr-8" >
            <Link href='/du-an'>
              <div >
                <Image width={100000} height={1000000} src={trienlam.src} alt="Dự Án Tiêu Biểu Của Không Gian Ý Tưởng" className="w-[648px] h-[480px] rounded-t-lg max-sm:w-full max-sm:h-[280px] max-md:w-full max-lg:w-full max-xl:w-[520px] max-xl:h-[420px]" />
                <div className="bg-white shadow-md px-4 py-6 rounded-b-lg flex justify-between">
                  <div>
                    <p>
                      Triển lãm gian hàng sự kiện A80
                    </p>
                    <p>
                      Địa Chỉ: Đông Anh, Hà Nội
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-[#0f50a8] text-white max-sm:rounded-md">Xem Thêm</button>
                </div>
              </div>
            </Link>
            <div className="flex justify-between space-x-8 ">
              <div className="flex flex-col justify-between space-y-4">
                <Link href='/du-an'>
                  <div className="relative">
                    <Image width={100000} height={1000000} src={vinataba.src} alt="Dự Án Tiêu Biểu Của Không Gian Ý Tưởng" className="w-[300px] h-[275px] rounded-md max-sm:w-[200px] max-sm:h-[180px] max-xl:h-[251px]" />
                    <p className="absolute bottom-4 px-2 text-white font-medium">
                      VINATABA - 40 Năm Tự Hào Di Sản
                    </p>
                  </div>
                </Link>
                <Link href='/du-an'>
                  <div className="relative">
                    <Image width={100000} height={1000000} src={muongthanh.src} alt="Dự Án Tiêu Biểu Của Không Gian Ý Tưởng" className="w-[300px] h-[275px] rounded-md max-sm:w-[200px] max-sm:h-[180px] max-xl:h-[251px]" />
                    <p className="absolute bottom-4 px-2 text-white font-medium">
                      Dự Án Mường Thanh
                    </p>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col justify-between space-y-4">
                <Link href='/du-an'>
                  <div className="relative">
                    <Image width={100000} height={1000000} src={PDJ.src} alt="Dự Án Tiêu Biểu Của Không Gian Ý Tưởng" className="w-[300px] h-[275px] rounded-md max-sm:w-[200px] max-sm:h-[180px] max-xl:h-[251px]" />
                    <p className="absolute bottom-4 px-2 text-white font-medium">
                      Thiết Kế Nội Thất Cho Công Ty Trang Sức PDJ Phương Đông
                    </p>
                  </div>
                </Link>
                <Link href='/du-an'>
                  <div className="relative">
                    <Image width={100000} height={1000000} src={xedieuhanhgiaiphongmiennam.src} alt="Dự Án Tiêu Biểu Của Không Gian Ý Tưởng" className="w-[300px] h-[275px] rounded-md max-sm:w-[200px] max-sm:h-[180px] max-xl:h-[251px]" />
                    <p className="absolute bottom-4 px-2 text-white font-medium">
                      Xe Diễu Hành Kỷ Niệm 50 Năm Ngày Giải Phóng Miền Nam
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

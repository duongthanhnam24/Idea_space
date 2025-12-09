
import imgae from "../../../public/assets/images/banner-gioi-thieu1.jpg"
import company from "../../../public/assets/images/company.png"
import Link from "next/link";
import { MdDoubleArrow } from 'react-icons/md';
import { GiHandOk } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';
import { MdHighQuality } from 'react-icons/md';
import { FcIdea } from 'react-icons/fc';
import { EffectCard } from "../../../components/EffectCards";
import may1 from "../../../public/assets/images/may-1.jpg"
import may2 from "../../../public/assets/images/may-2.jpg"
import may3 from "../../../public/assets/images/may-3.jpg"
import may4 from "../../../public/assets/images/may-4.jpg"
import { ContactUs } from "../../../components/FormMail";



import SlideAlly from "../../../components/SlideAlly/SlideAlly";

export const metadata = {
  title: "Giới Thiệu - Không Gian Ý Tưởng",
  description: "Không Gian Ý Tưởng Có Đội Ngũ Họa Sĩ Thiết Kế, Kiến Trúc Sư, Kỹ Sư, Cán Bộ Kỹ Thuật Và Đội Ngũ Công Nhân Lành Nghề Với Nhiều Năm Kinh Nghiệm Trong Lĩnh Vực Thiết Kế - Sản Xuất - Thi Công Quảng Cáo, Kiến Trúc, Nội Thất.",
    keywords: [
        "Lấy Uy Tín Làm Vốn",
        "Đội Ngũ Chất Luợng",
        "Chất Lượng Đạt Chuẩn",
        "Luôn Luôn Sáng Tạo",
        'Không Gian Ý Tưởng',
        'Thiết Kế Quảng Cáo',
        'Thi Công Quảng Cáo',
        'Công Ty Quảng Cáo',
        
    ]
};

function Introduce() {
    return (
        <div>
            <div className="relative text-white w-full">
                <img src={imgae.src} alt="Không Gian Ý Tưởng" className="w-full object-cover h-[400px] brightness-50" />
                <div className="max-sm:ml-10 max-sm:mr-0 max-md:mx-10  absolute bottom-12 mx-[287px] space-y-2 max-xl:mx-10 max-2xl:mx-[100px] max-3xl:mx-[100px]">
                    <h2 className="text-4xl font-bold border-b-2 border-[#0f50a8] ">Giới Thiệu Về <strong className="text-4xl! font-bold!">Không Gian Ý Tưởng</strong></h2>
                    <div className="flex space-x-3 items-center"><Link href='/'>Trang Chủ</Link><MdDoubleArrow /> <Link href='/gioi-thieu'>Giới Thiệu</Link> </div>
                </div>
            </div>
            <div className=" mx-[287px] mt-[60px] max-sm:ml-10 max-sm:mr-10 max-md:mx-10 max-lg:mx-10 max-xl:mx-10 max-2xl:mx-[100px] max-3xl:mx-[100px]">
                <div className="flex justify-between max-sm:flex-col  max-md:flex-col max-md:space-y-6 max-lg:flex-col max-lg:space-y-6 max-xl:space-x-6">
                    <div className="text-center w-[700px] space-y-3 max-sm:w-full max-md:w-full max-lg:w-full max-2xl:w-[500px]">
                        <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8]">
                            Thư Giới Thiệu
                        </p>
                        <p className="font-medium text-[18px]">
                            CÔNG TY CỔ PHẦN TRUYỀN THÔNG <strong className="font-medium! text-[18px]!">KHÔNG GIAN Ý TƯỞNG</strong> <br /> MỘT TRONG NHỮNG CÔNG TY THIẾT KẾ VÀ THI CÔNG QUẢNG CÁO UY TÍN VÀ CHUYÊN NGHIỆP.
                        </p>
                        <p className="text-[14px] text-justify  text-sm/6">
                            <strong className="text-[14px]! text-sm/6!">
                                Không Gian Ý Tưởng
                                
                                </strong> Có Đội Ngũ Họa Sĩ Thiết Kế, Kiến Trúc Sư, Kỹ Sư, Cán Bộ Kỹ Thuật Và Đội Ngũ Công Nhân Lành Nghề Với Nhiều Năm Kinh Nghiệm Trong Lĩnh Vực Thiết Kế - Sản Xuất - Thi Công Quảng Cáo, Kiến Trúc, Nội Thất. Chúng Tôi Luôn Cam Kết Đảm Bảo Tiến Độ, Đạt Chất Lượng - Kỹ Thuật - Mỹ Thuật Tốt Nên Luôn Được Các Chủ Đầu Tư Và Các Đối Tác Đánh Giá Cao Và Cộng Tác Lâu Dài Trong Suốt Thời Gian Qua. <strong className="text-[14px]! text-sm/6!">Không Gian Ý Tưởng</strong> Đã Thi Công Nhiều Công Trình Và Hợp Tác Với Những Tập Đoàn, Công Ty Lớn Như VNPT, MƯỜNG THANH, AEON, GAMUDA LAND, EUROWINDOW... Được Biết Quý Khách Có Nhu Cầu Thiết Kế Thi Công Hạng Mục Công Chào, Biển Hiệu Quảng Cáo... Với Năng Lực Hiện Có, Công Ty <strong className="text-[14px]! text-sm/6!">Không Gian Ý Tưởng</strong> Xin Đăng Ký Tham Gia: Tư Vấn Thiết Kế Và Thi Công Cho Quý Công Ty. Với Phương Châm: “Lấy Uy Tín Làm Vốn” Công Ty Chúng Tôi Cam Kết Sẽ Luôn Làm Hài Lòng Khách Hàng Và Thực Hiện Nghiêm Túc Các Điều Khoản Trong Hợp Đồng, Hoàn Thành Công Việc Đúng Tiến Độ Với Chất Lượng Cao.
                        </p>
                    </div>
                   <div className="flex justify-center">
                     <img src={company.src} alt="Không Gian Ý Tưởng" className="w-[500px] h-[600px] max-sm:w-full max-sm:mt-6 max-sm:ml-0! max-sm:h-[400px] max-xl:w-[400px]  max-xl:h-[500px] " />
                   </div>
                </div>
                <div className="mt-24">
                    <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8] text-center">
                        Gía Trị Cốt Lõi
                    </p>
                    <div className="flex justify-between max-sm:flex-col max-sm:space-y-12 max-md:flex-col max-md:space-y-12 max-lg:flex-col max-lg:space-y-12">
                        <div className="flex flex-col items-center space-y-3">
                            <div className="w-[90px] h-[90px] bg-[#0f50a8] text-center leading-[90px] rounded-full flex items-center justify-center ">
                                <GiHandOk size={60} color="white" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[20px] font-medium text-center">
                                    Lấy Uy Tín Làm Vốn
                                </p>
                                <p className="text-justify w-[200px]">
                                    Cam Kết Sẽ Luôn Làm Hài Lòng Khách Hàng Và Thực Hiện Nghiêm Túc Các Điều Khoản Trong Hợp Đồng, Hoàn Thành Công Việc Đúng Tiến Độ Với Chất Lượng Cao.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-3">
                            <div className="w-[90px] h-[90px] bg-[#0f50a8] text-center leading-[90px] rounded-full flex items-center justify-center ">
                                <RiTeamLine size={60} color="white" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[20px] font-medium text-center">
                                    Đội Ngũ Chất Luợng
                                </p>
                                <p className="text-justify w-[200px]">
                                    Đội Ngũ Họa Sĩ Thiết Kế, Kiến Trúc Sư, Kỹ Sư, Cán Bộ Kỹ Thuật Và Đội Ngũ Công Nhân Lành Nghề Với Nhiều Năm Kinh Nghiệm
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-center space-y-3">
                            <div className="w-[90px] h-[90px] bg-[#0f50a8] text-center leading-[90px] rounded-full flex items-center justify-center ">
                                <MdHighQuality size={60} color="white" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[20px] font-medium text-center">
                                    Chất Lượng Đạt Chuẩn
                                </p>
                                <p className="text-justify w-[200px]">
                                    Cam Kết Đảm Bảo Tiến Độ, Đạt Chất Lượng - Kỹ Thuật - Mỹ Thuật Tốt Nên Luôn Được Các Chủ Đầu Tư Và Các Đối Tác Đánh Giá Cao Và Cộng Tác Lâu Dài Trong Suốt Thời Gian Qua
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-center space-y-3">
                            <div className="w-[90px] h-[90px] bg-[#0f50a8] text-center leading-[90px] rounded-full flex items-center justify-center ">
                                <FcIdea size={60} color="white" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[20px] font-medium text-center">
                                    Luôn Luôn Sáng Tạo
                                </p>
                                <p className="text-justify w-[200px]">
                                    Đúng Như Tên Công Ty Chúng Tôi Luôn Luôn Sáng Tạo, Đổi Mới, Đưa Đến Cho Khách Hàng Những Ý Tưởng Hay, Không Ngừng Nỗ Lực Mang Đến Cho Khách Hàng Những Sản Phẩm, Dịch Vụ Hoàn Hảo Nhất
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-[96px]">
                    <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8] text-center">
                        Xưởng Sản Xuất và Máy Móc
                    </p>


                    <div className="grid grid-flow-col grid-rows-2 gap-28 mt-[50px] max-sm:flex max-sm:flex-col max-sm:space-y-2 max-md:flex max-md:flex-col max-md:space-y-2 max-lg:flex max-lg:flex-col max-lg:space-y-2 max-xl:gap-11">
                        <div className="row-span-2 max-sm:flex max-sm:justify-center    max-md:flex max-md:justify-center max-lg:flex max-lg:justify-center max-xl:flex max-xl:justify-center">
                            <div className="w-[530px] flex items-center justify-center max-sm:w-[350px] max-sm:items-center max-xl:w-[400px]    ">
                                <EffectCard />
                            </div>
                        </div>
                        <div className="col-span-2 row-span-1">
                            <div className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:space-y-6 max-md:flex-col max-md:items-center max-md:space-y-6  max-lg:flex-col max-lg:items-center max-lg:space-y-6">
                                <img src={may1.src} alt="Máy Móc Không Gian Ý Tưởng" className="w-[310px] h-[218px] max-md:w-[500px] max-md:h-[400px] max-lg:w-[700px] max-lg:h-[500px] max-2xl:w-[200px] max-2xl:h-[200px]" />
                                <img src={may2.src} alt="Máy Móc Không Gian Ý Tưởng" className="w-[310px] h-[218px] max-md:w-[500px] max-md:h-[400px] max-lg:w-[700px] max-lg:h-[500px] max-2xl:w-[200px] max-2xl:h-[200px]" />
                            </div>
                        </div> 
                        <div className="col-span-2 row-span-1">
                            <div className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:space-y-6 max-md:flex-col max-md:items-center max-md:space-y-6 max-lg:flex-col max-lg:items-center max-lg:space-y-6">
                                <img src={may3.src} alt="Máy Móc Không Gian Ý Tưởng" className="w-[310px] h-[218px] max-md:w-[500px] max-md:h-[400px] max-lg:w-[700px] max-lg:h-[500px] max-2xl:w-[200px] max-2xl:h-[200px]" />
                                <img src={may4.src} alt="Máy Móc Không Gian Ý Tưởng" className="w-[310px] h-[218px] max-md:w-[500px] max-md:h-[400px] max-lg:w-[700px] max-lg:h-[500px] max-2xl:w-[200px] max-2xl:h-[200px]" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* <div className="mt-[96px]">
                <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8] text-center">
                    Công Trình Tiêu Biểu
                </p>
                <section className="relative w-full flex bg-[#0f50a8] mt-[50px]">
                    
                    <div className="w-[40%] bg-[#0f50a8] flex flex-col justify-center items-center text-white py-16 relative z-10">

                    </div>

                    
                    <div className="w-[60%] bg-white pl-1 pr-[17.5rem] py-12 relative">


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            <div className="md:col-span-2 lg:col-span-1 row-span-2 bg-white rounded-xl shadow overflow-hidden relative -ml-[32rem] z-20">
                                <div className="relative ">
                                    <img
                                        src={BAMUDA}
                                        alt="Toa nha bamuda"
                                        className="w-full h-[400px] object-cover transition-transform duration-500 "
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">
                                            THI CÔNG Đèn Trang Trí BAMUDA
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Địa chỉ: Gia Lâm - Hà Nội
                                        </p>
                                        <button className="bg-[#0f50a8] text-white text-sm px-4 py-2 mt-3 rounded hover:bg-[#535cd8] transition">
                                            Chi tiết
                                        </button>
                                    </div>
                                </div>
                            </div>

                           
                            {[
                                sungroup,
                                sungroup,
                                sungroup,
                                sungroup,
                            ].map((img, i) => (
                                <div key={i} className="bg-white rounded-xl  ">
                                    <div className="relative ">
                                        <img
                                            src={img}
                                            alt="Project"
                                            className="w-full  object-cover rounded-xl h-[254px]"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0  transition"></div>
                                        <div className="absolute bottom-0 left-0 p-3 text-white">
                                            <h3 className="font-bold text-sm">Tên công trình {i + 1}</h3>
                                            <p className="text-xs mt-1">Địa chỉ: Hà Nội</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div> */}
            <div className="mt-[96px]">
                <ContactUs />
            </div>
            <SlideAlly />
            
        </div>
    )
}

export default Introduce
import imgae from "../../assests/images/banner-gioi-thieu1.jpg"
import company from "../../assests/images/company.png"
import { Link } from "react-router-dom";
import { MdDoubleArrow } from 'react-icons/md';
import { GiHandOk } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';
import { MdHighQuality } from 'react-icons/md';
import { FcIdea } from 'react-icons/fc';
import { EffectCard } from "../../components/EffectCards";
import may1 from "../../assests/images/may-1.jpg"
import may2 from "../../assests/images/may-2.jpg"
import may3 from "../../assests/images/may-3.jpg"
import may4 from "../../assests/images/may-4.jpg"
import BAMUDA from "../../assests/images/BAMUDA.jpg"
import sungroup from "../../assests/images/sun-group.jpg"
import { ContactUs } from "../../components/FormMail";

import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import aeon from "../../assests/images/aeon-logo.png"
import eurowindow from "../../assests/images/Logo-Eurowindow.webp"

import gamuda from "../../assests/images/logo-gamuda.png"

import muongthanh from "../../assests/images/logo-Muong-Thanh.jpg"

import vnpt from "../../assests/images/logo-vnpt.jpg"
import vnpay from "../../assests/images/vnpay-logo.jpg"
import SlideLayout from "../../components/SlideLayout";



function Introduce() {
    return (
        <div>
            <div className="relative text-white">
                <img src={imgae} className="w-full object-cover h-[400px] brightness-50" />
                <div className="absolute bottom-12 mx-[287px] space-y-2">
                    <h2 className="text-4xl font-bold border-b-2 border-[#0f50a8] ">Giới Thiệu</h2>
                    <div className="flex space-x-3 items-center"><Link to='/'>Trang Chủ</Link><MdDoubleArrow /> <Link to='/gioi-thieu'>Giới Thiệu</Link> </div>
                </div>
            </div>
            <div className="mx-[287px] mt-[60px]">
                <div className="flex justify-between">
                    <div className="text-center w-[700px] space-y-3">
                        <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8]">
                            Thư Giới Thiệu
                        </p>
                        <p className="font-medium text-[14px]">
                            CÔNG TY CỔ PHẦN TRUYỀN THÔNG KHÔNG GIAN Ý TƯỞNG <br /> MỘT TRONG NHỮNG CÔNG TY THIẾT KẾ VÀ THI CÔNG QUẢNG CÁO UY TÍN VÀ CHUYÊN NGHIỆP.
                        </p>
                        <p className="text-[12px] text-justify  text-sm/6">
                            Không Gian Ý Tưởng Có Đội Ngũ Họa Sĩ Thiết Kế, Kiến Trúc Sư, Kỹ Sư, Cán Bộ Kỹ Thuật Và Đội Ngũ Công Nhân Lành Nghề Với Nhiều Năm Kinh Nghiệm Trong Lĩnh Vực Thiết Kế - Sản Xuất - Thi Công Quảng Cáo, Kiến Trúc, Nội Thất. Chúng Tôi Luôn Cam Kết Đảm Bảo Tiến Độ, Đạt Chất Lượng - Kỹ Thuật - Mỹ Thuật Tốt Nên Luôn Được Các Chủ Đầu Tư Và Các Đối Tác Đánh Giá Cao Và Cộng Tác Lâu Dài Trong Suốt Thời Gian Qua. Không Gian Ý Tưởng Đã Thi Công Nhiều Công Trình Và Hợp Tác Với Những Tập Đoàn, Công Ty Lớn Như VNPT, MƯỜNG THANH, AEON, GAMUDA LAND, EUROWINDOW... Được Biết Quý Khách Có Nhu Cầu Thiết Kế Thi Công Hạng Mục Công Chào, Biển Hiệu Quảng Cáo... Với Năng Lực Hiện Có, Công Ty Không Gian Ý Tưởng Xin Đăng Ký Tham Gia: Tư Vấn Thiết Kế Và Thi Công Cho Quý Công Ty. Với Phương Châm: “Lấy Uy Tín Làm Vốn” Công Ty Chúng Tôi Cam Kết Sẽ Luôn Làm Hài Lòng Khách Hàng Và Thực Hiện Nghiêm Túc Các Điều Khoản Trong Hợp Đồng, Hoàn Thành Công Việc Đúng Tiến Độ Với Chất Lượng Cao.
                        </p>
                    </div>
                    <img src={company} className="w-[500px] h-[600px]" />
                </div>
                <div className="mt-[96px]">
                    <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8] text-center">
                        Gía Trị Cốt Lõi
                    </p>
                    <div className="flex justify-between">
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


                    <div className="grid grid-flow-col grid-rows-2 gap-28 mt-[50px]">
                        <div className="row-span-2 ">
                            <div className="w-[530px] flex items-center justify-center">
                                <EffectCard />
                            </div>
                        </div>
                        <div className="col-span-2 row-span-1">
                            <div className="flex justify-between">
                                <img src={may1} className="w-[310px] h-[218px]" />
                                <img src={may2} className="w-[310px] h-[218px]" />
                            </div>
                        </div>
                        <div className="col-span-2 row-span-1">
                            <div className="flex justify-between">
                                <img src={may3} className="w-[310px] h-[218px]" />
                                <img src={may4} className="w-[310px] h-[218px]" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="mt-[96px]">
                <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8] text-center">
                    Công Trình Tiêu Biểu
                </p>
                <section className="relative w-full flex bg-[#0f50a8] mt-[50px]">
                    {/* Cột trái (màu xanh + tiêu đề) */}
                    <div className="w-[40%] bg-[#0f50a8] flex flex-col justify-center items-center text-white py-16 relative z-10">

                    </div>

                    {/* Cột phải (phần hình ảnh & nội dung) */}
                    <div className="w-[60%] bg-white pl-1 pr-[17.5rem] py-12 relative">


                        {/* Lưới hình ảnh */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Ô ảnh lớn đè sang phần xanh */}
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

                            {/* Các ô nhỏ */}
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

            </div>
            <ContactUs />
            <div className="mt-[96px] mx-[287px]">
                 <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8] text-center mb-[50px]">
                   Khách Hàng Đối Tác
                </p>
                <SlideLayout loop={true} slidesPerView={4} centeredSlides={true}

                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,

                    }}
                    modules={[Autoplay, Pagination]}>

                    <SwiperSlide >
                        <img src={aeon} className=' object-contain  w-[100px] h-[100px]' />

                    </SwiperSlide>
                    <SwiperSlide><img src={eurowindow} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={gamuda} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpay} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={muongthanh} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpay} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                     <SwiperSlide><img src={eurowindow} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={gamuda} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                     <SwiperSlide><img src={eurowindow} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={gamuda} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt} className=' object-contain  w-[100px] h-[100px]' /></SwiperSlide>
                </SlideLayout>
            </div>
        </div>
    )
}

export default Introduce
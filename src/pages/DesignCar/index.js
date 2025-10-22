import { HiHome } from 'react-icons/hi'
import xedieuhanh1 from '../../assests/images/products/xedieuhanh1.png'
import xedieuhanh2 from '../../assests/images/products/xedieuhanh2.png'
import xedieuhanh3 from '../../assests/images/products/xedieuhanh3.png'
import xedieuhanh4 from '../../assests/images/products/xedieuhanh4.png'
import xedieuhanh5 from '../../assests/images/products/xedieuhanh5.png'
import xedieuhanh6 from '../../assests/images/products/xedieuhanh6.png'
import xedieuhanh7 from '../../assests/images/products/xedieuhanh7.png'
import xedieuhanh8 from '../../assests/images/products/xedieuhanh8.png'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'



function DesignCar() {
    return (
        <>
        <div className="flex items-center space-x-2 mx-[390px] !h-[40px] my-6 ">
                <HiHome />
                <Link to='/'>
                    Trang Chủ
                </Link>
                <RiArrowRightSLine />
                <p >
                    Thiết Kế & Sản Xuất Xe Diễu Hành Mô Hình
                </p>

            </div>

         <div className="mx-[390px]">
            <h1 className="text-[22px] font-medium">THIẾT KẾ & SẢN XUẤT XE DIỄU HÀNH MÔ HÌNH</h1>
            <h2 className='mt-[40px] text-xl'>1. Giới thiệu về <strong>XE DIỄU HÀNH MÔ HÌNH</strong></h2>
            <p className="mt-[10px]  text-lg w-[90%] text-justify">
                Xe diễu hành mô hình là điểm nhấn không thể thiếu trong các lễ hội, sự kiện quảng bá thương hiệu, roadshow hay diễu hành văn hóa – thể thao. Một chiếc xe được thiết kế ấn tượng, mang đậm bản sắc thương hiệu không chỉ thu hút sự chú ý của công chúng mà còn góp phần truyền tải thông điệp một cách sống động và sáng tạo nhất.
            </p>
            <p className='mt-[10px]  text-lg w-[90%] text-justify'>
                Với đội ngũ thiết kế sáng tạo và kinh nghiệm trong lĩnh vực thi công, chúng tôi mang đến giải pháp trọn gói từ ý tưởng – thiết kế – sản xuất – trang trí – vận hành, giúp khách hàng tạo nên những mô hình xe diễu hành độc đáo và thu hút mọi ánh nhìn.
            </p>
            <img src={xedieuhanh1} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />
            <h2 className='mt-[40px] text-xl'>2. Quy trình thiết kế & sản xuất</h2>
            <p className='text-lg w-[90%] text-justify mt-[10px]'>
                Để đảm bảo mỗi dự án đều đạt hiệu quả cao về thẩm mỹ và kỹ thuật, quy trình được thực hiện chuyên nghiệp qua các bước sau:
            </p>
            <ul className='list-disc ml-[24px] text-lg'>
                <li >Tiếp nhận yêu cầu & tư vấn ý tưởng: Lắng nghe nhu cầu, chủ đề sự kiện, thông điệp cần truyền tải.</li>
                <li>
                   Lên bản thiết kế 2D/3D chi tiết: Mô phỏng trực quan giúp khách hàng dễ hình dung tổng thể mô hình xe.
                </li>
                <li>
                    Gia công & thi công thực tế: Sử dụng vật liệu chất lượng cao như khung sắt, composite, mica, đèn LED, decal in UV,… đảm bảo bền, đẹp và an toàn khi vận hành.
                </li>
                <li>
                    Trang trí & hoàn thiện: Lắp đặt hệ thống âm thanh – ánh sáng, phông nền, hiệu ứng đặc biệt theo yêu cầu.
                </li>
                <li>
                    Kiểm tra & bàn giao: Đảm bảo xe hoạt động ổn định, đáp ứng tiêu chuẩn kỹ thuật và thẩm mỹ trước khi diễu hành.
                </li>
            </ul>
            <img src={xedieuhanh2} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />
            <h2 className='mt-[40px] text-xl'>3. Ưu điểm dịch vụ của chúng tôi</h2>
          
            <ul className='list-disc ml-[24px] text-lg'>
                <li >Sáng tạo độc quyền: Thiết kế theo yêu cầu, mang dấu ấn riêng biệt của thương hiệu.</li>
                <li>
                   Thi công an toàn – chắc chắn: Kết cấu kỹ thuật được tính toán kỹ lưỡng để đảm bảo an toàn khi di chuyển.
                </li>
                <li>
                    Đội ngũ chuyên nghiệp: Kỹ thuật viên, họa sĩ, và thợ thi công giàu kinh nghiệm trong lĩnh vực mô hình sự kiện.
                </li>
                <li>
                    Tiến độ nhanh – linh hoạt: Đáp ứng các sự kiện có thời gian gấp rút mà vẫn đảm bảo chất lượng cao.
                </li>
                <li>
                    Giá thành hợp lý: Tối ưu chi phí, phù hợp với từng quy mô dự án.
                </li>
            </ul>
            <img src={xedieuhanh3} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />
            <h2 className='mt-[40px] text-xl'>4. Ứng dụng</h2>
            <p className='text-lg w-[90%] text-justify mt-[10px]'>Dịch vụ thiết kế & sản xuất xe diễu hành mô hình được sử dụng trong:</p>
            <ul className='list-disc ml-[24px] text-lg'>
                <li >Lễ hội, diễu hành văn hóa, thể thao</li>
                <li>
                   Chương trình quảng bá thương hiệu, roadshow
                </li>
                <li>
                    Lễ khai trương, kỷ niệm thành lập doanh nghiệp
                </li>
                <li>
                    Sự kiện cộng đồng, hội chợ, triển lãm ngoài trời
                </li>
                <li>
                    Truyền thông – quảng cáo sáng tạo theo chủ đề
                </li>
            </ul>
            <img src={xedieuhanh4} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />
             <h2 className='mt-[40px] text-xl'>5. Những Chiếc Xe Đã Từng Thiết Kế</h2>
            <img src={xedieuhanh5} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />
            <img src={xedieuhanh6} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />

            <img src={xedieuhanh7} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />

            <img src={xedieuhanh8} alt='thiet ke xe dieu hanh mo hinh' className='mt-[40px] w-[70%]' />

           
        </div>
        </>
       
    )
}

export default DesignCar
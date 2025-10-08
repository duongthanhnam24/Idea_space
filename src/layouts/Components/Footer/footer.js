import logo from '../../../assests/images/logo-removebg-preview.png'
import { FaHome } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
export function Footer() {
    return (
       <div>
         <div className='bg-[#262626] h-[350px] mt-10 px-[5.25rem] py-12 text-white flex items-center justify-between'>
            <div className=" space-y-4">
                <div className='flex items-center space-x-3'>
                    <img src={logo} alt='logo' className='w-[60px]' />
                    <p>CÔNG TY CỔ PHẦN TRUYỀN THÔNG KHÔNG GIAN Ý TƯỞNG</p>
                </div>
                <p className='text-[14px]'>
                    Cảm ơn quý khách hàng đã ghé thăm website của chúng tôi,<br /> nếu bạn cần tư vấn thêm thông tin về sản phẩm hay dịch vụ <br /> quảng cáo hãy gọi ngay cho chúng tôi nhé
                </p>
                <p className='flex items-center space-x-1'> <FaHome color="#0f50a8" />  <span>Số 41 Đường Đông Hội, Đông Anh, Hà Nội</span></p>
                <p className='flex items-center space-x-1'>  <FaPhoneAlt color="#0f50a8" />  <span>0389-944-688</span> </p>
                <p className='flex items-center space-x-1'><HiOutlineMail color="#0f50a8" /> <span>ytuongkg.media@gmail.com</span></p>
            </div>

            {/* <div className='flex items-center justify-between space-x-6 text-xl'>
                <button>
                    Giới Thiệu
                </button>
                <button>
                    Liên Hệ
                </button>
                <button>
                    Dự Án Tiêu Biểu
                </button>
            </div>

            <div>
                <input></input>
            </div> */}
        </div>
        <div className='bg-black h-[40px] w-full flex items-center justify-center'>
                <p className=' text-white text-xs'>
                    Copyright © 2025 Idea Space. All rights reserved.
                </p>
        </div>
       </div>
    )
}
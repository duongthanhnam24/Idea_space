import { FaHome } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../../assests/images/logo.jpg'
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div >
            {/* in4 */}
            <div className="bg-[#f8f9fa] px-[390px] h-[53px]  text-[14px] w-full">
                <div className='flex justify-between w-[60%] items-center h-full'>
                    <p className='flex items-center space-x-1'> <FaHome color="#0f50a8"/>  <span>Số 41 Đường Đông Hội, Đông Anh, Hà Nội</span></p>
                    <p className='flex items-center space-x-1'>  <FaPhoneAlt color="#0f50a8"/>  <span>0389-944-688</span> </p>
                    <p className='flex items-center space-x-1'><HiOutlineMail color="#0f50a8"/> <span>ytuongkg.media@gmail.com</span></p>
                </div>
            </div>
            {/* header */}
            <div className='h-[97px] flex justify-between px-[390px] items-center'>
                <div className='w-1/3'>
                    <img src={logo} className='w-[70px]'/>
                </div>
                <div className='flex justify-between w-2/3'>
                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]' to='/gioi-thieu'>Giới Thiệu</Link>
                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]'>Dịch Vụ</Link>
                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]'>Mẫu Biển Đẹp</Link>
                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]'>Mẫu Chữ</Link>
                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]'>Dự Án</Link>
                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]'>Liên Hệ</Link>
                </div>
            </div>
        </div>
    )
}
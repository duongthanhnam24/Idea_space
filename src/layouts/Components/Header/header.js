import { FaHome } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../../assests/images/logo.jpg'
import { Link } from "react-router-dom";
import { Dropdown, DropdownItem, createTheme ,ThemeProvider, Button } from "flowbite-react";


  
export function Header() {
    return (
        <div >
            {/* in4 */}
            <div className="bg-[#f8f9fa] px-[390px] h-[53px]  text-[14px] w-full">
                <div className='flex justify-between w-[60%] items-center h-full'>
                    <p className='flex items-center space-x-1'> <FaHome color="#0f50a8" />  <span>Số 41 Đường Đông Hội, Đông Anh, Hà Nội</span></p>
                    <p className='flex items-center space-x-1'>  <FaPhoneAlt color="#0f50a8" />  <span>0389-944-688</span> </p>
                    <p className='flex items-center space-x-1'><HiOutlineMail color="#0f50a8" /> <span>ytuongkg.media@gmail.com</span></p>
                </div>
            </div>
            {/* header */}
            <div className='h-[97px] flex justify-between px-[390px] items-center '>
                <div className='w-1/3'>
                    <img src={logo} className='w-[70px]' />
                </div>
                <div className='flex justify-between w-2/3'>
                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]' to='/gioi-thieu'>Giới Thiệu</Link>

                    <Link className='text-[16px] font-medium hover:text-[#0f50a8]'>
                       
                            <Dropdown label="Dịch Vụ" className='!bg-white ' inline>
                                <DropdownItem as={Link} to='/thiet-ke-logo'   className='!text-black hover:!bg-[#0f50a8] hover:!text-white'>Thiết Kế Logo</DropdownItem>
                                <DropdownItem as={Link} to='/thiet-ke-cung-cap-qua-tang' className='!text-black hover:!bg-[#0f50a8] hover:!text-white'>Thiết Kế Cung Cấp Quà Tặng</DropdownItem>
                                <DropdownItem as={Link} to='/thiet-ke-thi-cong-noi-that' className='!text-black hover:!bg-[#0f50a8] hover:!text-white'>Thiết Kế & Thi Công Nội Thất</DropdownItem>
                                <DropdownItem as={Link} to='/thiet-ke-xe-dieu-hanh' className='!text-black hover:!bg-[#0f50a8] hover:!text-white'>Thiết Kế & Sản Xuất Xe Diễu Hành Mô Hình</DropdownItem>
                                <DropdownItem as={Link} to='/thiet-ke-gian-hang-san-khau-su-kien' className='!text-black hover:!bg-[#0f50a8] hover:!text-white'>Thiết Kế & Thi Công Gian Hàng Sân Khấu Sự Kiện</DropdownItem>
                                <DropdownItem as={Link} to='/thiet-ke-trang-tri-anh-sang-cua-duong-pho-va-toa-nha' className='!text-black hover:!bg-[#0f50a8] hover:!text-white'>Thiết Kế & Trang Trí Ánh Sáng Của Đường Phố Và Tòa Nhà</DropdownItem>
                                <DropdownItem as={Link} to='/thiet-ke-thi-cong-bieu-tuong-kien-truc-cong-chao-bien-quang-cao' className='!text-black hover:!bg-[#0f50a8] hover:!text-white'>Thiết Kế & Thi Công Biểu Tượng Kiến Trúc, Cổng Chào, Biển Hiệu Quảng Cáo</DropdownItem>

                            </Dropdown>
                     
                        
                    </Link>
                    <Link to='/du-an' className='text-[16px] font-medium hover:text-[#0f50a8]'>Dự Án</Link>
                    <Link to='/lien-he' className='text-[16px] font-medium hover:text-[#0f50a8]'>Liên Hệ</Link>
                </div>
            </div>
        </div>
    )
}
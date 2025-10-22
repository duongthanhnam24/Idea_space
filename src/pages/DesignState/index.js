import vinataba from '../../assests/images/products/vinataba.png'
import bornpink from '../../assests/images/products/bornpink2.png'
import travelEvent from '../../assests/images/products/TravelEven1.png'
import Event1 from '../../assests/images/products/Event1.png'

import Event3 from '../../assests/images/products/Event3.png'
import esport1 from '../../assests/images/products/esport.png'
import esport2 from '../../assests/images/products/esport2.png'
import esport3 from '../../assests/images/products/esport3.png'

import sankhauA80 from '../../assests/images/gian_hang_trien_lam/z6944765441032_cd1b16dfe5db7334b889eabe32f9742c.jpg'
import { HiHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'





function DesignState() {
    return (
        <>
        <div className="flex items-center space-x-2 mx-[390px] !h-[40px] my-6 ">
                <HiHome />
                <Link to='/'>
                    Trang Chủ
                </Link>
                <RiArrowRightSLine />
                <p >
                    Thiết Kế & Thi Công Gian Hàng – Sân Khấu Sự Kiện
                </p>

            </div>
        
        <div className="mx-[390px]">
            <h1 className="text-[22px] font-medium uppercase">THIẾT KẾ & THI CÔNG GIAN HÀNG – SÂN KHẤU SỰ KIỆN</h1>
            <p className='mt-[10px]  text-base w-[90%] text-justify'>Trong mỗi chương trình, hội chợ hay sự kiện, gian hàng và sân khấu không chỉ là nơi trưng bày sản phẩm hay diễn ra hoạt động, mà còn là bộ mặt thể hiện hình ảnh thương hiệu của doanh nghiệp. Một thiết kế ấn tượng, thi công chuyên nghiệp sẽ giúp thu hút ánh nhìn, tạo dấu ấn mạnh mẽ trong lòng khách hàng và đối tác.</p>
            <h2 className='mt-[40px] text-xl'>1. Vai trò của <strong>thiết kế gian hàng – sân khấu sự kiện </strong></h2>
            
            <ul className='list-disc ml-[24px] text-lg'>
                <li >Tăng độ nhận diện thương hiệu: Gian hàng và sân khấu được thiết kế theo tông màu, phong cách nhận diện riêng giúp doanh nghiệp nổi bật giữa hàng trăm đơn vị khác.</li>
                <li>
                    Thu hút khách tham quan: Một không gian được bố trí hài hòa, sáng tạo giúp khách hàng dễ dàng tiếp cận sản phẩm và để lại ấn tượng tốt.
                </li>
                <li>
                    Thể hiện sự chuyên nghiệp: Sự đầu tư trong thiết kế và thi công chính là lời khẳng định cho uy tín và tầm nhìn của doanh nghiệp.
                </li>
            </ul>
            <img src={vinataba} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <h2 className='mt-[40px] text-xl'>2. Quy trình thiết kế & thi công</h2>
            <p className='text-lg w-[90%] text-justify mt-[10px]'>
                Chúng tôi mang đến dịch vụ trọn gói từ ý tưởng đến hiện thực:
            </p>
            <ul className='list-disc ml-[24px] text-lg'>
                <li >Tiếp nhận yêu cầu & tư vấn giải pháp phù hợp với mục tiêu sự kiện.</li>
                <li>
                    Lên bản thiết kế 2D/3D thể hiện rõ phong cách, bố cục, ánh sáng, chất liệu.
                </li>
                <li>
                    Thi công thực tế bằng đội ngũ kỹ thuật giàu kinh nghiệm, đảm bảo tiến độ – an toàn – thẩm mỹ.
                </li>
                <li>
                    Hoàn thiện & bàn giao đúng thời gian, hỗ trợ chỉnh sửa hoặc tháo dỡ sau chương trình.
                </li>
            </ul>
           
           <img src={bornpink} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <h2 className='mt-[40px] text-xl'>3. Vì sao nên chọn chúng tôi</h2>
            
            <ul className='list-disc ml-[24px] text-lg'>
                <li >Kinh nghiệm nhiều năm trong lĩnh vực thiết kế – thi công gian hàng, sân khấu sự kiện.</li>
                <li>
                    Đội ngũ sáng tạo & kỹ thuật chuyên nghiệp, luôn lắng nghe và hiện thực hóa ý tưởng của khách hàng.
                </li>
                <li>
                    Trang thiết bị, vật liệu hiện đại, đảm bảo chất lượng và tính thẩm mỹ cao.
                </li>
                <li>
                    Cam kết đúng tiến độ – đúng ngân sách – đúng yêu cầu.
                </li>
            </ul>
            <img src={travelEvent} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <h2 className='mt-[40px] text-xl'>4. Những Dự Án Đã Từng Thực Hiện</h2>
            <img src={Event1} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <img src={sankhauA80} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <img src={Event3} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <img src={esport1} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <img src={esport2} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />
            <img src={esport3} alt='Thiet ke san khau su kien' className='mt-[40px] w-[70%]' />


        </div>
        </>
    )
}

export default DesignState
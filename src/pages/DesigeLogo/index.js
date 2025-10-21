import thietketlogo from '../../assests/images/thiet-ke-logo.jpg'
function DesignLogo() {
    return (
        <div className="mx-[287px]">
            <h1 className="text-[22px] font-medium">THIẾT KẾ LOGO - BỘ NHẬN DIỆN THƯƠNG HIỆU</h1>
            <h2 className='mt-[40px] text-xl'>1. Tầm quan trọng của <strong>thiết kế logo </strong> và bộ nhận diện thương hiệu </h2>
            <p className="mt-[10px]  text-lg w-[90%] text-justify">
                Trong thời đại kinh doanh hiện nay, khi hàng ngàn thương hiệu ra đời mỗi ngày, logo và bộ nhận diện thương hiệu chính là “bộ mặt” giúp doanh nghiệp khác biệt – chuyên nghiệp – ghi dấu trong tâm trí khách hàng.
                Một logo đẹp không chỉ là hình ảnh minh họa, mà là biểu tượng thể hiện giá trị cốt lõi, phong cách và tầm nhìn của doanh nghiệp.
                Bên cạnh đó, bộ nhận diện thương hiệu giúp đồng bộ hình ảnh trên mọi phương tiện truyền thông, từ danh thiếp, hồ sơ năng lực, đồng phục nhân viên cho đến website và biển quảng cáo.
            </p>
            <img src={thietketlogo} alt='Thiet ke logo' className='mt-[40px]' />
            <h2 className='mt-[40px] text-xl'>2. <strong>Thiết kế logo</strong> – Dấu ấn đầu tiên của thương hiệu</h2>
            <p className='text-lg w-[90%] text-justify mt-[10px]'>
                Logo là yếu tố đầu tiên mà khách hàng nhìn thấy khi tiếp cận doanh nghiệp.
                Một logo chuyên nghiệp, độc đáo và dễ ghi nhớ sẽ tạo ấn tượng mạnh mẽ ngay từ lần đầu tiên.
                Các phong cách logo phổ biến hiện nay gồm:
            </p>
            <ul className='list-disc ml-[24px] text-lg'>
                <li >Logo biểu tượng (<strong>Symbol Logo</strong>): thể hiện đặc trưng sản phẩm, lĩnh vực hoặc ý nghĩa thương hiệu.</li>
                <li>
                    Logo chữ (<strong>Wordmark/Lettermark</strong>): nhấn mạnh tên thương hiệu, phù hợp với doanh nghiệp muốn khẳng định tên tuổi.
                </li>
                <li>
                    Logo kết hợp (<strong>Combination Mark</strong>): kết hợp hình ảnh và chữ, tạo nên bản sắc riêng và dễ nhận diện.
                </li>
            </ul>
            <p className='text-lg w-[90%] text-justify '>
                Khi thiết kế logo, đội ngũ của Idea Space luôn nghiên cứu kỹ đặc điểm ngành nghề, khách hàng mục tiêu và giá trị thương hiệu để mang đến sản phẩm đẹp mắt, phù hợp, dễ ứng dụng và có tuổi thọ lâu dài.
            </p>
        </div>
    )
}

export default DesignLogo
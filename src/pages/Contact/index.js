import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
function Contact() {
    return (
        <>
            <div className="w-full h-[450px] rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.6168129276464!2d105.8661896696175!3d21.093929950025487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aa06641838f9%3A0x13c185b1662dcf49!2zQ8O0bmcgVHkgS2jDtG5nIEdpYW4gw50gVMaw4bufbmc!5e0!3m2!1svi!2s!4v1761044090897!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>

            </div>
            <div className="mx-[390px] mt-[40px]">
                <div className="flex justify-between">
                    <div>
                        aaaa
                    </div>
                    <div className="p-[38px] shadow-md rounded-md border-t-8 border-[#0f50a8] space-y-4">
                        <h2 className="text-[24px] font-medium ">Thông Tin Liên Hệ</h2>
                        <p className='flex items-center'><span className='pr-4'><FaMapMarkerAlt/></span> Số 41 Đường Đông Hội, Đông Anh, Hà Nội</p>
                        <p className='flex items-center'><span className='pr-4'><FaPhoneVolume/></span> Ông Đặng Xuân Thơ  -  Giám đốc Công ty: 0389944688</p>
                        <p className='flex items-center'><span className='pr-4'><FaPhoneVolume/></span>Ông Đào Văn Độ - Phụ trách Tài chính – Kinh doanh: 098 3763405</p>
                        <p className='flex items-center'><span className='pr-4'><MdEmail/></span>ytuongkg.media@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
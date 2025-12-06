export default function BadgeComponent({ data }) {
    const badge = [
        "Nội Thất",
        "Sân Khấu Sự Kiện",
        "Logo",
        "Quà Tặng",
        "Xe Diễu Hành",
        "Trang Trí Ánh Sáng",
        "Biển Quảng Cáo"
    ]
    return (
        <>
            <div className="flex space-x-4">
               <p> Loại Dự Án:</p>
                {data && data.map((type, index) => (
                    <>
                        <div key={index} className="bg-gray-400 w-fit px-2 text-center  py-1 text-sm">
                            {type}
                        </div>
                    </>
                ))}

              
            </div>
        </>
    )
}
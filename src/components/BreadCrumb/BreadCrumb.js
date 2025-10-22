

import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiArrowRightSFill } from 'react-icons/ri';
export default function BreadCrumb({BreadCrumbItem}) {
    return (
        <div className="flex items-center space-x-2">
            <HiHome />
            <Link to='/'>
                Trang Chủ
            </Link>
            {BreadCrumbItem && BreadCrumbItem.map((item, index) => {
                return (
                    <div key={index} className="flex items-center space-x-2">
                    <RiArrowRightSFill/>
                    <Link  to={item.Link}>
                        {item.name}
                    </Link>
                    </div>
                )
            })}
        </div>
    );
}

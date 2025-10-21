import Contact from "../pages/Contact";
import DesignLogo from "../pages/DesigeLogo";
import DesignBuilding from "../pages/DesignBuilding";
import DesignCar from "../pages/DesignCar";
import DesignGift from "../pages/DesignGift";
import DesignState from "../pages/DesignState";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import DesignInterior from "../pages/DesignInterior";
import DesignSymbolPromotion from "../pages/DesignSymbolPromotion";
import Projects from "../pages/Projects/Projects";
import Project from "../pages/Project/Project";
export const router = [
    {
        path: '/', component: Home
    },
    {
        path: '/lien-he', component: Contact
    },
    ,
    {
        path: '/gioi-thieu', component: Introduce
    },
    {
        path: '/thiet-ke-logo', component: DesignLogo
    },
    {
        path: '/thiet-ke-gian-hang-san-khau-su-kien', component: DesignState
    },
    {
        path: '/thiet-ke-xe-dieu-hanh', component: DesignCar
    }
    ,
    {
        path: '/thiet-ke-cung-cap-qua-tang', component: DesignGift
    },
    {
        path: '/thiet-ke-trang-tri-anh-sang-cua-duong-pho-va-toa-nha', component: DesignBuilding
    },
    {
        path: '/thiet-ke-thi-cong-noi-that', component: DesignInterior
    },
    {
        path: '/thiet-ke-thi-cong-bieu-tuong-kien-truc-cong-chao-bien-quang-cao', component: DesignSymbolPromotion
    },
    {
        path : '/du-an', component : Projects
    },
    {
        path : '/du-an/:slug' , component : Project
    }

]
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";

export const router = [
    {
        path : '/' , component : Home
    },
    {
        path : '/lien-he' , component : Contact
    },
    ,
    {
        path : '/gioi-thieu' , component : Introduce
    }

]
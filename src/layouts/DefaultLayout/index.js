import { Footer } from "../Components/Footer/footer";
import { Header } from "../Components/Header/header";

function DefaultLayout({ children }) {
    return (
        <div >
            <Header />
            <div >{children}</div>
            <Footer/>
        </div>
    );
}



export default DefaultLayout;
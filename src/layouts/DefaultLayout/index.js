import { ToastContainer ,Flip} from 'react-toastify';
import { Footer } from "../Components/Footer/footer";
import { Header } from "../Components/Header/header";

function DefaultLayout({ children }) {
    return (
        <div >
            <Header />
            <div className='mt-[133px] max-xs:mt-[175px] max-sm:mt-[175px] max-md:mt-[175px] '>{children}</div>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip} />
            <Footer />
        </div>
    );
}



export default DefaultLayout;
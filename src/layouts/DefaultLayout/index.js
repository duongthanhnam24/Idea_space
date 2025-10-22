import { ToastContainer ,Flip} from 'react-toastify';
import { Footer } from "../Components/Footer/footer";
import { Header } from "../Components/Header/header";

function DefaultLayout({ children }) {
    return (
        <div >
            <Header />
            <div >{children}</div>
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
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import  FloatingContactButtons  from "../../components/ContactIcon/ContactIcon";


export default function MainLayout({ children  }) {
  return (
    <>
      <Header />

      <div className="mt-[133px] max-xs:mt-[175px] max-sm:mt-[175px] max-md:mt-[175px]">
        {children}
      </div>
      <FloatingContactButtons/>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />

      <Footer />
    </>
  );
}

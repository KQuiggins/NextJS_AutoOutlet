import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context/GlobalContext";


export const metadata = {
  title: "AutoOutlet | Car parts you can trust",
  description:
    "AutoOutlet is a car parts store that offers a wide range of car parts and accessories for all makes and models. We offer the best quality car parts at the best prices.",
  keywords:
    "car parts, car accessories, auto parts, car parts store, car parts online, car parts and accessories, car parts shop, car parts near me, car parts warehouse",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;

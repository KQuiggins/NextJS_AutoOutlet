import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export const metadata = {
  title: 'AutoOutlet | Car parts you can trust',
  description: 'AutoOutlet is a car parts store that offers a wide range of car parts and accessories for all makes and models. We offer the best quality car parts at the best prices.',
  keywords: 'car parts, car accessories, auto parts, car parts store, car parts online, car parts and accessories, car parts shop, car parts near me, car parts warehouse',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;

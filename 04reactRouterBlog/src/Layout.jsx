import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

const Layout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#355070] text-white">
      <Header />
      <Outlet />
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default Layout;

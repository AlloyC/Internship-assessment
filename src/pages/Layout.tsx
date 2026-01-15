import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative flex gap-2 bg-gray-100 w-full overflow-x-hidden max-w-7xl">
      <Sidebar isOpen={isOpen} />

      <div className={` relative md:mx-5 flex-1 w-full min-h-full `}>
        <div
          onClick={handleToggle}
          className={`${
            isOpen ? "visible" : "invisible"
          } md:hidden bg-black/20 fixed inset-0 z-10 backdrop-blur-sm`}
        />
        <button
          onClick={handleToggle}
          className="flex z-50 flex-col h-fit gap-0.5 shadow bg-gray-200/30 rounded absolute top-10 right-5 md:left-5 md:right-auto p-2"
        >
          <span className="border w-3"></span>
          <span className="border w-3"></span>
          <span className="border w-3"></span>
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

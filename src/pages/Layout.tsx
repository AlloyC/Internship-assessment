import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { PanelLeftOpen, PanelLeftClose, Menu, X } from "lucide-react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-linear-to-b from-slate-900/20 to-indigo-950/20 relative flex gap-2 bg-gray-50 w-full overflow-x-hidden max-w-7xl">
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
          className="flex z-50 flex-col h-fit gap-0.5 shadow bg-gray-200/30 rounded absolute top-12 md:top-12 right-7 md:-left-12 md:right-auto p-2"
        >
          {isOpen ? (
            <PanelLeftClose className="hidden md:block w-6 h-6" />
          ) : (
            <PanelLeftOpen className="hidden md:block w-6 h-6" />
          )}
          {isOpen ? (
            <X className="md:hidden w-6 h-6" />
          ) : (
            <Menu className="md:hidden w-6 h-6" />
          )}
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

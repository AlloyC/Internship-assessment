import { LayoutDashboard, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`flex flex-col bg-linear-to-b from-slate-900 to-indigo-950 min-h-dvh 
  shadow-xl transition-all duration-300 ease-in-out fixed z-30 top-0
  ${isOpen ? "w-56 left-0 md:static" : "w-16 -left-full md:left-0 md:static"}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10">
        <ShieldCheck className="w-7 h-7 text-purple-400 shrink-0" />
        <span
          className={`text-xl font-bold text-white transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Puplar
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-2">
          <Link to="/">
            <li
              className={`flex items-center gap-3 rounded-lg 
          bg-linear-to-r from-blue-600/80 to-purple-600/80 
          text-white shadow-lg shadow-purple-500/20 ${
            isOpen ? "justify-start px-4 py-3" : "p-2.5"
          } cursor-pointer`}
            >
              <LayoutDashboard className="w-5 h-5 shrink-0" />
              <span
                className={`transition-opacity ${
                  isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                Dashboard
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

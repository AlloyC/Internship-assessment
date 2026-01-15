import { LayoutDashboard, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`flex z-30 flex-col bg-black/40 min-h-dvh px-4  gap-4 pt-5 top-0 shadow-md w-50 transition-all fixed ${
        isOpen ? "md:static overflow-y-clip left-0" : "fixed -left-full"
      }`}
    >
      <div className="flex gap-4 items-center justify-between ml-5">
        <h2 className={`font-medium text-2xl flex gap-2 items-center`}>
          <PiggyBank />
          <span className={`italic`}>Puplar</span>
        </h2>
      </div>
      <nav className="mt-10">
        <ul>
          <Link to={"/"}>
            <li
              className={`bg-gray-50/60 shadow-sm rounded py-1 px-3 hover:bg-gray-100 flex items-center gap-2 font-medium text-gray-700`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className={`${isOpen ? "visible" : "invisible"}`}>
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

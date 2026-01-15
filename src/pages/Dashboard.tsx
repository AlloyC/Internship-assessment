import { Link } from "react-router-dom";
import { useUserFilter, useUsers } from "../providers/UsersContext";
import {
  ExternalLink,
  Search,
  User,
  Mail,
  MapPin,
  Home,
  Phone,
  Navigation,
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const { modifiedUsers, cities } = useUsers();
  const { setCity, setName } = useUserFilter();
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className=" p-5 shadow-md min-h-dvh rounded-md">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-5">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-blue-100">Total Users: {modifiedUsers.length}</p>
      </div>
      <section className="mt-5 border-t pt-5 border-[#667eea]">
        <div className="hidden md:flex justify-between items-baseline px-5">
          <h3 className="font-medium text-xl">All Users</h3>
          <form className="flex gap-2">
            <label className="relative" htmlFor="name_search">
              <Search className="absolute  top-1/2 -translate-y-1/2 left-2 text-gray-300 w-5 h-5" />
              <input
                type="search"
                name="name_search"
                id=""
                placeholder="Search by name"
                className="rounded bg-gray-50 px-2 py-1 pl-8 outline-none border border-[#667eea] placeholder:italic placeholder:text-gray-300 focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <select
              name="filter"
              id=""
              onChange={(e) => setCity(e.target.value)}
              className="rounded outline-none bg-gray-50 border border-[#667eea] focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Filter</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 md:hidden justify-between px-3">
          <h3 className="font-medium">All Users</h3>
          <form className="flex justify-end">
            <select
              name="filter"
              id=""
              onChange={(e) => setCity(e.target.value)}
              className="border bg-gray-50 border-[#667eea] rounded outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Filter</option>
              {cities.map((city) => (
                <option
                  className="italics text-gray-600"
                  key={city}
                  value={city}
                >
                  {city}
                </option>
              ))}
            </select>
          </form>
          <form className="mx-0 col-span-2">
            <label className="relative" htmlFor="name_search">
              <Search className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-300 w-5 h-5" />
              <input
                type="search"
                name="name_search"
                id=""
                placeholder="Search by name"
                className="bg-gray-50 border border-[#667eea] rounded w-full px-2 py-1 pl-8 outline-none placeholder:italic placeholder:text-gray-300 focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </form>
        </div>
        <div className="w-full space-y-2 mt-4">
          <div aria-label="table-head" className="w-full p-2 ">
            <div className="flex flex-wrap gap-3 ">
              {modifiedUsers.map((user) => (
                <Link
                  to={`post/user?userId=${user.id}&userName=${user.name}`}
                  className="flex-1"
                  key={user.id}
                >
                  <div
                    onMouseEnter={() => setActiveId(user.id)}
                    onMouseLeave={() => setActiveId(null)}
                    className="bg-gray-100 rounded p-3 min-w-max w-full hover:shadow-md shadow-gray-400 hover:bg-gray-50 transition-shadow border border-[#667eea]/30 shadow-sm"
                  >
                    <div className="flex justify-between ">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Name:</span>
                        <span>{user.name}</span>
                      </div>
                      <ExternalLink
                        className={`inline-block ml-2 w-4 h-4 text-gray-400 ${
                          activeId === user.id ? "visible" : "invisible"
                        }`}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Email:</span>
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">City:</span>
                      {user.address.city}
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Address:</span>
                      {user.address.geo.lat}, {user.address.geo.lng}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Street:</span>
                      {user.address.street}
                    </div>
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Suite:</span>
                      {user.address.suite}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-max px-2 font-medium">Zipcode: </span>
                      <span>{user.address.zipcode}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

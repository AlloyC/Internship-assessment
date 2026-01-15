import { Link } from "react-router-dom";
import { useUserFilter, useUsers } from "../providers/UsersContext";
import { Search } from "lucide-react";

const Dashboard = () => {
  const { modifiedUsers, cities } = useUsers();
  const { setCity, setName } = useUserFilter();

  return (
    <div className="my-3  bg-white p-5 shadow-md min-h-dvh rounded-md">
      <div className="md:ml-10">
        <h2>
          <span className="font-medium text-xl">Dashboard</span> - Total Users:{" "}
          {modifiedUsers.length}
        </h2>
        <p>Manage and view user statistics here.</p>
      </div>
      <section className="mt-5 border-t pt-5 border-gray-200">
        <div className="hidden md:flex justify-between px-5">
          <h3 className="font-medium">All Users</h3>
          <form className="flex gap-2">
            <label className="relative" htmlFor="name_search">
              <Search className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-300 w-5 h-5" />
              <input
                type="search"
                name="name_search"
                id=""
                placeholder="Search by name"
                className="border rounded px-2 py-1 pl-8 outline-none border-gray-300 placeholder:italic placeholder:text-gray-300"
                onChange={(e) => setName((prev) => (prev = e.target.value))}
              />
            </label>
            <select
              name="filter"
              id=""
              onChange={(e) => setCity((prev) => (prev = e.target.value))}
              className="border rounded outline-none border-gray-300"
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
              onChange={(e) => setCity((prev) => (prev = e.target.value))}
              className="border rounded outline-none border-gray-300"
            >
              <option value="">Filter</option>
              {cities.map((city) => (
                <option key={city} value={city}>
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
                className="border rounded w-full px-2 py-1 pl-8 outline-none border-gray-300 placeholder:italic placeholder:text-gray-300"
                onChange={(e) => setName((prev) => (prev = e.target.value))}
              />
            </label>
          </form>
        </div>
        <div className="w-full space-y-2 mt-5">
          <div aria-label="table-head" className="w-full p-2 ">
            <div className="flex flex-wrap gap-5 ">
              {modifiedUsers.map((user) => (
                <Link
                  to={`post/user?userId=${user.id}&userName=${user.name}`}
                  className="flex-1"
                  key={user.id}
                >
                  <div className="rounded shadow p-3 min-w-max w-full hover:shadow-md hover:scale-105 hover:bg-gray-50/30 transition-shadow">
                    <h4 key={user.id} className=" px-2 font-medium">
                      <span className="w-max px-2 font-medium">Name: </span>
                      <span>{user.name}</span>
                    </h4>
                    <p className=" px-2" key={user.id + "_email"}>
                      <span className="w-max px-2 font-medium">Email: </span>
                      <span>{user.email}</span>
                    </p>
                    <p className=" px-2" key={user.id + "_city"}>
                      <span className="w-max px-2 font-medium">City: </span>
                      {user.address.city}
                    </p>
                    <p className=" px-2" key={user.id + "_geo"}>
                      <span className="w-max px-2 font-medium">Address: </span>
                      {user.address.geo.lat}, {user.address.geo.lng}
                    </p>
                    <p className=" px-2" key={user.id + "_street"}>
                      <span className="w-max px-2 font-medium">Street: </span>
                      {user.address.street}
                    </p>
                    <p className=" px-2" key={user.id + "_suite"}>
                      <span className="w-max px-2 font-medium">Suite: </span>
                      {user.address.suite}
                    </p>
                    <p className=" px-2" key={user.id + "_zipcode"}>
                      <span className="w-max px-2 font-medium">Zipcode: </span>
                      <span>{user.address.zipcode}</span>
                    </p>
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

import { createContext, useContext, useEffect, useState } from "react";
import { API, type User } from "../types";

const Users = createContext<{ modifiedUsers: User[]; cities: string[] } | null>(
  null
);

export const useUsers = () => {
  const context = useContext(Users);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};

const UserFilter = createContext<{
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const useUserFilter = () => {
  const context = useContext(UserFilter);
  if (!context) {
    throw new Error("useUserFilter must be used within a UserFilterProvider");
  }
  return context;
};

const UsersContext = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [modifiedUsers, setModifiedUsers] = useState<User[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [city, setCity] = useState<string>("");
  const [name, setName] = useState<string>("");

  // Fetching Users
  const fetchUsers = async () => {
    try {
      const response = await fetch(API.GET_USERS);
      const data = (await response.json()) as User[];
      setUsers(data);
      setModifiedUsers(data);
      extractCities({ data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Extract unique cities
  const extractCities = ({ data }: { data: User[] }) => {
    const uniqueCities = Array.from(
      new Set(data.map((user) => user.address.city))
    );
    setCities(uniqueCities);
  };

  //  Filter by name and city
  const filterUsersByName = (name: string) => {
    let filteredUsers = users;
    if (city !== "") {
      filteredUsers = filterUsersByCity(city);
    }

    const value = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    setModifiedUsers(value);
  };

  //   Filter by city function
  const filterUsersByCity = (city: string) => {
    if (city === "") {
      return users;
    }
    const value = users.filter(
      (user) => user.address.city.toLowerCase() === city.toLowerCase()
    );
    return value;
  };

  useEffect(() => {
    filterUsersByName(name);
  }, [city, name]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Users.Provider value={{ modifiedUsers, cities }}>
      <UserFilter.Provider value={{ setCity, setName }}>
        {children}
      </UserFilter.Provider>
    </Users.Provider>
  );
};

export default UsersContext;

import { createContext, useContext, useEffect, useState } from "react";
import { API, type User } from "../types";

const Users = createContext<{ modifiedUsers: User[] } | null>(null);

export const useUsers = () => {
  const context = useContext(Users);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};

const UserFilter = createContext<{
  filterUsersByName: (name: string) => void;
  filterUsersByCity: (city: string) => void;
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

  // Fetching Users
  const fetchUsers = async () => {
    try {
      const response = await fetch(API.GET_USERS);
      const data = (await response.json()) as User[];
      setUsers(data);
      setModifiedUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filterUsersByName = (name: string) => {
    const value = users.filter((user) => user.name.includes(name));
    setModifiedUsers((prev) => (prev = value));
  };

  //   Filter function
  const filterUsersByCity = (city: string) => {
    const value = users.filter((user) => user.address.city === city);
    setModifiedUsers((prev) => (prev = value));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Users.Provider value={{ modifiedUsers }}>
      <UserFilter.Provider value={{ filterUsersByName, filterUsersByCity }}>
        {children}
      </UserFilter.Provider>
    </Users.Provider>
  );
};

export default UsersContext;

import { useEffect, useState } from "react";
import { User } from "./User";
import { useAuthContext } from "../Auth/AuthContext";
import { Link } from "react-router-dom";
import { getUsers } from "../api/user";
import { Search } from "../common/Search";
import { findUser } from "../api/search";

export const UserList = () => {
  const { status } = useAuthContext();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    const result = await getUsers();
    setUsers(result);
  };

  const lookUpUser = async (searchTerm) => {
    const { data } = await findUser(searchTerm);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      lookUpUser(searchTerm);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        {status.role === "admin" ? <Link to="/add">Add</Link> : null}
        {Array.isArray(users) &&
          users?.map((user) => (
            <User
              user={user}
              key={user._id}
              status={status}
              fetchUsers={fetchUsers}
            />
          ))}
      </div>
    </div>
  );
};

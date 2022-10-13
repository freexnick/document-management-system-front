import { useEffect, useState } from "react";
import { User } from "./User";
import { useAuthContext } from "../Auth/AuthContext";
import { Link } from "react-router-dom";
import { getUsers } from "../api/user";
import { Search } from "../common/Search";
import { findUser } from "../api/search";

export const UserList = () => {
  const { status, setStatus } = useAuthContext();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    const result = await getUsers();
    setStatus((prev) => ({ ...prev, ...result?.requestedBy }));
    setUsers(result?.data || result);
  };

  const lookUpUser = async (searchTerm) => {
    const { data } = await findUser(searchTerm);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchTerm.length) {
      const timeout = setTimeout(() => {
        lookUpUser(searchTerm);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [searchTerm]);

  return (
    <div className="user_list">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="user_table">
        {status.role === "admin" ? (
          <Link to="/add" className="user_add">
            Add
          </Link>
        ) : null}
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Email:</td>
              <td>Phone:</td>
              <td>Role:</td>
              <td>Space left:</td>
              {status.role === "admin" && <td>Actions:</td>}
            </tr>
          </thead>
          {Array.isArray(users) &&
            users?.map((user) => (
              <User
                user={user}
                key={user._id}
                status={status}
                fetchUsers={fetchUsers}
              />
            ))}
        </table>
      </div>
    </div>
  );
};

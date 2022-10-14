import { useEffect, useState } from "react";
import { User } from "./User";
import { useAuthContext } from "../Auth/AuthContext";
import { Link } from "react-router-dom";
import { getUsers } from "../api/user";
import { findUser } from "../api/search";
import { useSearchContext } from "../Search/SearchContext";

export const UserList = () => {
  const { status, setStatus } = useAuthContext();
  const { searchTerm } = useSearchContext();
  const [users, setUsers] = useState([]);

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
    if (!searchTerm) {
      fetchUsers();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      const timeout = setTimeout(() => {
        lookUpUser(searchTerm);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [searchTerm]);

  return (
    <div className="user_list">
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

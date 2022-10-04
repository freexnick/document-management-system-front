import { useEffect, useState } from "react";
import { User } from "./User";
import { useAuthContext } from "../Auth/AuthContext";
import { Link } from "react-router-dom";
import { getUsers } from "../api/user";
import { deleteUser } from "../api/user";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const { status } = useAuthContext();

  const fetchUsers = async () => {
    const result = await getUsers();
    setUsers(result);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {status.role === "admin" ? <Link to="/add">Add</Link> : null}
      {users?.map((user) => (
        <User
          user={user}
          key={user._id}
          status={status}
          fetchUsers={fetchUsers}
        />
      ))}
    </div>
  );
};

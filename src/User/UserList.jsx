import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../utils/config";
import { User } from "./User";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(`${URL}/user`);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <User user={user} key={user._id} />
      ))}
    </div>
  );
};

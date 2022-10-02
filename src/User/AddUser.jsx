import { useState } from "react";
import axios from "axios";
import { updateStateOnInput } from "../utils/input";
import { URL } from "../utils/config";

export const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "user",
    spaceUsed: 0,
    spaceLimit: 25000,
  });

  const updateUserData = (e) => updateStateOnInput(e, setUserData);

  const setUserRole = (e) =>
    setUserData((prev) => ({ ...prev, role: e.target.value }));

  const createUser = async (e) => {
    e.preventDefault();
    const result = await axios.post(`${URL}/user`, userData, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <label htmlFor="name">
          Name*:
          <input
            id="name"
            type="text"
            minLength={4}
            maxLength={50}
            required
            placeholder="name"
            onChange={updateUserData}
            value={userData?.name}
          />
        </label>
        <label htmlFor="email">
          Email*:
          <input
            id="email"
            type="email"
            required
            placeholder="email"
            onChange={updateUserData}
            value={userData?.email}
          />
        </label>
        <label htmlFor="password">
          Password*:
          <input
            id="password"
            type="password"
            placeholder="password"
            onChange={updateUserData}
            value={userData?.password}
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            id="phone"
            type="tel"
            placeholder="phone"
            onChange={updateUserData}
            value={userData?.phone}
          />
        </label>
        <select onChange={setUserRole}>
          Role:
          <option defaultChecked value="user">
            User
          </option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" onSubmit={createUser}>
          Add
        </button>
      </form>
    </div>
  );
};

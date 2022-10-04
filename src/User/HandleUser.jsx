import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, updateUser } from "../api/user";
import { updateStateOnInput } from "../utils/input";
import { getUser } from "../api/user";

export const HandleUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "user",
    spaceUsed: 0,
    spaceLimit: 25000,
  });
  const navigate = useNavigate();
  const params = useParams();

  const updateUserData = (e) => updateStateOnInput(e, setUserData);

  const setUserRole = (e) =>
    setUserData((prev) => ({ ...prev, role: e.target.value }));

  const createNewUser = async (e) => {
    e.preventDefault();
    await createUser(userData);
    navigate("/user");
  };

  const getUpdatableUser = async () => {
    const { data } = await getUser(params.email);
    delete data._id;
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const updateCurrentUser = async (e) => {
    e.preventDefault();
    await updateUser(userData);
    navigate("/user");
  };

  useEffect(() => {
    getUpdatableUser();
  }, [params]);

  return (
    <div>
      <form onSubmit={params ? updateCurrentUser : createNewUser}>
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
            required={params ? false : true}
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
        <button
          type="submit"
          onSubmit={params ? updateCurrentUser : createNewUser}
        >
          {params ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

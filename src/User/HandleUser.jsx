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
    spaceLimit: 25,
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

  const getUpdatableUser = async (id) => {
    const result = await getUser(id);
    const data = result?.data[0];
    if (result) {
      delete data._id;
      if (data?.phone === null) data.phone = "";
      setUserData((prev) => ({ ...prev, ...data }));
    }
  };

  const updateCurrentUser = async (e) => {
    e.preventDefault();
    await updateUser(userData);
    navigate("/user");
  };

  useEffect(() => {
    if (params?.id) getUpdatableUser(params?.id);
  }, [params?.id]);

  return (
    <div className="user_container">
      <form
        className="user_form"
        onSubmit={params?.id ? updateCurrentUser : createNewUser}
      >
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
            required={params?.id ? false : true}
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
        <select className="user_role" onChange={setUserRole}>
          Role:
          <option defaultChecked value="user">
            User
          </option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="user_button"
          onSubmit={params?.id ? updateCurrentUser : createNewUser}
        >
          {params?.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

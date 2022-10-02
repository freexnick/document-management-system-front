import { useState } from "react";
import axios from "axios";
import { URL } from "./utils/config";
import { updateStateOnInput } from "./utils/input";

export const Auth = () => {
  [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (e) => updateStateOnInput(e, setLoginData);

  const login = async (e) => {
    e.preventDefault();
    const result = await axios.post(`${URL}/login`, loginData, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(result);
  };

  return (
    <form onSubmit={login}>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          placeholder="email"
          type="email"
          required
          onChange={updateLoginData}
          value={loginData?.email}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          placeholder="password"
          type="password"
          required
          value={loginData?.password}
          onChange={updateLoginData}
          minLength={8}
        />
      </label>
      <button type="submit" onSubmit={login}>
        Login
      </button>
    </form>
  );
};

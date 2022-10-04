import { useState } from "react";
import { updateStateOnInput } from "../utils/input";
import { useAuthContext } from "./AuthContext";

export const Auth = () => {
  const { handleAuthorization } = useAuthContext();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (e) => updateStateOnInput(e, setLoginData);

  const handleAuthorizationData = (e) => handleAuthorization(e, loginData);

  return (
    <form onSubmit={handleAuthorizationData}>
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
      <button type="submit" onSubmit={handleAuthorizationData}>
        Login
      </button>
    </form>
  );
};

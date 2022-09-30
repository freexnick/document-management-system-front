import { useState } from "react";

export const Auth = () => {
  [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (e) => {
    let target = e.currentTarget.type;
    setLoginData((prev) => ({
      ...prev,
      [target]: e.target.value,
    }));
  };

  const login = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <form onSubmit={login}>
      <label htmlFor="email">
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

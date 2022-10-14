import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../api/login";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [status, setStatus] = useState({});
  const navigate = useNavigate();

  const handleAuthorization = async (e, data) => {
    e.preventDefault();
    const result = await login(data);
    if (result?.data) {
      setStatus({ isLogged: true, ...result.data });
      navigate("/user");
    }
  };

  const handleLogout = async () => {
    await logout();
    setStatus({});
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ status, handleAuthorization, handleLogout, setStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };

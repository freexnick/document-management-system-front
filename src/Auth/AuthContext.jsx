import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../api/login";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [status, setStatus] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (status.isLogged) navigate("/");
  }, [status]);

  const handleAuthorization = async (e, data) => {
    e.preventDefault();
    const result = await login(data);
    if (result) setStatus({ isLogged: true, ...result.data });
  };

  const handleLogout = async () => {
    await logout();
    setStatus({});
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ status, handleAuthorization, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/login";

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
    if (result) setStatus({ isLogged: true, role: result.data.role });
  };

  return (
    <AuthContext.Provider value={{ status, handleAuthorization }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };

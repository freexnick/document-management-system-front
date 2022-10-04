import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { UserList } from "./User/UserList";
import { Files } from "./Files";
import { Nav } from "./Nav";
import { Auth } from "./Auth/Auth";
import { HandleUser } from "./User/HandleUser";
import { useAuthContext } from "./Auth/AuthContext";
import { useEffect } from "react";

export const App = () => {
  const { isLogged } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged?.status) navigate("/login");
  }, [isLogged?.status]);

  return (
    <>
      {isLogged?.status && <Nav />}
      <Routes>
        <>
          <Route path="/" element={<Nav />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/files" element={<Files />} />
          <Route path="/add" element={<HandleUser />} />
          <Route path="/update/:email" element={<HandleUser />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
        )
      </Routes>
    </>
  );
};

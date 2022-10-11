import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { UserList } from "./User/UserList";
import { Nav } from "./Nav";
import { Auth } from "./Auth/Auth";
import { HandleUser } from "./User/HandleUser";
import { useAuthContext } from "./Auth/AuthContext";
import { useEffect } from "react";
import { Documents } from "./documents/Documents";

export const App = () => {
  const { status } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!status?.isLogged) navigate("/login");
  }, [status?.isLogged]);

  return (
    <>
      {status?.isLogged && <Nav />}
      <Routes>
        {status?.isLogged ? (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/add" element={<HandleUser status={status} />} />
            <Route path="/update/:id" element={<HandleUser />} />
            <Route path="/documents" element={<Documents status={status} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
          </>
        )}
        )
      </Routes>
    </>
  );
};

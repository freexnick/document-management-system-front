import { Navigate, Route, Routes } from "react-router-dom";
import { User } from "./User/User";
import { Files } from "./Files";
import { Nav } from "./Nav";
import { Auth } from "./Auth";
import { AddUser } from "./User/AddUser";

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/user" element={<User />} />
        <Route path="/files" element={<Files />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { User } from "./User";
import { Files } from "./Files";
import { Nav } from "./Nav";
import { Auth } from "./Auth";

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/user" element={<User />} />
        <Route path="/files" element={<Files />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

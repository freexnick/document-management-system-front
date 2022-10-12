import { Navigate, Route, Routes } from "react-router-dom";
import { UserList } from "./User/UserList";
import { Nav } from "./Nav";
import { Auth } from "./Auth/Auth";
import { HandleUser } from "./User/HandleUser";
import { Documents } from "./documents/Documents";
import { Public } from "./documents/Public";

export const App = () => {
  return (
    <>
      <Routes>
        <>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Nav />}>
            <Route path="/user" element={<UserList />} />
            <Route path="/add" element={<HandleUser />} />
            <Route path="/update/:id" element={<HandleUser />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/public" element={<Public />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </>
        )
      </Routes>
    </>
  );
};

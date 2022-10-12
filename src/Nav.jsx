import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "./Auth/AuthContext";

export const Nav = () => {
  const { handleLogout } = useAuthContext();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/documents">Documents</Link>
          </li>
          <li>
            <Link to="/public">Public Docs</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </>
  );
};

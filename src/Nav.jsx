import { NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "./Auth/AuthContext";
import { Search } from "./common/Search";

export const Nav = () => {
  const { handleLogout } = useAuthContext();
  const activeStyle = {
    textDecoration: "underline",
    color: "#2a9d8f",
    transform: "scale(1.5)",
  };

  return (
    <>
      <div className="nav_bar">
        <nav>
          <ul className="nav_list">
            <li>
              <NavLink
                to="/user"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/documents"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Documents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/public"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Public Docs
              </NavLink>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Search />
      <Outlet />
    </>
  );
};

import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/files">Files</Link>
        </li>
        <li>
          <Link to="/add">Add User</Link>
        </li>
      </ul>
    </nav>
  );
};

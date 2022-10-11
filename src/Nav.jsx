import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/documents">Documents</Link>
        </li>
      </ul>
    </nav>
  );
};

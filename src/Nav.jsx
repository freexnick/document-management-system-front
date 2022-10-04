import { Link } from "react-router-dom";

export const Nav = ({ status }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to={`documents/${status?.userId}`}>Documents</Link>
        </li>
      </ul>
    </nav>
  );
};

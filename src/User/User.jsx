import { Link } from "react-router-dom";
import { deleteUser } from "../api/user";

export const User = ({
  user: { _id, name, email, phone, role, spaceUsed, spaceLimit },
  status,
  fetchUsers,
}) => {
  const handleUserDelete = async () => {
    await deleteUser(_id);
    await fetchUsers();
  };

  return (
    <>
      <tbody className="table_user">
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone || "Empty"} </td>
          <td>{role}</td>
          <td>{(spaceLimit - spaceUsed).toFixed(2)} MB</td>
          {status.role === "admin" && (
            <td className="table_action">
              <Link to={`/update/${_id}`} alt="edit user">
                📝
              </Link>
              <button onClick={handleUserDelete} alt="delete user">
                ❌
              </button>
            </td>
          )}
        </tr>
      </tbody>
    </>
  );
};

export const User = ({
  user: { name, email, phone, role, spaceUsed, spaceLimit },
}) => {
  return (
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr>
          <td style={{ border: "1px solid black" }}>Name:</td>
          <td style={{ border: "1px solid black" }}>Email:</td>
          <td style={{ border: "1px solid black" }}>Phone:</td>
          <td style={{ border: "1px solid black" }}>Role:</td>
          <td style={{ border: "1px solid black" }}>Space left:</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid black" }}>{name}</td>
          <td style={{ border: "1px solid black" }}>{email}</td>
          <td style={{ border: "1px solid black" }}>{phone || "Empty"} </td>
          <td style={{ border: "1px solid black" }}>{role}</td>
          <td style={{ border: "1px solid black" }}>
            {spaceLimit - spaceUsed}
          </td>
          {role === "admin" && <td>Add</td>}
          {role === "admin" && <td>Update</td>}
          {role === "admin" && <td>Delete</td>}
        </tr>
      </tbody>
    </table>
  );
};
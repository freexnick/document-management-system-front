import { useLocation } from "react-router-dom";

export const FileElement = ({
  documents,
  handleFileDelete,
  handleFileDownload,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      {Array.isArray(documents) &&
        documents?.map((item) => (
          <tbody key={item.createdAt}>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.visibility}</td>
              <td>{item.createdAt}</td>
              <td>
                <button
                  onClick={() => handleFileDownload(item.file, item.name)}
                >
                  Download
                </button>
                {pathname !== "/public" && (
                  <button onClick={() => handleFileDelete(item._id)}>
                    Delete
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        ))}
    </>
  );
};

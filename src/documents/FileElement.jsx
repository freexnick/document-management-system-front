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
          <div key={item.createdAt}>
            <ul>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.visibility}</li>
              <li>{item.createdAt}</li>
            </ul>
            <button onClick={() => handleFileDownload(item.file, item.name)}>
              Download
            </button>
            {pathname !== "/public" && (
              <button onClick={() => handleFileDelete(item._id)}>Delete</button>
            )}
          </div>
        ))}
    </>
  );
};

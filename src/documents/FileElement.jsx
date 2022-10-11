export const FileElement = ({
  documents,
  handleFileDelete,
  handleFileDownload,
}) => {
  return (
    <>
      {documents?.map((item) => (
        <div key={item.createdAt}>
          <ul>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.visibility}</li>
            <li>{item.createdAt}</li>
          </ul>
          <button onClick={() => handleFileDownload(item.file)}>
            Download
          </button>
          <button onClick={() => handleFileDelete(item._id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

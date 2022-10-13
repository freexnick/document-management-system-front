import { FileElement } from "./FileElement";
import { deleteDocument, downloadFile } from "../api/documents";

export const FileList = ({ getFiles, documents }) => {
  const handleFileDelete = async (id) => {
    await deleteDocument(id);
    await getFiles();
  };

  const handleFileDownload = async (path, fileName) =>
    await downloadFile(path, fileName);

  return (
    <div className="file_container">
      <table className="file_table">
        <thead>
          <tr>
            <td>File Name:</td>
            <td>Owner:</td>
            <td>Visibility:</td>
            <td>Created:</td>
            <td>Actions:</td>
          </tr>
        </thead>
        <FileElement
          documents={documents}
          handleFileDelete={handleFileDelete}
          handleFileDownload={handleFileDownload}
        />
      </table>
    </div>
  );
};

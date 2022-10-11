import { FileElement } from "./FileElement";
import { deleteDocument, downloadFile } from "../api/documents";

export const FileList = ({ getFiles, documents }) => {
  const handleFileDelete = async (id) => {
    await deleteDocument(id);
    await getFiles();
  };

  const handleFileDownload = async (path) => await downloadFile(path);

  return (
    <>
      <FileElement
        documents={documents}
        handleFileDelete={handleFileDelete}
        handleFileDownload={handleFileDownload}
      />
    </>
  );
};

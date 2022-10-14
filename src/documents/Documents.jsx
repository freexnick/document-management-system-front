import { useEffect } from "react";
import { FileList } from "./FileList";
import { Upload } from "./Upload";
import { getDocuments } from "../api/documents";
import { useDocumentsContext } from "./DocumentsContext";
import { useSearchContext } from "../Search/SearchContext";

export const Documents = () => {
  const { documents, setDocuments } = useDocumentsContext();
  const { searchTerm } = useSearchContext();

  const getFiles = async () => {
    const result = await getDocuments();
    setDocuments(result);
  };

  useEffect(() => {
    if (!searchTerm) {
      setDocuments([]);
      getFiles();
    }
  }, [searchTerm]);

  return (
    <div className="documents_container">
      <Upload getFiles={getFiles} />
      <FileList documents={documents} getFiles={getFiles} />
    </div>
  );
};

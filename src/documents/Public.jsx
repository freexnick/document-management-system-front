import { useEffect } from "react";
import { getPublicDocuments } from "../api/documents";
import { useSearchContext } from "../Search/SearchContext";
import { useDocumentsContext } from "./DocumentsContext";
import { FileList } from "./FileList";

export const Public = () => {
  const { documents, setDocuments } = useDocumentsContext();
  const { searchTerm } = useSearchContext();

  const getPublicDocs = async () => {
    const { data } = await getPublicDocuments();
    setDocuments(data);
  };

  useEffect(() => {
    setDocuments([]);
    if (!searchTerm) {
      getPublicDocs();
    }
  }, [searchTerm]);

  return (
    <div className="documents_container">
      <FileList documents={documents} />
    </div>
  );
};

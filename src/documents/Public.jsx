import { useState, useEffect } from "react";
import { getPublicDocuments } from "../api/documents";
import { FileList } from "./FileList";

export const Public = () => {
  const [documents, setDocuments] = useState([]);

  const getPublicDocs = async () => {
    const { data } = await getPublicDocuments();
    setDocuments(data);
  };

  useEffect(() => {
    getPublicDocs();
  }, []);

  return (
    <div className="documents_container">
      <FileList documents={documents} />
    </div>
  );
};

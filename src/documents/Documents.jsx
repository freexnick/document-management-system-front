import { useState, useEffect } from "react";
import { Search } from "../common/Search";
import { FileList } from "./FileList";
import { Upload } from "./Upload";
import { getDocuments } from "../api/documents";
import { findDocument } from "../api/search";

export const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getFiles = async () => {
    const result = await getDocuments();
    setDocuments(result);
  };

  const lookUpDocument = async (searchTerm) => {
    const { data } = await findDocument(searchTerm);
    setDocuments(data);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      lookUpDocument(searchTerm);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div className="documents_container">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Upload getFiles={getFiles} />
      <FileList documents={documents} getFiles={getFiles} />
    </div>
  );
};

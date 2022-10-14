import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { findDocument } from "../api/search";
import { useSearchContext } from "../Search/SearchContext";

const DocumentsContext = createContext();

const DocumentContextProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const { searchTerm } = useSearchContext();
  const location = useLocation();

  const lookUpDocument = async (searchTerm, path) => {
    const { data } = await findDocument(searchTerm, path);
    setDocuments(data);
  };

  useEffect(() => {
    if (searchTerm) {
      const timeout = setTimeout(() => {
        if (location.pathname === "/public") {
          lookUpDocument(searchTerm, location.pathname);
        } else {
          lookUpDocument(searchTerm);
        }
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [searchTerm]);

  return (
    <DocumentsContext.Provider
      value={{ documents, setDocuments, lookUpDocument }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

const useDocumentsContext = () => useContext(DocumentsContext);

export { DocumentContextProvider, useDocumentsContext };

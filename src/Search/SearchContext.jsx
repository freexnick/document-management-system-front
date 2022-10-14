import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, updateSearchInput, setSearchTerm }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => useContext(SearchContext);

export { SearchContextProvider, useSearchContext };

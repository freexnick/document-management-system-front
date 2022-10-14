import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "./SearchContext";

export const Search = () => {
  const { updateSearchInput, searchTerm, setSearchTerm } = useSearchContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      setSearchTerm("");
    }
  }, [location.pathname]);

  return (
    <div className="search_form">
      <label htmlFor="search">
        Search:
        <input
          name="search"
          type="search"
          onChange={updateSearchInput}
          value={searchTerm}
        />
      </label>
      <button type="submit">Search</button>
    </div>
  );
};

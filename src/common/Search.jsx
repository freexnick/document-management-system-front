export const Search = ({ searchTerm, setSearchTerm }) => {
  const updateSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
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
    </>
  );
};

export const SearchBar = ({ search, setQuery }) => {
  return (
    <form className="form-inline my-search" onSubmit={(e) => search(e)}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

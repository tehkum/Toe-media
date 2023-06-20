import "./SearchBar.css"

export default function SearchBar() {
  return (
    <label htmlFor="search-id" className="search-id-label">
      <input type="search" id="search-id" placeholder="Search" />
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios/100/search--v1.png"
        alt="search--v1"
      />
    </label>
  );
}

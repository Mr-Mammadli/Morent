import { useNavigate } from "react-router-dom";
import searchnormal from "../assets/icons/searchnormal.svg";
import filter from "../assets/icons/filter.svg";

export default function SearchBar({ onFilterClick, search, onSearch }) {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.length > 0) {
      navigate("/cars");
    }
  };

  return (
    <div className="searchBar">
      <img src={searchnormal} alt="search" className="searchIcon" />
      <input
        type="text"
        placeholder="Search something here"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="filterButton" onClick={onFilterClick}>
        <img src={filter} alt="filter" className="filterIcon" />
      </button>
    </div>
  );
}

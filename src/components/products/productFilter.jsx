import React from "react";
import { useSearchParams } from "react-router-dom";
import "./productfilter.css";

const ProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryColor = searchParams.get("color") || "";
  const querySort = searchParams.get("sort") || "asc";

  const handleColorChange = (e) => {
    const newParams = {
      ...Object.fromEntries(searchParams),
      color: e.target.value,
    };
    setSearchParams(newParams);
  };

  const handleSortChange = (e) => {
    const newParams = {
      ...Object.fromEntries(searchParams),
      sort: e.target.value,
    };
    setSearchParams(newParams);
  };
  const handleClear = () => {
    setSearchParams({});
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by color"
        value={queryColor}
        onChange={handleColorChange}
        className="filter-input"
      />
      <select
        value={querySort}
        onChange={handleSortChange}
        className="filter-select"
      >
        <option value="asc">Sort by Name (Ascending)</option>
        <option value="desc">Sort by Price (Descending)</option>
      </select>
      <buuton onClick={handleClear} className="filter-select">
        Clear
      </buuton>
    </div>
  );
};

export default ProductFilter;

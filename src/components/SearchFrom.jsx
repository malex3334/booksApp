import React from "react";
import { useGlobalContext } from "../context";

export default function SearchFrom() {
  const { searchValue, setSearchValue, handleSubmit } = useGlobalContext();

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Search books:</label>
      <input
        required
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

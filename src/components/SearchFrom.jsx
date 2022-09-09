import React from "react";
import { useGlobalContext } from "../context";
import { FcSearch } from "react-icons/fc";

export default function SearchFrom() {
  const { searchValue, setSearchValue, handleSubmit } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        required
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <button type="submit">
        <FcSearch className="icn" />
      </button>
    </form>
  );
}

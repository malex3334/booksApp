import React, { useRef } from "react";
import { useGlobalContext } from "../context";
import { FcSearch } from "react-icons/fc";
import { useEffect } from "react";

export default function SearchFrom() {
  const { searchValue, setSearchValue, handleSubmit } = useGlobalContext();

  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={searchRef}
        required
        type="text"
        placeholder="search books..."
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

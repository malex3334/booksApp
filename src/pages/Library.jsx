import React from "react";
import { useGlobalContext } from "../context";
import BookCard from "../components/BookCard";

export default function Library() {
  const { library } = useGlobalContext();
  return (
    <div>
      {/* <h2>Your Books: </h2> */}
      {library?.length > 0 ? (
        <ul className="books-list">
          {library.map((book) => {
            return <BookCard book={book} key={book.id} />;
          })}
        </ul>
      ) : (
        <h3
          style={{ fontSize: "16px", fontWeight: "normal" }}
          className="no-list"
        >
          Your library is empty, search for books to add...
        </h3>
      )}
    </div>
  );
}

import React from "react";
import { useGlobalContext } from "./context";
import BookCard from "./BookCard";

export default function Library() {
  const { library } = useGlobalContext();
  return (
    <div>
      <h2>Your Books: </h2>
      {library?.length > 0 ? (
        <ul>
          {library.map((book) => {
            return <BookCard book={book} key={book.id} />;
          })}
        </ul>
      ) : (
        <h3>No books to show</h3>
      )}
    </div>
  );
}

import React from "react";

import { useGlobalContext } from "./context";

import BookCard from "./BookCard";

export default function BookList() {
  const { data, loading, showMyLib } = useGlobalContext();

  if (!loading) {
    return (
      <div>
        <h2 onClick={showMyLib}>Results: </h2>
        {data?.length > 0 ? (
          <ul>
            {data.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })}
          </ul>
        ) : (
          <h3>No books to show</h3>
        )}
      </div>
    );
  } else {
    return <h2>loading...</h2>;
  }
}

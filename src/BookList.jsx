import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./context";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import BookCard from "./BookCard";

export default function BookList() {
  const { data, loading, userId, showMyLib, handleAddToLib } =
    useGlobalContext();
  console.log(data);

  if (userId) {
    // setData();
  }

  const handleClick = (e) => {
    console.log(e);
  };

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

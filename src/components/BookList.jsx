import React, { useRef, useState, useEffect } from "react";

import { useGlobalContext } from "../context";

import BookCard from "./BookCard";

export default function BookList() {
  const { data, loading, showMyLib } = useGlobalContext();
  const [slice, setSlice] = useState(5);
  // const bottomRef = useRef();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSlice((prev) => prev + 5);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, loading]);
  console.log(slice);
  if (!loading) {
    return (
      <div>
        <h2 onClick={showMyLib}>Results: </h2>
        {data?.length > 0 ? (
          <ul className="books-list">
            {data.slice(0, slice).map((book, index) => {
              return <BookCard book={book} index={index} key={book.id} />;
            })}
          </ul>
        ) : (
          <h3 className="no-list">No books to show</h3>
        )}
        <span style={{ opacity: "0" }} ref={ref}>
          1
        </span>
      </div>
    );
  } else {
    return <h2>loading...</h2>;
  }
}

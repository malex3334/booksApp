import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useGlobalContext } from "./context";

export default function BookCard({ book, index }) {
  const [showDescription, setShowDescription] = useState(false);
  const { handleAddToLib, handleRemoveFromLib } = useGlobalContext();
  const { volumeInfo } = book;

  const description = () => {
    if (book.volumeInfo.description) {
      return (
        <div>
          {showDescription ? (
            <p>{book.volumeInfo.description}</p>
          ) : (
            <p>{book.volumeInfo.description.slice(0, 200)}</p>
          )}
          {book.volumeInfo.description.length > 200 && (
            <button
              onClick={(e) => {
                setShowDescription(!showDescription);
              }}
            >
              {!showDescription ? "Read more" : "Read less"}
            </button>
          )}
        </div>
      );
    } else return <p>no descripton</p>;
  };

  return (
    <li
      className={`${book.library && "fav"}`}
      style={{ border: "2px solid black" }}
      key={book.id}
    >
      {/* TITLE */}

      <img
        src={volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail}
        alt={volumeInfo.title}
      />
      <h3>{volumeInfo.title}</h3>

      {/* AUTHOR */}
      <p>{volumeInfo.authors}</p>
      <p>Published: {volumeInfo.publishedDate}</p>
      {/* DESCRIPTION */}
      {description()}

      {/* library */}
      <div>
        {book.library ? (
          <button
            onClick={(e) => {
              handleRemoveFromLib(book);
            }}
          >
            <AiFillHeart className="icn" />
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleAddToLib(book);
            }}
          >
            <AiOutlineHeart className="icn" />
          </button>
        )}
      </div>
    </li>
  );
}

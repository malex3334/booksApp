import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useGlobalContext } from "../context";

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
              className="read-more"
              onClick={(e) => {
                setShowDescription(!showDescription);
              }}
            >
              {!showDescription ? "Read more" : "Read less"}
            </button>
          )}
        </div>
      );
    } else return <p className="no-description">no descripton</p>;
  };

  return (
    <li className={`book-card ${book.library && "fav"}`} key={book.id}>
      {/* TITLE */}
      {console.log(volumeInfo.imageLinks)}
      {volumeInfo.imageLinks === undefined ? (
        <p className="no-cover">No cover</p>
      ) : (
        <img
          className="thumb-image"
          src={volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail}
          alt={volumeInfo.title}
        />
      )}
      <h3>{volumeInfo.title}</h3>

      {/* AUTHOR */}
      <p>Authors:{volumeInfo.authors}</p>
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

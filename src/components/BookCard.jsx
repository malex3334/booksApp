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
            <p className="description">
              {book.volumeInfo.description}
              <span
                className="read-more"
                onClick={(e) => {
                  setShowDescription(!showDescription);
                }}
              >
                {!showDescription ? "show more" : "show less"}
              </span>
            </p>
          ) : (
            <p className="description">
              {book.volumeInfo.description.slice(0, 200) + "..."}
              <span
                className="read-more"
                onClick={(e) => {
                  setShowDescription(!showDescription);
                }}
              >
                {!showDescription ? "show more" : "show less"}
              </span>
            </p>
          )}
        </div>
      );
    } else return <p className="no-description">no descripton</p>;
  };

  return (
    <li className={`book-card ${book.library && "fav"}`} key={book.id}>
      {/* TITLE */}
      {volumeInfo.imageLinks === undefined ? (
        <p className="no-cover">
          <span>No cover</span>
        </p>
      ) : (
        <img
          className="thumb-image"
          src={volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail}
          alt={volumeInfo.title}
        />
      )}
      <h3>{volumeInfo.title}</h3>

      {/* AUTHOR */}
      <p className="authors">
        {volumeInfo.authors !== undefined && volumeInfo.authors.length > 1 ? (
          volumeInfo.authors.map((author) => {
            return <span>{author} </span>;
          })
        ) : (
          <span>{volumeInfo.authors !== undefined && volumeInfo.authors}</span>
        )}
      </p>
      <p className="published">Published: {volumeInfo.publishedDate}</p>
      {/* DESCRIPTION */}
      {description()}

      {/* library */}
      {/* <div className="like-btn">
        {book.library ? (
          <AiFillHeart
            onClick={(e) => {
              handleRemoveFromLib(book);
            }}
            className="icn"
          />
        ) : (
          <AiOutlineHeart
            onClick={(e) => {
              handleAddToLib(book);
            }}
            className="icn"
          />
        )}
      </div> */}
      <div className="like-btn">
        {book.library ? (
          <button
            onClick={(e) => {
              handleRemoveFromLib(book);
            }}
          >
            <AiFillHeart className="icn icn-animation" />
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleAddToLib(book);
            }}
          >
            <AiOutlineHeart className="icn " />
          </button>
        )}
      </div>
    </li>
  );
}

import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useGlobalContext } from "../context";
import Modal from "./Modal";
import DetailsCard from "./DetailsCard";

export default function BookCard({ book, index }) {
  const [showDescription, setShowDescription] = useState(false);
  const { handleAddToLib, handleRemoveFromLib, library } = useGlobalContext();
  const { volumeInfo } = book;
  const [showDetails, setShowDetails] = useState(false);

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
          onClick={() => setShowDetails(true)}
          className="thumb-image"
          src={
            volumeInfo.imageLinks &&
            `https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`
          }
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
      <button className="show-details" onClick={() => setShowDetails(true)}>
        Show details
      </button>
      <Modal
        className="modal-container"
        showModal={showDetails}
        setShowModal={setShowDetails}
        title={volumeInfo.title}
        authors={volumeInfo.authors}
      >
        <DetailsCard key={book.id} book={book} />
      </Modal>
    </li>
  );
}

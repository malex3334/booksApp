import React, { useState } from "react";

const DetailsCard = ({ book }) => {
  const [side, setSide] = useState(1);
  const {
    title,
    authors,
    publishedDate,
    imageLinks,
    description,
    pageCount,
    industryIdentifiers,
    publisher,
    language,
    categories,
  } = book.volumeInfo;

  if (side === 1) {
    return (
      <div className="modal-body" onClick={() => setSide(2)}>
        <div className="modal-img-container">
          <img
            className="modal-img"
            src={imageLinks && imageLinks.thumbnail}
            alt=""
          />
          <header>
            <h2>{title}</h2>
            {authors &&
              authors.map((author, index) => {
                return (
                  <p key={index} className="author">
                    {author}{" "}
                  </p>
                );
              })}
            <p>Published: {publishedDate}</p>
            <p className="pages">Pages: {pageCount}</p>
            <p className="publisher">Publisher: {publisher}</p>
            <p className="publisher">Language: {language}</p>
          </header>
        </div>
        <div className="details-container"></div>
        <p className="description">{description}</p>
        {industryIdentifiers &&
          industryIdentifiers.map((id, index) => {
            return (
              <p key={index} className="isbn">
                {id.type}:{id.identifier}
              </p>
            );
          })}
        <p>Categories:</p>
        <div className="categories">
          {categories &&
            categories.map((category, index) => {
              return (
                <span key={index} className="category">
                  {category.toLowerCase()}{" "}
                </span>
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal-body" onClick={() => setSide(1)}>
        <img
          className="modal-full-img"
          src={
            imageLinks &&
            `https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api`
          }
          alt=""
        />
      </div>
    );
  }
};

export default DetailsCard;

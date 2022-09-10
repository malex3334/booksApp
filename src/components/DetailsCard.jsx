import React, { useState } from "react";

const DetailsCard = ({ book }) => {
  const [side, setSide] = useState(2);

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
  } = book.volumeInfo;
  console.log(book.volumeInfo);

  if (side === 1) {
    return (
      <div className="modal-body" onClick={() => setSide(2)}>
        <div className="modal-img-container">
          <img className="modal-img" src={imageLinks.thumbnail} alt="" />
        </div>
        <header>
          <h2>{title}</h2>
          {authors.map((author) => {
            return <p>{author} </p>;
          })}
          <p>{publishedDate}</p>
          <p>Pages: {pageCount}</p>
        </header>

        <p className="publisher">Publisher: {publisher}</p>
        <p className="publisher">Language: {language}</p>
        <p className="description">{description}</p>
        {industryIdentifiers.map((id) => {
          return (
            <p className="isbn">
              {id.type}:{id.identifier}
            </p>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="modal-body" onClick={() => setSide(1)}>
        <img className="modal-full-img" src={imageLinks.thumbnail} alt="" />
      </div>
    );
  }
};

export default DetailsCard;

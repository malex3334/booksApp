import React from "react";

const DetailsCard = ({ book }) => {
  const { volumeInfo } = book;
  return (
    <div className="modal-body">
      <p>{volumeInfo?.description}</p>
    </div>
  );
};

export default DetailsCard;

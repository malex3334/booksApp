import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({
  showModal,
  setShowModal,
  title,
  authors,
  children,
}) {
  const handleCloseOnClick = (e) => {
    const clickPosition = e.target.getBoundingClientRect();
    clickPosition.top === 0 && setShowModal(false);
  };

  if (showModal) {
    return ReactDOM.createPortal(
      <div
        className="modal-backdrop"
        onClick={(e) => {
          handleCloseOnClick(e);
        }}
      >
        <main className="modal">
          <button onClick={() => setShowModal(false)}>
            <AiOutlineClose />
          </button>
          <div>{children}</div>
        </main>
      </div>,

      document.querySelector("#modal")
    );
  }
}

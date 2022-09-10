import React from "react";
import ReactDOM from "react-dom";

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
          <header>
            <h2>{title}</h2>
            <p>{authors}</p>
            <button onClick={() => setShowModal(false)}>x</button>
          </header>
          <div>{children}</div>
        </main>
      </div>,

      document.querySelector("#modal")
    );
  }
}

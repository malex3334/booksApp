import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ showModal, setShowModal, children }) {
  const handleCloseOnClick = (e) => {
    const clickPosition = e.target.getBoundingClientRect();
    clickPosition.top === 0 && setShowModal(false);
  };

  const closeModal = (e) => {
    if (e.key === "Escape") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    let listener = document.addEventListener("keyup", closeModal);
    return () => document.removeEventListener("keyup", closeModal);
  }, []);

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

import React from "react";
import "../../../../scss/Modal.scss";

const Modal = props => {
  //

  return (
    <div className="ea-modal">
      <div className="container">
        <div className="ea-modal-content">
          <p>
            Thank you for reaching out. I will reply to you as soon as possible.
          </p>
          <button onClick={props.controlModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

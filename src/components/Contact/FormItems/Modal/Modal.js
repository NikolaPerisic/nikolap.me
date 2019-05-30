import React from "react";
import "../../../../scss/Modal.scss";
const Modal = props => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <p>Modal</p>
        <button onClick={props.controlModal}>Click Me</button>
      </div>
    </div>
  );
};

export default Modal;

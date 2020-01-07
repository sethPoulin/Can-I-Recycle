import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ResponseModal = props => (
  <Modal
    style={{
      overlay: {
        position: "fixed",
        zIndex: 10
      }
    }}
    isOpen={!!props.message}
    contentLabel="Response"
    className="modal"
    onRequestClose={props.resetPage}
  >
    <div id="response">
      {props.message && <p className="modal__message">{props.message}</p>}
      {props.message && (
        <button
          className="modal__button"
          onClick={e => {
            e.preventDefault();
            props.resetPage();
          }}
        >
          Search again
        </button>
      )}
    </div>
  </Modal>
);
export default ResponseModal;

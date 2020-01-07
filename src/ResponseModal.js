import React from "react";
import Modal from "react-modal";

const ResponseModal = props => (
  <Modal
    style={{
      overlay: {
        position: "fixed",
        zIndex: 10,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
      },
      content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
      }
    }}
    isOpen={!!props.message}
    contentLabel="Response"
  >
    <h1>SOme text to be returned</h1>
  </Modal>
);
export default ResponseModal;

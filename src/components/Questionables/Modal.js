import React, { useState } from "react";
import Modal from "react-modal";
import '../../css/Modal.css'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    
    color: "black",
  },
};

function Modals() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="modal-wrapper">
      <button className="button-style"onClick={setModalOpen}>View</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
       <p style={customStyles}>Navigate: Dash: Register </p>

        <button className="button-style"onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default Modals;
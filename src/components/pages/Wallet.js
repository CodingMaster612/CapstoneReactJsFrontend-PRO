import React,{useState} from 'react';
import WalletBox from '../reusables/WalletBox';
import Modal from '../reusables/Modal';
export default function Wallet() {


  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>

      <div className="modal-wrapper">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Make a Transaction
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    
  );
      
      
      <WalletBox />


    </>


  )
}

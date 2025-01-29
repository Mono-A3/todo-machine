import React from 'react';
import ReactDOM from 'react-dom';

import { TodoContext } from '../TodoContext';

import './Modal.css';

function Modal({ children }) {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modal">
      {children}
      <button className="modal-button" onClick={() => setOpenModal(!openModal)}>
        Cerrar
      </button>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };

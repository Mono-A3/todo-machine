import React from 'react';
import ReactDOM from 'react-dom';

import { TodoContext } from '../TodoContext';

import './Modal.css';

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modalBackground">
      {children}
      <button className="modal-button" onClick={() => setOpenModal((state) => !state)}>
        Cerrar
      </button>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };

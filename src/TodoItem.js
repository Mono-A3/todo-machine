import { FaCheck } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import './TodoItem.css';
import React from 'react';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <FaCheck
        className={`TodoItem-icon Icon-check ${props.completed && 'Icon-check--complete'}`}
        onClick={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

      <MdDelete className="TodoItem-icon Icon-delete" onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };

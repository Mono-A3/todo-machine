import React from 'react';

import { TodoContext } from '../TodoContext';

import './TodoForm.css';

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label className="TodoForm-label">Escribe tu nuevo TODO</label>

      <textarea
        value={newTodoValue}
        onChange={onChange}
        className="TodoForm-textarea"
        placeholder="Cortar cebolla para el almuerzo"
      />

      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
          Cancelar
        </button>

        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

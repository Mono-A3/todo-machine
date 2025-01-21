import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`TodoItem-icon Icon-check ${props.completed && 'Icon-check--complete'}`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p className={`${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span className="TodoItem-icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };

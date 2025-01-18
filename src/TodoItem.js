import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`TodoItem-icon Icon-check ${props.completed && 'Icon-check--complete'}`}>V</span>
      <p className={`${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span className="TodoItem-icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };

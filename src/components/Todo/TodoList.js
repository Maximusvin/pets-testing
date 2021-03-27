import s from './TodoList.module.css';

const TodoList = ({ todos, onDelete, onToggleCompleted }) => (
  <div>
    {todos.length > 0 && (
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={completed ? s.itemListCompleted : s.itemList}>
            <p> {text}</p>
            <div className={s.controlsWrap}>
              <input
                type="checkbox"
                onChange={() => onToggleCompleted(id)}
                checked={completed}
              />
              <button type="button" onClick={() => onDelete(id)}>
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TodoList;

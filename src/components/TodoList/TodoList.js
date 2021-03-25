import s from './TodoList.module.css';

const TodoList = ({ todos, onDelete }) => (
  <div className={s.todoWrap}>
    <h2 className={s.title}>TodoList</h2>
    <p className={s.count}>Количество записей: {todos.length}</p>

    {todos.length > 0 && (
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id} className={s.itemList}>
            <p> {text}</p>
            <button type="button" onClick={() => onDelete(id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TodoList;

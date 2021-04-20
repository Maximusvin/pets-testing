import { connect } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../../redux/todos/todo-actions';

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

const getVisibleTodos = (allTodos, filter) => {
  const normalizeFilter = filter.toLocaleLowerCase();
  return allTodos.filter(todo =>
    todo.text.toLocaleLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ todos: { todos, filter } }) => ({
  todos: getVisibleTodos(todos, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteTodo(id)),
  onToggleCompleted: id => dispatch(toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

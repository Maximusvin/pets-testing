import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';

import s from './TodoList.module.css';

const Todo = () => {
  //   countCompletedTodo = () =>
  //     this.state.todos.reduce(
  //       (total, todo) => (todo.completed ? total + 1 : total),
  //       0,
  //     );

  // const stats = {
  //   totalTodo: this.state.todos.length,
  //   totalCompletedTodo: this.countCompletedTodo(),
  // };

  return (
    <div className={s.todoWrap}>
      <h2 className={s.title}>Todo List</h2>
      {/* <p className={s.count}>Количество записей: {stats.totalTodo}</p>
      <p className={s.count}>
        Количество выполненых: {stats.totalCompletedTodo}
      </p> */}

      <TodoEditor />
      <Filter />
      <TodoList />
    </div>
  );
};

export default Todo;

import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';

import s from './TodoList.module.css';

class Todo extends Component {
  state = {
    todos: this.props.todos,
    filter: '',
  };

  addTodo = text => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [newTodo, ...todos] }));
  };

  deleteTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todoId => todoId.id !== id),
    }));
  };

  toggleCompleted = id => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  countCompletedTodo = () =>
    this.state.todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleTodos = () => {
    const normalizeFilter = this.state.filter.toLocaleLowerCase();

    return this.state.todos.filter(todo =>
      todo.text.toLocaleLowerCase().includes(normalizeFilter),
    );
  };

  render() {
    const { filter } = this.state;

    const stats = {
      totalTodo: this.state.todos.length,
      totalCompletedTodo: this.countCompletedTodo(),
    };

    const visibleTodos = this.getVisibleTodos();

    return (
      <div className={s.todoWrap}>
        <h2 className={s.title}>Todo List</h2>
        <p className={s.count}>Количество записей: {stats.totalTodo}</p>
        <p className={s.count}>
          Количество выполненых: {stats.totalCompletedTodo}
        </p>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter filter={filter} onChangeFilter={this.filterChange} />
        <TodoList
          todos={visibleTodos}
          onDelete={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default Todo;

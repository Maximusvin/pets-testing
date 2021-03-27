import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
import TodoEditor from './TodoEditor';

import s from './TodoList.module.css';

class Todo extends Component {
  state = {
    todos: this.props.todos,
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

  render() {
    const { todos } = this.state;

    const stats = {
      totalTodo: this.state.todos.length,
      totalCompletedTodo: this.countCompletedTodo(),
    };

    return (
      <div className={s.todoWrap}>
        <h2 className={s.title}>Todo List</h2>
        <p className={s.count}>Количество записей: {stats.totalTodo}</p>
        <p className={s.count}>
          Количество выполненых: {stats.totalCompletedTodo}
        </p>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={todos}
          onDelete={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default Todo;

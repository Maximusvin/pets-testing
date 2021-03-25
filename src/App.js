import { Component } from 'react';
import Layout from './components/Layout/Layout';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList';
import './App.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 1, text: 'Выучить Реакт', completed: false },
      { id: 2, text: 'Выучить роуты', completed: false },
      { id: 3, text: 'Выучить Редакс', completed: false },
      { id: 4, text: 'Сделать проект', completed: false },
    ],
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todoId => todoId.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <Layout>
        <Counter />
        <ColorPicker options={colorPickerOptions} />
        <TodoList todos={todos} onDelete={this.deleteTodo} />
      </Layout>
    );
  }
}

export default App;

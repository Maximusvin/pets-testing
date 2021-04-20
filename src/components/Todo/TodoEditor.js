import { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todos/todo-actions';
import s from './TodoList.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChangeMessage = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTodo(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.todoEditorWrap} onSubmit={this.handleSubmit}>
        <textarea
          className={s.textArea}
          placeholder="Введите текст новой заметки"
          onChange={this.handleChangeMessage}
          value={this.state.message}
        ></textarea>
        <button type="submit" disabled={!this.state.message}>
          Добавить заметку
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);

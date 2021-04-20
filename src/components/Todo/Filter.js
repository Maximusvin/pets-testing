import { connect } from 'react-redux';
import { changeFilter } from '../../redux/todos/todo-actions';
import s from './TodoList.module.css';

const Filter = ({ filter, onChangeFilter }) => (
  <div className={s.filterWrap}>
    <input
      type="text"
      placeholder="Введите символы для поиска"
      value={filter}
      onChange={onChangeFilter}
    />
  </div>
);

const mapStateToProps = state => ({ filter: state.todos.filter });

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

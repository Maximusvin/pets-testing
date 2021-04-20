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

export default Filter;

import { combineReducers } from 'redux';
import { TOGGLE_COMPLETED, ADD, DELETE, FILTER } from './todo-types';

const todos = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [payload, ...state];

    case DELETE:
      return state.filter(todo => todo.id !== payload);

    case TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  todos,
  filter,
});

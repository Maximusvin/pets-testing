import { v4 as uuidv4 } from 'uuid';
import { TOGGLE_COMPLETED, ADD, DELETE, FILTER } from './todo-types';

export const addTodo = text => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    text,
    completed: false,
  },
});

export const deleteTodo = id => ({
  type: DELETE,
  payload: id,
});

export const toggleCompleted = id => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});

export const changeFilter = value => ({
  type: FILTER,
  payload: value,
});

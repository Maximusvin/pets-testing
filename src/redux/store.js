import { createStore, combineReducers } from 'redux';
import counterReducer from './counter/counter-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './todos/todo-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

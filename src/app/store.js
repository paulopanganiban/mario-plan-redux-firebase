import { configureStore } from '@reduxjs/toolkit';
// create store 
import counterReducer from '../features/counter/counterSlice';
// tawagin using slice name+Reducer
import todosReducer from '../features/todo/todoSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:  todosReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
// create store 
import counterReducer from '../features/counter/counterSlice';
// tawagin using slice name+Reducer
import todosReducer from '../features/todo/todoSlice';
import authReducer from '../features/auth/authSlice'
import projectsReducer from '../features/project/projectSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:  todosReducer,
    auth: authReducer,
    projects: projectsReducer,
  },
});

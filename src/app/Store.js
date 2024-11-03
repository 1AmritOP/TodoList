import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/TodoSlice"

 const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todos', JSON.stringify(state.todo.value));
});

export  {store}
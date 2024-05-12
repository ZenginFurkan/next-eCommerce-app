// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './glasses-store/todoSlice';

const rootReducer = combineReducers({
  todos: todoSlice,
  // Diğer reducerlar buraya eklenebilir
});

export const store = configureStore({
  reducer: rootReducer,
  // Diğer store ayarları buraya eklenebilir
});

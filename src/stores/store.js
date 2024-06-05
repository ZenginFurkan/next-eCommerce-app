// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './glasses-store/todoSlice';
import basketSlice from './basket-store/basketSlice';
const rootReducer = combineReducers({
  todos: todoSlice,
  basket: basketSlice,
  // Diğer reducerlar buraya eklenebilir
});

export const store = configureStore({
  reducer: rootReducer,
  // Diğer store ayarları buraya eklenebilir
});

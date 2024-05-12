// todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/api/api';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await axiosInstance.get('/todos');
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ id, isRecommended, isFeatured }) => {
    const response = await axiosInstance.put(`/todos/${id}`, { isRecommended, isFeatured });
    return response.data;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, isRecommended: action.payload.isRecommended, isFeatured: action.payload.isFeatured } : todo
        );
      });
  },
});

export default todoSlice.reducer;

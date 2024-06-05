import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/api";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axiosInstance.get("/todos");
  return response.data;
});

export const isFeatured = createAsyncThunk("todos/isFeatured", async () => {
  const response = await axiosInstance.get("/todos?isFeatured=true");
  return response.data;
});

export const isRecommended = createAsyncThunk(
  "todos/isRecommended",
  async () => {
    const response = await axiosInstance.get("/todos?isRecommended=true");
    return response.data;
  }
);

export const fetchTodosById = createAsyncThunk("todos/fetchTodosById", async (id) => {
  const response = await axiosInstance.get(`/todos/${id}`);
  return response.data
}
)

  
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodosById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodosById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(isFeatured.pending, (state) => {
        state.status = "loading";
      })
      .addCase(isFeatured.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(isFeatured.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(isRecommended.pending, (state) => {
        state.status = "loading";
      })
      .addCase(isRecommended.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(isRecommended.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;

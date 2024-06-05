import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/api";

const initialState = {
  basket: [],
  status: "idle",
  error: null,
};

export const fetchBasket = createAsyncThunk("basket/fetchBasket", async () => {
  const response = await axiosInstance.get("/basket");
  return response.data;
});

export const addBasket = createAsyncThunk("basket/addBasket", async (item) => {
  const response = await axiosInstance.post("/basket", item);
  return response.data;
});

export const deleteFromBasket = createAsyncThunk(
  "basket/deleteFromBasket",
  async (id) => {
    const response = await axiosInstance.delete(`/basket/${id}`);
    return id;
  }
);
export const clearBasketThunk = createAsyncThunk("basket/clearBasketThunk", async () => {
  await axiosInstance.delete(`/basket/${id}`);
  return [];
});

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.basket = action.payload;
      })
      .addCase(fetchBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.basket = action.payload;
      })
      .addCase(addBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteFromBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteFromBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteFromBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(clearBasketThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearBasketThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.basket = action.payload;
      })
      .addCase(clearBasketThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default basketSlice.reducer;

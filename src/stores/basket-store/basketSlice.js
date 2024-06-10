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

export const addBasket = createAsyncThunk(
  "basket/addBasket",
  async (item, { getState, dispatch }) => {
    const state = getState();
    const existingProduct = state.basket.basket.find(product => product.id === item.id);

    // Eğer ürün zaten sepette varsa, quantity'sini arttır
    if (existingProduct) {
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
      await axiosInstance.put(`/basket/${existingProduct.id}`, updatedProduct);
      return updatedProduct;
    }

    const response = await axiosInstance.post("/basket", { ...item, quantity: 1 });
    return response.data;
  }
);

export const deleteFromBasket = createAsyncThunk(
  "basket/deleteFromBasket",
  async (id) => {
    await axiosInstance.delete(`/basket/${id}`);
    return id;
  }
);

export const clearBasketThunk = createAsyncThunk(
  'basket/clearBasketThunk',
  async (_, { rejectWithValue, getState }) => {
    try {
      // Mevcut sepet durumunu al
      const state = getState();
      const basketItems = state.basket.basket;

      // Basket içindeki her bir ürünün id'sini al
      const productIds = basketItems.map(item => item.id);

      // Her bir ürünü silmek için id'leri kullanarak istek yap
      await Promise.all(productIds.map(async id => {
        await axiosInstance.delete(`/basket/${id}`);
      }));

      // Başarılı yanıtı döndür
      return [];
    } catch (error) {
      // Hata durumunda reddet
      return rejectWithValue(error.response.data);
    }
  }
);


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
        const existingProductIndex = state.basket.findIndex(product => product.id === action.payload.id);
        
        if (existingProductIndex !== -1) {
          state.basket[existingProductIndex] = action.payload;
        } else {
          state.basket.push(action.payload);
        }
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
      .addCase(clearBasketThunk.fulfilled, (state) => {
        state.basket = [];
        state.status = "succeeded";
      })
      .addCase(clearBasketThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default basketSlice.reducer;

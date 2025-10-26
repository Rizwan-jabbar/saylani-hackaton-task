import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: cartItems,
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item to cart
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    // ✅ Remove item from cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    // ✅ Increase item quantity
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    // ✅ Decrease item quantity
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    // ✅ Clear entire cart
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;

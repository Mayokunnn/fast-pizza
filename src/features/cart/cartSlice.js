import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { memoize } from 'proxy-memoize';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // Payload === newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // Payload === pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // Payload === pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // Payload === pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const gettotalCartQuantity = createSelector(
  (state) => state.cart.cart,
  (cart) => cart.reduce((acc, item) => acc + item.quantity, 0),
);
export const gettotalCartPrice = memoize((state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0),
);

export const getCart = memoize((state) => state.cart.cart);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

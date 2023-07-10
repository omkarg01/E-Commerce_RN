import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {ProductType} from '../../types';
import {AddressType} from '../../types/AddressType';
import {svg} from '../../assets/svg';

type CartItemType = {
  list: ProductType[];
  total: number;
  discount: number;
  delivery: number;
  address: AddressType[];
};

const initialState: CartItemType = {
  list: [],
  total: 0,
  discount: 0,
  delivery: 0,
  address: [
    {
      id: 1,
      type: 'Home',
      address: '8000 S Kirkland Ave, Chicago, IL 6065...',
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item: ProductType) => {
          if (item.id === action.payload.id) {
            if (item.quantity) {
              item.quantity += 1;
            }
          }
          return item;
        }, state);
        state.total += action.payload.price;
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.total += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id && (item.quantity as number) > 1) {
            if (item.quantity) {
              item.quantity -= 1;
            }
          } else if (item.id === action.payload.id && item.quantity === 1) {
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
        state.total -= action.payload.price;
      }
    },

    fullRemoveFromCart: (state, action) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id) {
            state.total -= item.price * (item.quantity as number);
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
      }
    },
    saveAddress: (state, action: PayloadAction<AddressType>) => {
      action.payload.id =
        state.address.length === 0 ? 1 : state.address.length + 1;
      state.address.push(action.payload);
    },

    editAddress: (state, action: PayloadAction<AddressType>) => {
      if (action.payload.id) {
        console.log(state.address);
        state.address[action.payload.id - 1] = action.payload;
        console.log(state.address);
      }
    },

    resetCart: (state) => {
      state.list = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  saveAddress,
  removeFromCart,
  resetCart,
  fullRemoveFromCart,
  editAddress,
} = cartSlice.actions;

export default cartSlice.reducer;

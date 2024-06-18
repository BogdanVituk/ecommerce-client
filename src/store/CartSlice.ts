import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { ICartItem } from "../types/IProductItems";


interface IInitialState {
    totalPrice: number;
    items: ICartItem[]

}

const initialState:IInitialState = {
  totalPrice: 0,
  items: []
}

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
      addItem(state, {payload}) {
        const found  = state.items.find(item => item.id === payload.id);

        if(found) {
            found.count = +found.count + +payload.count;
        } else {
            state.items.push(payload)
        }
        state.totalPrice = state.items.reduce((sum, item) => (+item.price * +item.count) + sum, 0)

      },
      removeItem(state, {payload}) {
        const found  = state.items.find(item => item.id === payload);
   
        if(found) {
          state.totalPrice -= (found?.count * found?.price) 
          state.items = state.items.filter(item => item.id !== payload)
        }
      }, 
      clearCart(state) {
        state.items = [];
        state.totalPrice = 0;
      } 
    }
})

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
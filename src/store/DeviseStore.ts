import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IInitialState {
  categories: number
}

const initialState: IInitialState = {
    categories: 0
}

const deviceSlice = createSlice({
    name: 'deviceSlice',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<number>) {
            state.categories = action.payload;
        }
    },
    extraReducers: (builder) => { 
    }
})

export default deviceSlice.reducer;
export const { setCategories } = deviceSlice.actions;
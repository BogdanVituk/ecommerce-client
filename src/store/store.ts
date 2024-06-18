import { configureStore } from '@reduxjs/toolkit'
import { modalsReducer } from './ModalsSlice'
import deviceSlice from './DeviseStore'
import messageReducer from './MessageSlice'
import UserReducer from './UserSlice'
import TypeReducer from './TypeSlice'
import MenuBurgerReducer from './MenuBurgerSlice'
import { productsApi } from '../services/ProductsService'
import { categoriesApi } from '../services/categoriesService'
import cartSlice from './CartSlice'

const store = configureStore({
    reducer: {
        modalsReducer,
        deviceSlice,
        messageReducer,
        UserReducer,
        TypeReducer,
        MenuBurgerReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        cartSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(categoriesApi.middleware)
})

export type stateRoot = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
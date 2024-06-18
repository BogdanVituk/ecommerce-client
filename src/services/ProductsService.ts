import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductItem } from '../types/IProductItems'

export const productsApi = createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1'}),
    endpoints: (builder) => ({
        getAllProducts:  builder.query<IProductItem[], void>({
            query: () => '/products/?categoryId=1'
        }),
        getByIdProduct: builder.query<IProductItem, string | undefined>({
            query: (id) => `/products/${id}`
        })
    })
})

export const { useGetAllProductsQuery, useGetByIdProductQuery } = productsApi
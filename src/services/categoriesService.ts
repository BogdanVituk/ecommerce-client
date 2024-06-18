import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategoriesItem } from '../types/ICategoriesItems'

export const categoriesApi = createApi({
    reducerPath: 'СategoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
    endpoints: (builder) => ({
      getAllCategories: builder.query<ICategoriesItem[], void>({
        query: () => '/categories'
      }),
    }),
})
  
  export const { useGetAllCategoriesQuery } = categoriesApi
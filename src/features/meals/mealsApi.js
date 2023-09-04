import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mealsApi = createApi({
  reducerPath: 'mealsApi',
  baseQuery:  fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getAllMeals: builder.query({
      query: () => "/data/meals.json",
    }),
  }),
})

export const { useGetAllMealsQuery } = mealsApi; 
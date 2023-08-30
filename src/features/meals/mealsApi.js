// Need to use the React-specific entry point to allow generating React hooks
import { createApi } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const mealsApi = createApi({
  reducerPath: 'mealsApi',
  baseQuery: () => ({data: require("../../data/meals.json")}),
  endpoints: (builder) => ({
    getAllMeals: builder.query({
      query: () => "",
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMealsQuery } = mealsApi; 
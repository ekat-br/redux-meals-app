import { configureStore } from "@reduxjs/toolkit";
import { mealsApi } from "../features/meals/mealsApi";
import { favoriteSlice } from "../features/favorites/FavoriteSlice";


export const store = configureStore({
    reducer: {
        [mealsApi.reducerPath]: mealsApi.reducer,
        favorites: favoriteSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mealsApi.middleware),

})
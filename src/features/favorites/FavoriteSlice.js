import { createSlice } from "@reduxjs/toolkit"

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        favoritesIds: []
    },
    reducers: {
        toggledFavorite: (state, action) => {
            const idToToggle = action.payload;
            if(state.favoritesIds.includes(idToToggle)){
                state.favoritesIds = state.favoritesIds.filter((id) => id !== idToToggle)
            } else {
                state.favoritesIds.push(idToToggle)
            }
        }
    }
})

export const {toggledFavorite} = favoriteSlice.actions; 
export const selectFavoritesIds = (state) => state.favorites.favoritesIds;
export default favoriteSlice.reducer; 
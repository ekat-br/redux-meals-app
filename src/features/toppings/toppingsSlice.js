import { createSlice } from "@reduxjs/toolkit"

export const toppingsSlice = createSlice({
    name: "toppings",
    initialState: {},
    reducers: {
        toggledTopping: (state, action) => {
            const { mealId, topping } = action.payload;
            if (!state[mealId]) {
                state[mealId] = [];
            }

            const index = state[mealId].indexOf(topping);

            if (index !== -1 ){
                state[mealId].splice(index, 1); //Removes one element at the found index? 
            }  else {
                state[mealId].push(topping);
            }



        }
    }
})

export const {toggledTopping} = toppingsSlice.actions; 
export const selectToppings = (state) => state.toppings;
export default toppingsSlice.reducer; 
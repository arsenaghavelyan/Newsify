import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        value: JSON.parse(localStorage.getItem("Category")) || []
    },
    reducers: {
        handleCategory(state , {payload}){
            state.value = payload.value
            localStorage.setItem("Category" , JSON.stringify(state.value))
        }
    }

})

export const {handleCategory} = categorySlice.actions
export const selectCategory = ((state) => state.categorySlice.value)
export default categorySlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
    name: "save",
    initialState: {
        value: JSON.parse(localStorage.getItem("Save")) || []
    },
    reducers: {
        addToBasket(state, { payload }) {
            state.value = payload.saveNews
            localStorage.setItem("Save", JSON.stringify(state.value))
        }
    }
})

export default saveSlice.reducer
export const { addToBasket } = saveSlice.actions
export const selectSaves = ((state) => state.saveSlice.value)
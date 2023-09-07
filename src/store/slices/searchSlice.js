import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: JSON.parse(localStorage.getItem("Search")) || ""
    },
    reducers: {
        handleSearch(state, { payload }) {
            state.value = payload.search
            localStorage.setItem("Search", JSON.stringify(state.value))
        }
    }
})

export default searchSlice.reducer
export const selectSearch = ((state) => state.searchSlice.value)
export const { handleSearch } = searchSlice.actions
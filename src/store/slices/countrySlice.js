import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: "countrySlice",
    initialState: {
        value: JSON.parse(localStorage.getItem("Country")) || "us"
    },
    reducers: {
        handleCountry(state, { payload }) {
            state.value = payload.country
            localStorage.setItem("Country" , JSON.stringify(state.value))
        }
    }

})

export const { handleCountry } = countrySlice.actions
export const selectCountry = ((state) => state.countrySlice.value)
export default countrySlice.reducer
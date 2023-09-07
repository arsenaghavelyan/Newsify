import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        value: []
    },
    reducers: {
        handleNews(state, { payload }) {
            state.value = payload.res
        }
    }
})

export const selectNews = ((state) => state.newsSlice.value)
export const { handleNews } = newsSlice.actions
export default newsSlice.reducer
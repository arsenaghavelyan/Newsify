import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import countrySlice from "./slices/countrySlice";
import newsSlice from "./slices/newsSlice";
import searchSlice from "./slices/searchSlice";
import saveSlice from "./slices/saveSlice";

const store = configureStore({
    reducer: {
        categorySlice,
        countrySlice,
        newsSlice,
        searchSlice,
        saveSlice
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./FilterSlice";

const store = configureStore({
    reducer:{
        jobFilter: filterSlice.reducer
    }
})

export default store
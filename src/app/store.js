import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../fea/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
});
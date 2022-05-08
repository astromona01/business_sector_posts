import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../reducers/postsSlice";

const store = configureStore({
		reducer: postsSlice
})
export default store
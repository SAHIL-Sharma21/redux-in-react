// creating store
import { configureStore } from '@reduxjs/toolkit';

//store created   >> store ke ander reducer honge >> hm apne events store ko denge and store reducers ko call karega.
export const store = configureStore({
    reducer: {},
})
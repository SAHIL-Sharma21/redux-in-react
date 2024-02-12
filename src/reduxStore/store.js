// creating store
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice'

//store created   >> store ke ander reducer honge >> hm apne events store ko denge and store reducers ko call karega.
export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})

//redux ke slang mei every feature is a slice .....so now we will create slice after store is setup.
//now creating slice as it will be a feature.
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter", //its given for the devtools
    initialState: 0,
    reducers: { //store also send its current value which is called state and we are using it
        increment: (state) => {
            //return new state in state
            return state + 1;
        },
        decrement: (state) => state - 1,  //current state  mei updaate krndia
    }
});

// now we wil export the event
export const { increment, decrement } = counterSlice.actions; // we are exporting actions from counterSlice.actions and we have 2 action increment and decmrement
// expoorting reducer as default
export default counterSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

//import state needed like data arrays to loop over, since we set the state here
//we can't easily grab it inline, so import if needed!

const initialState = {
    colorMode: "light-mode",
    testState: true,
}

const testSlice = createSlice({
name: 'test',
initialState,

reducers: {
//the state setters we use inside of dispatch()
    testMakeFalse: (state, action) => {
        state.testState = false;
    },
    testMakeTrue: (state, action) => {
        state.testState = true;
    },
    toggleColor: (state, action) => {
           state.colorMode = state.colorMode === "light-mode" ? "dark-mode" : "light-mode";
    },
}
})

export const {testMakeFalse, testMakeTrue, toggleColor} = testSlice.actions;

export default testSlice.reducer;





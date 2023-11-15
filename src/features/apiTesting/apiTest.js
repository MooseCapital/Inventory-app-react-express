import {createSlice} from "@reduxjs/toolkit";

//import state needed like data arrays to loop over, since we set the state here
//we can't easily grab it inline, so import if needed!

const initialState = {
    testState: true,
    fetchData: null,
    loading: true,
    fetchRan: false,
    count: 0
}

const apiTestSlice = createSlice({
name: 'apiTest',
initialState,
reducers: {
    testMakeFalse: (state, action) => {
        state.isOpen = false;
    },
    setFetchRanFalse: (state, action) => {
        state.fetchRan = false;
        },
    setFetchRanTrue: (state, action) => {
        state.fetchRan = true;
    },
    setLoadingFalse: (state, action) => {
        state.loading = false;
        },
    setLoadingTrue: (state, action) => {
        state.loading = true;
    },

    setFetchData: (state, action) => {
            state.fetchData = action.payload;
        },
    setCount: (state, action) => {
            state.count = state.count + 1;
        },

}
})

export const {setFetchData,setLoadingTrue, setLoadingFalse,setFetchRanTrue, setFetchRanFalse,setCount} = apiTestSlice.actions;

export default apiTestSlice.reducer;





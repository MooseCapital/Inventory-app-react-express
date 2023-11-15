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
    setFetchRan: (state, action) => {
        if (action.type === false) {
           return state.fetchRan = false;
        }
            state.fetchRan = true;
        },
    setLoading: (state, action) => {
            if (action.type === false) {
            return state.loading = false;
        }
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

export const {setFetchData,setLoading,setFetchRan,setCount} = apiTestSlice.actions;

export default apiTestSlice.reducer;





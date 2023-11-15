import { configureStore } from '@reduxjs/toolkit';
import testReducer from './features/test/testSlice.js'
import apiTestReducer from './features/apiTesting/apiTest.js'
//import reducer exported inside slicer, we call it sliceReducer
export const store = configureStore({
//name the state, this is what will be accessed when using state
// const testState = useSelector((store) => store.test);
  reducer: {
    test: testReducer,
    apiTesting: apiTestReducer
  },
});
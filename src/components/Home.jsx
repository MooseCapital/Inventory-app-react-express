import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {testMakeFalse, testMakeTrue} from "../features/test/testSlice.js";
function Home(props) {

//dispatch used to run the reducer/set the state, we must also import the reducer above
const dispatch = useDispatch()
    // console.log(import.meta.env.VITE_API_LINK)
//useSelector is used to access the states value
const testState = useSelector((store) => store.test);
    return (
        <>
            <div>Home page</div>
            <button className={"test-btn"} onClick={() => dispatch(testMakeFalse())}>make state false</button>
            <button className={"test-btn"} onClick={() => dispatch(testMakeTrue())}>make state true</button>
            <p>{`current state: ${testState.testState}`}</p>
        </>
    )
}

export default Home

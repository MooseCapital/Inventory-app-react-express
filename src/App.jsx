import {useState, useEffect, useRef, useContext} from 'react'
import React from 'react'
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";
import {useSelector} from "react-redux";


function App(props) {

    const testState = useSelector((store) => store.test);

  return (
    <div className={`${testState.colorMode} App`}>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About</Link>
        </div>

        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/About"} element={<About/>}/>

            {/* catch all, so any unknown pages navigate back to the home page, or
             error page to show it doesn't exist, then auto redirect home  */}
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  )
}

export default App

import {useState, useEffect, useRef, useContext} from 'react'
import React from 'react'
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";
import {useSelector} from "react-redux";
import Testing from "./components/Testing.jsx";

// for any unusual errors in node_modules:  rm -rf node_modules && npm install
function App(props) {

    const testState = useSelector((store) => store.test);
    const [testingComp, setTestingComp] = useState({
        fetchData: null,
        loading: true,
        fetchRan: false,
        count: 0
    })
    const [testFetch, setTestFetch] = useState(null)
    const [loading, setLoading] = useState(true)
    const [testFetchRan, setTestFetchRan] = useState(false);
    const [testCount, setTestCount] = useState(0)

  return (
    <div className={`${testState.colorMode} App`}>
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/testing"  >Testing</Link>
        </div>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/testing"  element={<Testing state={{testFetch,setTestFetch,loading,setLoading, testFetchRan,setTestFetchRan, testCount, setTestCount}} />}/>
            <Route path="/About"  element={<About fruit={'apple'} /> }/>

            {/* catch all, so any unknown pages navigate back to the home page, or
             error page to show it doesn't exist, then auto redirect home  */}
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  )
}

export default App

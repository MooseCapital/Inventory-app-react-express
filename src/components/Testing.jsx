import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
// import {useDispatch, useSelector} from "react-redux";
// import {testMakeFalse, testMakeTrue} from "../features/test/testSlice.js";
function Home(props) {
// const [testFetch, setTestFetch] = useState(null)
// const [loading, setLoading] = useState(true)

    /* async function testData() {
                let res = await fetch(`${import.meta.env.VITE_API_LINK}/store/test`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(data_object)
            });
                let data = await res.json();
                    props.state.setLoading(false)
                    props.state.setTestFetch(prevState => data)
                    console.log(data)
            } */

/*
    our useEffect fetch solution works to fetch only on the first mount and NOT to call the database fetch again if we simply unmount by going to homepage route
    -> then go back to the testing fetch route page, by going a 2nd time, and we know the data hasn't change, simply pass the prop down from app.js and show it again,
    -> no double calling! we must use an array dependency because we want to fetch again once we update some data, then on update
    -> we let it be run-able again by setting the useEffect state to false props.state.setTestFetchRan(prevState => false)

*/
    function updateData() {
        props.state.setTestFetchRan(prevState => false)
        props.state.setTestCount(prevState => prevState + 1)
    }

    useEffect(() => {
        let subscribed = true;
        try {
            if (!props.state.testFetchRan) {
            async function getData() {
                let res = await fetch(`${import.meta.env.VITE_API_LINK}/people/1`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(data_object)
            });
                let data = await res.json();
                if (subscribed) {
                    props.state.setLoading(false)
                    props.state.setTestFetch(prevState => data)
                    console.log(data)
                }
            }
                getData()
                props.state.setTestFetchRan(prevState => true)
            }
        } catch (e) {
            console.log(e)
        }

        return () => {
            console.log("clean up function")
            subscribed = false;
        }
    }, [props.state.testCount])

    return (
        <>
            <button onClick={updateData}>test fetch</button>
        {
            props.state.loading ? <div>loading...</div> :
        <>
            <div>test page</div>
            <div>{JSON.stringify(props.state.testFetch)}</div>
        </>
        }
        </>
    )
}

export default Home

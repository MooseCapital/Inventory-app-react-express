import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setFetchRanTrue,setFetchRanFalse,setLoadingTrue,setLoadingFalse,setFetchData, setCount} from "../features/apiTesting/apiTest.js";
import {persistFetch} from "../../Hooks/persistFetch.js";
function Home(props) {


/*
    our useEffect fetch solution works to fetch only on the first mount and NOT to call the database fetch again if we simply unmount by going to homepage route
    -> then go back to the testing fetch route page, by going a 2nd time, and we know the data hasn't change, simply pass the prop down from app.js and show it again,
    -> no double calling! we must use an array dependency because we want to fetch again once we update some data, then on update
    -> we let it be run-able again by setting the useEffect state to false props.state.setTestFetchRan(prevState => false)

*/
/*
    in redux we dispatch a reducer event, that reducer request dispatch will have an object with https://www.tutorialspoint.com/redux/redux_actions.htm
    the name of the request and payload which we use to send data in the request and can take that data in the reducer to use
        { type: GET_WISHLIST_ITEMS, payload: userId }

    dispatch with fetched data:
        dispatch({
            type: 'FETCH_MOVIE',
            payload: response.data
        })

*/
   /*  const dispatch = useDispatch();
    const apiTestingState = useSelector((store) => store.apiTesting); */

    const [testingComp, setTestingComp, updateData] = persistFetch('/store/test')




    return (
        <>
            <button onClick={updateData}>test fetch</button>
        {
            testingComp.loading ? <div>loading...</div> :
        <>
            <div>test page</div>
            <div>session storage solution with local component state, no props</div>
            <div>{JSON.stringify(testingComp.fetchData)}</div>
        </>
        }
        </>
    )
}

export default Home

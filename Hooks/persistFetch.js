import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'

function persistFetch(apiLink) {


    const [testingComp, setTestingComp] = useState(JSON.parse(sessionStorage.getItem("testingComp")) || {
            fetchData: null,
            loading: true,
            fetchRan: false,
            count: 0
        });

    useEffect(() => {
        sessionStorage.setItem("testingComp", JSON.stringify(testingComp))
        return () => {
        }
    },[testingComp.fetchData])

    function updateData() {
        setTestingComp(prevState => ({
            ...prevState,
            fetchRan: false,
            count: prevState.count + 1
        }))
    }

    useEffect(() => {
        let subscribed = true;
        try {
            if (!testingComp.fetchRan) {
            async function getData() {
                let res = await fetch(`${import.meta.env.VITE_API_LINK}${apiLink}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(data_object)
                });
                console.log('fetching')
                let data = await res.json();
                if (subscribed) {
                    setTestingComp(prevState => ({
                        ...prevState,
                        loading: false,
                        fetchData: data
                    }))
                }
            }
            getData()
            setTestingComp(prevState => ({...prevState, fetchRan: true }))
            }
        } catch (e) {
            console.log(e)
        }
        return () => {
            console.log("clean up function")
            subscribed = false;
        }
    }, [testingComp.fetchData, testingComp.count])


    return [testingComp, setTestingComp, updateData]
}

export {persistFetch}



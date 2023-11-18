import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'

function persistFetch(apiLink) {


    const [persistComp, setPersistComp] = useState(JSON.parse(sessionStorage.getItem("PersistComp")) || {
            fetchData: null,
            loading: true,
            fetchRan: false,
            count: 0
        });

    useEffect(() => {
        sessionStorage.setItem("PersistComp", JSON.stringify(persistComp))
        return () => {
        }
    },[persistComp.fetchData])

    function updateData() {
        setPersistComp(prevState => ({
            ...prevState,
            fetchRan: false,
            count: prevState.count + 1
        }))
    }

    useEffect(() => {
        // let subscribed = true;
        const controller = new AbortController();
        try {
            if (!persistComp.fetchRan) {
            async function getData() {
                let res = await fetch(`${import.meta.env.VITE_API_LINK}${apiLink}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                signal: controller.signal
                // body: JSON.stringify(data_object)
                });
                console.log('fetching')
                let data = await res.json();

                    setPersistComp(prevState => ({
                        ...prevState,
                        loading: false,
                        fetchData: data
                    }))

            }
            getData()
            setPersistComp(prevState => ({...prevState, fetchRan: true }))
            }
        } catch (e) {
            console.log(e)
        }
        return () => {
            console.log("clean up function")
            controller.abort()
            // subscribed = false;
        }
    }, [persistComp.fetchData, persistComp.count])


    return [persistComp, setPersistComp, updateData]
}

export {persistFetch}



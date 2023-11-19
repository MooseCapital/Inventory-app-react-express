import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import axios from "axios";

function persistAxiosData(apiLink) {


    const [persistComponent, setPersistComponent] = useState(JSON.parse(sessionStorage.getItem("PersistComponent")) || {
        fetchData: null,
        loading: true,
        fetchRan: false,
        count: 0
    });

    useEffect(() => {
        sessionStorage.setItem("PersistComponent", JSON.stringify(persistComponent))
        return () => {
        }
    }, [persistComponent.fetchData])

    function updateData() {
        setPersistComponent(prevState => ({
            ...prevState,
            fetchRan: false,
            count: prevState.count + 1
        }))
    }

    useEffect(() => {
        try {
            if (!persistComponent.fetchRan) {

                async function getAxiosData() {
                    let res = await axios.get(`${import.meta.env.VITE_API_LINK}${apiLink}`);
                    let data = await res.data;
                    console.log(data)
                    setPersistComponent(prevState => ({
                        ...prevState,
                        loading: false,
                        fetchData: data
                    }))
                }
                getAxiosData()
                setPersistComponent(prevState => ({...prevState, fetchRan: true}))
            }
        }
        catch (e) {
            console.log(e)
        }
        return () => {
            console.log("clean up function")
        }
    }, [persistComponent.fetchData, persistComponent.count])


    return [persistComponent, setPersistComponent, updateData]
}

export {persistAxiosData}



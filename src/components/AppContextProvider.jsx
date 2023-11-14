import {useContext, useEffect, useState, useRef, createContext} from 'react'
import React from 'react'
const AppContext = createContext({})

function AppContextProvider(props) {
//pass down all state through context without drilling through unnecessary components
    //whatever we want to pass goes inside the value object
    //when we want to use it on a component, import
        //import {AppContext} from "../components/AppContextProvider.jsx";
    // const context = useContext(AppContext)
    const [colorMode, setColorMode] = useState("light-mode");

    return (
        <AppContext.Provider value={{colorMode, setColorMode }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}

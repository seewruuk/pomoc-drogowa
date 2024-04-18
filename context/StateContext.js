"use client"

import {createContext, useState, useEffect} from 'react'

export const StateContext = createContext({});


export default function StateContextProvider({children}) {
    const [theme, setTheme] = useState('yellow');

    const providerValues = {
        theme,
        setTheme,
    };

    return (
        <StateContext.Provider
            value={providerValues}>
            {children}
        </StateContext.Provider>
    )
}





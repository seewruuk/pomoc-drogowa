"use client"

import {createContext, useMemo, useState} from 'react'

export const StateContext = createContext({theme: "yellow", setTheme: () => {}});

/**
 * Globalny stan po stronie klienta – tylko motyw kolorystyczny.
 * Dane z Sanity są pobierane na serwerze w poszczególnych stronach,
 * a wybór menu (desktop/mobile) odbywa się w CSS, bez nasłuchiwania resize.
 */
export default function StateContextProvider({children}) {
    const [theme, setTheme] = useState("yellow");

    const value = useMemo(() => ({theme, setTheme}), [theme]);

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

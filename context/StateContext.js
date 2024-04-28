"use client"

import {createContext, useState, useEffect} from 'react'
import {getThreeLatestPosts} from "@/sanity/lib/sanity-utils";

export const StateContext = createContext({});


export default function StateContextProvider({children}) {
    const [theme, setTheme] = useState('yellow');
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});
    useEffect(() => {

        function getWindowDimensions() {
            const {innerWidth: width, innerHeight: height} = window;
            return {
                width, height
            };
        }

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        if (typeof window !== "undefined") {
            setWindowDimensions(getWindowDimensions());
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);


    const {width} = windowDimensions;
    const currentWidth = width;

    const [displayVersion, setDisplayVersion] = useState("desktop");
    const isMobile = width <= 768;

    useEffect(() => {
        if (isMobile) {
            setDisplayVersion("mobile")
        } else {
            setDisplayVersion("desktop")
        }
    }, [isMobile])


    useEffect(() => {
        if (isLoading) {
            const fetchData = async () => {
                try {
                    const data = await getThreeLatestPosts();
                    setNews(data)
                } catch (e) {
                    console.log("error", e)
                }
                setIsLoading(false)
            }
            fetchData();
        }
        setIsLoading(false)

    }, []);

    const providerValues = {
        theme,
        setTheme,
        news,
        setNews,
        isLoading,
        setIsLoading,
        displayVersion
    };

    return (
        <StateContext.Provider
            value={providerValues}>
            {children}
        </StateContext.Provider>
    )
}





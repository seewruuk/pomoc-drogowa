"use client"
import {News} from "@/components";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";


export default function NewsComponent() {

    const {news} = useContext(StateContext);


    if (!news){
        return (
            <div className={"flex justify-center items-center"}>
                <p>Loading...</p>
            </div>
        )
    }else {
        return (
            <News data={news}/>
        )
    }
}
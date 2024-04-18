"use client"



import {useContext} from "react";
import {StateContext} from "@/context/StateContext";

const styles = {
    yellow: "bg-yellow text-black",
    violet: "bg-violet text-white",
};


export default function Label({text, type}){

    const {theme} = useContext(StateContext);

    return (
        <label className={`${type === "black" ? "bg-black text-white" : styles[theme]} px-[16px] py-[10px] rounded-full mb-[32px] relative`}>{text}</label>
    )
}
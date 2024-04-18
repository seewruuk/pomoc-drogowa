"use client"
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import Image from "next/image";

const styles = {
    yellow: "hover:border-yellow hover:bg-yellowLight hover:border-yellow",
    violet: "hover:border-violet hover:bg-violetLight hover:border-violet",
};


export default function ServiceCard({icon, title, desc}){

    const {theme} = useContext(StateContext);

    return(
        <div className={`bg-white ${styles[theme]} px-[40px] pt-[50px] pb-[64px] rounded-2xl border-2 border-[#E4E4E4] transition-all h-full grid place-items-center group`}>
            <div className={`aspect-square h-[132px] bg-[#EBEBEB] rounded-2xl grid place-items-center transition-all ${theme === "yellow" ? "group-hover:bg-yellow" : "group-hover:bg-violet"}`}>
                <Image src={icon} alt="icon" width={80} height={80}/>
            </div>
            <div className={"mt-[72px]"}>
                <h3 className={"text-[400] mb-[16px]"}>{title}</h3>
                <p className={"small"}>{desc}</p>
            </div>
        </div>
    )
}
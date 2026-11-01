"use client"
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import SmartImage from "@/components/common/SmartImage";

const styles = {
    yellow: "hover:border-yellow hover:bg-yellowLight",
    violet: "hover:border-violet hover:bg-violetLight",
};


export default function ServiceCard({icon, title, desc}) {
    const {theme} = useContext(StateContext);

    return (
        <article className={`bg-white ${styles[theme]} px-[40px] pt-[40px] pb-[44px] rounded-2xl border-2 border-[#E4E4E4] transition-all h-full grid place-items-center group`}>
            {icon && (
                <div className={`aspect-square h-[112px] bg-[#EBEBEB] rounded-2xl grid place-items-center transition-all ${theme === "yellow" ? "group-hover:bg-yellow" : "group-hover:bg-violet"}`}>
                    <SmartImage src={icon} alt="" width={60} height={60} fade={false}/>
                </div>
            )}
            <div className={"mt-[32px]"}>
                <h3 className={"mb-[16px]"}>{title}</h3>
                <p className={"small"}>{desc}</p>
            </div>
        </article>
    )
}

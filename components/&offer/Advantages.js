"use client"
import {Label} from "@/components";
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";

export default function Advantages({data}) {

    const {theme} = useContext(StateContext)
    const styles = {
        yellow : "group-hover:border-yellow group-hover:bg-yellowLight",
        violet : "group-hover:border-violet group-hover:bg-violetLight"
    }

    const {advantages} = data;

    return (
        <section className={"py-[72px] max-w-[1420px] w-full mx-auto px-12 max-md:px-6"}>

            <div className={"w-max-[600px] flex flex-col items-center"}>
                <Label text={"Zalety naszych usług"}/>
                <h2 className={"text-center"}>Dlaczego warto skorzystać z naszej oferty?</h2>
            </div>

            <div className={"pt-[64px] flex gap-3 justify-between items-center max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-10"}>
                {
                    advantages.map((adv, index) => (
                        <div key={index} className={"flex flex-col justify-center items-center group text-center"}>
                            <div className={`mb-[32px] grid place-items-center border-[#E4E4E4] border-2 text-[32px] font-[600] aspect-square h-[136px] ${styles[theme]} transition-all rounded-[33px]`}>
                                0{index+1}
                            </div>
                            <h3 className={"mb-[16px]"}>{adv.advantages_header}</h3>
                            <p className={"small"}>{adv.advantages_desc}</p>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
"use client"
import Link from "next/link";
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";

export default function LowHero({text, category, title, desc}){

    const {theme} = useContext(StateContext);

    const styles = {
        yellow : "text-[#FFC326]",
        violet : "text-[#92408C]"
    }


    return (
        <section className={"relative"}>
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.94)), url('https://picsum.photos/1920/1080')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className={"w-full h-[840px]"}>
                <div className={"mx-auto max-w-[1420px] px-12 w-full flex justify-start items-center h-full"}>

                    <div className={"max-w-[550px]"}>
                        <div className={"flex gap-4 text-[#fff]"}>
                            <Link href={"/"} className={"text-[#666666]"}>{text}</Link>
                            <span className={"text-[#666666]"}>
                            .
                        </span>
                            <span className={styles[theme]}>
                            {category}
                        </span>
                        </div>
                        <h1 className={"pt-[16px] pb-[32px]"}>{title}</h1>
                        <p className={"text-white"}>
                            {desc}
                        </p>
                    </div>


                </div>
            </div>

            <div className={"bg-white h-[45px] w-full rounded-tl-[30px] rounded-tr-[30px] absolute bottom-0"}/>
        </section>
    )
}
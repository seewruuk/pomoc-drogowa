"use client"
import Link from "next/link";
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import SmartImage from "@/components/common/SmartImage";

const styles = {
    yellow: "text-[#FFC326]",
    violet: "text-[#92408C]"
};

export default function LowHero({text, category, title, desc, image, lqip}) {
    const {theme} = useContext(StateContext);

    return (
        <section className={"relative"}>
            <div className={"w-full h-[840px] relative isolate bg-black"}>
                {image && (
                    <div className={"absolute inset-0 -z-10"} aria-hidden="true">
                        <SmartImage src={image} lqip={lqip} alt="" fill sizes="100vw" quality={50} priority
                                    className={"object-cover object-center"}/>
                        <div className={"absolute inset-0"} style={{background: "rgba(0, 0, 0, 0.94)"}}/>
                    </div>
                )}
                <div className={"mx-auto max-w-[1420px] px-12 max-md:px-6 w-full flex justify-start items-center h-full"}>

                    <div className={"max-w-[550px]"}>
                        <nav aria-label="Ścieżka nawigacji" className={"flex gap-4 text-[#fff] items-center"}>
                            <Link href={"/"} className={"text-[#666666] hover:text-white transition-colors"}>{text}</Link>
                            {category && (
                                <>
                                    <span className={"border-[#666666] h-1 w-1 border-2 rounded-full"} aria-hidden="true"/>
                                    <span className={styles[theme]} aria-current="page">{category}</span>
                                </>
                            )}
                        </nav>
                        <h1 className={"pt-[16px] pb-[32px]"}>{title}</h1>
                        {desc && <p className={"text-white"}>{desc}</p>}
                    </div>

                </div>
            </div>

            <div className={"bg-white h-[45px] w-full rounded-tl-[30px] rounded-tr-[30px] absolute bottom-0"}/>
        </section>
    )
}

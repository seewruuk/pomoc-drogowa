"use client"
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";
import Label from "@/components/common/Label";
import ArrowRight from "@/assets/icons/arrow-right.svg"
import Image from "next/image";

const styles = {
    yellow: "bg-yellow",
    violet: "bg-violet",
};

function Card({question, answer}) {
    const {theme} = useContext(StateContext);

    return (
        <div className={"flex flex-col gap-[42px] w-1/2 relative py-12 px-6 max-md:w-full max-md:px-0"}>
            <div className={"flex gap-4 items-center flex-grow"}>
                <span className={`aspect-square h-[45px] grid place-items-center shrink-0 ${styles[theme]} rounded-2xl`}>
                    <Image src={ArrowRight} alt="" width={23} height={22}/>
                </span>
                <h3>{question}</h3>
            </div>
            <div className={"flex-grow"}>
                <p>{answer}</p>
            </div>
        </div>
    )
}


export default function Faq({data}) {
    const items = (data ?? []).filter((i) => i?.question);
    if (!items.length) return null;

    return (
        <section className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[75px] "} id={"faq"}>
            <div className={"w-full flex flex-col"}>

                <div className={"flex items-center flex-col text-center max-w-[600px] mx-auto mb-[72px]"}>
                    <Label text={"FAQ"}/>
                    <h2>Odpowiedzi na często zadawane pytania</h2>
                </div>

                <div className={"flex flex-wrap max-md:flex-col"}>
                    {items.map((item, index) => (
                        <Card key={index} {...item}/>
                    ))}
                </div>

            </div>
        </section>
    )
}

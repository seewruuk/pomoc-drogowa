"use client"
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";
import {Label} from "@/components";
import ArrowRight from "@/assets/icons/arrow-right.svg"
import Image from "next/image";

function Card({...props}) {

    const {question, answer} = props;

    const {theme} = useContext(StateContext);

    const styles = {
        yellow: "bg-yellow",
        violet: "bg-violet",
    }

    return (
        <div className={"flex flex-col gap-[42px] w-1/2 relative py-12 px-6 max-md:w-full max-md:px-0"}>
            <div className={"flex gap-4 items-center flex-grow"}>
                <span className={`aspect-square h-[45px] grid place-items-center ${styles[theme]} rounded-2xl`}>
                    <Image src={ArrowRight} alt={"Arrow Right Icon"} width={24} height={24}/>
                </span>
                <h3 className={"text-[400]"}>{question}</h3>
            </div>
            <div className={"flex-grow"}>
                <p>{answer}</p>
            </div>
        </div>
    )
}


export default function Faq({data}) {


    return (
        <section className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[75px] "} id={"faq"}>
            <div className={"w-full flex flex-col"}>

                <div className={"flex items-center flex-col text-center max-w-[600px] mx-auto mb-[72px]"}>
                    <Label text={"FAQ"}/>
                    <h2>Odpowiedzi na często zadawane pytania</h2>
                </div>

                <div className={"flex flex-wrap max-md:flex-col"}>
                    {
                        data.map((item, index) => {
                            return (
                                <Card key={index} {...item}/>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
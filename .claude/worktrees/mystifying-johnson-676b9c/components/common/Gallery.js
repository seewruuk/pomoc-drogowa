"use client"
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import Image from "next/image";
import {Label} from "@/components";

export default function Gallery({images}) {


    const {theme} = useContext(StateContext);

    const styles = {
        yellow: "border-yellow",
        violet: "border-violet"
    }

    return (
        <section className={"mx-auto max-w-[1420px] px-12 py-[75px] max-md:px-6"}>
            <div className={"flex items-center flex-col text-center max-w-[600px] mx-auto mb-[42px]"}>
                <Label text={"Zdjęcia"}/>
                <h2>Odkryj naszą galerię zdjęć</h2>
            </div>
            <div className={"grid gap-[20px] md:grid-cols-2 sm:grid-cols-1"}>
                {
                    images.map((item, index) => {
                        return (
                            <Image src={item.image ? item.image : item}
                                   alt={`${item.imageAlt ? item.imageAlt : `Zdjęcie - ${index + 1}`}`} width="0"
                                   height="0" sizes="100vw" key={index}
                                   className={`border-2 rounded-lg mx-auto aspect-square w-full
                                   max-sm:h-[220px] max-sm:max-w-[450px]
                                   max-md:h-[350px] max-md:max-w-[600px]
                                   max-lg:h-[200px] max-lg:max-w-[500px]
                                   lg:h-[320px] lg:max-w-full
                                    
                                   ${styles[theme]}`}
                                   style={{
                                       objectFit: "cover",

                                       objectPosition: "center"
                                   }}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
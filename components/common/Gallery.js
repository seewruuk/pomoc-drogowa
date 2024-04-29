"use client"
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import Image from "next/image";

export default function Gallery({images}) {



    const {theme} = useContext(StateContext);

    const styles = {
        yellow: "border-yellow",
        violet: "border-violet"
    }

    return (
        <section className={"mx-auto max-w-[1420px] px-12 py-[75px] max-md:px-6"}>
            <div className={"grid grid-cols-2 gap-[20px] max-lg:grid-cols-1"}>
                {
                    images.map((item, index) => {
                        return (
                            <Image src={item} alt={"image"} height={410} width={550} key={index}
                                   className={`border-2 rounded-lg w-full h-[350px] ${styles[theme]}`}
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
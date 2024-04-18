"use client"
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import Image from "next/image";

export default function Gallery() {


    const images = [
        "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/276334/pexels-photo-276334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/276334/pexels-photo-276334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]

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
                                   className={`border-2 rounded-lg w-full h-full ${styles[theme]}`}
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
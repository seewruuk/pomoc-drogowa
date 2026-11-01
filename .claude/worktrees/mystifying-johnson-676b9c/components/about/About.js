"use client"
import {useEffect, useState} from "react";
import {Button, Label} from "@/components";
import Image from "next/image";
import {getAbout} from "@/sanity/lib/sanity-utils";


async function getData() {
    const data = await getAbout();
    return data[0];
}

export default function About() {

    const [data, setData] = useState(null)

    useEffect(() => {
        getData().then(data => {
            setData(data)
        })
    }, []);

    const images = data && data.images


    const [selectedImage, setSelectedImage] = useState(0)

    if(data === null) return <p className={"text-center py-10 animate-pulse"}>Pobieranie danych...</p>

    return (
        <section className={"max-w-[1420px] mx-auto px-12 py-[150px] max-md:px-6"} id={"o-nas"}>
            <div className={"flex justify-between gap-[50px] items-center max-lg:flex-col"}>

                <div className={"w-[50%] flex flex-col gap-4 items-start max-lg:w-[100%]"}>
                    <Label text={"Poznaj nas"}/>
                    <h2 className={"text-[36px] font-[700] mb-[42px]"}>{data.header}</h2>
                    <p className={"leading-[32px] mb-[32px]"}>
                        {
                            data.description
                        }
                    </p>
                    <Button text={"Skontaktuj się"}
                            target={"#kontakt"}
                            type={"cta"}
                    />
                </div>

                <div className={"w-[50%] flex flex-col max-lg:w-[100%]"}>
                    <Image width="0" height="0" sizes="100vw"  src={images[selectedImage].image} alt={images[selectedImage].imageAlt}
                         className={"h-[400px] aspect-square object-cover rounded-2xl w-full"}/>
                    <div className={"flex gap-[6px] justify-center mt-[25px]"}>
                        {
                            images.map((image, index) => (
                                <div key={image + index} onClick={() => setSelectedImage(index)}
                                     className={`transition-all aspect-square cursor-pointer h-[13px] rounded-full bg-[#959595] ${selectedImage === index ? 'opacity-100' : "opacity-40"}`}/>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
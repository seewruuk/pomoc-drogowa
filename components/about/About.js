"use client"
import {useState} from "react";
import {Button, Label} from "@/components";

export default function About() {

    const images = [
        "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/276334/pexels-photo-276334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]

    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <section className={"max-w-[1420px] mx-auto px-12 py-[150px] max-md:px-6"} id={"o-nas"}>
            <div className={"flex justify-between gap-[50px] items-center max-lg:flex-col"}>

                <div className={"w-[50%] flex flex-col gap-4 items-start max-lg:w-[100%]"}>
                    <Label text={"Poznaj nas"}/>
                    <h2 className={"text-[36px] font-[700] mb-[42px]"}>Twoi lokalni eksperci od pomocy drogowej</h2>
                    <p className={"leading-[32px] mb-[32px]"}>W Pomoc Drogowa, z pasją służymy kierowcom w Trójmieście i okolicach już od ponad 10 lat. Nasz
                        zespół składa się z doświadczonych profesjonalistów, którzy są wyposażeni w najnowocześniejszy
                        sprzęt, aby zapewnić Ci najlepsze możliwe rozwiązanie problemu. Twoje bezpieczeństwo i
                        zadowolenie są dla nas priorytetem.</p>
                    <Button text={"Skontaktuj się"} type={"cta"}/>
                </div>

                <div className={"w-[50%] flex flex-col max-lg:w-[100%]"}>
                    <img src={images[selectedImage]} alt={"about"}
                         className={"h-[400px] aspect-square object-cover rounded-2xl"}/>
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
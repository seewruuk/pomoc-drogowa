"use client"
import {useState} from "react";
import Button from "@/components/common/Button";
import Label from "@/components/common/Label";
import SmartImage from "@/components/common/SmartImage";

// Dane przychodzą z serwera (app/page.jsx) – brak ładowania po stronie przeglądarki
export default function About({data}) {
    const images = (data?.images ?? []).filter((i) => i?.image);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!data) return null;

    return (
        <section className={"max-w-[1420px] mx-auto px-12 py-[150px] max-md:px-6"} id={"o-nas"}>
            <div className={"flex justify-between gap-[50px] items-center max-lg:flex-col"}>

                <div className={"w-[50%] flex flex-col gap-4 items-start max-lg:w-[100%]"}>
                    <Label text={"Poznaj nas"}/>
                    <h2 className={"text-[36px] font-[700] mb-[42px]"}>{data.header}</h2>
                    <p className={"leading-[32px] mb-[32px]"}>
                        {data.description}
                    </p>
                    <Button text={"Skontaktuj się"}
                            target={"#kontakt"}
                            type={"cta"}
                    />
                </div>

                {images.length > 0 && (
                    <div className={"w-[50%] flex flex-col max-lg:w-[100%]"}>
                        <div className={"relative h-[400px] w-full rounded-2xl overflow-hidden bg-[#EBEBEB]"}>
                            {images.map((img, index) => (
                                <div key={index}
                                     className={`absolute inset-0 transition-opacity duration-500 ${selectedImage === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                                     aria-hidden={selectedImage !== index}>
                                    <SmartImage
                                        src={img.image}
                                        lqip={img.lqip}
                                        alt={img.imageAlt || data.header || "Pomoc drogowa Śliwiński"}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 660px"
                                        className={"object-cover"}
                                    />
                                </div>
                            ))}
                        </div>
                        {images.length > 1 && (
                            <div className={"flex gap-[6px] justify-center mt-[25px]"}>
                                {images.map((_, index) => (
                                    <button key={index}
                                            type="button"
                                            onClick={() => setSelectedImage(index)}
                                            aria-label={`Pokaż zdjęcie ${index + 1}`}
                                            aria-pressed={selectedImage === index}
                                            className={`transition-all aspect-square cursor-pointer h-[13px] rounded-full bg-[#959595] ${selectedImage === index ? 'opacity-100' : "opacity-40 hover:opacity-70"}`}/>
                                ))}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </section>
    )
}

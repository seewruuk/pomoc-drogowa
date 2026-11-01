"use client"
import ClockIcon from "../../assets/icons/clock.svg";
import {useContext, useState} from "react";
import {StateContext} from "@/context/StateContext";
import Image from "next/image";
import Button from "@/components/common/Button";
import SmartImage from "@/components/common/SmartImage";
import {PortableText} from "@portabletext/react";
import {AnimatePresence, motion} from "framer-motion";

const whiteFilter = {
    filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(147deg) brightness(111%) contrast(101%)'
};

// Nagłówek z CMS renderujemy wewnątrz <h1> – bloki jako <span>, żeby HTML był poprawny
const ptComponents = {
    block: {
        h1: ({children}) => <span className={"block"}>{children}</span>,
        h2: ({children}) => <span className={"block text-[39.81px] leading-[46.3px] font-[700] mb-[42px]"}>{children}</span>,
        normal: ({children}) => <span className={"block"}>{children}</span>,
    }
};

const fallbackSlide = {
    header: "Pomoc drogowa i transport maszyn w Trójmieście",
    desc: "Holowanie, awaryjne odpalanie, wymiana koła i transport ciężkiego sprzętu – szybko i bezpiecznie, 24 godziny na dobę.",
};

export default function Hero({slides}) {
    const {theme} = useContext(StateContext);
    const items = slides && slides.length > 0 ? slides : [fallbackSlide];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const current = items[selectedIndex] ?? items[0];

    const fade = {
        initial: {opacity: 0, y: 12},
        animate: {opacity: 1, y: 0, transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]}},
        exit: {opacity: 0, y: -8, transition: {duration: 0.25}},
    };

    return (
        <section className={"relative isolate"} aria-roledescription="karuzela" aria-label="Pomoc drogowa Śliwiński">
            <div
                className="min-h-screen w-full flex items-center text-white relative max-md:items-start max-md:pt-[150px] max-md:pb-[200px] z-10 "
            >

                <div
                    className={"mx-auto max-w-[1420px] px-12 w-full flex justify-between max-md:flex-col max-md:px-6 h-[500px] max-md:h-[650px]"}>

                    <div className={"max-w-[680px] max-md:order-2 "}>
                        {/* Pierwszy slajd jest w HTML od razu (bez animacji wejścia) – dobre dla SEO i LCP */}
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div key={selectedIndex} {...fade}>
                                <h1 className={"mb-[52px]"}>
                                    {typeof current.header === "string"
                                        ? current.header
                                        : <PortableText value={current.header} components={ptComponents}/>}
                                </h1>
                                {current.desc && (
                                    <p className={"text-white mb-[23px]"}>{current.desc}</p>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <Button
                            text={`Skontaktuj się`}
                            target={"#kontakt"}
                            type={"cta"}
                        />

                        <p className={"text-white text-[12px] flex gap-4  mt-[24px]"}>
                            <span>
                                <Image src={ClockIcon} alt="" width={20} height={23} style={whiteFilter}/>
                            </span>
                            <span>Pomoc drogowa dostępna 24/h 7 dni w tygodniu</span>
                        </p>
                    </div>

                    {items.length > 1 && (
                        <div className={"flex flex-col gap-5 max-md:order-1 max-md:flex-row max-md:mb-4"}
                             role="tablist" aria-label="Wybierz slajd">
                            {items.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    role="tab"
                                    aria-selected={index === selectedIndex}
                                    aria-label={`Slajd ${index + 1}`}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`text-[21px] transition-all cursor-pointer text-left ${index === selectedIndex ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                                >
                                    0{index + 1}
                                </button>
                            ))}
                        </div>
                    )}


                    <div className={"w-full h-full absolute top-0 left-0 -z-40"}
                         style={{background: 'rgba(0,0,0,0.95)'}}
                    />

                    {/* Tła slajdów: zoptymalizowane obrazy, pierwszy ładowany priorytetowo */}
                    <div className={"absolute inset-0 -z-50 bg-black"} aria-hidden="true">
                        {items.map((item, index) => item.image && (
                            <div key={index}
                                 className={`absolute inset-0 transition-opacity duration-700 ${index === selectedIndex ? "opacity-100" : "opacity-0"}`}>
                                <SmartImage
                                    src={item.image}
                                    lqip={item.lqip}
                                    alt=""
                                    fill
                                    sizes="100vw"
                                    quality={60}
                                    priority={index === 0}
                                    className={"object-cover object-center"}
                                />
                            </div>
                        ))}
                    </div>

                </div>
                <div
                    className={"bg-white h-[45px] w-full rounded-tl-[30px] rounded-tr-[30px] absolute bottom-0"}/>
            </div>
        </section>
    )
}

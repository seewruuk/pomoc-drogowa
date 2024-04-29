"use client"
import ContactIcon from "../../assets/icons/contact.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import {useContext, useEffect, useState} from "react";
import {StateContext} from "@/context/StateContext";
import Image from "next/image";
import {Button, Benefits} from "@/components";
import {PortableText} from "@portabletext/react";
import {motion, AnimatePresence} from "framer-motion";

export default function Hero() {

    const {theme, heroElements} = useContext(StateContext);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const indexes = heroElements && heroElements.length > 0 ? [...Array(heroElements.length).keys()] : [];
    const ptComponents = {
        block: {
            h2: ({children}) => {
                return (
                    <h2>{children}</h2>
                )
            },
            normal: ({children}) => {
                return (
                    <p>{children}</p>
                )
            },
        }
    }

    return (
        <section className={"relative isolate"}>
            <div
                className="min-h-screen w-screen flex items-center text-white relative max-md:items-start max-md:pt-[150px] max-md:pb-[200px] z-10 "
            >

                <div
                    className={"mx-auto max-w-[1420px] px-12 w-full flex justify-between max-md:flex-col max-md:px-6 h-[500px] max-md:h-[650px]"}>

                    <div className={"max-w-[680px] max-md:order-2 "}
                    >

                        {
                            heroElements && heroElements.map((item, index) => {
                                if (index !== selectedIndex) return null;

                                return (
                                    <AnimatePresence key={item + index}>
                                        <motion.h1
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            className={"mb-[52px]"}

                                        >
                                            <PortableText value={item?.header}
                                                          components={ptComponents}/>
                                        </motion.h1>
                                    </AnimatePresence>

                                )
                            })
                        }

                        {
                            heroElements && heroElements.map((item, index) => {
                                if (index !== selectedIndex) return null;

                                return (
                                    <AnimatePresence key={item + index}>
                                        <motion.p className={"text-white mb-[23px]"}
                                                  initial={{opacity: 0}}
                                                  animate={{opacity: 1}}
                                                  exit={{opacity: 0}}
                                        >
                                            {item?.desc}
                                        </motion.p>
                                    </AnimatePresence>
                                )
                            })
                        }


                        {
                            heroElements && heroElements.map((item, index) => {
                                if (index !== selectedIndex) return null;

                                return (
                                    <AnimatePresence key={item + index}>
                                        <motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                        >
                                            <Button
                                                text={`${
                                                    item?.button_text
                                                }`}
                                                icon={ContactIcon}
                                                target={"#kontakt"}
                                                type={"cta"}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                )
                            })
                        }


                        <p className={"text-white text-[12px] flex gap-4  mt-[24px]"}>
                    <span>
                        <Image src={ClockIcon} alt={"Ikona zegara"} width={24} height={24} style={{
                            filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(147deg) brightness(111%) contrast(101%)'
                        }}/>
                    </span>
                            <span>Pomoc drogowa dostępna 24/h 7 dni w tygodniu</span>
                        </p>
                    </div>

                    <div className={"flex flex-col gap-5 max-md:order-1 max-md:flex-row max-md:mb-4"}>
                        {
                            indexes.map((item, index) => {
                                return (
                                    <div key={index + item} onClick={() => setSelectedIndex(index)}>
                                        <span
                                            className={`text-[21px] transition-all cursor-pointer ${index === selectedIndex ? "opacity-100" : "opacity-40"}`}>0{index + 1}</span>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className={"w-full h-full absolute top-0 left-0 -z-40"}
                         style={{
                             background: 'rgba(0,0,0,0.95)'
                         }}
                    />


                    <AnimatePresence>
                        {
                            heroElements && heroElements.map((item, index) => {
                                if (index !== selectedIndex) return null;

                                return (
                                    <motion.div key={index} className={"w-full h-full absolute top-0 left-0 -z-50 bg-black"}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                style={{
                                                    backgroundImage: `url(${item?.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                    />
                                )
                            })
                        }
                    </AnimatePresence>


                </div>
                <div
                    className={"bg-white h-[45px] w-full rounded-tl-[30px] rounded-tr-[30px] absolute bottom-0"}/>
            </div>
        </section>

    )
}
"use client"


import Link from "next/link";
import {useState} from "react";
import {motion, AnimatePresence, cubicBezier} from 'framer-motion'
import ChangeTheme from "@/components/common/Menu/ChangeTheme";
import FacebookIcon from "@/assets/icons/fb-icon.svg"
import InstagramIcon from "@/assets/icons/ig-icon.svg"
import Image from "next/image";

export default function MobileMenuContent({theme, menuOpen, setTheme}) {

    const [showSubMenu, setShowSubMenu] = useState(false)

    return (
        <>

            <motion.div className={"flex-grow bg-black px-6 text-white pt-20 z-30"} key={"mobile-menu"}
                        initial={{
                            y: "-100%"
                        }}
                        animate={{
                            y: 0,
                            transition: {
                                duration: 0.3,
                                ease: cubicBezier(0.42, 0, 0.58, 1),
                                stiffness: 400,
                            }
                        }}
                        exit={{
                            y: "-100%",
                            transition: {
                                duration: 0.3,
                                ease: cubicBezier(0.42, 0, 0.58, 1),
                                stiffness: 400,
                            }
                        }}
            >
                <div className={"h-full overflow-scroll flex flex-col"}>
                    <ul className={"text-[18px] flex flex-col gap-5 items-center text-center"}>
                        <li>
                            <Link href={"/"}>Strona główna</Link>
                        </li>
                        <li>
                            <Link href={"/"}>O nas</Link>
                        </li>
                        <li onClick={() => setShowSubMenu((prev) => !prev)}>
                            <Link href={"/"}>Usługi</Link>
                            <AnimatePresence>

                                {
                                    showSubMenu && (
                                        <motion.ul
                                            key={"dropdown-submenu"}
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto"
                                            }}
                                            exit={{
                                                opacity: 0,
                                                height: 0
                                            }}

                                        >
                                            <li className={"flex flex-col gap-5 pt-5 pb-2 font-[200]"}>
                                                <Link href={"/uslugi/pomoc-drogowa"}>1. Pomoc drogowa</Link>
                                                <Link href={"/uslugi/transport-maszyn"}>2. Transport maszyn</Link>
                                            </li>
                                        </motion.ul>
                                    )
                                }
                            </AnimatePresence>

                        </li>
                        <li>
                            <Link href={"/"}>Opinie</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Faq</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Kontakt</Link>
                        </li>
                    </ul>

                    <ChangeTheme theme={theme} setTheme={setTheme}/>

                    <div className={"flex justify-center gap-3 py-10"}>
                        <Link href={"#"}
                              className={"aspect-square h-[42px] border-2 rounded-full grid place-items-center"}>
                            <Image src={FacebookIcon} alt={"Facebook Icon"} width={9} height={17}/>
                        </Link>

                        <Link href={"#"}
                              className={"aspect-square h-[42px] border-2 rounded-full grid place-items-center"}>
                            <Image src={InstagramIcon} alt={"Facebook Icon"} width={16} height={16}/>
                        </Link>

                    </div>
                </div>
            </motion.div>

            <motion.div className={"absolute h-screen top-0 left-0 bottom-0 right-0"}
                        style={{
                            background: 'rgba(0,0,0,0.95)'
                        }}
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
            />
        </>

    )
}
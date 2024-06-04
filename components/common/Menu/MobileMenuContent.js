"use client"
import Link from "next/link";
import {useState} from "react";
import {motion, AnimatePresence, cubicBezier} from 'framer-motion'
import ChangeTheme from "@/components/common/Menu/ChangeTheme";
import FacebookIcon from "@/assets/icons/fb-icon.svg"
import InstagramIcon from "@/assets/icons/ig-icon.svg"
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function MobileMenuContent({theme, setMenuOpen, setTheme}) {

    const [showSubMenu, setShowSubMenu] = useState(false)
    const router = useRouter();


    const handleNavigation = (url) => {
        setMenuOpen(false);

        setTimeout(() => {
                router.push(url);
            }, 300)
    }

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
                        <li onClick={() => handleNavigation("/")}>Strona główna</li>
                        <li onClick={() => handleNavigation("/#onas")}>O nas</li>
                        <li onClick={() => setShowSubMenu((prev) => !prev)}>
                            <li onClick={() => handleNavigation("/#uslugi")}>Usługi</li>

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
                                                <li onClick={() => handleNavigation("/uslugi/pomoc-drogowa")}>1. Pomoc
                                                    drogowa
                                                </li>
                                                <li onClick={() => handleNavigation("/uslugi/transport-maszyn")}>2.
                                                    Transport maszyn
                                                </li>
                                            </li>
                                        </motion.ul>
                                    )
                                }
                            </AnimatePresence>

                        </li>

                        <li onClick={() => handleNavigation("/#opinie")}>Opinie</li>
                        <li onClick={() => handleNavigation("/galeria")}>Galeria zdjęć</li>
                        <li onClick={() => handleNavigation("/#faq")}>Faq</li>
                        <li onClick={() => handleNavigation("/#kontakt")}>Kontakt</li>
                    </ul>

                    <ChangeTheme theme={theme} setTheme={setTheme}/>

                    <div className={"flex justify-center gap-3 py-10"}>
                        <Link href={"https://www.facebook.com/sliwinski.pomoc.drogowa/"}
                                target={"_blank"}
                              className={"aspect-square h-[42px] border-2 rounded-full grid place-items-center"}>
                            <Image src={FacebookIcon} alt={"Facebook Icon"} width={9} height={17}/>
                        </Link>

                        <Link href={"https://www.instagram.com/pomocdrogowasliwinski/"} target={"_blank"}
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
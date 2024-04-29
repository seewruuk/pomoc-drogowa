"use client"
import WhiteLogo from "@/assets/logo-white.svg"
import FacebookIcon from "@/assets/icons/fb-icon.svg"
import InstagramIcon from "@/assets/icons/ig-icon.svg"
import Image from "next/image";
import Link from "next/link";
import {StateContext} from "@/context/StateContext";
import {useContext, useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

export default function DesktopMenu() {

    const {theme, setTheme} = useContext(StateContext);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const styles = {
        yellow: "menu-link-yellow group-hover:text-yellow",
        violet: "menu-link-violet"
    }

    const socialStyles = {
        yellow: "menu-social-yellow",
        violet: "menu-social-violet"
    }

    const changeTheme = () => {
        if (theme === "yellow") {
            setTheme("violet")
        } else {
            setTheme("yellow")
        }
    }
    const [showBackground, setShowBackground] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > 100) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }
    };

    useEffect(() => {

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    return (
        <div
            className={`fixed text-white top-0 w-screen py-[24px] ${showBackground ? "bg-black" : "bg-transparent"} transition-all`}
            style={{
                zIndex: 1000
            }}
        >
            <div className={"max-w-[1420px] mx-auto px-12 flex justify-between items-center relative"}>
                <Link href={"/"}>
                    <Image src={WhiteLogo} alt={"logo"} width={180} height={45}/>
                </Link>
                <ul className={"flex gap-[32px]"}>
                    <li>
                        <Link href={"/"} className={`${styles[theme]}`}>Strona główna</Link>
                    </li>
                    <li>
                        <Link href={"/#o-nas"} className={`${styles[theme]}`}>O nas</Link>
                    </li>

                    <li className={"group relative"}>
                        <Link href={"#uslugi"} className={`${styles[theme]}`}>Usługi</Link>
                        <ul className={"hidden group-hover:visible absolute w-[250px] h-[95px] bg-white text-black top-[100%] rounded-2xl group-hover:flex flex-col gap-3 pl-6 justify-center opacity-0 group-hover:opacity-100 transition-all"}>
                            <li>
                                <Link href={"/uslugi/pomoc-drogowa"}
                                      className={`text-black transition-all ${theme === "yellow" ? "hover:text-yellow" : "hover:text-violet"}`}>Pomoc
                                    drogowa</Link>
                            </li>
                            <li>
                                <Link href={"/uslugi/transport-maszyn"}
                                      className={`text-black transition-all ${theme === "yellow" ? "hover:text-yellow" : "hover:text-violet"}`}>Transport
                                    maszyn</Link>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <Link href={"/#opinie"} className={`${styles[theme]}`}>Opinie</Link>
                    </li>
                    <li>
                        <Link href={"/#faq"} className={`${styles[theme]}`}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"#kontakt"} className={`${styles[theme]}`}>Kontakt</Link>
                    </li>
                </ul>

                <div className={"flex gap-4 items-center h-max"}>
                    <Link href={"https://www.facebook.com/sliwinski.pomoc.drogowa/"} target={"_blank"}
                          className={`${socialStyles[theme]}`}>
                        <Image src={FacebookIcon} alt={"Facebook Icon"} width={9} height={17}/>
                    </Link>

                    <Link href={"https://www.facebook.com/sliwinski.pomoc.drogowa/"} target={"_blank"}
                          className={`${socialStyles[theme]}`}>
                        <Image src={InstagramIcon} alt={"Instagram Icon"} width={16} height={16}/>
                    </Link>

                    <span
                        onClick={changeTheme}
                        className={`menu-social-changeColor hover:cursor-pointer`}
                    >
                        <span className={`${
                            theme === "yellow" ? "bg-yellow" : "bg-violet"
                        } h-[24px] w-[24px] rounded-full `}>

                        </span>

                    </span>
                </div>
            </div>

        </div>
    )
}
"use client"
import MenuIcon from "@/assets/icons/menu.svg"
import CloseMenuIcon from "@/assets/icons/close-menu.svg"
import MenuIconWhite from "@/assets/icons/menu-white.svg"
import CloseMenuIconWhite from "@/assets/icons/close-menu-white.svg"
import LogoWhite from "@/assets/logo-white.svg"
import Image from "next/image"
import {StateContext} from "@/context/StateContext";
import {useContext, useEffect, useState} from "react";
import MobileMenuContent from "@/components/common/Menu/MobileMenuContent";
import {AnimatePresence, motion} from "framer-motion";


export default function MobileMenu() {

    const {theme, setTheme} = useContext(StateContext);

    const [menuOpen, setMenuOpen] = useState(false)

    const styles = {
        yellow: "bg-yellow",
        violet: "bg-violet"
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [
        menuOpen
    ]);

    return (
        <>
            <div className={"fixed top-0 w-screen flex flex-col isolate"}
                 style={{
                     zIndex: 1000
                 }}
            >
                <div className={"w-full h-[80px] bg-black z-40"}

                >
                    <div className={"w-full h-full px-6 text-white flex justify-between items-center"}>
                        <div>
                            <Image src={LogoWhite} alt={"Białe Logo firmy"} width={150} height={50}/>
                        </div>

                        <button className={`${styles[theme]} aspect-square h-[42px] grid place-items-center rounded-lg`}
                                onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <Image src={
                                menuOpen ? theme === "violet" ? CloseMenuIconWhite : CloseMenuIcon : theme === "violet" ? MenuIconWhite : MenuIcon
                            } alt={"Menu Icon"} width={21} height={21}/>
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {
                        menuOpen && <MobileMenuContent theme={theme} menuOpen={menuOpen} setTheme={setTheme}
                                                       setMenuOpen={setMenuOpen}/>
                    }
                </AnimatePresence>

            </div>

        </>

    )
}
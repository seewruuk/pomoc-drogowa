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
import {AnimatePresence} from "framer-motion";
import Link from "next/link";
import {company} from "@/lib/site";

const styles = {
    yellow: "bg-yellow",
    violet: "bg-violet"
}

export default function MobileMenu() {
    const {theme, setTheme} = useContext(StateContext);
    const [menuOpen, setMenuOpen] = useState(false)

    // Blokada przewijania strony pod otwartym menu
    useEffect(() => {
        if (!menuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [menuOpen]);

    const icon = menuOpen
        ? (theme === "violet" ? CloseMenuIconWhite : CloseMenuIcon)
        : (theme === "violet" ? MenuIconWhite : MenuIcon);

    return (
        <div className={"fixed top-0 left-0 w-full flex flex-col isolate"} style={{zIndex: 1000}}>
            <div className={"w-full h-[80px] bg-black z-40"}>
                <div className={"w-full h-full px-6 text-white flex justify-between items-center"}>
                    <Link href={"/"} aria-label={`${company.name} – strona główna`} onClick={() => setMenuOpen(false)}>
                        <Image src={LogoWhite} alt={company.name} width={150} height={50} priority/>
                    </Link>

                    <button type="button"
                            className={`${styles[theme]} aspect-square h-[42px] grid place-items-center rounded-lg`}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
                    >
                        <Image src={icon} alt="" width={21} height={21}/>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <MobileMenuContent theme={theme} setTheme={setTheme} setMenuOpen={setMenuOpen}/>
                )}
            </AnimatePresence>
        </div>
    )
}

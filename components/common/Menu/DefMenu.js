"use client"
import WhiteLogo from "@/assets/logo-white.svg"
import FacebookIcon from "@/assets/icons/fb-icon.svg"
import InstagramIcon from "@/assets/icons/ig-icon.svg"
import Image from "next/image";
import Link from "next/link";
import {StateContext} from "@/context/StateContext";
import {useContext, useEffect, useState} from "react";
import {company} from "@/lib/site";

const styles = {
    yellow: "menu-link-yellow group-hover:text-yellow",
    violet: "menu-link-violet"
}

const socialStyles = {
    yellow: "menu-social-yellow",
    violet: "menu-social-violet"
}

export default function DesktopMenu() {
    const {theme, setTheme} = useContext(StateContext);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowBackground(window.scrollY > 100);
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const subLinkClass = `text-black transition-all ${theme === "yellow" ? "hover:text-yellow" : "hover:text-violet"}`;

    return (
        <div
            className={`fixed text-white top-0 left-0 w-full py-[24px] ${showBackground ? "bg-black" : "bg-transparent"} transition-all`}
            style={{zIndex: 1000}}
        >
            <div className={"max-w-[1420px] mx-auto px-12 flex justify-between items-center relative"}>
                <Link href={"/"} aria-label={`${company.name} – strona główna`}>
                    <Image src={WhiteLogo} alt={company.name} width={180} height={45} priority/>
                </Link>
                <nav aria-label="Menu główne">
                    <ul className={"flex gap-[32px]"}>
                        <li>
                            <Link href={"/"} className={styles[theme]}>Strona główna</Link>
                        </li>
                        <li>
                            <Link href={"/#o-nas"} className={styles[theme]}>O nas</Link>
                        </li>

                        <li className={"group relative"}>
                            <Link href={"/#uslugi"} className={styles[theme]} aria-haspopup="true">Usługi</Link>
                            <ul className={"hidden group-hover:flex group-focus-within:flex absolute w-[250px] h-[95px] bg-white text-black top-[100%] rounded-2xl flex-col gap-3 pl-6 justify-center transition-all"}>
                                <li>
                                    <Link href={"/uslugi/pomoc-drogowa/"} className={subLinkClass}>Pomoc drogowa</Link>
                                </li>
                                <li>
                                    <Link href={"/uslugi/transport-maszyn/"} className={subLinkClass}>Transport maszyn</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href={"/#opinie"} className={styles[theme]}>Opinie</Link>
                        </li>
                        <li>
                            <Link href={"/galeria/"} className={styles[theme]}>Galeria</Link>
                        </li>
                        <li>
                            <Link href={"/#faq"} className={styles[theme]}>FAQ</Link>
                        </li>
                        <li>
                            <Link href={"#kontakt"} className={styles[theme]}>Kontakt</Link>
                        </li>
                    </ul>
                </nav>

                <div className={"flex gap-4 items-center h-max"}>
                    <a href={company.social.facebook} target={"_blank"} rel="noopener noreferrer"
                       aria-label="Facebook" className={socialStyles[theme]}>
                        <Image src={FacebookIcon} alt="" width={9} height={17}/>
                    </a>

                    <a href={company.social.instagram} target={"_blank"} rel="noopener noreferrer"
                       aria-label="Instagram" className={socialStyles[theme]}>
                        <Image src={InstagramIcon} alt="" width={16} height={16}/>
                    </a>

                    <button
                        type="button"
                        onClick={() => setTheme((prev) => prev === "yellow" ? "violet" : "yellow")}
                        aria-label="Zmień motyw kolorystyczny"
                        className={`menu-social-changeColor hover:cursor-pointer`}
                    >
                        <span className={`${theme === "yellow" ? "bg-yellow" : "bg-violet"} h-[24px] w-[24px] rounded-full`}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

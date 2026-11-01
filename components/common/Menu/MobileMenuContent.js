"use client"
import Link from "next/link";
import {useState} from "react";
import {AnimatePresence, cubicBezier, motion} from 'framer-motion'
import ChangeTheme from "@/components/common/Menu/ChangeTheme";
import FacebookIcon from "@/assets/icons/fb-icon.svg"
import InstagramIcon from "@/assets/icons/ig-icon.svg"
import Image from "next/image";
import {company} from "@/lib/site";

const ease = cubicBezier(0.42, 0, 0.58, 1);

const links = [
    {href: "/", label: "Strona główna"},
    {href: "/#o-nas", label: "O nas"},
    {submenu: true},
    {href: "/#opinie", label: "Opinie"},
    {href: "/galeria/", label: "Galeria zdjęć"},
    {href: "/#faq", label: "Faq"},
    {href: "#kontakt", label: "Kontakt"},
];

export default function MobileMenuContent({theme, setMenuOpen, setTheme}) {
    const [showSubMenu, setShowSubMenu] = useState(false)
    const close = () => setMenuOpen(false);

    return (
        <>
            <motion.nav id="mobile-menu" aria-label="Menu główne"
                        className={"flex-grow bg-black px-6 text-white pt-20 z-30"} key={"mobile-menu"}
                        initial={{y: "-100%"}}
                        animate={{y: 0, transition: {duration: 0.3, ease}}}
                        exit={{y: "-100%", transition: {duration: 0.3, ease}}}
            >
                <div className={"h-full overflow-auto flex flex-col"}>
                    <ul className={"text-[18px] flex flex-col gap-5 items-center text-center"}>
                        {links.map((link) => link.submenu ? (
                            <li key="uslugi">
                                <button type="button" onClick={() => setShowSubMenu((prev) => !prev)}
                                        aria-expanded={showSubMenu}>
                                    Usługi
                                </button>
                                <AnimatePresence>
                                    {showSubMenu && (
                                        <motion.ul
                                            key={"dropdown-submenu"}
                                            className={"flex flex-col gap-5 pt-5 pb-2 font-[200] overflow-hidden"}
                                            initial={{height: 0, opacity: 0}}
                                            animate={{opacity: 1, height: "auto"}}
                                            exit={{opacity: 0, height: 0}}
                                        >
                                            <li><Link href={"/uslugi/pomoc-drogowa/"} onClick={close}>1. Pomoc drogowa</Link></li>
                                            <li><Link href={"/uslugi/transport-maszyn/"} onClick={close}>2. Transport maszyn</Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                        ) : (
                            <li key={link.href}>
                                <Link href={link.href} onClick={close}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <ChangeTheme theme={theme} setTheme={setTheme}/>

                    <div className={"flex justify-center gap-3 py-10"}>
                        <a href={company.social.facebook} target={"_blank"} rel="noopener noreferrer" aria-label="Facebook"
                           className={"aspect-square h-[42px] border-2 rounded-full grid place-items-center"}>
                            <Image src={FacebookIcon} alt="" width={9} height={17}/>
                        </a>
                        <a href={company.social.instagram} target={"_blank"} rel="noopener noreferrer" aria-label="Instagram"
                           className={"aspect-square h-[42px] border-2 rounded-full grid place-items-center"}>
                            <Image src={InstagramIcon} alt="" width={16} height={16}/>
                        </a>
                    </div>
                </div>
            </motion.nav>

            <motion.div className={"absolute h-screen top-0 left-0 bottom-0 right-0"}
                        style={{background: 'rgba(0,0,0,0.95)'}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={close}
                        aria-hidden="true"
            />
        </>
    )
}

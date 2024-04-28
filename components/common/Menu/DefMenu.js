"use client"
import WhiteLogo from "@/assets/logo-white.svg"
import FacebookIcon from "@/assets/icons/fb-icon.svg"
import InstagramIcon from "@/assets/icons/ig-icon.svg"
import Image from "next/image";
import Link from "next/link";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";

export default function DesktopMenu() {

    const {theme} = useContext(StateContext);

    const styles = {
        yellow: "menu-link-yellow group-hover:text-yellow",
        violet: "menu-link-violet"
    }


    return (
        <div className={"fixed text-white top-0 w-screen h-[45px] bg-transparent my-[45px]"}
             style={{
                 zIndex: 1000
             }}
        >
            <div className={"max-w-[1420px] mx-auto px-12 flex justify-between items-center relative"}>
                <Image src={WhiteLogo} alt={"logo"} width={180} height={45}/>
                <ul className={"flex gap-4"}>
                    <li>
                        <Link href={"/"} className={`${styles[theme]}`}>Strona główna</Link>
                    </li>
                    <li>
                        <Link href={"/"} className={`${styles[theme]}`}>O nas</Link>
                    </li>

                    <li className={"group relative"}>
                        <Link href={"/"} className={`${styles[theme]}`}>Oferta</Link>
                        <ul className={"hidden group-hover:visible absolute w-[250px] h-[95px] bg-white text-black top-[100%] rounded-2xl group-hover:flex flex-col gap-3 pl-6 justify-center opacity-0 group-hover:opacity-100 transition-all"}>
                            <li>
                                <Link href={"/uslugi/pomoc-drogowa"}>Pomoc drogowa</Link>
                            </li>
                            <li>
                                <Link href={"/uslugi/transport-maszyn"}>Transport maszyn</Link>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <Link href={"/"} className={`${styles[theme]}`}>Opinie</Link>
                    </li>
                    <li>
                        <Link href={"/"} className={`${styles[theme]}`}>Faq</Link>
                    </li>
                    <li>
                        <Link href={"/"} className={`${styles[theme]}`}>Kontakt</Link>
                    </li>
                </ul>

                <div className={"flex gap-4 items-center border-2 h-max"}>
                <Link href={"/"} className={"aspect-square border-2 border-white rounded-full grid place-items-center w-[40px] h-[40px]"}>
                        <Image src={FacebookIcon} alt={"Facebook Icon"} width={9} height={17}/>
                    </Link>

                    <Link href={"/"} className={"aspect-square border-2 border-white rounded-full grid place-items-center w-[40px] h-[40px]"}>
                        <Image src={InstagramIcon} alt={"Instagram Icon"} width={16} height={16}/>
                    </Link>
                </div>
            </div>

        </div>
    )
}
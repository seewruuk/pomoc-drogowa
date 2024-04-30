"use client"
import Link from "next/link";
import {footerData} from "@/components/common/Footer/index";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";
import WhiteLogo from "@/assets/logo-white.svg"
import Image from "next/image";


export default function Footer() {


    const styles = {
        yellow: "hover:text-yellow text-white transition-all font-[250]",
        violet: "hover:text-violet text-white transition-all font-[250]",
    }

    const {theme} = useContext(StateContext);

    return (
        <section className={"bg-[#0A0A0A] text-white"}>
            <div className={"max-w-[1420px] mx-auto py-[72px] max-md:px-6 px-12 flex justify-between max-lg:flex-col"}>

                <div className={"flex-1 max-lg:mb-[50px]"}>
                    <Link href={"/"} className={""}>
                        <Image src={WhiteLogo} alt={"Białe Logo"} width="0" height="0" sizes="100vw"/>
                    </Link>

                    <div className={"flex flex-col gap-[8px] mt-[24px]"}>
                        <span className={"font-[250] cursor-default"}>ul. Sezamkowa 43</span>
                        <span className={"font-[250] cursor-default"}>81-079, Gdynia</span>
                        <a href={"tel:+48603530530"} className={`font-[250] cursor-pointer ${styles[theme]}`}>+48 603 530 530</a>
                        <a href={"tel:+48601633954"} className={`font-[250] cursor-pointer ${styles[theme]}`}>+48 601 633 954</a>

                        <a href={"mailto:kontakt@pomocdrogowa-gdynia.pl"}
                           className={`font-[250] cursor-pointer ${styles[theme]}`}>
                            kontakt@pomocdrogowa-gdynia.pl
                        </a>
                    </div>
                </div>

                <div className={"flex justify-between w-fit flex-grow max-lg:flex-col max-lg:gap-10"}>
                    {
                        footerData.map((item, index) => {
                            return (
                                <div key={item + index}>
                                    <span className={"text-[21px] font-[600]"}>{item.header}</span>
                                    <div className={"flex flex-col gap-[8px] mt-[24px]"}>
                                        {
                                            item.links.map((link, index) => {
                                                return (
                                                    <Link key={link + index} href={link.href}
                                                          className={`${styles[theme]}`}>
                                                        {link.label}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

            <div
                className={"max-w-[1420px] mx-auto flex justify-between py-5 max-md:px-6 px-12 max-lg:flex-col max-lg:gap-5 text-[12px]"}>
                <span className={"font-[250]"}>
                    Copyright @ {
                    new Date().getFullYear()
                } Pomocdrogowa.pl
                </span>
                <Link href={"https://www.facebook.com/kacper.sewruk.7"} target={"_blank"}
                      className={`${styles[theme]}}`}>
                    Wykonanie Strony: <span className={"font-[450]"}>@seewruuk</span>
                </Link>
            </div>
        </section>
    )
}
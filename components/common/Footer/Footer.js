"use client"
import Link from "next/link";
import {footerData} from "@/components/common/Footer/index";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";
import WhiteLogo from "@/assets/logo-white.svg"
import Image from "next/image";
import {company} from "@/lib/site";

const styles = {
    yellow: "hover:text-yellow text-white transition-all font-[250]",
    violet: "hover:text-violet text-white transition-all font-[250]",
};

const isExternal = (href) => href.startsWith("http");

export default function Footer() {
    const {theme} = useContext(StateContext);

    return (
        <footer className={"bg-[#0A0A0A] text-white"}>
            <div className={"max-w-[1420px] mx-auto py-[72px] max-md:px-6 px-12 flex justify-between max-lg:flex-col"}>

                <div className={"flex-1 max-lg:mb-[50px]"}>
                    <Link href={"/"} aria-label={`${company.name} – strona główna`}>
                        <Image src={WhiteLogo} alt={company.name} width={180} height={46}/>
                    </Link>

                    <address className={"not-italic flex flex-col gap-[8px] mt-[24px]"}>
                        {company.phones.map((phone) => (
                            <a key={phone.href} href={phone.href} className={`cursor-pointer ${styles[theme]}`}>
                                {phone.displayFull}
                            </a>
                        ))}
                        <a href={`mailto:${company.email}`} className={`cursor-pointer ${styles[theme]}`}>
                            {company.email}
                        </a>
                    </address>
                </div>

                <nav aria-label="Stopka" className={"flex justify-between w-fit flex-grow max-lg:flex-col max-lg:gap-10"}>
                    {footerData.map((item) => (
                        <div key={item.header}>
                            <span className={"text-[21px] font-[600]"}>{item.header}</span>
                            <ul className={"flex flex-col gap-[8px] mt-[24px]"}>
                                {item.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href}
                                              className={styles[theme]}
                                              {...(isExternal(link.href) ? {target: "_blank", rel: "noopener noreferrer"} : {})}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

            </div>

            <div
                className={"max-w-[1420px] mx-auto flex justify-between py-5 max-md:px-6 px-12 max-lg:flex-col max-lg:gap-5 text-[12px]"}>
                <span className={"font-[250]"}>
                    Copyright © {new Date().getFullYear()} Pomocdrogowa.pl
                </span>
                <a href={"https://www.facebook.com/kacper.sewruk.7"} target={"_blank"} rel="noopener noreferrer"
                   className={styles[theme]}>
                    Wykonanie Strony: <span className={"font-[450]"}>@seewruuk</span>
                </a>
            </div>
        </footer>
    )
}

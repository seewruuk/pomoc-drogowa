"use client"
import Image from "next/image";
import { useContext, useState, useEffect, useRef } from "react";
import { StateContext } from "@/context/StateContext";
import ContactIcon from "@/assets/icons/contact.svg"
import ClockIcon from "@/assets/icons/clock.svg"
import GroupIcon from "@/assets/icons/group.svg"
import PhoneIcon from "@/assets/icons/phone2.svg"
import EmailIcon from "@/assets/icons/email.svg"

const buttonStyles = {
    yellow: "bg-yellow text-black hover:bg-[#FF9900]",
    violet: "bg-violet text-white hover:bg-[#8F0986]",
};
const iconTypes = {
    cta: ContactIcon,
    clock: ClockIcon,
    group: GroupIcon,
    phone: PhoneIcon,
    email: EmailIcon
}

const iconStyles = {
    violet: {
        filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(147deg) brightness(111%) contrast(101%)'
    }
};

export default function Button({text, icon, target, type}) {
    const {theme} = useContext(StateContext);
    const baseClass = "px-[23px] py-[12px] rounded-[9px] flex gap-4 items-center transition-all text-[16px]";
    const buttonClass = `${baseClass} ${buttonStyles[theme] || ""}`;
    const iconFilter = iconStyles[theme] || {};
    const [expandNumbers, setExpandNumbers] = useState(false);
    const wrapperRef = useRef(null);

    // Funkcja do obsługi kliknięcia poza dropdownem, aby go zamknąć
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setExpandNumbers(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div ref={wrapperRef} className={"relative isolate"}>
            {expandNumbers && (
                <div className={"absolute top-full mt-2 bg-white p-2 rounded-[9px] shadow-md h-auto w-[300px] flex flex-col gap-2 z-50"}>
                    <a href={"tel:+48603530530"} className={buttonClass}>Główny: 603 530 530</a>
                    <a href={"tel:+48601633954"} className={buttonClass}>Roboczy: 601 633 954</a>
                </div>
            )}
            <button className={`${buttonClass} z-10`}
                    onClick={() => {
                        if (target) {
                            const el = document.querySelector(target);
                            el.scrollIntoView({behavior: "smooth"});
                        }
                        if (type === "email") {
                            window.open("mailto:kontakt@pomocdrogowa-gdynia.pl");
                        }
                        if (type === "phone") {
                            setExpandNumbers(!expandNumbers);
                        }
                    }}
            >
                <span>
                    <Image src={iconTypes[type]} alt="icon" width={type === "phone" ? 16 : 24} height={24} style={iconFilter}/>
                </span>
                <span>
                    {text}
                </span>
            </button>


        </div>
    );
}
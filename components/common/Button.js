"use client"
import Image from "next/image";
import {useContext, useEffect, useId, useRef, useState} from "react";
import {StateContext} from "@/context/StateContext";
import ContactIcon from "@/assets/icons/contact.svg"
import ClockIcon from "@/assets/icons/clock.svg"
import GroupIcon from "@/assets/icons/group.svg"
import PhoneIcon from "@/assets/icons/phone2.svg"
import EmailIcon from "@/assets/icons/email.svg"
import {company} from "@/lib/site";

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

/**
 * type="cta"   – link do sekcji (target, np. "#kontakt")
 * type="email" – link mailto
 * type="phone" – rozwijana lista numerów telefonu
 */
export default function Button({text, target, type}) {
    const {theme} = useContext(StateContext);
    const baseClass = "px-[23px] py-[12px] rounded-[9px] flex gap-4 items-center transition-all text-[16px]";
    const buttonClass = `${baseClass} ${buttonStyles[theme] || ""}`;
    const iconFilter = iconStyles[theme] || {};
    const [expandNumbers, setExpandNumbers] = useState(false);
    const wrapperRef = useRef(null);
    const listId = useId();

    // Zamknięcie listy numerów po kliknięciu poza nią lub klawiszem Escape
    useEffect(() => {
        if (!expandNumbers) return;

        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setExpandNumbers(false);
            }
        }

        function handleKey(event) {
            if (event.key === "Escape") setExpandNumbers(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKey);
        };
    }, [expandNumbers]);

    const content = (
        <>
            <span>
                <Image src={iconTypes[type] || ContactIcon} alt="" width={type === "phone" ? 16 : 24} height={24}
                       style={iconFilter}/>
            </span>
            <span>{text}</span>
        </>
    );

    if (type === "email") {
        return (
            <div className={"relative isolate"}>
                <a href={`mailto:${company.email}`} className={`${buttonClass} z-10 w-fit`}>{content}</a>
            </div>
        );
    }

    if (type === "phone") {
        return (
            <div ref={wrapperRef} className={"relative isolate"}>
                {expandNumbers && (
                    <div id={listId}
                         className={"absolute top-full mt-2 bg-white p-2 rounded-[9px] shadow-md h-auto w-[300px] flex flex-col gap-2 z-50"}>
                        {company.phones.map((phone) => (
                            <a key={phone.href} href={phone.href} className={buttonClass}>
                                {phone.label}: {phone.display}
                            </a>
                        ))}
                    </div>
                )}
                <button type="button"
                        className={`${buttonClass} z-10`}
                        aria-expanded={expandNumbers}
                        aria-controls={listId}
                        onClick={() => setExpandNumbers((v) => !v)}>
                    {content}
                </button>
            </div>
        );
    }

    return (
        <div className={"relative isolate"}>
            <a href={target || "#kontakt"} className={`${buttonClass} z-10 w-fit`}>{content}</a>
        </div>
    );
}

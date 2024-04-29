"use client"
import Image from "next/image";
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import ContactIcon from "@/assets/icons/contact.svg"
import ClockIcon from "@/assets/icons/clock.svg"
import GroupIcon from "@/assets/icons/group.svg"
import PhoneIcon from "@/assets/icons/phone2.svg"
import EmailIcon from "@/assets/icons/email.svg"

const buttonStyles = {
    yellow: "bg-yellow text-black hover:bg-[#FF9900]",
    violet: "bg-violet text-white hover:bg-[#8F0986]",
    // white: "bg-white text-black hover:bg-[#000]"
};
const iconTypes = {
    cta : ContactIcon,
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

export default function Button({text, icon, target, type }) {

    const {theme} = useContext(StateContext);

    const baseClass = "px-[23px] py-[12px] rounded-[9px] flex gap-4 items-center transition-all text-[16px]";
    const buttonClass = `${baseClass} ${buttonStyles[theme] || ""}`;
    const iconFilter = iconStyles[theme] || {};

    return (
        <button className={buttonClass}>
            <span>
                <Image src={iconTypes[type]} alt="icon" width={
                    type === "phone" ? 16 : 24
                } height={24} style={iconFilter} />
            </span>
            <span>
                {text}
            </span>
        </button>
    );
}

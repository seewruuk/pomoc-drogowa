"use client"
import ClockIcon from "../assets/icons/clock.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import GroupIcon from "../assets/icons/group.svg";
import Image from "next/image";
import {StateContext} from "../context/StateContext";
import {useContext} from "react";


const styles = {
    yellow: "bg-yellow text-black",
    violet: "bg-violet text-black",
};

const benefits = [
    {icon: ClockIcon, width: 30, height: 35, desc: "Dojazd w 30 minut do zdarzenia"},
    {icon: PhoneIcon, width: 20, height: 32, desc: "Bezpłatny numer alarmowy"},
    {icon: GroupIcon, width: 38, height: 28, desc: "Profesjonalna obsługa"},
];

const whiteFilter = {
    filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(147deg) brightness(111%) contrast(101%)'
};

export default function Benefits() {
    const {theme} = useContext(StateContext);

    return (
        <section className={"mx-auto px-12 max-w-[1420px] -mt-[100px] z-[99] relative max-md:px-6"} aria-label="Nasze atuty">
            <ul className={`${styles[theme]} flex justify-between px-[32px] py-[24px] rounded-2xl max-md:flex-col max-md:gap-10 max-md:justify-start max-md:items-start`}>
                {benefits.map((item) => (
                    <li key={item.desc} className={"flex justify-center items-center gap-4 "}>
                        <div className={"bg-black aspect-square h-[68px] grid place-items-center rounded-2xl max-md:h-[60px]"}>
                            <Image src={item.icon} alt="" width={item.width} height={item.height} style={whiteFilter}
                                   className={"max-md:max-w-[24px] max-md:max-h-[24px]"}/>
                        </div>
                        <div className={"max-w-[180px] max-md:max-w-none"}>
                            <p className={"text-[18px] font-[400]"}>{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

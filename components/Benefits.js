"use client"
import ClockIcon from "../assets/icons/clock.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import GroupIcon from "../assets/icons/group.svg";
import Image from "next/image";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";


const styles = {
    yellow: "bg-yellow text-black",
    violet: "bg-violet text-black",
};

export default function Benefits() {

    const benefits = [
        {
            icon : ClockIcon,
            height: 35,
            width: 30,
            desc: "Dojazd w 30 minut do zdarzenia",
        },
        {
            icon : PhoneIcon,
            desc: "Bezpłatny numer alarmowy",
            width: 20,
            height: 32

        },
        {
            icon: GroupIcon,
            desc: "Profesjonalna obsługa",
            width: 38,
            height: 28
        }
    ]

    const {theme} = useContext(StateContext);



    return (
        <section className={"mx-auto px-12 max-w-[1420px] -mt-[100px] z-[99] relative max-md:px-6"}>
            <div className={`${styles[theme]} flex justify-between px-[32px] py-[24px] rounded-2xl max-md:flex-col max-md:gap-10 max-md:justify-start max-md:items-start`}>
                {
                    benefits.map((item, index) => (
                        <div key={item + index} className={"flex justify-center items-center gap-4 "}>
                            <div className={"bg-black aspect-square h-[68px] grid place-items-center rounded-2xl max-md:h-[60px]"}>
                                <Image src={item.icon} alt={"icon"} width={item.width} height={item.icon} style={{
                                    filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(147deg) brightness(111%) contrast(101%)'
                                }}
                                    className={"max-md:max-w-[24px] max-md:max-h-[24px]"}

                                />
                            </div>
                            <div className={"max-w-[180px] max-md:max-w-none"}>
                                <p className={"text-[18px] font-[400]"}>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
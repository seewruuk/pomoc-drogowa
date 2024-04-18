"use client"
import ContactIcon from "../../assets/icons/contact.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import {useContext, useState} from "react";
import {StateContext} from "@/context/StateContext";
import Image from "next/image";
import {Button, Benefits} from "@/components";

export default function Hero() {

    const {theme} = useContext(StateContext);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const indexes = [0, 1, 2, 3];

    return (
        <section className={"relative"}>

            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.94)), url('https://picsum.photos/1920/1080')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="min-h-screen w-screen flex items-center text-white relative max-md:items-start max-md:pt-[150px] max-md:pb-[200px] z-10 "
            >
                <div className={"mx-auto max-w-[1420px] px-12 w-full flex justify-between max-md:flex-col max-md:px-6"}>

                    <div className={"max-w-[680px] max-md:order-2"}>
                        <h1 className={"mb-[52px]"}>Zawsze gotowi, aby Ci pomóc <br/>- Pomoc Drogowa 24/7 <br/> w
                            Trójmieście</h1>
                        <p className={"text-white mb-[23px]"}>
                            Kiedy niespodziewane się wydarzy, nasz zespół ekspertów jest tutaj, aby przywrócić spokój na
                            Twojej
                            drodze. Bez względu na problem, Pomoc Drogowa jest z Tobą o każdej porze dnia i nocy.
                        </p>

                        <Button text={"Skontaktuj się"} icon={ContactIcon} target={"#kontakt"} type={"cta"}/>

                        <p className={"text-white text-[12px] flex gap-4  mt-[24px]"}>
                    <span>
                        <Image src={ClockIcon} alt={"Ikona zegara"} width={24} height={24} style={{
                            filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(147deg) brightness(111%) contrast(101%)'
                        }}/>
                    </span>
                            <span>Pomoc drogowa dostępna 24/h 7 dni w tygodniu</span>
                        </p>
                    </div>

                    <div className={"flex flex-col gap-5 max-md:order-1 max-md:flex-row max-md:mb-4"}>
                        {
                            indexes.map((item, index) => {
                                return (
                                    <div key={index + item} onClick={() => setSelectedIndex(index)}>
                                        <span
                                            className={`text-[21px] transition-all cursor-pointer ${index === selectedIndex ? "opacity-100" : "opacity-40"}`}>0{index + 1}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"bg-white h-[45px] w-full rounded-tl-[30px] rounded-tr-[30px] absolute bottom-0"}/>
            </div>
        </section>

    )
}
"use client"
import {useContext} from "react";
import {StateContext} from "../context/StateContext";
import {Label} from "../components/index";
import {data} from "autoprefixer";

export default function Review() {

    const {theme} = useContext(StateContext);

    const styles = {
        yellow: "bg-yellow",
        violet: "bg-violet",
    }

    const data = [
        {
            user: "Jakub",
            city: "Gdynia",
            text: "Kiedy moje auto odmówiło posłuszeństwa w środku nocy, Pomoc Drogowa była moją deską ratunku. Przybyli błyskawicznie i profesjonalnie zajęli się problemem. Niezmiernie jestem wdzięczny za ich pomoc!",
            date: "12.05.2021"
        },
        {
            user: "Katarzyna",
            city: "Gdańsk",
            text: "Dziękuję za szybką reakcję i pomoc w trudnej sytuacji. Wszystko odbyło się sprawnie i bezproblemowo. Polecam!",
            date: "02.04.2021"
        }
    ]

    return (
        <section className={`${styles[theme]}`} id={"opinie"}>
            <div className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[75px]"}>
                <div className={"mb-[42px] flex flex-col justify-center items-center text-center"}>
                    <Label text={"Opinie"} type={"black"}/>
                    <h2>Co mówią nasi klienci?</h2>
                </div>
                <div className={"flex justify-between gap-4 max-lg:flex-col"}>
                    {
                        data.map((item, index) => {
                            return (
                                <ReviewCard key={index} data={item}/>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}


function ReviewCard({...props}) {

    const {user, city, text, date} = props.data;

    return (
        <div className={"bg w-full bg-white rounded-2xl px-[40px] py-[50px] flex flex-col"}>

            <p className={"small mb-[30px] flex-grow"}>{text}</p>
            <div>
                <h4 className={"font-[600]"}>{user}, {city}</h4>
                <span className={"text-[13px] text-[#878787]"}>{date}</span>
            </div>

        </div>
    )
}
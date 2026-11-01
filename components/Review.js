"use client"
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import Label from "@/components/common/Label";
import {reviews} from "@/data/home";

const styles = {
    yellow: "bg-yellow",
    violet: "bg-violet",
};

const formatDate = (iso) => iso.split("-").reverse().join(".");

export default function Review() {
    const {theme} = useContext(StateContext);

    return (
        <section className={`${styles[theme]}`} id={"opinie"}>
            <div className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[75px]"}>
                <div className={"mb-[42px] flex flex-col justify-center items-center text-center"}>
                    <Label text={"Opinie"} type={"black"}/>
                    <h2>Co mówią nasi klienci?</h2>
                </div>
                <div className={"flex justify-between gap-4 max-lg:flex-col"}>
                    {reviews.map((item) => (
                        <ReviewCard key={item.user + item.date} data={item}/>
                    ))}
                </div>
            </div>
        </section>
    )
}


function ReviewCard({data}) {
    const {user, city, text, date} = data;

    return (
        <figure className={"w-full bg-white rounded-2xl px-[40px] py-[50px] flex flex-col"}>
            <blockquote className={"flex-grow"}>
                <p className={"small mb-[30px]"}>{text}</p>
            </blockquote>
            <figcaption>
                <span className={"block font-[600]"}>{user}, {city}</span>
                <time dateTime={date} className={"text-[13px] text-[#878787]"}>{formatDate(date)}</time>
            </figcaption>
        </figure>
    )
}

"use client"
import {Label} from "../index";
import {StateContext} from "../../context/StateContext";
import {useContext} from "react";
import Link from "next/link";


const NewsCard = ({...props}) => {

    const {title, slug, image, imageAlt, date} = props.data;
    const {theme} = useContext(StateContext);

    let customDate = new Date(date);
    customDate = customDate.toLocaleDateString();

    const styles = {
        violet: "bg-violet text-white",
        yellow: "bg-yellow text-black",
    }

    return (
        <Link href={`/aktualnosci/${slug}`} className={"relative max-lg:my-6"}>
            <img src={image} alt={`${imageAlt}`} className={"w-full h-[300px] object-cover rounded-2xl"}/>
            <div className={"mt-[32px]"}>
                <Label text={customDate} />
                <h3 className={"mt-[18px]"}>{title}</h3>
            </div>
        </Link>
    )
}


export default function News({data}) {


    return (
        <section className={"max-w-[1420px] mx-auto px-12 py-[75px] max-md:px-0"}>
            <div className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[75px]"}>
                <div className={"mb-[42px] flex flex-col justify-center items-center text-center"}>
                    <Label text={"Aktualności"}/>
                    <h2>Bądź na bieżąco!</h2>
                </div>
                <div className={"flex justify-between gap-4 max-lg:flex-col"}>
                    {
                        data && data.map((item, index) => {
                            return (
                                <NewsCard key={index} data={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
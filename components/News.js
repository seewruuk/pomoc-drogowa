"use client"
import {Label} from "@/components/index";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";
import Link from "next/link";


const NewsCard = ({...props}) => {

    const {title, slug, date, image} = props.data;

    const {theme} = useContext(StateContext);
    const styles = {
        violet: "bg-violet text-white",
        yellow: "bg-yellow text-black",
    }

    return (
        <Link href={`/aktualtnosci/${slug}`} className={"relative max-lg:my-6"}>
            <img src={image} alt={"news"} className={"w-full h-[300px] object-cover rounded-2xl"}/>
            <div className={"mt-[32px]"}>
                <Label text={date} />
                <h3 className={"mt-[18px]"}>{title}</h3>
            </div>
        </Link>
    )
}


export default function News() {


    const data = [
        {
            title: "Nowa usługa w naszej ofercie!",
            slug: "nowa-usluga-w-naszej-ofercie",
            date: "12.05.2021",
            image: "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",


        },
        {
            title: "Zmiana godzin otwarcia",
            slug: "zmiana-godzin-otwarcia",
            date: "12.05.2021",
            image: "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Zmiana w cenniku",
            slug: "zmiana-w-cenniku",
            date: "12.05.2021",
            image: "https://images.pexels.com/photos/276334/pexels-photo-276334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ]


    return (
        <section className={"max-w-[1420px] mx-auto px-12 py-[75px] max-md:px-0"}>
            <div className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[75px]"}>
                <div className={"mb-[42px] flex flex-col justify-center items-center text-center"}>
                    <Label text={"Aktualności"}/>
                    <h2>Bądź na bieżąco!</h2>
                </div>
                <div className={"flex justify-between gap-4 max-lg:flex-col"}>
                    {
                        data.map((item, index) => {
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
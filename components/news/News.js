"use client"
import Label from "@/components/common/Label";
import Link from "next/link";
import SmartImage from "@/components/common/SmartImage";


const NewsCard = ({...props}) => {

    const {title, slug, image, lqip, imageAlt, date} = props.data;
    const customDate = date ? new Date(date).toLocaleDateString("pl-PL") : "";

    return (
        <Link href={`/aktualnosci/${slug}`} className={"relative max-lg:my-6"}>
            <div className={"relative w-full h-[300px] rounded-2xl overflow-hidden bg-[#EBEBEB]"}>
                <SmartImage src={image} lqip={lqip} alt={imageAlt || title} fill sizes="(max-width: 1024px) 100vw, 33vw" className={"object-cover"}/>
            </div>
            <div className={"mt-[32px]"}>
                <Label text={customDate} />
                <h3 className={"mt-[18px]"}>{title}</h3>
            </div>
        </Link>
    )
}


export default function News({data}) {


    return (
        <section className={"max-w-[1420px] mx-auto px-12 py-[75px] max-md:px-6"}>
                <div className={"mb-[42px] flex flex-col justify-center items-center text-center"}>
                    <Label text={"Aktualności"}/>
                    <h2>Bądź na bieżąco!</h2>
                </div>
                <div className={"flex justify-between gap-4 max-lg:flex-col"}>
                    {
                        data && data.map((item, index) => {
                            return (
                                <NewsCard key={item.slug || index} data={item}/>
                            )
                        })
                    }
                </div>
        </section>
    )
}
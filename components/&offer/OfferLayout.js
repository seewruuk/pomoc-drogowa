"use client"
import {useEffect, useState} from "react";
import {getSingleOffer} from "@/sanity/lib/sanity-utils";
import {Faq, Gallery, OfferHero, Separator, Services} from "@/components";
import Advantages from "@/components/&offer/Advantages";
import HowWeWork from "@/components/&offer/HowWeWork";

export default function OfferLayout({slug}) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            const fetchData = async () => {
                try {
                    const data = await getSingleOffer(slug);
                    setData(data)
                } catch (e) {
                    console.log("error", e)
                }
                setIsLoading(false)
            }
            fetchData();
        }
        setIsLoading(false)

    }, []);

    console.log("data", data)


    return (
        <div className={"relative"}>
            {
                data && (
                    <>
                        <OfferHero data={data}/>
                        <Advantages data={data}/>
                        <HowWeWork data={data}/>
                        {
                            data.services && data.service_header && (
                                <Services data={data.services} header={data.service_header}/>
                            )
                        }
                        <Gallery images={data.gallery}/>
                        <Faq data={data.faq}/>
                        <Separator/>

                    </>

                )
            }

        </div>
    )
}
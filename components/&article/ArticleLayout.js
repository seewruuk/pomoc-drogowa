"use client"
import {useEffect, useState} from "react";
import {getSingleArticle} from "@/sanity/lib/sanity-utils";
import LowHero from "@/components/common/LowHero";
import Loader from "@/components/common/Loader";
import {PortableText} from "@portabletext/react";
import {urlForImage} from "@/sanity/lib/image";

export default function ArticleLayout({slug}) {

    const [data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const ptComponents = {
        block: {
            normal: ({children}) => {
                return (
                    <p>
                        {children}
                    </p>
                )
            }
        },
        types: {
            image: ({value}) => {
                if (!value?.asset?._ref) {
                    return null
                }
                return (
                    <img src={urlForImage(value.asset._ref)} alt={value.alt} className={"w-full h-[400px] object-cover rounded-2xl"}/>
                )
            }

        }


    }


    useEffect(() => {
        if (isLoading) {
            const fetchData = async () => {
                try {
                    const data = await getSingleArticle(slug);
                    setData(data)
                    console.log(data)
                } catch (e) {
                    console.log("error", e)
                }
                setIsLoading(false)
            }
            fetchData();
        }
        setIsLoading(false)

    }, [slug, isLoading]);


    if (!isLoading && data) {
        return (
            <>
                <LowHero title={data.title} text={"Aktualności"}/>
                <section className={"max-w-[1420px] mx-auto px-12 my-[55px] flex flex-col gap-[55px] max-md:px-6"}>
                    <PortableText value={data.description} components={ptComponents}/>
                </section>
            </>
        )
    } else {
        return (
            <Loader/>
        )
    }
}
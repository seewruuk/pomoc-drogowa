"use client"
import {useEffect, useState} from "react";
import LowHero from "@/components/common/LowHero";
import {getGallery} from "@/sanity/lib/sanity-utils";
import Loader from "@/components/common/Loader";
import {Gallery} from "@/components";

export default function GalleryLayout() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isLoading) {
            const fetchData = async () => {
                try {
                    const data = await getGallery();
                    setData(data)
                    console.log("gallery data", data)
                } catch (e) {
                    console.log("error", e)
                }
                setIsLoading(false)
            }
            fetchData();
        }
        setIsLoading(false)

    }, [data, isLoading]);

    if (data !== null) {
        return (
            <>
                <LowHero title={data.title} image={data.image} text={"Galeria zdjęć"}/>
                    <Gallery images={data.images}/>
            </>
        )
    } else {
        return (
            <Loader/>
        )
    }

}
import LowHero from "@/components/common/LowHero";
import Gallery from "@/components/common/Gallery";

export default function GalleryLayout({data}) {
    return (
        <>
            <LowHero title={data?.title || "Galeria zdjęć"} image={data?.image} lqip={data?.lqip} text={"Galeria zdjęć"}/>
            {data?.images?.length > 0 ? (
                <Gallery images={data.images}/>
            ) : (
                <p className={"text-center py-[75px]"}>Zdjęcia pojawią się wkrótce.</p>
            )}
        </>
    )
}

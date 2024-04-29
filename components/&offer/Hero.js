import Link from "next/link";
import LowHero from "@/components/common/LowHero";

export default function OfferHero({data}) {

    const {background_image, background_image_alt, category, header_desc, header} = data;
    const cat = category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    console.log("dataaaa",data)

    return (
       <LowHero text={"Usługi"} category={cat} title={header} desc={header_desc} image={background_image} />
    )
}
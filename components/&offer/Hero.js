import LowHero from "@/components/common/LowHero";

const formatCategory = (category = "") =>
    category.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

export default function OfferHero({data}) {
    const {background_image, background_lqip, category, header_desc, header} = data;

    return (
        <LowHero text={"Usługi"} category={formatCategory(category)} title={header} desc={header_desc}
                 image={background_image} lqip={background_lqip}/>
    )
}

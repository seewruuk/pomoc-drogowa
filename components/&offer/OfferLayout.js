import {Faq, Gallery, OfferHero, Separator, Services} from "@/components";
import Advantages from "@/components/&offer/Advantages";
import HowWeWork from "@/components/&offer/HowWeWork";
import Reveal from "@/components/common/Reveal";

// Dane oferty przychodzą z serwera (app/uslugi/[slug]/page.js)
export default function OfferLayout({data}) {
    return (
        <div className={"relative"}>
            <OfferHero data={data}/>
            {data.advantages?.length > 0 && (
                <Reveal><Advantages data={data}/></Reveal>
            )}
            {data.how_we_work?.length > 0 && (
                <Reveal><HowWeWork data={data}/></Reveal>
            )}
            {data.services?.length > 0 && data.service_header && (
                <Reveal><Services data={data.services} header={data.service_header}/></Reveal>
            )}
            {data.gallery?.length > 0 && (
                <Reveal><Gallery images={data.gallery}/></Reveal>
            )}
            {data.faq?.length > 0 && (
                <Reveal><Faq data={data.faq}/></Reveal>
            )}
            <Separator/>
        </div>
    )
}

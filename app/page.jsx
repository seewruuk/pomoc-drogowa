import {About, Benefits, Faq, Gallery, Hero, Review, Separator, Services} from "@/components";
import Reveal from "@/components/common/Reveal";
import JsonLd from "@/components/common/JsonLd";
import {getAbout, getHeroElements, getImages} from "@/sanity/lib/sanity-utils";
import {homeFaq, homeServices} from "@/data/home";
import {faqJsonLd} from "@/lib/site";

// Odświeżanie treści z Sanity co 10 min (ISR) – wartość musi być literałem
export const revalidate = 600;

export default async function Home() {
    // Wszystkie dane pobierane równolegle na serwerze – trafiają od razu do HTML (SEO + szybszy start)
    const [heroElements, about, images] = await Promise.all([
        getHeroElements(),
        getAbout(),
        getImages(),
    ]);

    const galleryImages = images?.images?.filter((i) => i?.image) ?? [];

    return (
        <div className={"relative"}>
            <JsonLd data={faqJsonLd(homeFaq)}/>

            <Hero slides={heroElements}/>

            <Benefits/>

            {about && (
                <Reveal>
                    <About data={about}/>
                </Reveal>
            )}

            <Reveal>
                <Services
                    data={homeServices}
                    header={"Kompleksowa pomoc drogowa, na którą możesz liczyć"}
                    desc={"Nasze holowniki są gotowe, aby szybko i bezpiecznie dostarczyć Twój pojazd do wybranego miejsca."}/>
            </Reveal>

            {galleryImages.length > 0 && (
                <Reveal>
                    <Gallery images={galleryImages}/>
                </Reveal>
            )}

            <Reveal>
                <Review/>
            </Reveal>

            <Reveal>
                <Faq data={homeFaq}/>
            </Reveal>

            <Separator/>
        </div>
    );
}


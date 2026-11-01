import {notFound} from "next/navigation";
import OfferLayout from "@/components/&offer/OfferLayout";
import JsonLd from "@/components/common/JsonLd";
import {getOffers, getSingleOffer} from "@/sanity/lib/sanity-utils";
import {company, faqJsonLd, siteUrl} from "@/lib/site";
import {buildMetadata} from "@/lib/metadata";

export const revalidate = 600;

// Strony usług generowane statycznie przy budowaniu, nowe dobudowują się same (ISR)
export async function generateStaticParams() {
    const offers = await getOffers();
    return offers.map((o) => ({slug: o.slug}));
}

export async function generateMetadata({params}) {
    const item = await getSingleOffer(params.slug);
    if (!item) return {title: "Nie znaleziono strony", robots: {index: false}};

    return buildMetadata({
        seo: {
            title: item.seo?.meta_title,
            description: item.seo?.meta_description,
            keywords: item.seo?.meta_keywords,
            canonical: item.seo?.canonical_tag,
        },
        fallbackTitle: item.header,
        fallbackDescription: item.header_desc,
        path: `/uslugi/${item.slug}/`,
        image: item.background_image,
    });
}

export default async function Page({params}) {
    const data = await getSingleOffer(params.slug);
    if (!data) notFound();

    const url = `${siteUrl}/uslugi/${data.slug}/`;
    const serviceLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.header,
        description: data.header_desc,
        url,
        serviceType: data.category,
        areaServed: company.areaServed,
        provider: {"@id": `${siteUrl}/#business`},
    };

    return (
        <>
            <JsonLd data={serviceLd}/>
            <JsonLd data={faqJsonLd(data.faq)}/>
            <OfferLayout data={data}/>
        </>
    );
}

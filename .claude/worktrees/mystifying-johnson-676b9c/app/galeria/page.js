import GalleryLayout from "@/components/&gallery/GalleryLayout";
import {getGallery} from "@/sanity/lib/sanity-utils";

export default async function Page() {
    return (
        <GalleryLayout/>
    )
}

export async function generateMetadata() {
    const item = await getGallery();

    if(!item) return {
        title: "Nie znaleziono strony",
        description: "Strona której szukasz, prawdopodobnie nie istnieje",
    }

    return {
        title: item.seo && item.seo.metaTitle ? item.seo.metaTitle : item.title,
        description: item.seo && item.seo.metaDescription ? item.seo.metaDescription : "",
        keywords: item.seo && item.seo.metaKeywords ? item.seo.metaKeywords.map((item) => item).join(", ") : "",
        alternates: {
            canonical: item.seo && item.seo.canonicalTag ? item.seo.canonicalTag : ""
        },
    }
}
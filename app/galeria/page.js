import GalleryLayout from "@/components/&gallery/GalleryLayout";
import {getGallery} from "@/sanity/lib/sanity-utils";
import {buildMetadata} from "@/lib/metadata";

export const revalidate = 600;

export async function generateMetadata() {
    const item = await getGallery();

    return buildMetadata({
        seo: {
            title: item?.seo?.metaTitle,
            description: item?.seo?.metaDescription,
            keywords: item?.seo?.metaKeywords,
            canonical: item?.seo?.canonicalTag,
        },
        fallbackTitle: item?.title || "Galeria zdjęć",
        fallbackDescription: "Zobacz zdjęcia naszej floty, realizacji holowania i transportu maszyn w Trójmieście.",
        path: "/galeria/",
        image: item?.image,
    });
}

export default async function Page() {
    const data = await getGallery();
    return <GalleryLayout data={data}/>;
}

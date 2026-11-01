import {getAllArticles, getGallery, getOffers} from "@/sanity/lib/sanity-utils";
import {siteUrl} from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap() {
    const [offers, articles, gallery] = await Promise.all([getOffers(), getAllArticles(), getGallery()]);

    const toEntry = (path, item, priority) => ({
        url: `${siteUrl}${path}`,
        lastModified: new Date(item?._updatedAt || item?._createdAt || Date.now()),
        priority,
    });

    return [
        {url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1},
        ...offers.map((item) => toEntry(`/uslugi/${item.slug}/`, item, 0.9)),
        toEntry("/galeria/", gallery, 0.6),
        ...articles.map((item) => toEntry(`/aktualnosci/${item.slug}/`, item, 0.5)),
    ];
}

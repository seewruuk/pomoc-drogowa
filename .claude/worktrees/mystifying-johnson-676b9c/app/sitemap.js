import {getAllArticles, getOffers} from "@/sanity/lib/sanity-utils";

export default async function sitemap() {


    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const offers = await getOffers();
    const articles = await getAllArticles();

    const offerUrl = offers.map((item) => {
        return {
            url: `${baseUrl}/uslugi/${item.slug}`,
            lastModified: `${item._createdAt}`
        }
    })

    const articleUrl = articles.map((item) => {
        return {
            url: `${baseUrl}/aktualnosci/${item.slug}`,
            lastModified: `${item._createdAt}`
        }
    })

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        ...offerUrl,
        ...articleUrl
    ]


}
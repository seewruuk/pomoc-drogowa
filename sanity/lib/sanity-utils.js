import groq from "groq";
import {client} from "./client";

export async function getPosts() {
    return client.fetch(
        groq`*[_type == "news"] | order(publishedAt desc)`
    )
}

export async function getThreeLatestPosts() {
    return client.fetch(
        groq`*[_type == "news"]{
            title,
            "slug": slug.current,
            "image": image.asset->url,
            imageAlt,
            date,
        } | order(publishedAt desc)[0...3]`
    )
}

export async function getSingleOffer(slug) {
    return client.fetch(
        groq`*[_type == "offer" && slug.current == "${slug}"] {
            category,
            header,
            "slug" : slug.current,
            seo,
            background_image,
            background_image_alt,
            header_desc,
            advantages,
            how_we_work,
            "gallery": gallery[].asset->url,
            faq,
            service_header,
            services[]{
                "icon": icon.asset->url,
                title,
                desc
            }
        }[0]`,
        {slug}
    )
}
import groq from "groq";
import {client} from "./client";

export async function getPosts() {
    return client.fetch(
        groq`*[_type == "news"] | order(publishedAt desc)`
    )
}

export async function getGallery(){
    return client.fetch(
        groq`*[_type == "gallery"]{
            title,
            "image" : image.asset->url,
            imageAlt,
            seo,
            images[]{
                "image": image.asset->url,
                imageAlt,
            }
        }[0]`
    )
}

export async function getOffers(){
    return client.fetch(
        groq`*[_type == "offer"]{
            "slug": slug.current,
                    _createdAt,

        } | order(_createdAt desc)`
    )
}
export async function getAbout(){
    return client.fetch(
        groq`*[_type == "about"]{
            header,
            description,
            images[]{
                "image": image.asset->url,
                imageAlt,
            }
        } | order(_createdAt desc)`
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
export async function getAllArticles() {
    return client.fetch(
        groq`*[_type == "news"]{
            "slug": slug.current,
                    _createdAt,

        } | order(publishedAt desc)`
    )

}

export async function getHeroElements(){
    return client.fetch(
        groq`*[_type == "hero"]{
            "image": image.asset->url,
            imageAlt,
            header,
            desc,
            button_text,
            button_url,
        }`
    )
}

export async function getImages(){
    return client.fetch(
        groq`*[_type == "images"]{
            header,
            images[]{
                "image": image.asset->url,
                imageAlt,
            }
           
        }`
    )
}

export async function getSingleOffer(slug) {
    return client.fetch(
        groq`*[_type == "offer" && slug.current == "${slug}"] {
            category,
            header,
            "slug" : slug.current,
            seo,
            "background_image" : background_image.asset->url,
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

export async function getSingleArticle(slug){
    return client.fetch(
        groq`*[_type == "news" && slug.current == "${slug}"] {
            title,
            "slug": slug.current,
            "image": image.asset->url,
            imageAlt,
            date,
            content,
            seo,
            description,
        }[0]`,
        {slug}
    )
}
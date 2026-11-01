import groq from "groq";
import {sanityFetch} from "./client";

// Pola zdjęcia: URL + rozmyty podgląd (LQIP) do płynnego ładowania
const img = (field) => `"image": ${field}.asset->url, "lqip": ${field}.asset->metadata.lqip`;

// Artykuły oznaczone jako nieopublikowane nie trafiają na stronę
const publishedNews = `_type == "news" && published != false && defined(slug.current)`;

export function getGallery() {
    return sanityFetch(
        groq`*[_type == "gallery"][0]{
            title,
            ${img("image")},
            imageAlt,
            seo,
            _updatedAt,
            images[]{
                ${img("image")},
                imageAlt,
            }
        }`
    );
}

export function getOffers() {
    return sanityFetch(
        groq`*[_type == "offer" && defined(slug.current)] | order(_createdAt desc){
            "slug": slug.current,
            _createdAt,
            _updatedAt,
        }`,
        {},
        []
    );
}

export function getAbout() {
    return sanityFetch(
        groq`*[_type == "about"] | order(_createdAt desc)[0]{
            header,
            description,
            images[]{
                ${img("image")},
                imageAlt,
            }
        }`
    );
}

export function getThreeLatestPosts() {
    return sanityFetch(
        groq`*[${publishedNews}] | order(date desc)[0...3]{
            title,
            "slug": slug.current,
            ${img("image")},
            imageAlt,
            date,
        }`,
        {},
        []
    );
}

export function getAllArticles() {
    return sanityFetch(
        groq`*[${publishedNews}] | order(date desc){
            "slug": slug.current,
            _createdAt,
            _updatedAt,
        }`,
        {},
        []
    );
}

export function getHeroElements() {
    return sanityFetch(
        groq`*[_type == "hero"]{
            ${img("image")},
            imageAlt,
            header,
            desc,
            button_text,
            button_url,
        }`,
        {},
        []
    );
}

export function getImages() {
    return sanityFetch(
        groq`*[_type == "images"][0]{
            header,
            images[]{
                ${img("image")},
                imageAlt,
            }
        }`
    );
}

// Parametr $slug zamiast wklejania tekstu do zapytania – chroni przed wstrzyknięciem GROQ
export function getSingleOffer(slug) {
    return sanityFetch(
        groq`*[_type == "offer" && slug.current == $slug][0]{
            category,
            header,
            "slug": slug.current,
            seo,
            "background_image": background_image.asset->url,
            "background_lqip": background_image.asset->metadata.lqip,
            background_image_alt,
            header_desc,
            advantages,
            how_we_work,
            "gallery": gallery[]{"image": asset->url, "lqip": asset->metadata.lqip},
            faq,
            service_header,
            services[]{
                "icon": icon.asset->url,
                title,
                desc
            },
            _updatedAt,
        }`,
        {slug}
    );
}

export function getSingleArticle(slug) {
    return sanityFetch(
        groq`*[${publishedNews} && slug.current == $slug][0]{
            title,
            "slug": slug.current,
            ${img("image")},
            imageAlt,
            date,
            seo,
            description,
            _updatedAt,
        }`,
        {slug}
    );
}

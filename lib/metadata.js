import {siteUrl} from "@/lib/site";

const truncate = (text, max = 160) => {
    if (!text) return undefined;
    const clean = String(text).replace(/\s+/g, " ").trim();
    return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean;
};

// Kanoniczny adres: z CMS (jeśli podany) albo adres bieżącej podstrony
const canonicalFor = (canonical, path) => {
    if (canonical && /^https?:\/\//.test(canonical)) return canonical;
    if (canonical && canonical.startsWith("/")) return `${siteUrl}${canonical}`;
    return `${siteUrl}${path}`;
};

/**
 * Wspólne metadane podstron z danych SEO z Sanity – z sensownymi wartościami domyślnymi,
 * żeby nigdy nie wyrenderować pustego description czy canonicala.
 */
export function buildMetadata({seo = {}, fallbackTitle, fallbackDescription, path, image}) {
    const title = seo.title || fallbackTitle;
    const description = truncate(seo.description || fallbackDescription);
    const url = canonicalFor(seo.canonical, path);
    const images = image ? [{url: `${image}?w=1200&h=630&fit=crop&auto=format`, width: 1200, height: 630}] : undefined;

    return {
        // Tytuł z CMS jest już kompletny – nie doklejamy nazwy firmy z szablonu
        title: seo.title ? {absolute: seo.title} : title,
        description,
        keywords: seo.keywords?.length ? seo.keywords.join(", ") : undefined,
        alternates: {canonical: url},
        openGraph: {
            title,
            description,
            url,
            type: "website",
            locale: "pl_PL",
            ...(images ? {images} : {}),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(images ? {images: images.map((i) => i.url)} : {}),
        },
    };
}

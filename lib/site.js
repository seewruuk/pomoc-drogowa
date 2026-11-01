// Centralne dane firmy i adres strony – używane w menu, stopce, SEO i JSON-LD.

function resolveSiteUrl() {
    const fromEnv = process.env.NEXT_PUBLIC_BASE_URL;
    if (fromEnv) return fromEnv.replace(/\/+$/, "");

    // Fallback dla Vercel, gdy NEXT_PUBLIC_BASE_URL nie jest ustawione
    const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
    if (vercel) return `https://${vercel}`;

    return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const company = {
    name: "Śliwiński Pomoc Drogowa",
    shortName: "Pomoc Drogowa Śliwiński",
    email: "pomocdrogowa24.dawid@gmail.com",
    phones: [
        {label: "Główny", display: "603 530 530", displayFull: "+48 603 530 530", href: "tel:+48603530530"},
        {label: "Roboczy", display: "601 633 954", displayFull: "+48 601 633 954", href: "tel:+48601633954"},
    ],
    social: {
        facebook: "https://www.facebook.com/sliwinski.pomoc.drogowa/",
        instagram: "https://www.instagram.com/pomocdrogowasliwinski/",
    },
    areaServed: ["Gdańsk", "Gdynia", "Sopot", "Trójmiasto", "województwo pomorskie"],
};

// Dane strukturalne (schema.org) dla Google – firma lokalna działająca 24/7
export function localBusinessJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "AutomotiveBusiness",
        "@id": `${siteUrl}/#business`,
        name: company.name,
        url: `${siteUrl}/`,
        image: `${siteUrl}/opengraph-image.jpg`,
        logo: `${siteUrl}/opengraph-image.jpg`,
        email: company.email,
        telephone: company.phones[0].displayFull,
        priceRange: "$$",
        areaServed: company.areaServed.map((name) => ({"@type": "Place", name})),
        address: {
            "@type": "PostalAddress",
            addressRegion: "pomorskie",
            addressCountry: "PL",
        },
        openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
        }],
        sameAs: [company.social.facebook, company.social.instagram],
    };
}

export function faqJsonLd(items = []) {
    const valid = items.filter((i) => i?.question && i?.answer);
    if (!valid.length) return null;
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: valid.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {"@type": "Answer", text: item.answer},
        })),
    };
}

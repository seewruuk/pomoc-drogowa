import {siteUrl} from "@/lib/site";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Panel CMS, makieta redesignu i API nie powinny trafiać do wyszukiwarki
            disallow: ['/sanity/', '/redesign/', '/api/'],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    }
}

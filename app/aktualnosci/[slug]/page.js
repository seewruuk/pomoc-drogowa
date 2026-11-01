import {notFound} from "next/navigation";
import ArticleLayout from "@/components/&article/ArticleLayout";
import JsonLd from "@/components/common/JsonLd";
import {getAllArticles, getSingleArticle} from "@/sanity/lib/sanity-utils";
import {company, siteUrl} from "@/lib/site";
import {buildMetadata} from "@/lib/metadata";

export const revalidate = 600;

export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map((a) => ({slug: a.slug}));
}

export async function generateMetadata({params}) {
    const item = await getSingleArticle(params.slug);
    if (!item) return {title: "Nie znaleziono strony", robots: {index: false}};

    const meta = buildMetadata({
        seo: {
            title: item.seo?.metaTitle,
            description: item.seo?.metaDescription,
            keywords: item.seo?.metaKeywords,
            canonical: item.seo?.canonicalTag,
        },
        fallbackTitle: item.title,
        path: `/aktualnosci/${item.slug}/`,
        image: item.image,
    });
    meta.openGraph.type = "article";
    return meta;
}

export default async function Page({params}) {
    const data = await getSingleArticle(params.slug);
    if (!data) notFound();

    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        datePublished: data.date,
        dateModified: data._updatedAt,
        image: data.image ? [data.image] : undefined,
        mainEntityOfPage: `${siteUrl}/aktualnosci/${data.slug}/`,
        author: {"@type": "Organization", name: company.name},
        publisher: {"@id": `${siteUrl}/#business`},
    };

    return (
        <>
            <JsonLd data={articleLd}/>
            <ArticleLayout data={data}/>
        </>
    );
}

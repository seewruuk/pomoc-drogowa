import ArticleLayout from "@/components/&article/ArticleLayout";
import {getSingleArticle} from "@/sanity/lib/sanity-utils";

export default async function Page({params}) {

    return <ArticleLayout slug={params.slug} />
}



export async function generateMetadata({params}) {


    const item = await getSingleArticle(params.slug);
    if(!item) return {
        title: "Nie znaleziono strony",
        description: "Strona której szukasz, prawdopodobnie nie istnieje",
    }

    return {
        title: item.seo && item.seo.metaTitle ? item.seo.metaTitle : item.title,
        description: item.seo && item.seo.metaDescription ? item.seo.metaDescription : "",
        keywords: item.seo && item.seo.metaKeywords ? item.seo.metaKeywords.map((item) => item).join(", ") : "",
        alternates: {
            canonical: item.seo && item.seo.canonicalTag ? item.seo.canonicalTag : ""
        },
    }

}
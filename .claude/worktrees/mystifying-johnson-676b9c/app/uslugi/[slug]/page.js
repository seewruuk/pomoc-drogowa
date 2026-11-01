
import OfferLayout from "@/components/&offer/OfferLayout";
import {getSingleOffer} from "@/sanity/lib/sanity-utils";

export default async function Page({params}) {



   return <OfferLayout slug={params.slug} />
}


export async function generateMetadata({params}) {


   const item = await getSingleOffer(params.slug);
   if(!item) return {
      title: "Nie znaleziono strony",
      description: "Strona której szukasz, prawdopodobnie nie istnieje",
   }

   return {
      title: item.seo && item.seo.meta_title ? item.seo.meta_title : item.title,
      description: item.seo && item.seo.meta_description ? item.seo.meta_description : "",
      keywords: item.seo && item.seo.meta_keywords ? item.seo.meta_keywords.map((item) => item).join(", ") : "",
      alternates: {
         canonical: item.seo && item.seo.canonical_tag ? item.seo.canonical_tag : ""
      },
   }

}


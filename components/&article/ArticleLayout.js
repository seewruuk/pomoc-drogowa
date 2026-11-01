import LowHero from "@/components/common/LowHero";
import SmartImage from "@/components/common/SmartImage";
import {PortableText} from "@portabletext/react";
import {urlForImage} from "@/sanity/lib/image";

const ptComponents = {
    block: {
        normal: ({children}) => <p>{children}</p>,
    },
    types: {
        image: ({value}) => {
            if (!value?.asset?._ref) return null;
            return (
                <div className={"relative w-full h-[400px] rounded-2xl overflow-hidden bg-[#EBEBEB]"}>
                    <SmartImage src={urlForImage(value.asset._ref)} alt={value.alt || ""} fill
                                sizes="(max-width: 1420px) 100vw, 1324px" className={"object-cover"}/>
                </div>
            )
        }
    }
}

// Dane artykułu przychodzą z serwera (app/aktualnosci/[slug]/page.js)
export default function ArticleLayout({data}) {
    return (
        <article>
            <LowHero title={data.title} text={"Aktualności"} image={data.image} lqip={data.lqip}/>
            <section className={"max-w-[1420px] mx-auto px-12 my-[55px] flex flex-col gap-[55px] max-md:px-6"}>
                {data.description && <PortableText value={data.description} components={ptComponents}/>}
            </section>
        </article>
    )
}

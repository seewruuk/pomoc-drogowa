"use client"
import Image from "next/image";
import {useState} from "react";

const isSanity = (src) => typeof src === "string" && src.includes("cdn.sanity.io");

// Zdjęcia z Sanity skalujemy po stronie CDN Sanity (szybciej i bez limitów optymalizacji Vercel)
export function sanityLoader({src, width, quality}) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality || 75));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
}

/**
 * next/image z:
 * - loaderem Sanity CDN dla zdjęć z CMS,
 * - rozmytym podglądem (LQIP), gdy jest dostępny,
 * - delikatnym pojawieniem się po załadowaniu.
 */
export default function SmartImage({src, lqip, alt = "", className = "", fade, onLoad, ...props}) {
    const [loaded, setLoaded] = useState(false);
    if (!src) return null;

    // Z rozmytym podglądem nie ukrywamy obrazka; zdjęcia priorytetowe (LCP) pokazujemy od razu
    if (fade === undefined) fade = !lqip && !props.priority;

    const sanity = isSanity(src);
    const placeholderProps = lqip ? {placeholder: "blur", blurDataURL: lqip} : {};

    return (
        <Image
            src={src}
            alt={alt}
            {...(sanity ? {loader: sanityLoader} : {})}
            {...placeholderProps}
            {...props}
            onLoad={(e) => {
                setLoaded(true);
                onLoad?.(e);
            }}
            className={`${className} ${fade ? `transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}` : ""}`}
        />
    );
}

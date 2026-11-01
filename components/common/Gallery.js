"use client"
import {useCallback, useContext, useEffect, useState} from "react";
import {StateContext} from "@/context/StateContext";
import Label from "@/components/common/Label";
import SmartImage from "@/components/common/SmartImage";
import {AnimatePresence, motion} from "framer-motion";

const borderStyles = {
    yellow: "border-yellow",
    violet: "border-violet"
};

// Ujednolica format: {image, lqip, imageAlt} albo sam URL (starszy format galerii usług)
const normalize = (item) => typeof item === "string" ? {image: item} : item;

export default function Gallery({images}) {
    const {theme} = useContext(StateContext);
    const items = (images ?? []).map(normalize).filter((i) => i?.image);
    const [openIndex, setOpenIndex] = useState(null);

    const close = useCallback(() => setOpenIndex(null), []);
    const step = useCallback((dir) => setOpenIndex((i) => (i + dir + items.length) % items.length), [items.length]);

    // Obsługa klawiatury i blokada przewijania w podglądzie
    useEffect(() => {
        if (openIndex === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [openIndex, close, step]);

    if (!items.length) return null;

    const altFor = (item, index) => item.imageAlt || `Pomoc drogowa Śliwiński – zdjęcie ${index + 1}`;
    const current = openIndex !== null ? items[openIndex] : null;

    return (
        <section className={"mx-auto max-w-[1420px] px-12 py-[75px] max-md:px-6"}>
            <div className={"flex items-center flex-col text-center max-w-[600px] mx-auto mb-[42px]"}>
                <Label text={"Zdjęcia"}/>
                <h2>Odkryj naszą galerię zdjęć</h2>
            </div>
            <div className={"grid gap-[20px] md:grid-cols-2 sm:grid-cols-1"}>
                {items.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setOpenIndex(index)}
                        aria-label={`Powiększ: ${altFor(item, index)}`}
                        className={`group relative block overflow-hidden border-2 rounded-lg mx-auto w-full bg-[#EBEBEB] cursor-zoom-in
                                   max-sm:h-[220px] max-sm:max-w-[450px]
                                   max-md:h-[350px] max-md:max-w-[600px]
                                   max-lg:h-[200px] max-lg:max-w-[500px]
                                   lg:h-[320px] lg:max-w-full
                                   ${borderStyles[theme]}`}
                    >
                        <SmartImage
                            src={item.image}
                            lqip={item.lqip}
                            alt={altFor(item, index)}
                            fill
                            sizes="(min-width: 1420px) 670px, (min-width: 768px) 50vw, 100vw"
                            className={"object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"}
                        />
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {current && (
                    <motion.div
                        key="lightbox"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Podgląd zdjęcia"
                        className={"fixed inset-0 z-[2000] bg-black/90 flex items-center justify-center p-4"}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={close}
                    >
                        <div className={"relative w-full max-w-[1200px] h-[80vh]"} onClick={(e) => e.stopPropagation()}>
                            <SmartImage
                                key={openIndex}
                                src={current.image}
                                lqip={current.lqip}
                                alt={altFor(current, openIndex)}
                                fill
                                sizes="(min-width: 1200px) 1200px, 100vw"
                                className={"object-contain"}
                            />
                        </div>

                        <button type="button" onClick={close} aria-label="Zamknij podgląd"
                                className={"absolute top-4 right-4 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl grid place-items-center"}>
                            ×
                        </button>
                        {items.length > 1 && (
                            <>
                                <button type="button" aria-label="Poprzednie zdjęcie"
                                        onClick={(e) => { e.stopPropagation(); step(-1); }}
                                        className={"absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl grid place-items-center"}>
                                    ‹
                                </button>
                                <button type="button" aria-label="Następne zdjęcie"
                                        onClick={(e) => { e.stopPropagation(); step(1); }}
                                        className={"absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl grid place-items-center"}>
                                    ›
                                </button>
                                <span className={"absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm"}>
                                    {openIndex + 1} / {items.length}
                                </span>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

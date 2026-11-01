// Szkielet ładowania podstrony – ten sam układ co LowHero, więc nic nie "skacze" po załadowaniu.
export default function PageSkeleton({label = "Ładowanie strony"}) {
    return (
        <div role="status" aria-live="polite" aria-label={label}>
            <section className={"relative"}>
                <div className={"w-full h-[840px] bg-black"}>
                    <div className={"mx-auto max-w-[1420px] px-12 max-md:px-6 w-full flex justify-start items-center h-full"}>
                        <div className={"max-w-[550px] w-full flex flex-col gap-6"}>
                            <div className={"skeleton-dark h-4 w-32 rounded-full"}/>
                            <div className={"flex flex-col gap-3"}>
                                <div className={"skeleton-dark h-12 w-full rounded-xl"}/>
                                <div className={"skeleton-dark h-12 w-3/4 rounded-xl"}/>
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <div className={"skeleton-dark h-4 w-full rounded-full"}/>
                                <div className={"skeleton-dark h-4 w-11/12 rounded-full"}/>
                                <div className={"skeleton-dark h-4 w-2/3 rounded-full"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bg-white h-[45px] w-full rounded-tl-[30px] rounded-tr-[30px] absolute bottom-0"}/>
            </section>

            <section className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[72px]"}>
                <div className={"flex flex-col items-center gap-4 mb-[64px]"}>
                    <div className={"skeleton h-10 w-40 rounded-full"}/>
                    <div className={"skeleton h-10 w-[min(520px,100%)] rounded-xl"}/>
                </div>
                <div className={"grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"}>
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className={"flex flex-col items-center gap-4"}>
                            <div className={"skeleton h-[136px] w-[136px] rounded-[33px]"}/>
                            <div className={"skeleton h-5 w-2/3 rounded-full"}/>
                            <div className={"skeleton h-4 w-full rounded-full"}/>
                        </div>
                    ))}
                </div>
            </section>
            <span className={"sr-only"}>{label}…</span>
        </div>
    );
}

import {Label} from "@/components";
import {ServiceCard} from "@/components";
import Icon1 from "@/assets/icons/icon1.svg";
import Icon2 from "@/assets/icons/icon2.svg";
import Icon3 from "@/assets/icons/icon3.svg";
import Icon4 from "@/assets/icons/icon4.svg";
import Icon5 from "@/assets/icons/icon5.svg";
import Icon6 from "@/assets/icons/icon6.svg";


export default function Services() {

    const data = [
        {
            icon: Icon1,
            title: "Holowanie",
            desc: "Nie ważne, gdzie jesteś – nasze holowniki są gotowe, aby szybko i bezpiecznie dostarczyć Twój pojazd do wybranego miejsca."
        },
        {
            icon: Icon2,
            title: "Awaryjne Odpalanie",
            desc: "Rozładowana bateria nie jest już problemem. Nasz zespół szybko przywróci życie Twojemu samochodowi, umożliwiając Ci bezpieczny powrót do domu."
        },
        {
            icon: Icon3,
            title: "Wymiana Koła",
            desc: "Przebita opona? Nie martw się, wymienimy ją na miejscu, abyś mógł kontynuować podróż bez zbędnej zwłoki."
        },
        {
            icon: Icon4,
            title: "Transport maszyn budowlanych",
            desc: "Koparki, walce, żurawie i inne."
        },
        {
            icon: Icon5,
            title: "Transport maszyn rolniczych",
            desc: "Traktory, kombajny, opryskiwacze i inne."
        },
        {
            icon: Icon6,
            title: "Transport urządzeń przemysłowych",
            desc: "Maszyny produkcyjne, generatory, urządzenia specjalistyczne i inne."
        }
    ]


    return (
        <section className={"max-w-[1420px] mx-auto px-12 max-md:px-6"}>
            <div className={"w-full flex flex-col"}>

                <div className={"flex items-center flex-col text-center max-w-[600px] mx-auto mb-[72px]"}>
                    <Label text={"Usługi"}/>
                    <h2>Kompleksowa pomoc drogowa, na którą możesz liczyć</h2>
                    <p>Nasze holowniki są gotowe, aby szybko i bezpiecznie dostarczyć Twój pojazd do wybranego
                        miejsca.</p>
                </div>

                <div className={"flex flex-wrap"}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={item+index} className={"lg:w-1/3 h-[530px] p-2 w-full"}>
                                    <ServiceCard icon={item.icon} title={item.title} desc={item.desc} key={index}/>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    )
}
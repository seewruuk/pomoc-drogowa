import {About, Benefits, Gallery, Hero, Services, Review, Faq, News, Separator, NewsComponent} from "@/components";
import Icon1 from "@/assets/icons/icon1.svg";
import Icon2 from "@/assets/icons/icon2.svg";
import Icon3 from "@/assets/icons/icon3.svg";
import Icon4 from "@/assets/icons/icon4.svg";
import Icon5 from "@/assets/icons/icon5.svg";
import Icon6 from "@/assets/icons/icon6.svg";


export default function Home() {

    const services = [
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

    const images = [
        "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/276334/pexels-photo-276334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/276334/pexels-photo-276334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]

    const faq = [
        {
            question : "Jak szybko możecie dotrzeć na miejsce zdarzenia?",
            answer: "Nasz czas reakcji to zazwyczaj 15-30 minut w granicach Trójmiasta, jednak może się on zmieniać w zależności od warunków drogowych i odległości."
        },
        {
            question : "Czy mogę liczyć na pomoc drogową poza granicami Trójmiasta?",
            answer: "Tak, oferujemy pomoc drogową również poza Trójmiastem. Skontaktuj się z nami, aby uzyskać szczegółową wycenę i czas dojazdu."
        },
        {
            question : "Czy świadczycie usługi dla motocykli?",
            answer: "Tak, nasza oferta obejmuje również pomoc drogową dla motocyklistów. Bez względu na typ pojazdu, jesteśmy gotowi Ci pomóc."
        },
        {
            question : "Jak szybko możecie dotrzeć na miejsce zdarzenia?",
            answer: "Nasz czas reakcji to zazwyczaj 15-30 minut w granicach Trójmiasta, jednak może się on zmieniać w zależności od warunków drogowych i odległości."
        }
    ]


    return (
        <div className={"relative"}>
            <Hero/>

            <Benefits/>

            <About/>

            <Services
                data={services}
                header={"Kompleksowa pomoc drogowa, na którą możesz liczyć"}
                desc={"Nasze holowniki są gotowe, aby szybko i bezpiecznie dostarczyć Twój pojazd do wybranego miejsca."}/>

            <Gallery images={images}/>

            <Review/>

            <Faq data={faq}/>

            <NewsComponent />

            <Separator/>

        </div>
    );
}

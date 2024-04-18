import {About, Benefits, Gallery, Hero, Services, Review, Faq, News, Separator} from "@/components";


export default function Home() {
    return (
        <div className={"relative"}>
            <Hero/>

            <Benefits/>

            <About/>

            <Services/>

            <Gallery/>

            <Review/>

            <Faq/>

            <News/>

            <Separator/>

        </div>
    );
}

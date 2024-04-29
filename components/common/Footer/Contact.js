import {Button} from "@/components";

export default function Contact() {
    return (
        <section
            id={"kontakt"}
            className={"max-w-[1420px] mx-auto max-md:px-6 px-12 py-[75px] flex justify-between gap-[72px]"}
        >
            <div>
                <h2>Gotowi pomóc - skontaktuj się z nami!</h2>
                <p>
                    Potrzebujesz szybkiej pomocy drogowej?
                    Skorzystaj z poniższego formularza kontaktowego lub zadzwoń bezpośrednio. Nasz zespół jest do Twojej
                    dyspozycji 24/7.
                </p>
                <Button text={"Zadzwoń / +48 123 123 123"} type={"contact"}/>

            </div>
            <div>

            </div>
        </section>
    )
}
import {Button} from "@/components";


export default function Contact() {

    const image = "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <section
            id={"kontakt"}
            className={"max-w-[1420px] mx-auto max-md:px-6 px-12 py-[75px] flex justify-between gap-[72px] max-lg:flex-col"}
        >
            <div className={"flex-1 flex flex-col justify-center items-start"}>
                <h2>Gotowi pomóc - skontaktuj się z nami!</h2>
                <p>
                    Potrzebujesz szybkiej pomocy drogowej?
                    Skorzystaj z poniższego formularza kontaktowego lub zadzwoń bezpośrednio. Nasz zespół jest do Twojej
                    dyspozycji 24/7.
                </p>
                <div className={"flex flex-col gap-3 items-start mt-[42px]"}>
                    <Button text={"Zadzwoń / +48 123 123 123"} type={"phone"} />
                    <Button text={"Napisz wiadomość / test@wp.pl"} type={"email"}/>
                </div>

            </div>

            <div className={"flex-1"}>
                <img src={image} alt={"contact"} className={"w-full h-full object-cover rounded-2xl"}/>
            </div>

        </section>
    )
}
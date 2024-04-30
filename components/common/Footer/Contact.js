import {Button} from "@/components";
import ContactImage from "@/assets/images/contact-image.png"
import Image from "next/image";

export default function Contact() {


    return (
        <section
            id={"kontakt"}
            className={"max-w-[1420px] mx-auto max-md:px-6 px-12 py-[75px] flex justify-between gap-[72px] max-lg:flex-col"}
        >
            <div className={"flex-1 flex flex-col justify-center items-start"}>
                <h2>Gotowi pomóc - skontaktuj się z nami!</h2>
                <p>
                    Potrzebujesz szybkiej pomocy drogowej?
                    <br/>
                    Zadzwoń bezpośrednio - nasz zespół jest do Twojej
                    dyspozycji 24/7.
                </p>
                <div className={"flex flex-col gap-3 items-start mt-[42px]"}>

                    <Button text={"Napisz wiadomość email"} type={"email"}/>
                    <Button text={"Zadzwoń teraz"} type={"phone"}/>

                </div>

            </div>

            <div className={"flex-1"}>
                <Image src={ContactImage} alt={"contact"} width="0" height="0" sizes="100vw" className={"w-full h-[430px] object-cover rounded-2xl max-lg:h-[300px] max-md:h-auto"}/>
            </div>

        </section>
    )
}
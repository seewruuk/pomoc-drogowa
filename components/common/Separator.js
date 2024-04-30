import {Button} from "@/components";
import SeparatorImage from "@/assets/images/separator-image.png";
import Image from "next/image";

export default function Separator() {
    return (
        <section className={"stack isolate"}>

            <section className={"max-w-[1420px] mx-auto px-12 max-md:px-6 w-full stack-item text-white z-10"}>
                <div className={"max-md:flex max-md:flex-col max-md:items-center max-md:text-center"}>
                    <h2>Potrzebujesz pomocy?</h2>
                    <p className={"mb-[24px]"}>Nie zwlekaj, skontatkuj się z nami!</p>
                    <Button text={"Skontakuj się"}
                            target={"#kontakt"}
                            type={"cta"}
                    />
                </div>
            </section>

            <section className={"w-full bg-black h-[400px] my-[75px] relative isolate stack-item z-0"}>
                <div
                    className={"w-full h-full bg-gradient-to-r from-black from-50% to-transparent absolute top-0 left-0 right-0 bottom-0 z-0 max-md:hidden"}/>
                <Image
                    src={SeparatorImage}
                    alt={"separator"}
                    className={"w-1/2 h-full object-cover float-end absoluter right-0 z-0 max-md:hidden"}/>
            </section>


        </section>
    )
}
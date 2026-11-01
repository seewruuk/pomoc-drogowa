import LowHero from "@/components/common/LowHero";
import Button from "@/components/common/Button";

export const metadata = {
    title: "Nie znaleziono strony",
    description: "Strona, której szukasz, prawdopodobnie nie istnieje.",
    robots: {index: false, follow: true},
};

export default function NotFound() {
    return (
        <>
            <LowHero
                text={"Strona główna"}
                category={"404"}
                title={"Nie znaleźliśmy tej strony"}
                desc={"Adres mógł się zmienić albo strona została usunięta. Wróć na stronę główną lub skontaktuj się z nami – pomoc drogowa działa 24/7."}
            />
            <div className={"max-w-[1420px] mx-auto px-12 max-md:px-6 py-[55px] flex gap-3 flex-wrap"}>
                <Button text={"Zadzwoń teraz"} type={"phone"}/>
                <Button text={"Przejdź do kontaktu"} target={"#kontakt"} type={"cta"}/>
            </div>
        </>
    );
}

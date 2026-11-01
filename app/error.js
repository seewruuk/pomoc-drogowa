"use client"

import {useEffect} from "react";
import {company} from "@/lib/site";

export default function Error({error, reset}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className={"bg-black text-white min-h-[70vh] flex items-center"}>
            <div className={"mx-auto max-w-[1420px] px-12 max-md:px-6 w-full py-[150px]"}>
                <h1 className={"pb-[24px]"}>Coś poszło nie tak</h1>
                <p className={"mb-[32px] max-w-[550px]"}>
                    Nie udało się wczytać tej strony. Spróbuj ponownie – a jeśli potrzebujesz pomocy drogowej, zadzwoń od razu:
                    {" "}<a className={"text-yellow underline"} href={company.phones[0].href}>{company.phones[0].displayFull}</a>.
                </p>
                <button type="button" onClick={reset}
                        className={"px-[23px] py-[12px] rounded-[9px] bg-yellow text-black hover:bg-[#FF9900] transition-all"}>
                    Spróbuj ponownie
                </button>
            </div>
        </section>
    );
}

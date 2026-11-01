import {revalidateTag} from "next/cache";
import {NextResponse} from "next/server";
import {parseBody} from "next-sanity/webhook";
import {SANITY_TAG} from "@/sanity/lib/client";

/**
 * Webhook z Sanity: po publikacji treści strona odświeża się od razu (zamiast czekać do 10 min).
 * Konfiguracja: sanity.io/manage → API → Webhooks → URL: https://TWOJA-DOMENA/api/revalidate
 * oraz ten sam sekret w zmiennej środowiskowej SANITY_REVALIDATE_SECRET.
 */
export async function POST(req) {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
        return NextResponse.json({message: "Brak SANITY_REVALIDATE_SECRET"}, {status: 500});
    }

    try {
        const {isValidSignature, body} = await parseBody(req, secret);
        if (!isValidSignature) {
            return NextResponse.json({message: "Nieprawidłowy podpis"}, {status: 401});
        }
        revalidateTag(SANITY_TAG);
        return NextResponse.json({revalidated: true, type: body?._type ?? null, now: Date.now()});
    } catch (error) {
        return NextResponse.json({message: error?.message || "Błąd"}, {status: 500});
    }
}

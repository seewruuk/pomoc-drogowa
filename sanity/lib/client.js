import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, revalidateSeconds, useCdn} from '../env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
})

export const SANITY_TAG = 'sanity'

/**
 * Pobiera dane z Sanity z cache Next.js (ISR).
 * Błędy są celowo przepuszczane dalej:
 *  - podczas builda przerywają wdrożenie (zostaje poprzednia, działająca wersja strony),
 *  - podczas odświeżania ISR Next.js serwuje ostatnią poprawną wersję strony.
 * `fallback` jest używany tylko, gdy zapytanie nic nie zwróci.
 */
export async function sanityFetch(query, params = {}, fallback = null) {
    const result = await client.fetch(query, params, {
        next: {revalidate: revalidateSeconds, tags: [SANITY_TAG]},
    })
    return result ?? fallback
}

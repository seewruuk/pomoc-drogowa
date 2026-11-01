# Śliwiński Pomoc Drogowa – strona www

Next.js 14 (App Router) + Sanity CMS + Tailwind CSS.

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produkcyjny (wymaga dostępu do API Sanity)
npm run lint
```

Panel treści (Sanity Studio): `/sanity`.

## Zmienne środowiskowe

| Zmienna | Opis |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID projektu Sanity (`rmjk3ild`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset (`production`) |
| `NEXT_PUBLIC_BASE_URL` | **Docelowa domena**, np. `https://twojadomena.pl` (bez `/` na końcu). Używana w canonicalach, Open Graph, sitemap.xml, robots.txt i danych strukturalnych. |
| `SANITY_REVALIDATE_SECRET` | (opcjonalnie) sekret webhooka do natychmiastowego odświeżania treści |

## Jak działają dane

- Treści z Sanity są pobierane **na serwerze** (Server Components) i trafiają od razu do HTML – dobre dla SEO i szybkości.
- Strony są generowane statycznie i odświeżane co 10 minut (ISR, `revalidate = 600`).
- Natychmiastowe odświeżenie po publikacji w Sanity: w sanity.io/manage → API → Webhooks dodaj webhook
  `POST https://TWOJA-DOMENA/api/revalidate` z sekretem równym `SANITY_REVALIDATE_SECRET`.
- Zdjęcia z Sanity są skalowane przez CDN Sanity (`components/common/SmartImage.js`) z rozmytym podglądem (LQIP).

## Struktura

- `app/` – strony (strona główna, `uslugi/[slug]`, `aktualnosci/[slug]`, `galeria`, 404, sitemap, robots, webhook)
- `components/` – komponenty UI
- `data/home.js` – stałe treści strony głównej (usługi, FAQ, opinie)
- `lib/site.js` – dane firmy (telefony, e-mail, social media) i dane strukturalne schema.org
- `lib/metadata.js` – wspólne metadane SEO podstron
- `sanity/` – konfiguracja klienta, zapytania GROQ i schematy CMS
- `app/redesign` – makieta nowego wyglądu (ukryta przed wyszukiwarkami)

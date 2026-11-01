import {Outfit} from "next/font/google";
import "./globals.scss";
import StateContextProvider from "@/context/StateContext";
import ConditionalChrome from "@/components/common/ConditionalChrome";
import JsonLd from "@/components/common/JsonLd";
import {company, localBusinessJsonLd, siteUrl} from "@/lib/site";

const outfit = Outfit({subsets: ["latin", "latin-ext"], display: "swap"});

const defaultTitle = "Śliwiński - Pomoc Drogowa i Transport Ciężkich Maszyn | Trójmiasto";
const defaultDescription = "Zaufaj doświadczeniu Śliwiński Pomoc Drogowa w Trójmieście. Oferujemy profesjonalne usługi transportu maszyn ciężkich oraz szybkie holowanie samochodów. Skontaktuj się z nami 24/7!";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: defaultTitle,
        template: `%s | ${company.name}`,
    },
    description: defaultDescription,
    keywords: "Śliwiński Pomoc Drogowa, pomoc drogowa Trójmiasto, holowanie Gdańsk, transport maszyn Gdynia, pomoc drogowa Sopot, holowanie pojazdów Trójmiasto, usługi transportowe Trójmiasto, szybka pomoc drogowa, transport ciężkiego sprzętu, holowanie 24h",
    applicationName: company.name,
    alternates: {canonical: "/"},
    openGraph: {
        type: "website",
        locale: "pl_PL",
        siteName: company.name,
        title: defaultTitle,
        description: defaultDescription,
        url: "/",
    },
    twitter: {
        card: "summary_large_image",
        title: defaultTitle,
        description: defaultDescription,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {index: true, follow: true, "max-image-preview": "large"},
    },
    formatDetection: {telephone: true, email: true},
};

export const viewport = {
    themeColor: "#0A0A0A",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children}) {
    return (
        <html lang="pl">
        <body className={`${outfit.className} relative`}>
        {/* Bez JavaScriptu animowane sekcje mają być od razu widoczne */}
        <noscript>
            <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={localBusinessJsonLd()}/>
        <StateContextProvider>
            <ConditionalChrome>
                {children}
            </ConditionalChrome>
        </StateContextProvider>
        </body>
        </html>
    );
}

import {Outfit} from "next/font/google";
import "./globals.scss";
import StateContextProvider from "@/context/StateContext";
import MenuLayout from "@/components/common/Menu/_MenuLayout";
import FooterLayout from "@/components/common/Footer/FooterLayout";
import Loader from "@/components/Loader/Loader";
import Head from "next/head";

const inter = Outfit({subsets: ["latin"]});

export const metadata = {
    title: {
        default: "Śliwiński - Pomoc Drogowa i Transport Ciężkich Maszyn | Trójmiasto",
    },
    description: "Zaufaj doświadczeniu Śliwiński Pomoc Drogowa w Trójmieście. Oferujemy profesjonalne usługi transportu maszyn ciężkich oraz szybkie holowanie samochodów. Skontaktuj się z nami 24/7!",
    keywords : "Śliwiński Pomoc Drogowa, pomoc drogowa Trójmiasto, holowanie Gdańsk, transport maszyn Gdynia, pomoc drogowa Sopot, holowanie pojazdów Trójmiasto, usługi transportowe Trójmiasto, szybka pomoc drogowa, transport ciężkiego sprzętu, holowanie 24h",
};

export default function RootLayout({children}) {
    return (
        <html lang="pl">


        <body className={`${inter.className} relative`}>
        <StateContextProvider>
            <Loader/>
            <MenuLayout/>
            {children}
            <FooterLayout/>
        </StateContextProvider>
        </body>
        </html>
    );
}

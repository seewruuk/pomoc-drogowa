import {Outfit} from "next/font/google";
import "./globals.scss";
import StateContextProvider from "@/context/StateContext";
import MenuLayout from "@/components/common/Menu/_MenuLayout";
import FooterLayout from "@/components/common/Footer/FooterLayout";
import Loader from "@/components/Loader/Loader";

const inter = Outfit({subsets: ["latin"]});

export const metadata = {
    title: {
        default: "Śliwiński - Pomoc Drogowa i Transport Ciężkich Maszyn | Trójmiasto",
    },
    description: "Profesjonalna pomoc drogowa i bezpieczny transport maszyn ciężkich na terenie Gdańska, Gdyni i Sopotu. Śliwiński - Twoje wsparcie na drodze, 24/7!",
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

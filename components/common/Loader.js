import {motion, AnimatePresence} from "framer-motion";

export default function Loader() {
    return (
        <motion.section className={"w-screen h-screen bg-black text-white"}>
            <div className={"max-w-[1420px] mx-auto flex flex-col justify-center items-center gap-2 w-full h-full"}>
                <p className={"animate-pulse font-[600]"}>
                    Ładowanie...
                </p>
                <p className={"text-[12px]"}>
                    Trwa ładowanie danych. Proszę czekać.
                </p>
            </div>
        </motion.section>
    )
}
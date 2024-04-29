"use client"
import {motion, AnimatePresence} from "framer-motion";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";
import WhiteLogo from "@/assets/logo-white.svg"
import Image from "next/image"

export default function Loader() {

    const {loader, setLoader} = useContext(StateContext);

    return (
        <AnimatePresence>
            {
                loader && (
                    <motion.div
                        className={"fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black flex justify-center items-center"}
                        style={{
                            zIndex: 10000,
                        }}
                        initial={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 1,
                            }
                        }}
                    >
                        <motion.div
                            initial={{
                                rotate: 0,
                                scale: 0,
                                opacity: 0,
                            }}
                            animate={{
                                rotate: 360,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 3,
                                    stiffness: 260,
                                }
                            }}
                            onAnimationComplete={() => setLoader(false)}
                        >
                            <Image src={WhiteLogo} alt={"Logo"} width={300} height={300}/>
                        </motion.div>

                    </motion.div>
                )
            }

        </AnimatePresence>
    )
}
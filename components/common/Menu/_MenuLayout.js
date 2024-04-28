"use client"

import MobileMenu from "@/components/common/Menu/MobileMenu";
import DesktopMenu from "@/components/common/Menu/DefMenu";
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";


export default function MenuLayout() {


    const {displayVersion} = useContext(StateContext);

    return (
        <>
            {
                displayVersion === "desktop" ? (
                    <DesktopMenu/>
                ) : (
                    <MobileMenu/>
                )
            }


        </>
    )
}
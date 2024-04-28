"use client"
import {Label} from "@/components";
import {useContext} from "react";
import {StateContext} from "@/context/StateContext";

export default function HowWeWork({data}) {

    const {theme} = useContext(StateContext)
    const styles = {
        yellow: "bg-yellow text-black",
        violet: "bg-violet text-white"
    }
    const {how_we_work} = data;

    return (
        <section className={"pt-[72px] pb-[150px] max-w-[1420px] w-full mx-auto px-12 max-md:px-6"}>
            <div className={"w-max-[600px] flex flex-col items-center"}>
                <Label text={"Jak działamy?"}/>
                <h2 className={"text-center"}>Proces naszej pomocy drogowej</h2>
            </div>

            <div
                className={"pt-[64px] grid grid-cols-4 gap-[20px] max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center max-md:gap-[42px]"}>
                {
                    how_we_work.map((item, index) => (
                      <div key={item + index} className={"flex flex-col items-start max-lg:items-center max-lg:text-center"}>
                          <span className={`${styles[theme]} px-[24px] py-[10px] rounded-full text-[14px] mb-[16px]`}>
                              <span className={"font-[600]"}>Krok {index + 1}:</span> {item.how_we_work_header}
                          </span>
                          <p className={"small"}>{item.how_we_work_desc}</p>
                      </div>
                    ))
                }
            </div>
        </section>
    )
}
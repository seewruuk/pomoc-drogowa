import {Label} from "@/components";
import {ServiceCard} from "@/components";


export default function Services({data, header, desc}) {



    return (
        <section className={"max-w-[1420px] mx-auto px-12 max-md:px-6"} id={"oferta"}>
            <div className={"w-full flex flex-col"}>

                <div className={"flex items-center flex-col text-center max-w-[600px] mx-auto mb-[72px]"}>
                    <Label text={"Usługi"}/>
                    <h2>{header}</h2>
                    {
                        desc && <p>{desc}</p>
                    }
                </div>

                <div className={"flex flex-wrap"}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={item+index} className={"lg:w-1/3 h-[530px] p-2 w-full"}>
                                    <ServiceCard icon={item.icon} title={item.title} desc={item.desc} key={index}/>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    )
}
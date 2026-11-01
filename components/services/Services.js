import Label from "@/components/common/Label";
import ServiceCard from "@/components/services/ServiceCard";


export default function Services({data, header, desc}) {
    if (!data?.length) return null;

    return (
        <section className={"max-w-[1420px] mx-auto px-12 max-md:px-6"} id={"uslugi"}>
            <div className={"w-full flex flex-col"}>

                <div className={"flex items-center flex-col text-center max-w-[600px] mx-auto mb-[72px]"}>
                    <Label text={"Usługi"}/>
                    <h2>{header}</h2>
                    {desc && <p>{desc}</p>}
                </div>

                <div className={"flex flex-wrap"}>
                    {data.map((item, index) => (
                        <div key={item.title || index} className={"lg:w-1/3 h-[430px] p-3 w-full"}>
                            <ServiceCard icon={item.icon} title={item.title} desc={item.desc}/>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

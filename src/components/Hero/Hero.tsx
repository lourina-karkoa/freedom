import { InterfaceHero } from "../../interface/Interface";
import CardHero from "../CardHero/CardHero";
import PartOneHero from "../PartOneHero/PartOneHero";

export default function Hero({ dataHero }: InterfaceHero) {

    return (
        <>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-4 2xl:gap-5 pb-5">
           
            <PartOneHero par={dataHero.par} arrow={dataHero.arrow} slider={dataHero.slider} part1={dataHero.part1} part2={dataHero.part2} par2={dataHero.par2}/>
            <div className="dark:bg-gray-gold rounded-2.5xl relative w-77 md:w-64 laptop:w-78 me-xl:w-97 2xl:w-110">
                <img src={dataHero.commpany} className=" w-full object-contain bg-white dark:bg-black rounded-t-1.5xl" />
                <div className="flex justify-center items-center absolute top-0 -right-2 md:top-0 md:-right-2 laptop:-right-3 2xl:-top-0 2xl:-right-4 ">
                    <div className="size-17 md:size-16 laptop:size-20 me-xl:size-28 2xl:size-45 rounded-full border-2 flex justify-center items-center border-s-gold-gradien border-t-gold-gradien  border-r-white border-b-white dark:border-r-black dark:border-b-black -rotate-[82deg]">
                        <div className="flex justify-center items-center size-11 md:size-10 laptop:size-12 me-xl:size-15 2xl:size-25 rounded-full rotate-[40deg] bg-gold-gradien">

                            <img  src={dataHero.arrow} className="w-6 me-xl:w-8" />
                        </div>

                    </div>
                </div>
                <div className="flex bg-gold-gradien dark:bg-gray-gold rounded-b-2xl dark:gray-gold flex-col justify-between items-start py-3 md:py-7.5 2xl:py-7.5 ps-3.5 md:ps-7.5">
                    <p className="text-black text-xl 2xl:text-2xl leading-9 font-medium 2xl:pb-1">{dataHero.text}</p>
                    <p className="text-gray/40 leading-6.5 text-base 2xl:text-xl font-normal">{dataHero.text2}</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 me-xl:grid-cols-5 w-full gap-2.5 md:gap-3 gap-y-2.5 p-2.5 2xl:p-5 border-2 d rounded-2xl lg:rounded-2.5xl 2xl:rounded-3xl  border-gold-gradien dark:border-dark/12">
            {dataHero.dataCard.map((item)=>{
                return(
                    <CardHero adding={`col-span-2 md:col-span-1`} id={item.id} text={item.text} num={item.num} single={item.single} mySecound={item.mySecound} />
                )
            })}

        </div>
        </>
    )
}

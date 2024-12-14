import { Link } from "react-router-dom"
import { InterFaceFooter } from "../../interface/Interface"
import ArrowIcon from "../ArrowIcon/ArrowIcon"
import BigIcon from "../BigIcon/BigIcon"
import CardFooter from "./CardFooter"
import Par from "./Par"
import Title from "./Title"

export default function Footer({ dataF }: { dataF: InterFaceFooter }) {
    return (
        <div className="flex justify-between items-start  w-[95%] m-auto 2xl:pt-29.5 gap-4 me-xl:gap-5 pt-13 lg:pt-20">
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 me-xl:grid-cols-2 gap-4 me-xl:gap-5 lg:w-min-f me-xl:w-mid-f 2xl:w-max-f">
                {dataF.card.map((i, n) => {
                    return (
                        <Link to={i.href}> 
                            <CardFooter key={n} icon={i.icon} title={i.title} par={i.par} href={""} />
                        </Link>
                    )
                })}
            </div>
            <div className="flex-grow flex flex-col justify-between gap-4 me-xl:gap-5 items-start">

                <div className="bg-gold-gradien dark:bg-gray-gold w-full px-6 md:px-7.5 me-xl:px-10 2xl:px-15 2xl:py-15 py-6 md:py-8 lg:py-10 rounded-1.5xl flex flex-col md:flex-row justify-between items-start gap-y-7.5">
                   
                  <div className="flex justify-between items-start w-full md:w-1.9/12 lg:w-3/6 xl:w-[45%]">
                  {dataF.ul.slice(0,2).map((item, index) => {
                        return (
                            <ul key={index} className="">
                                <li className="dark:text-black font-bold text-lg md:text-1.5xl leading-7 pb-3.5 me-xl:pb-5 2xl:pb-7.5">{item.libasec}
                                <ul className="flex flex-col justify-start items-start gap-3 me-xl:gap-3.5 2xl:gap-4.2">
                                    {item.lisecound.map((obj) => {
                                        return (
                                            <li className="font-normal text-sm md:text-base me-xl:text-lg text-white dark:text-gray/70" key={obj.id}>{obj.liTitle}</li>
                                        )
                                    })}
                                </ul>
                                </li>
                            </ul>
                        )
                    })}

                  </div>
                  <div className="flex justify-between items-start w-full md:w-2/5 ">
                  {dataF.ul.slice(2,4).map((item, index) => {
                        return (
                            <ul key={index} className="w-[100px] md:w-auto">
                                <li className="dark:text-black font-bold text-lg md:text-1.5xl leading-7 pb-3.5 me-xl:pb-5 2xl:pb-7.5">{item.libasec}
                                <ul className="flex flex-col justify-start items-start gap-3 me-xl:gap-3.5 2xl:gap-4.2">
                                    {item.lisecound.map((obj) => {
                                        return (
                                            <li className="font-normal text-sm md:text-base me-xl:text-lg text-white dark:text-gray/70" key={obj.id}>{obj.liTitle}</li>
                                        )
                                    })}
                                </ul>
                                </li>
                            </ul>
                        )
                    })}

                  </div>
                </div>
                <div className="bg-gold-gradien dark:bg-gray-gold w-full rounded-1.5xl px-6 md:px-7.5 me-xl:px-10 2xl:px-15 2xl:pb-10 lg:pt-10 pb-4 pt-6 md:pt-8 md:pb-6 me-xl:pb-8 2xl:pt-13">
                    <Par par={dataF.partTwoPar} />
                    <div className="flex justify-between gap-y-2 pt-2 md:pt-0 flex-wrap items-end content-end">
                        <Title partTwoTitle={dataF.partTwoTitle} />
                        <div className="flex justify-between w-full md:w-5.5/12 items-center pb-4 2xl:pb-5 gap-3">
                            <div className="w-full border-b border-b-white dark:border-b-gray/70 pb-3.5 me-xl:pb-5">
                                <Par par={dataF.placeholder} />
                            </div>
                            <ArrowIcon voluem={`size-10 2xl:size-13.5`} />

                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden justify-between items-center bg-gold-gradien dark:bg-gray-gold w-full rounded-1.5xl px-6 md:px-7.5 me-xl:px-10 2xl:px-15 py-6 md:py-8">
                {dataF.card.map((i, n) => {
                    return (
                        <BigIcon key={n} icon={i.icon}/>
                    )
                })}
                    

                </div>
                <div className="flex justify-between items-center flex-wrap gap-y-3 bg-gold-gradien dark:bg-gray-gold w-full rounded-1.5xl px-6 md:px-7.5 me-xl:px-10 2xl:px-15 py-6 md:py-8 lg:py-[39px] me-xl:py-10 2xl:py-13">
                    <Par par={dataF.endFooter1} />
                    <div className="flex justify-between gap-3 items-center">
                        <div className="border-e pe-3 border-e-gray/70"><Par par={dataF.endFooter2} /></div>
                        <Par par={dataF.endFooter3} />
                    </div>
                    

                </div>
                
            </div>

        </div>
    )
}

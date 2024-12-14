
import Par from "../OurWorks/Par";
import { CardTest } from "../../interface/Interface";
import ArrowSlider from "./ArrowSlider";


export default function CardTestMonioun({title,pargraph,path,par1,par2} : CardTest) {
  return (
    <div className="bg-gold-gradien dark:bg-gray-gold flex flex-col justify-between items-start rounded-2xl">
        <div className="px-3.5 md:px-5 me-xl:px-7.5 2xl:px-10 py-6 md:py-7.5 2xl:py-10">
        <h2 className="text-white dark:text-black 2xl:text-2xl 2xl:leading-9 font-medium pb-4 md:pb-5 2xl:pb-6 lg:text-1.5xl lg:leading-8 text-lg">{title}</h2>
        <Par text={pargraph}/>
        </div>
        
        <div className="py-4 md:py-5 2xl:py-7.5 px-3.5 md:px-5 me-xl:px-7.5 2xl:px-13 rounded-b-2xl w-full border-t border-white  dark:bg-dark/12 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
            <img src={path} className="size-10 2xl:size-14 bg-gold-gradien rounded-full"/>
            <div>
                <p className="text-white dark:text-black font-medium text-base lg:text-lg 2xl:text-lg 2xl:leading-7.5">{par1}</p>
                <p className="font-normal 2xl:text-base text-white dark:text-gray/70 lg:text-base text-sm">{par2}</p>
            </div>
        </div>
        <ArrowSlider right={true} />
        </div>
    </div>
  )
}

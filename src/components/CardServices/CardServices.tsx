import ArrowIcon from "../ArrowIcon/ArrowIcon";

import { CardService} from "../../interface/Interface";
import Title from "./Title";
import ButtonCommon from "../ButtonCommon/ButtonCommon";


export default function CardServices({ icon,title,par,text,num } : CardService) {
    return (
        <div className="w-full px-3.5 md:px-5 me-xl:px-7.5 2xl:px-10 rounded-1.5xl py-6 lg:py-15 2xl:py-20 bg-gold-gradien text-white dark:bg-gray-gold dark:text-black">
            <div className="flex justify-between items-center pb-5 lg:pb-10 2xl:pb-13">
                <div className="flex justify-center items-center gap-2.5 me-xl:gap-1.5 2xl:gap-3 ">
                    <div className="size-13 md:size-14 2xl:size-16.5 rounded-xl flex justify-center items-center border bg-white border-gold-gradien dark:border-dark/20 dark:bg-dark/12">
                        <img src={icon} className="w-6 md:w-auto"/>              
                    </div>
                    <h2 className="font-medium text-xl lg:text-1.5xl  lg:leading-8 2xl:text-3xl 2xl:leading-13.5 text-white dark:text-black">{title}</h2>
                </div>
               <div className="hidden laptop:flex">
               <ArrowIcon voluem={'size-10 2xl:size-13'} par={par} />
               </div>

            </div>
           <div className="md:hidden pb-[6px]">
           <Title num={num}/>
           </div>
            <p className="lg:pb-4 text-sm md:text-base  2xl:pb-5 dark:text-gray/40">{text}</p>
            <div className="w-full hidden md:flex justify-end items-center ">
            <Title num={num}/>
            </div>
            <div className="pt-5 md:hidden">
            <ButtonCommon btn='Book A Call'/>
            </div>
        </div>
    )
}

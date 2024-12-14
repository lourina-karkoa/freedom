import { GoArrowUpRight } from "react-icons/go";


export default function ArrowIcon({par,voluem}:{par?:string,voluem:string}) {
  return (
    <div className="flex items-center justify-center gap-1 2xl:gap-2.5">
            <div className={`${voluem} rounded-full border border-gold-gradien dark:border-dark/20 bg-white dark:bg-dark/12 flex items-center justify-center`}>
            <GoArrowUpRight className="text-1.5xl md:text-2xl 2xl:text-2.5xl font-semibold text-gold-gradien"/>
            </div>
            <p className="font-medium text-base 2xl:text-xl dark:text-black">{par}</p>
        </div> 
  )
}

// import { GoArrowUpRight } from "react-icons/go";
import { Title } from "../../interface/Interface";
import ArrowIcon from "../ArrowIcon/ArrowIcon";


export default function TitleCommon({title,exiset,text,withBorder}: Title) {
  return (
    <div className={`w-full py-6 lg:py-10 2xl:py-13  rounded-1.5xl bg-gold-gradien text-white dark:bg-gray-gold dark:text-black flex justify-between items-center ${withBorder ? 'px-3.5 md:px-5 me-xl:px-7.5 2xl:px-10' : 'px-3.5 md:px-7.5 me-xl:px-10 2xl:px-15'}`}>
        <h2 className="font-semibold text-2.5xl lg:text-4.4xl lg:leading-13.5 2xl:text-5xl 2xl:leading-14">{title}</h2>
        {exiset ?
        <ArrowIcon voluem={'size-10 lg:size-14 2xl:size-17'} par={`${text}`}/>: 
        ''}
    </div>
  )
}

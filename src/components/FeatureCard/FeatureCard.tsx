import { FeatureCardCommon } from "../../interface/Interface";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import BigIcon from "../BigIcon/BigIcon";


export default function FeatureCard({icon,par,title,work}:FeatureCardCommon) {
  return (
    <div className={`flex justify-between w-full flex-wrap gap-x-1 gap-y-4 items-center ${work ? '' : 'pb-5 lg:pb-10 2xl:pb-13'}`}>
    <div className="flex justify-center items-center gap-2.5 me-xl:gap-1.5 2xl:gap-2.5 ">
        <BigIcon icon={icon}/>
        <h2 className={`font-medium ${work ? 'text-base lg:text-lg 2xl:text-2xl' : ' text-xl lg:text-1.5xl lg:leading-8 2xl:text-3xl 2xl:leading-13.5'} text-black`}>{title}</h2>
    </div>
   <div className={`${work ? '' : 'hidden laptop:flex'}`}>
   <ArrowIcon voluem={'size-10 2xl:size-13'} par={par} />
   </div>

</div>
  )
}

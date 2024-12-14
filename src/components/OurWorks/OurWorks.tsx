import { Work } from "../../interface/Interface";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import FeatureCard from "../FeatureCard/FeatureCard";
import TitleCommon from "../TitleCommon/TitleCommon";
import Par from "./Par";
import Text from "./Text";

export default function OurWorks({dataWork} : {dataWork: Work[]}) {
    return (
        <div className="w-full pb-13 lg:pb-20 2xl:pb-29.5">
         
            <TitleCommon withBorder={false} exiset={true} title='Our Works' text="ALL Works" />
        
            
            <div className="pt-5 ">
                {dataWork.map((item, index) => {
                    return (
                        <div className="p-2.5 2xl:p-5 border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 2xl:gap-5 mb-2.5 2xl:mb-5 border-gold-gradien dark:border-dark/12 rounded-2xl lg:rounded-2.5xl 2xl:rounded-3xl" key={index}>
                           <div className="flex flex-col items-start justify-between gap-y-5 py-6 laptop:py-9  me-xl:py-13 2xl:py-15 bg-gold-gradien dark:bg-gray-gold rounded-1.5xl px-3.5 md:px-5 me-xl:px-7.5 2xl:px-10">
                           <FeatureCard work={true} icon={item.icon} par={item.par} title={item.title} />
                            <div className="flex flex-col gap-3 justify-start items-start">
                                {item.dataCategory.map((item, index) => {
                                    return (
                                        <div className="flex justify-start items-center gap-2 rounded-5xl bg-dark/12 dark:bg-dark/12 py-2 2xl:py-2.5 px-3.5 2xl:px-4" key={index}>
                                            <Par black={true} text={item.Category} />
                                            <span className="size-[6px] rounded-full bg-gray/40 dark:bg-gold-gradien"></span>
                                            <Par text={item.nameCategory}/>
                                        </div>
                                    )
                                })}
                            </div>
                            <Par text={item.text}/>
                           </div>
                           <div>
                            <img src={item.path} className="h-full w-full object-cover rounded-1.5xl"/>
                           </div>
                           <div className="md:col-span-2 lg:col-span-1 flex flex-col items-start justify-between gap-2.5 2xl:gap-5 w-full">
                              <div className="bg-gold-gradien dark:bg-gray-gold rounded-1.5xl px-3.5 md:px-5 me-xl:px-7.5 2xl:px-10 py-7.5 2xl:py-10 w-full">
                              <Text titleTHree={item.titleTwo}/>
                                <div className="flex justify-start items-center pt-4 2xl:pt-5 flex-wrap gap-x-2 2xl:gap-x-2.5 gap-y-3">
                                    {item.buttons.map((i,n)=>{
                                    return(
                                        <button className="rounded-5xl text-white dark:text-black font-medium text-base 2xl:text-lg bg-dark/12 py-2 2xl:py-2.5 px-3.5 2xl:px-4" key={n}>{i.btn}</button>
                                    )
                                })}
                                </div>
                              </div>
                              <div className="bg-gold-gradien dark:bg-gray-gold py-3 lg:py-4 2xl:py-5 flex gap-x-2 justify-between items-center flex-wrap gap-y-2 rounded-1.5xl px-3.5 md:px-5 me-xl:px-7.5 2xl:px-10  w-full">
                                <Text titleTHree={item.titleTHree}/>
                                <div className="flex justify-start items-center gap-2 2xl:gap-2.5">
                                    {item.image.map((imge)=>{
                                        return(
                                             <img key={imge.id} src={imge.pathUser} className="size-10 2xl:size-14 bg-white dark:bg-gold-gradien rounded-full"/>
                                        )
                                    })}
                                </div>
                              </div>
                              <div className=" w-full">
                                <ButtonCommon btn="Book A Call"/>
                              </div>
                           </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

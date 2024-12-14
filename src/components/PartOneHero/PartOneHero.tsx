import { PartOneH } from "../../interface/Interface";
import Arrow from "../Arrow/Arrow";


export default function PartOneHero({par,arrow,slider,part1,part2,par2,grid } : PartOneH) {
  return (
    <div className={`dark:bg-gray-gold ${grid ? 'col-span-2 w-full' : 'md:h-[323px] laptop:h-85 me-xl:h-[468px] 2xl:h-auto w-full md:w-[63%] laptop:w-3/5 2xl:w-7/12'} px-6 md:px-7.5 me-xl:px-10 2xl:px-15 rounded-2.5xl pt-10 laptop:pt-14 2xl:pt-23 pb-5 border-2 border-gold-gradien dark:border-dark/12 md:rounded-2.5xl 2xl:rounded-3xl `}>
                <div className="flex gap-[15px] justify-start items-center flex-wrap">
                    <p className="text-black font-semibold text-2.5xl md:text-3xl laptop:text-5xl laptop:leading-10 me-xl:text-5.5xl me-xl:leading-15 2xl:text-7.5xl 2xl:leading-17">{part1}</p>
                    <Arrow changing={false} par={par} arrow={arrow} />
                </div>
                <p className="text-black font-semibold text-2.5xl md:text-3xl laptop:text-5xl laptop:leading-10 me-xl:text-5.5xl me-xl:leading-15 2xl:text-7.5xl 2xl:leading-17 pt-1">{part2}</p>
                <Arrow changing={true} par={par} arrow={arrow} />
                <p className="text-gray/40 laptop:w-11/12 2xl:w-full leading-6.5 md:text-base me-xl:text-xl font-normal pt-5 pb-8 laptop:pb-10 me-xl:pb-10 2xl:pb-23">{par2}</p>
                <div className="overflow-x-hidden relative bg-gold-gradien dark:bg-black text-white dark:text-gray/40 rounded-2.5xl w-full h-10 md:h-13 laptop:h-14 2xl:h-[70px] flex items-center">
                    <div className="animate-slid-xl lg:animate-slid-md 2xl:animate-slid flex gap-5 whitespace-nowrap" >
                        {[...slider, ...slider].map((item, index) => (
                            <div key={index} className="flex items-center gap-5 w-max">
                                {item.name}
                                <span className="size-[6px] rounded-full bg-gray/40 dark:bg-gold-gradien"></span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
  )
}

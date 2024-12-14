import { ArrowInterface } from "../../interface/Interface";


export default function Arrow({arrow,par,changing }: ArrowInterface) {
  return (
    <div className={`${changing ? 'flex md:hidden justify-start items-center pt-3' : 'hidden md:flex justify-center items-center'}`}>
    <div className="size-14 2xl:size-19 rounded-full border-2 flex justify-center items-center border-s-gold-gradien border-y-gold-gradien border-e-white dark:border-e-gray-gold">
        <div className="flex justify-center items-center size-10 2xl:size-13.5 rounded-full bg-gold-gradien">
            <img src={arrow} style={{color : 'blue'}} />
        </div>
    </div>
    <p className="text-gold-gradien font-medium text-xl leading-6 2xl:text-2xl 2xl:leading-9">{par}</p>
</div>
  )
}

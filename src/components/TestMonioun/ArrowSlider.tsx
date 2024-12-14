
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

export default function ArrowSlider({right} : {right:boolean}) {
  return (
    <div className="size-10 2xl:size-13 rounded-full border cursor-pointer bg-white hover:bg-black ease-in-out hover:border-gold-gradien duration-400 border-gold-gradien dark:border-dark/20 dark:bg-dark/12 flex items-center justify-center">
         {right ?
         <GoArrowRight className="text-gold-gradien text-xl font-bold 2xl:text-2xl ease-linear " />
         : <GoArrowLeft className="text-gold-gradien text-xl font-bold 2xl:text-2xl ease-linear" />
        }
        </div>
  )
}

import { useEffect, useState } from "react";
import { CardData } from "../../interface/Interface";



export default function CardHero({text,num,id,single,mySecound,adding}:CardData) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      if (counter < num) {
        const interval = setInterval(() => {
          setCounter((prevCounter) => {
            if (prevCounter < num) {
              return prevCounter + 1;
            } else {
              clearInterval(interval);
              return prevCounter;
            }
          });
        }, mySecound);
  
        return () => clearInterval(interval);
      }
    }, [counter, num]);
  
  return (
    <div key={id} className={`${id == 5 ? `${adding}` : ''} bg-gold-gradien dark:bg-dark/12 flex flex-col justify-center items-center py-3 laptop:py-4 w-full  lg:py-5 2xl:py-9 gap-1 me-xl:gap-5 rounded-1.5xl`}>
        <p className="text-gray-obacity dark:text-black text-base lg:text-xl font-medium">{text}</p>
        <p className="text-white dark:text-gold-gradien font-semibold text-3xl lg:text-4.5xl 2xl:text-6xl 2xl:leading-13">{counter}{single}</p>
    </div>
  )
}

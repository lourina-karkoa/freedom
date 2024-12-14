'use client'
import { useEffect, useState } from 'react'
import CardTestMonioun from '../TestMonioun/CardTestMonioun';
import { CardTest } from '../../interface/Interface';
import ArrowSlider from '../TestMonioun/ArrowSlider';

export default function Slider({ dataCardTest }: { dataCardTest: CardTest[]}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1200) setVisibleCards(4);
    else if (window.innerWidth >= 900) setVisibleCards(2);
    else if (window.innerWidth >= 768) setVisibleCards(2);
    else setVisibleCards(1);
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + 1) % dataCardTest.length
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + dataCardTest.length) % dataCardTest.length
    );
  };


  const visibleCardsArray = Array.from(
    { length: visibleCards },
    (_, i) => dataCardTest[(activeIndex + i) % dataCardTest.length]
  );

  return (
    <div className="w-full flex justify-center md:justify-between items-center">
      <div className="cursor-pointer absolute top-9 lg:top-13.5 right-19 md:right-20 me-xl:right-24 2xl:right-30  2xl:top-17.5"  onClick={prevSlide}>
      <ArrowSlider right={false} />
      </div>

      <div className="overflow-hidden w-full">
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {visibleCardsArray.map((item,index)=>{
          return(
            <CardTestMonioun key={index} title={item.title} pargraph={item.pargraph} path={item.path} par1={item.par1} par2={item.par2}/>
          )
        })}
      </div>
       
      </div>

      <div className="cursor-pointer absolute top-9 lg:top-13.5 2xl:top-17.5 right-6 md:right-7.5 me-xl:right-10 2xl:right-13" onClick={nextSlide}>
      <ArrowSlider right={true}/>
      </div>
    </div>
  )
}

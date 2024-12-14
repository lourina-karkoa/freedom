import { PartOneH } from '../../interface/Interface'
import CardHero from '../CardHero/CardHero'
import PartOneHero from '../PartOneHero/PartOneHero'

export default function HeroTwo({dataHContact}:{dataHContact:PartOneH}) {
  return (
    <div className='mt-12 pb-13 lg:pb-20 2xl:pb-29.5'>

    <div className="grid grid-cols-1 laptop:grid-cols-3 me-xl:grid-cols-3 gap-y-4 laptop:gap-4 2xl:gap-5">
    
    <PartOneHero grid={true}  par={dataHContact.par} arrow={dataHContact.arrow} slider={dataHContact.slider} part1={dataHContact.part1} part2={dataHContact.part2} par2={dataHContact.par2}/>
    
      <div className="grid grid-cols-2 md:grid-cols-2 me-xl:grid-cols-2 dark:bg-gray-gold w-full gap-2.5 md:gap-5 p-2.5 2xl:p-7.5 border-2  rounded-2xl lg:rounded-2.5xl 2xl:rounded-3xl  border-gold-gradien dark:border-dark/12">
          {dataHContact.dataCard?.map((item)=>{
              return(
                  <CardHero adding={`col-span-2`} id={item.id} text={item.text} num={item.num} single={item.single} mySecound={item.mySecound} />
              )
          })}

      </div>
    </div>
  </div>
  )
}

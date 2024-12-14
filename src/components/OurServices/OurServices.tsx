import { Service } from "../../interface/Interface";
import CardServices from "../CardServices/CardServices";
import TitleCommon from "../TitleCommon/TitleCommon";

export default function OurServices({dataServies} : Service) {
  return (
    <div className="w-full py-13 lg:py-20 2xl:py-29.5">
        <div className="p-2.5 2xl:p-5 border-2 border-gold-gradien dark:border-dark/12 rounded-2xl lg:rounded-2.5xl 2xl:rounded-3xl">
        <TitleCommon title='Our Service' withBorder={true}/>
        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {dataServies.map((item,index)=>{
                return(
                    <CardServices key={index} icon={item.icon} title={item.title} par={item.par} text={item.text} num={item.num}/>
                )
            })}
        </div>
        </div>
     
        
        
        
    </div>
  )
}

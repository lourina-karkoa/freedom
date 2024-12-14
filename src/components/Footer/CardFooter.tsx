import { CardFooterData } from "../../interface/Interface";
import FeatureCard from "../FeatureCard/FeatureCard";
import Par from "./Par";
import Title from "./Title";

export default function CardFooter({icon,title,par} : CardFooterData) {
  return (
    <div className="2xl:py-10.5 bg-gold-gradien dark:bg-gray-gold dark:text-black px-6 md:px-7.5 me-xl:px-10 2xl:px-15 rounded-1.5xl lg:py-[39px]">
       <div className="me-xl:pb-5 2xl:pb-7.5">
       <FeatureCard icon={icon}/>
       </div>
        <div>
        <Title partTwoTitle={title}/>
        <Par par={par}/>
        </div>
    </div>
  )
}

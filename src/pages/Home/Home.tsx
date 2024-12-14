import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/OurServices/OurServices";
import OurWorks from "../../components/OurWorks/OurWorks";
import TestMonioun from "../../components/TestMonioun/TestMonioun";
import { dataHero } from "../../data/DataHeroHome";
import { dataServ } from "../../data/DataOurServices";
import { dataTest } from "../../data/DataTestMonioun";
import { dataOurWork } from "../../data/DataWork";


export default function Home() {
  return (
    <div className="w-[95%] m-auto">
        <Hero dataHero={dataHero}/>
        <OurServices dataServies={dataServ}/>
        <OurWorks dataWork={dataOurWork}/>
        <TestMonioun dataCardTest={dataTest}/>
    </div>
  )
}

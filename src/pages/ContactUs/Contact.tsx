import HeroTwo from "../../components/HeroTwo/HeroTwo";
import MapContact from "../../components/MapContact/MapContact";
import TestMonioun from "../../components/TestMonioun/TestMonioun";
import { dataHContact } from "../../data/DataHTwo";
import { dataTest } from "../../data/DataTestMonioun";


export default function Contact() {
  return (
    <div className="w-[95%] m-auto">
      <HeroTwo dataHContact={dataHContact}/>
      <TestMonioun  dataCardTest={dataTest}/>
      <MapContact/>

    </div>

  )
}

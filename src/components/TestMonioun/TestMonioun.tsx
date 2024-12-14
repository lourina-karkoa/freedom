
import { CardTest} from '../../interface/Interface'
import Slider from '../Slider/Slider'
import TitleCommon from '../TitleCommon/TitleCommon'


export default function TestMonioun({dataCardTest} : {dataCardTest: CardTest[]}) {
  return (
    <div className="w-full p-2.5 2xl:p-5 border-2 border-gold-gradien dark:border-dark/12 rounded-1.5xl md:rounded-2.5xl 2xl:rounded-3xl relative">
            <div className='flex justify-between items-center relative w-full'>
            <TitleCommon withBorder={true} exiset={false} title='Testimonials' />
            
            </div>
      <div className='pt-5 '>
      <Slider dataCardTest={dataCardTest} />
      </div>
    </div>
  )
}

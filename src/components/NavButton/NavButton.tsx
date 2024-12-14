import { FaCircle } from 'react-icons/fa'
import { LuSunDim } from 'react-icons/lu'
import { useTheme } from '../Context/ThemeContext'


export default function ButtonNav() {
  const { theme, setTheme } = useTheme();
  return (
          <div onClick={()=>{setTheme('dark')}} className='flex justify-center items-center gap-4 bg-gold-gradien rounded-[29px] h-9 lg:h-10 w-24'>
                <LuSunDim className='text-white size-5 lg:size-6'/>
                <FaCircle className='text-white size-5 lg:size-6'/>
          </div>
  )
}

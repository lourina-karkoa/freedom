import { IoMoonOutline } from 'react-icons/io5'

import { FaCircle } from 'react-icons/fa'
import { useTheme } from '../Context/ThemeContext'

export default function BuutonDark() {
  const { setTheme } = useTheme();
  return (
    <div onClick={()=>{setTheme('light')}} className='flex justify-center items-center gap-4 dark:bg-gold-gradien rounded-[29px] h-9 lg:h-10 w-24'>
                <FaCircle className='text-darkMode size-5 lg:size-6'/>
                <IoMoonOutline className='text-darkMode size-5 lg:size-6'/>
          </div>
  )
}

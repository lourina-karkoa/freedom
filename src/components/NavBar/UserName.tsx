
import { NavLink } from 'react-router-dom'

interface User {
  userName:string,
  path:string
}
export default function UserName({userName,path}:User) {
  return (
    <NavLink to={path} className={({ isActive }) => {
      return `text-lg font-semibold leading-6 dark:text-white lg:text-xl ${isActive
          ? "border-b border-darkMode  dark:border-white"
          : ""}` }}>{userName}
    </NavLink>
  )
}


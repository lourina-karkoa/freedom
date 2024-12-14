
export default function BigIcon({icon}:{icon:string}) {
  return (
    <div className="size-12 lg:size-14 2xl:size-16.5 rounded-xl flex justify-center items-center border border-gold-gradien dark:border-dark/20 bg-white dark:bg-dark/12">
            <img src={icon} className="w-6 lg:w-auto"/>              
        </div>
  )
}

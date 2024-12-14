

export default function Par({text,black}: {text:string,black?:boolean}) {
  return (
    <p className={`${black ? 'text-white dark:text-black' : 'text-white dark:text-gray/70'} font-medium text-sm lg:text-base 2xl:text-lg`}>{text}</p>
  )
}

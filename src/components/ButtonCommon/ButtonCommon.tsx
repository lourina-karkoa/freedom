
export default function ButtonCommon({btn} : {btn:string}) {
  return (
    <button className="w-full text-white border-white  dark:text-black text-lg rounded-lg py-3.5 2xl:py-4.2 bg-gold-gradien font-medium hover:bg-black border dark:border-gold-gradien hover:text-gold-gradien ease-in-out duration-500">{btn}</button>
  )
}

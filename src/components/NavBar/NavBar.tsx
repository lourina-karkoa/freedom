import { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import BuutonDark from "../BuutonNavDark/BuutonDark";
import { useTheme } from "../Context/ThemeContext";
import ButtonNav from "../NavButton/NavButton";




interface DataLinkItem {
  link: string;
  path: string;
}

interface Navbar {
  href: string,
  dataLink: DataLinkItem[]
}
export default function NavBar({ dataLink, href}: Navbar) {
  const { theme } = useTheme();
  const [bgcolor, setBgcolor] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 5) {
        setBgcolor(true);
      } else {
        setBgcolor(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`relative h-17 md:h-23 lg:h-28 flex justify-center items-center`}>
      <div
        className={`${bgcolor ? "shadow-xl z-10 top-0" : "top-7.5"
          } bg-white shadow-xl dark:shadow-none dark:bg-gray-gold w-[95%] rounded-2xl flex justify-between items-center fixed z-[100000] h-17 md:h-23 lg:h-28 px-6 md:px-7.5 me-xl:px-10 2xl:px-15`}
      >
        <img src={href} alt="stivalo" className="w-16 md:w-17 lg:w-24" />
        <div className=" hidden md:flex justify-between items-center">
          <div className="links flex justify-between items-center gap-3.5 pe-3.5 lg:pe-[22px]">
            {dataLink.map((item: DataLinkItem, index: number) => {
              return (
                <NavLink
                  className={({ isActive }) => {
                    return `lk-link text-sm lg:text-lg dark:bg-black px-4 py-3 lg:px-6 lg:py-[18px] rounded-xl leading-6.5 font-medium ${isActive
                        ? "border-b-2 text-gold-gradien border-gold-gradien"
                        : "text-gray-obacity"
                      }`;
                  }}
                  to={item.path}
                  key={index}
                >
                  {item.link}
                </NavLink>
              );
            })}
          </div>
          {theme == "dark" ? <BuutonDark /> : <ButtonNav />}
        </div>
        <div className="cursor-pointer md:hidden size-11 rounded-[10px] bg-gold-gradien dark:bg-black flex items-center justify-center"  onClick={() => setToggle(!toggle)}>
        <HiOutlineBars3BottomRight 
          className="size-8 text-white dark:text-gold-gradien"
        />
        </div>
      </div>

      
      <div
        className={`pb-5 flex flex-col h-screen justify-center items-center bg-white dark:bg-gray-gold duration-1000 fixed z-[100000]  w-full ${toggle ? "translate-y-[44.5%]" : "-translate-y-full"
          }`}
      >
        <div onClick={() => setToggle(false)}>
          <img src={href} alt="stivalo" className="w-16 pb-5" />
        </div>
        <div className="gap-5 flex flex-col justify-center items-center f-full ">
          {dataLink.map((item: DataLinkItem, index: number) => {
            return (
              <NavLink
                className={({ isActive }) => {
                  return `lk-link text-sm lg:text-lg dark:bg-black px-4 py-3 lg:px-6 lg:py-[18px] rounded-xl leading-6.5 font-medium ${isActive
                        ? "border-b text-gold-gradien border-gold-gradien"
                        : "text-gray-obacity"
                      }`;
                }}
                onClick={() => setToggle(!toggle)}
                to={item.path}
                key={index}
              >
                {item.link}
              </NavLink>
            );
          })}
          {theme == "dark" ? <div onClick={() => setToggle(!toggle)}><BuutonDark /></div>
            : <div onClick={() => setToggle(!toggle)}><ButtonNav /></div>}
        </div>
        <IoClose
          className="size-8 text-gold-gradien cursor-pointer absolute bottom-5"
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  );
}



import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { dataLink, stivalo } from "../../data/DataNav";
import Footer from "../Footer/Footer";
import { dataF } from "../../data/DataFooter";




export default function Layout() {
  
  const { theme } = useTheme();
  return (
    <div className={`${theme} 
    ${theme === 'dark' ? 'bg-black' : 'null'}`}>
        <nav className="">
        <NavBar href={stivalo} dataLink={dataLink}/>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
          <Footer dataF={dataF}/>

        </footer>



    </div>
  )
}

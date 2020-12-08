import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import MediaQuery from 'react-responsive'

interface NavbarProps {
  page: string
}


export const Navbar: React.FC<NavbarProps> = ({ page }) =>{
    const [ sidebar, setSidebar ] = useState(false)
    const showSideBar = (): void => setSidebar(!sidebar)
return (
    <>
    <MediaQuery query="(min-width: 767px)">
     <div className="nav">
      <div className="nav-left">
          <h1>Portfolio#YNWA</h1>
      </div>
      <div className="nav-right">
         {SidebarData.map((item, index) => {
           return (
            <li key={index} className={item.cName}>
            <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
             </li>
           )
         } )} 
      </div>
     </div>
    </MediaQuery>
    <MediaQuery query="(max-width: 767px)">
     <IconContext.Provider value={{ color: '#fff'}}>
         <div className="navbar">
             <Link to="#" className="menu-bar">
              <FaIcons.FaBars onClick={showSideBar} />
             </Link>
         </div>
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             <ul className="nav-menu-items" onClick={showSideBar}>
              <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                  </Link>
              </li>
              {SidebarData.map((item, index) => {
             return (
                     <li key={index} className={item.cName}>
                          <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                          </Link>
                      </li>
             )
            })}
             </ul>
         </nav>
     </IconContext.Provider>
    </MediaQuery>
    </>
    );
}
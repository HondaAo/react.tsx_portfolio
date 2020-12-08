import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
type Sidebar = {
    title: string,
    path: string,
    icon: any,
    cName: string
}

export const SidebarData: Sidebar[] = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Works',
    path: '/works',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
},
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'About me',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
},    
]
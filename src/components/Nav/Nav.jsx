import React from 'react'
import './nav.css'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {GiCat} from 'react-icons/gi'
import {FaDog} from 'react-icons/fa'
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav ('#')} className={activeNav === '#' ? 'active': ''}><SiHomeassistantcommunitystore/></a>
      <a href='#dogs'onClick={() => setActiveNav ('#dogs')} className={activeNav === '#dogs' ? 'active': ''}><FaDog/></a>
      <a href='#cats' onClick={() => setActiveNav ('#cats')} className={activeNav === '#cats' ? 'active': ''}><GiCat/></a>
      
    
    </nav>
  )
}

export default Nav
import React from 'react'
import { FaPlus, FaBell, FaCommentDots, FaUser ,FaBars} from 'react-icons/fa';

import {navigationLinks} from "@/data"


import Link from 'next/link'


const NavigationMenu = () => {
  return (
   <nav>
<Link href="/chat">
<FaCommentDots size={24} />
</Link>
<Link href="/createPost">
<FaPlus size={24}/>
</Link>
<Link href="/notification">
<FaBell size={24}/>
</Link>
<Link href="/user">
<FaUser size={24}/>
</Link>

   </nav>
  )
}

export default NavigationMenu

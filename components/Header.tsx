import React from 'react';
import Image from "next/image"
import redditLogo from "@/reddit-seeklogo.svg"

const Header = () => {


  return (
 <header>
 <div>
 <Image src={redditLogo} alt='reddit logo'/>
 </div>
 
 </header>
  );
}

export default Header;
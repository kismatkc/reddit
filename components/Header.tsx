"use client"
import React from 'react';
import Image from "next/image"
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import {inputSearchbarStrings} from "@/data"
import NavigationMenu from './NavigationMenu';
import {FaBars} from 'react-icons/fa';
import Link from "next/link"
const Header = () => {


  return (
 <header className='flex justify-between '>
 <div className='flex w-[75%] gap-8'>
  <Link href="/">
  <FaBars size={30} className='text-red-500 text-6xl stroke-1'/>
  </Link>
 <Image src="/reddit-seeklogo.svg" width={130} height={130} alt='reddit logo'/>
 <PlaceholdersAndVanishInput placeholders={inputSearchbarStrings} onChange={()=>{}} onSubmit={()=>{}} />

 </div>

 <NavigationMenu />
 

 </header>
  );
}

export default Header;
"use client"
import React from 'react';
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {useState} from "react"
import {Button} from "./ui/button"


import NavigationMenu from './NavigationMenu';

import Link from "next/link"
const Header = () => {
  const [user,setUser] = useState(null);
  


  return (
 <header className='flex justify-between p-4'>
 <div className="flex gap-4 items-center justify-center">
  
    

    
      
  
    <Sheet>
      <SheetTrigger>
        
             <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          
        
      
    
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

    
  
 <Image src="/reddit-seeklogo.svg" width={100} height={100} alt='reddit logo'/>
   
   

 </div>

 <NavigationMenu user={user}/>
 

 </header>
  );
}

export default Header;
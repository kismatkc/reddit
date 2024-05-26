"use client"
import React from 'react';
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  
  SheetTrigger,
} from "@/components/ui/sheet"
import {ModeToggle} from "@/components/ui/ModeToggle"

import {useState,useEffect} from "react"
import {Button} from "./ui/button"
import { Moon, Sun } from "lucide-react"



import NavigationMenu from './NavigationMenu';

import Link from "next/link"
const Header = () => {
  const [user,setUser] = useState(null);
  // useEffect(() => {
  //   const replitUrl = "https://bede44aa-9c29-47dd-897b-2b4c010093e4-00-3nevvx7pojkg8.kirk.replit.dev:3000"
  
  //   console.log('Making fetch request...');
  //   fetch(`${replitUrl}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.text();
  //     })
  //     .then(data => {
  //       console.log('Fetch response data:', data);
  //     })
  //     .catch(error => {
  //       console.error('Error during fetch:', error);
  //     });
  // }, []);


  return (
 <header className='flex justify-between'>
 <div className="flex gap-2 items-center justify-center">
   
    

    
      
  
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
         <ModeToggle className=" md:hidden"/>
      </SheetContent>
    </Sheet>

    
  
 <Image src="/reddit-seeklogo.svg" width={100} height={100}  alt='reddit logo' priority/>
   
   

 </div>

 <NavigationMenu user={user}/>
 

 </header>
  );
}

export default Header;
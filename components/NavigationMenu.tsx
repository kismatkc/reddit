import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {User} from "@/types"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {Button} from "./ui/button"

import Link from 'next/link'


const NavigationMenu = ({user}:{user: User}) => {
  return (
   <nav className="flex gap-4 items-center justify-center">
<Link href="/search" >
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6 h-6"  viewBox="0 0 50 50">
  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
  </svg>
</Link>
<Link href="/createPost">
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6 h-6" viewBox="0 0 24 24" stroke="white">
  <path  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
  </svg>
</Link>
<Link href="/notification">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"   viewBox="0 0 16 16">
    <path  
      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
  </svg>
</Link>


     <Sheet>
       
         <SheetTrigger>
           {
             user?       <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
             : 
             
         <span className="hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] p-2 bg-gray-200 text-[#696969] rounded-md font-light transition duration-200 ease-linear">Sign-in</span>
             
             
           }

      
       </SheetTrigger>
       <SheetContent side="bottom">
         <SheetHeader>
           <SheetTitle>Are you absolutely sure?</SheetTitle>
           <SheetDescription>
             This action cannot be undone. This will permanently delete your account
             and remove your data from our servers.
           </SheetDescription>
         </SheetHeader>
       </SheetContent>
     </Sheet>

   </nav>
  )
}

export default NavigationMenu



// Button code
// <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//   Shimmer
// </button>

// // tailwind.config.js code
// {
//   "animation": {
//     shimmer: "shimmer 2s linear infinite"
//   },
//   "keyframes": {
//     shimmer: {
//       from: {
//         "backgroundPosition": "0 0"
//       },
//       to: {
//         "backgroundPosition": "-200% 0"
//       }
//     }
//   }
// }

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
import {ModeToggle} from "@/components/ui/ModeToggle"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaPlus,FaBell ,FaSearch   } from "react-icons/fa";



const NavigationMenu = ({user}:{user: User}) => {
  return (
  
   <nav className="flex gap-4 items-center justify-center">
     <ModeToggle className="hidden md:block"/>
     <FaSearch/>
   <FaPlus/>
 <FaBell/>


     <Sheet>
       
         <SheetTrigger>
           {
             user?       <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
             : 
             
         <span className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">Sign-in</span>
             
             
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


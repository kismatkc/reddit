import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "@/types";
import { ModeToggle } from "@/components/ui/ModeToggle";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaPlus, FaBell, FaSearch } from "react-icons/fa";

const NavigationMenu = ({
  user,
  searchButtonClicked,
}: {
  user: User;
  searchButtonClicked: Function;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="flex gap-4 items-center justify-center">
      <ModeToggle className="hidden md:block" />
      <FaSearch
        onClick={() => {
          setIsClicked(true);
          searchButtonClicked(true);
        }}
        className={`${isClicked && "hidden"}`}
      />
      <FaPlus className={`${isClicked && "hidden"}`} />
      <FaBell className={`${isClicked && "hidden"}`} />

      <Sheet>
        <SheetTrigger>
          {user ? (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
          ) : (
            <span className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
              Sign-in
            </span>
          )}
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavigationMenu;

"use client";
import React, { use } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/ModeToggle";

import { useState, useEffect } from "react";

import NavigationMenu from "./NavigationMenu";

import SearchComponent from "./SearchComponent";
const Header = () => {
  const [user, setUser] = useState(null);
  const [showSearchBar, setShowSearchbar] = useState(false);

  const searchButtonClicked = (value: boolean) => {
    setShowSearchbar(value);
  };

  return (
    <header className="flex justify-between">
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </SheetTrigger>
          <SheetContent side="left">
            <ModeToggle className=" md:hidden" />
          </SheetContent>
        </Sheet>

        <img
          src="/reddit-seeklogo.svg"
          className="size-24 md:size-32 relative"
          alt="reddit logo"
        />
      </div>
      <SearchComponent showSearchbar={showSearchBar} />
      <NavigationMenu
        user={user as any}
        searchButtonClicked={searchButtonClicked}
      />
    </header>
  );
};

export default Header;

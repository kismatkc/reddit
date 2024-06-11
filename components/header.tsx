"use client";
import React from "react";
import Logo from "@/components/logo";
import { useSearch } from "./searchContext";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useState } from "react";

import NavigationMenu from "./NavigationMenu";

import SearchComponent from "./SearchComponent";
const Header = () => {
  const [user, setUser] = useState(null);
  const [showSearchBar, setShowSearchbar] = useState(false);

  const { setSearchQuery } = useSearch();

  const searchButtonClicked = (value: boolean) => {
    setShowSearchbar(value);
  };

  return (
    <header className="flex w-full justify-between sticky top-0 bg-background dark:bg-background z-50  ">
      <div className="flex   items-center justify-center">
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
            <div className="flex justify-between">
              {user ? (
                <Avatar className="md:hidden">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>KK</AvatarFallback>
                </Avatar>
              ) : (
                <span
                  className={`px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 hidden ${
                    showSearchBar && "!block"
                  }`}
                >
                  Sign-in
                </span>
              )}
              <ModeToggle className=" md:hidden" />
            </div>
          </SheetContent>
        </Sheet>

        <Logo />
      </div>
      <SearchComponent
        setShowSearchbar={setShowSearchbar}
        showSearchbar={showSearchBar}
        searchButtonClicked={searchButtonClicked}
        className="flex justify-end items-center"
        onSearch={setSearchQuery}
      />
      <NavigationMenu
        user={user as any}
        searchButtonClicked={searchButtonClicked}
        showSearchbar={showSearchBar}
        setShowSearchbar={setShowSearchbar}
      />
    </header>
  );
};

export default Header;

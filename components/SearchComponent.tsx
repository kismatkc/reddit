import React, {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

const SearchComponent = ({
  showSearchbar,
  className,
  onSearch,
  searchButtonClicked,
}: {
  showSearchbar: boolean;
  className: string;
  onSearch: (query: string) => void;
  searchButtonClicked: (value: boolean) => void;
}) => {
  const inputRef = useRef<HTMLDivElement | null>(null); // Typing as HTMLDivElement since the ref is on a div

  const onMousedownEventChange = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      searchButtonClicked(false);
    }
  };

  useEffect(() => {
    if (showSearchbar) {
      document.addEventListener("mousedown", onMousedownEventChange);
    } else {
      document.removeEventListener("mousedown", onMousedownEventChange);
    }

    // Cleanup the event listener on component unmount or when showSearchbar changes
    return () => {
      document.removeEventListener("mousedown", onMousedownEventChange);
    };
  }, [showSearchbar]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <div className={className}>
      <div
        ref={inputRef}
        className={`flex hidden pr-2 items-center justify-between ${
          showSearchbar ? "!block" : ""
        }`}
      >
        <input
          type="text"
          className="font-inherit text-inherit bg-[#f4f2f2] border-none text-[#646464] p-[0.7rem] [1rem] rounded-[30px] w-[12em] transition-all duration-500 ease-in-out mr-[-2rem] focus:outline-none focus:bg-[#f0eeee] focus:shadow-[0_0_1em_#00000013]"
          placeholder="Type your text"
          onChange={onInputChange}
        />
        <button className="border-none bg-[#f4f2f2] mt-[0.1em] hover:cursor-pointer">
          <svg
            className="h-[1.3em] w-[1.3em] fill-[#b4b4b4]"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
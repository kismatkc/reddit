import React,{createContext,useState,useContext,ReactNode} from "react"

interface searchContextProps{
  searchQuery: string,
  setSearchQuery: (searchQuery: string)=> void;
  isPlusIconClicked: boolean;
  setIsPlusIconClicked: (value: boolean) =>void;
}

const searchContext = createContext<searchContextProps>({
  searchQuery: "",
  setSearchQuery: ()=> {},
  isPlusIconClicked: false,
  setIsPlusIconClicked: () =>{}
})

export const SearchProvider = ({children}: {children: ReactNode})=>{
  const [searchQuery,setSearchQuery] = useState<string>("");
  const [isPlusIconClicked,setIsPlusIconClicked] = useState(false)

  return (<searchContext.Provider value={{searchQuery,setSearchQuery,isPlusIconClicked,setIsPlusIconClicked}}> 
    {children}
  </searchContext.Provider>);
} 

export const useSearch = ()=> useContext(searchContext);
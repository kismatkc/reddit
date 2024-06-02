import React,{createContext,useState,useContext,ReactNode} from "react"

interface searchContextProps{
  searchQuery: string,
  setSearchQuery: (searchQuery: string)=> void;
}

const searchContext = createContext<searchContextProps>({
  searchQuery: "",
  setSearchQuery: ()=> {}
})

export const SearchProvider = ({children}: {children: ReactNode})=>{
  const [searchQuery,setSearchQuery] = useState<string>("");

  return (<searchContext.Provider value={{searchQuery,setSearchQuery}}>
    {children}
  </searchContext.Provider>);
} 

export const useSearch = ()=> useContext(searchContext);
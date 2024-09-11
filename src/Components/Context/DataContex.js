import { createContext, useContext } from "react";



export const DataContext=createContext({
    
});

export const DataContextProvider=DataContext.Provider

export default function useData(){
    return(useContext(DataContext))
}
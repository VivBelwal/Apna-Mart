import { useState } from "react";
import { createContext } from "react";

export const TotalContext = createContext();

export default function TotalContextProvider ({children}){

    const [total, setTotal] = useState(0);

   


    return <TotalContext.Provider value ={{total , setTotal}}>{children}</TotalContext.Provider>
}

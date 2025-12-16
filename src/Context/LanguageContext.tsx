import { createContext, useState } from "react";

export const LanguageContext=createContext(null);

export default function LanguageProvider({children}){
    const [language,setLanguage]=useState("en");

    const value={
        language,setLanguage
    }
    return(
        <LanguageContext.Provider value={value}>
            {children}
            </LanguageContext.Provider>
    )
}
import { createContext, useState , ReactNode} from "react";

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};
export const LanguageContext=createContext<LanguageContextType | null>(null);

export default function LanguageProvider({children}:{children:ReactNode}){
    const [language,setLanguage]=useState<string>("en");

    const value={
        language,setLanguage
    }
    return(
        <LanguageContext.Provider value={value}>
            {children}
            </LanguageContext.Provider>
    )
}
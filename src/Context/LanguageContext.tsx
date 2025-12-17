import { createContext, useState } from "react";
import type {ReactNode} from 'react';
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};
export const LanguageContext=createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({children}:{children:ReactNode}){
  const {i18n}=useTranslation();
  const lang=i18n.language;
    const [language,setLanguage]=useState<string>(lang);

    return(
        <LanguageContext.Provider value={{language,setLanguage}}>
            {children}
            </LanguageContext.Provider>
    )
}
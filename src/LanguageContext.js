import { createContext, useContext } from "react";
import { useAppLanguage } from "./hooks.js";

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageUpdate() {
  return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }) {
  const appLanguage = useAppLanguage();

  return (
    <LanguageContext.Provider value={appLanguage.value}>
      <LanguageUpdateContext.Provider value={appLanguage.changeLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
}

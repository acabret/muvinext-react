import { createContext, useContext } from "react";
import { useLanguage } from "./hooks.js";

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export function useLanguageUpdate() {
  return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }) {
  const appLanguage = useLanguage();

  return (
    <LanguageContext.Provider value={appLanguage.value}>
      <LanguageUpdateContext.Provider value={appLanguage.changeLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
}

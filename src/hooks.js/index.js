import { useState, useEffect } from "react";

export const useAppLanguage = () => {
  const [appLanguage, setAppLanguage] = useState(null);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("app-language");

    if (!savedLanguage) {
      const navigatorLanguage = navigator.language;
      window.localStorage.setItem("app-language", navigatorLanguage);
      setAppLanguage(navigatorLanguage);
      return;
    }

    setAppLanguage(savedLanguage);
  }, []);

  const changeLanguage = (newLanguage) => {
    window.localStorage.setItem("app-language", newLanguage);
    setAppLanguage(newLanguage);
  };

  return { value: appLanguage, changeLanguage };
};

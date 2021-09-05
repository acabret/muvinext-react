export const appLanguage = "en-US";
export const baseImageUrl = "https://image.tmdb.org/t/p";
export const imageSizes = { small: "/w154", medium: "/w300", large: "/w780" };

export const languageConfig = () => {
  const savedLanguage = window.localStorage.getItem("app-language");

  if (!savedLanguage) {
    const navigatorLanguage = navigator.language;
    return navigatorLanguage;
  }

  return savedLanguage;
};

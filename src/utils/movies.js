import { appLanguage } from "./config";
const baseUrl = "http://localhost:4000/api/";

export const initAppData = ({ language }) => {
  return fetch(`${baseUrl}movies/init`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error("Hubo un error en la conexión con el servidor");
    })
    .catch((err) => console.log(err));
};
//genre, language, voteGte, voteLte, dateGte
export const discoverMovies = ({
  language = appLanguage,
  genre,
  voteGte,
  voteLte,
  dateGte,
  dateLte,
}) => {
  const languageKey = `?language=${language}`;
  const genreKey = genre ? `&genre=${genre}` : "";
  const voteGteKey = voteGte ? `&voteGte=${voteGte}` : "";
  const voteLteKey = voteLte ? `&voteLte=${voteLte}` : "";
  const dateGteKey = dateGte ? `&dateGte=${dateGte}` : "";
  const dateLteKey = dateLte ? `&dateLte=${dateLte}` : "";

  return fetch(
    `${baseUrl}movies/discover${languageKey}${genreKey}${voteGteKey}${voteLteKey}${dateGteKey}${dateLteKey}`
  ).then((response) => response.json());
};

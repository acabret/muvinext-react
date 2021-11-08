// import { appLanguage } from "./config";
const baseUrl = "/api/";

export const initAppData = ({ language }) => {
  const langKey = language ? `?language=${language}` : "";
  return fetch(`${baseUrl}movies/init${langKey}`)
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
  language,
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
  const dateGteKey = dateGte ? `&dateGte=${dateGte}-01-01` : "";
  const dateLteKey = dateLte ? `&dateLte=${dateLte}-12-31` : "";

  return fetch(
    `${baseUrl}movies/discover${languageKey}${genreKey}${voteGteKey}${voteLteKey}${dateGteKey}${dateLteKey}`
  ).then((response) => response.json());
};

export const getMovie = ({ movieId, language }) => {
  const languageKey = `?language=${language}`;
  console.log(languageKey);

  return fetch(`${baseUrl}movies/find/${movieId}${languageKey}`).then(
    (response) => response.json()
  );
};

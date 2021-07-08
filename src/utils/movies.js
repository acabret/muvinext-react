const baseUrl = "http://localhost:4000/api/";

export const initDataApp = ({ language }) => {
  return fetch(`${baseUrl}movies/init`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error("Hubo un error en la conexión con el servidor");
    })
    .catch((err) => console.log(err));
};

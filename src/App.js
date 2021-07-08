import { useState, useEffect } from "react";
import { initDataApp } from "./utils/movies";
import { appLanguage } from "./utils/config";
import MovieSection from "./components/MovieSection";

function App() {
  const [genres, setGenres] = useState([]);
  const [sections, setSections] = useState([]);

  const showGenres = () => {
    console.log(genres);
  };

  useEffect(() => {
    console.log("running use effect");
    initDataApp({ language: appLanguage }).then((data) => {
      setGenres(genres.concat(data.genres));
      setSections(sections.concat(data.sections));
    });
  }, []);

  return (
    <div>
      {sections.map((section) => (
        <MovieSection key={section.id} movies={section.movies} />
      ))}
    </div>
  );
}

export default App;

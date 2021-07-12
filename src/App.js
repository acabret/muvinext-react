import { useState, useEffect } from "react";
import { initAppData } from "./utils/movies";
import { appLanguage } from "./utils/config";
import MovieSection from "./components/MovieSection";
import MovieSearch from "./components/MovieSearch"

function App() {
  const [genres, setGenres] = useState([]);
  const [sections, setSections] = useState([]);
  const [searchSection, setSearchSection] = useState([]);


  useEffect(() => {
    console.log("running use effect");
    initAppData({ language: appLanguage }).then((data) => {
      setGenres(genres.concat(data.genres));
      setSections(sections.concat(data.sections));
    });
  }, [appLanguage]);

  return (
    <div>
      <MovieSearch genres={genres}/>
      {sections.map((section) => (
        <MovieSection key={section.id} sectionTitle={section.name} movies={section.movies} />
      ))}
    </div>
  );
}

export default App;

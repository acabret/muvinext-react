import { useState, useEffect } from "react";
import { initAppData } from "./utils/movies";
import { appLanguage } from "./utils/config";
import "./App.css"
import MovieSection from "./components/MovieSection";
import MovieSearch from "./components/MovieSearch"

function App() {
  const [genres, setGenres] = useState([]);
  const [sections, setSections] = useState([]);
  const [searchSection, setSearchSection] = useState(null);


  useEffect(() => {
    console.log("running use effect");
    initAppData({ language: appLanguage }).then((data) => {
      setGenres([...data.genres]);
      setSections([...data.sections]);
    });
  }, [appLanguage]);

console.log("estado search section",searchSection);

  return (
    <div class="App">
      <MovieSearch genres={genres} setSearchSection={setSearchSection}/>
      {searchSection && <MovieSection key={searchSection.id} sectionTitle={searchSection.name} movies={searchSection.movies}/>}
      {sections.map((section) => (
        <MovieSection key={section.id} sectionTitle={section.name} movies={section.movies} />
      ))}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import MovieSection from "./MovieSection";
import MovieSearch from "./MovieSearch";
import { initAppData } from "../utils/movies";
import { appLanguage } from "../utils/config";
import "../App.css";

const Home = ({genres, sections, searchSection, setSearchSection}) => {
//   const [genres, setGenres] = useState([]);
//   const [sections, setSections] = useState([]);
//   const [searchSection, setSearchSection] = useState(null);

//   useEffect(() => {
//     console.log("running use effect");
//     initAppData({ language: appLanguage }).then((data) => {
//       setGenres([...data.genres]);
//       setSections([...data.sections]);
//     });
//   }, [appLanguage]);

  return (
    <div className="App">
      <MovieSearch genres={genres} setSearchSection={setSearchSection} />
      {searchSection && (
        <MovieSection
          key={searchSection.id}
          sectionTitle={searchSection.name}
          movies={searchSection.movies}
        />
      )}
      {sections.map((section) => (
        <MovieSection
          key={section.id}
          sectionTitle={section.name}
          movies={section.movies}
        />
      ))}
    </div>
  );
};

export default Home;

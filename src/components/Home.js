import MovieSection from "./MovieSection";
import MovieSearch from "./MovieSearch";
import LanguagePicker from "./LanguagePicker";
import "../App.css";

const Home = ({ genres, sections, searchSection, setSearchSection }) => {
  return (
    <div className="App">
      <LanguagePicker />
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

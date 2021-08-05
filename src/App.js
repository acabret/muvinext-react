import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initAppData } from "./utils/movies";
import { appLanguage } from "./utils/config";
import "./App.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

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

  // console.log("estado search section", searchSection);
  // console.log(props);

  // const history = useHistory();

  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <Home genres={genres} sections={sections} searchSection={searchSection} setSearchSection={setSearchSection}/>
        </Route>
      </Switch>
    </Router>
  );

  // return (
  //   <div class="App">
  //     <MovieSearch genres={genres} setSearchSection={setSearchSection} />
  //     {searchSection && (
  //       <MovieSection
  //         key={searchSection.id}
  //         sectionTitle={searchSection.name}
  //         movies={searchSection.movies}
  //       />
  //     )}
  //     {sections.map((section) => (
  //       <MovieSection
  //         key={section.id}
  //         sectionTitle={section.name}
  //         movies={section.movies}
  //       />
  //     ))}
  //   </div>
  // );
}

export default App;

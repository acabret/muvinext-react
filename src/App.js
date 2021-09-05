import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initAppData } from "./utils/movies";
import { useLanguage } from "./hooks.js";
import "./App.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

export const LanguageContext = createContext();

function App() {
  const appLanguage = useLanguage();
  const [genres, setGenres] = useState([]);
  const [sections, setSections] = useState([]);
  const [searchSection, setSearchSection] = useState(null);

  useEffect(() => {
    if (appLanguage.value) {
      initAppData({ language: appLanguage.value }).then((data) => {
        setGenres([...data.genres]);
        setSections([...data.sections]);
      });
    }
  }, [appLanguage.value]);

  return (
    <LanguageContext.Provider value={appLanguage.value}>
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/">
            <Home
              genres={genres}
              sections={sections}
              searchSection={searchSection}
              setSearchSection={setSearchSection}
            />
          </Route>
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;

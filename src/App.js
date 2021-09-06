import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initAppData } from "./utils/movies";
import "./App.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { useLanguage } from "./LanguageContext";

export const LanguageContext = createContext();

function App() {
  const [genres, setGenres] = useState([]);
  const [sections, setSections] = useState([]);
  const [searchSection, setSearchSection] = useState(null);

  const appLanguage = useLanguage();

  useEffect(() => {
    if (appLanguage) {
      initAppData({ language: appLanguage }).then((data) => {
        setSearchSection(null)
        setGenres([...data.genres]);
        setSections([...data.sections]);
      });
    }
  }, [appLanguage]);

  return (
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
  );
}

export default App;

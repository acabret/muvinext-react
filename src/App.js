import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initAppData } from "./utils/movies";
import "./App.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { useLanguage } from "./LanguageContext";

export const LanguageContext = createContext();

function App() {
  // const appLanguage = useLanguage();

  const [genres, setGenres] = useState([]);
  const [sections, setSections] = useState([]);
  const [searchSection, setSearchSection] = useState(null);

  const appLanguage = useLanguage();

  useEffect(() => {
    console.log("que es lang", appLanguage);
    if (appLanguage) {
      initAppData({ language: appLanguage }).then((data) => {
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

  // return (
  //   <LanguageContext.Provider value={appLanguage.value}>
  //     <Router>
  //       <Switch>
  //         <Route path="/movie/:id">
  //           <MovieDetails />
  //         </Route>
  //         <Route path="/">
  //           <Home
  //             genres={genres}
  //             sections={sections}
  //             searchSection={searchSection}
  //             setSearchSection={setSearchSection}
  //           />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   </LanguageContext.Provider>
  // );
}

export default App;

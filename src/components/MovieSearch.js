import styled from "styled-components";
import Select from "react-select";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useState, useEffect } from "react";
import { discoverMovies } from "../utils/movies";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range)

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const MovieSearch = (props) => {
  const [genres, setGenres] = useState([]);
  const [selection, setSelection] = useState(null);
  const [rangeRatingValues, setRangeRatingValues] = useState([5, 9]);
  const [rangeReleaseValues, setRangeReleaseValues] = useState([
    1990,
    new Date().getFullYear(),
  ]);

  useEffect(() => {
    const options = props.genres.reduce(
      (array, genre) => array.concat({ value: genre.id, label: genre.name }),
      []
    );
    setGenres([...options]);
  }, [props.genres]);

  const searchMovies = async () => {
    const searchParams = {
      voteGte: rangeRatingValues[0],
      voteLte: rangeRatingValues[1],
      genre: selection?.value ? selection.value : "",
      dateGte: rangeReleaseValues[0],
      dateLte: rangeReleaseValues[1],
    };
    //corregir en caso de no seleccionar ningun genero

    const searchResult = await discoverMovies(searchParams);
    console.log(searchResult);

    const searchSection = {
      id: selection?.value ? selection.value : 0,
      name: selection?.label ? selection.label : "De todos los géneros",
      movies: [...searchResult],
    };

    props.setSearchSection(searchSection);

    // console.log(searchResult);
  };

  const handleGenreSelect = (selectedOption) => {
    console.log(selectedOption);
    setSelection(selectedOption);
  };

  const handleRatingRange = (values) => setRangeRatingValues([...values]);
  const handleReleaseRange = (values) => setRangeReleaseValues([...values]);

  const rangeRatingSettings = {
    min: 1,
    max: 10,
    step: 0.1,
    value: rangeRatingValues,
    defaultValue: rangeRatingValues,
    onChange: handleRatingRange,
  };

  const rangeReleaseSettings = {
    min: 1900,
    max: new Date().getFullYear(),
    step: 1,
    value: rangeReleaseValues,
    defaultValue: rangeReleaseValues,
    onChange: handleReleaseRange,
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <Select
          onChange={handleGenreSelect}
          options={genres}
          placeholder="Géneros"
          value={selection}
        />
        <Range {...rangeRatingSettings}></Range>
        <p>valor min:{rangeRatingValues[0]}</p>
        <p>valor max:{rangeRatingValues[1]}</p>
        <Range {...rangeReleaseSettings}></Range>
        <p>valor min año:{rangeReleaseValues[0]}</p>
        <p>valor max año:{rangeReleaseValues[1]}</p>
        <button onClick={searchMovies}>Buscar</button>
      </SearchWrapper>
    </Wrapper>
  );
};

export default MovieSearch;

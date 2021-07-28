import styled from "styled-components";
import Select from "react-select";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useState, useEffect } from "react";
import { discoverMovies } from "../utils/movies";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range)

const Wrapper = styled.main`
  position: relative;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const SearchButton = styled.button`
  position: relative;
  display: block;
  height: 3rem;
  width: 100%;
  background-color: hsla(47, 92%, 51%, 1);
  color: black;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  transition: transform 0.2s linear;

  :active {
    transform: scale(0.95);
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
        <Range
          // activeDotStyle={{ backgroundColor: " hsla(47, 92%, 51%, 1)" }}
          // dotStyle={{backgroundColor:" hsla(47, 92%, 51%, 1)"}}
          trackStyle={[{ backgroundColor: " hsla(47, 92%, 51%, 1)" }]}
          handleStyle={[
            { backgroundColor: " hsla(47, 92%, 51%, 1)" },
            { backgroundColor: " hsla(47, 92%, 51%, 1)" },
          ]}
          {...rangeRatingSettings}
        ></Range>
        <span>valor min:{rangeRatingValues[0]}</span>
        <p>valor max:{rangeRatingValues[1]}</p>
        <Range
          trackStyle={[{ backgroundColor: " hsla(47, 92%, 51%, 1)" }]}
          handleStyle={[
            { backgroundColor: " hsla(47, 92%, 51%, 1)" },
            { backgroundColor: " hsla(47, 92%, 51%, 1)" },
          ]}
          {...rangeReleaseSettings}
        ></Range>
        <p>valor min año:{rangeReleaseValues[0]}</p>
        <p>valor max año:{rangeReleaseValues[1]}</p>
        <SearchButton onClick={searchMovies}>Buscar</SearchButton>
      </SearchWrapper>
    </Wrapper>
  );
};

export default MovieSearch;

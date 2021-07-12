import styled from "styled-components";
import Select from "react-select";
import { useState, useEffect } from "react";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieSearch = (props) => {
  const [genres, setGenres] = useState([]);
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    const options = props.genres.reduce(
      (array, genre) => array.concat({ value: genre.id, label: genre.name }),
      []
    );
    setGenres(genres.concat(options));
  }, [props.genres]);

  const handleChange = (selectedOption) => {
      console.log(selectedOption);
      setSelection(selectedOption)
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <Select width="500px" onChange={handleChange} options={genres} />

        <button>Buscar</button>
      </SearchWrapper>
    </Wrapper>
  );
};

export default MovieSearch;

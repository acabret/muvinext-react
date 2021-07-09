import styled from "styled-components";
import baseImageUrl, {imageSizes} from "../utils/config"

const Wrapper = styled.article`
  flex: 0 0 11.5rem;
  background-color: gray;
  height: 21.875rem;
  margin: 1rem;
`;
const MovieImage = styled.div`
  position: relative;
  background: url(${({ movie }) => ""});
  height: 17.125rem;
  width: 11.5rem;
`;

const MovieScore = styled.div`
  position: absolute;
`;


const MovieSplash = ({ movie }) => {
  return (
    <Wrapper>
      <MovieImage>
        {movie.poster_path}
        <MovieScore />
      </MovieImage>
      <h3>{movie.title}</h3>
    </Wrapper>
  );
};

export default MovieSplash;

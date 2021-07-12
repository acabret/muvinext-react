import styled from "styled-components";
import { baseImageUrl, imageSizes } from "../utils/config";

const Wrapper = styled.article`
  background-color: gray;
  /* width: 11rem; */
  width: 40%;
  margin: 1rem .5rem;
  @media (min-width: 768px) {
    width: 15%;
  }
`;
const MovieImage = styled.div`
  position: relative;
  background-image: url(${({ poster_path }) =>
    `${baseImageUrl}${imageSizes.small}${poster_path}`});
  background-position: center;
  background-size: cover;
  padding-top: calc( 100% * 16/11);
  width: 100%;
`;

const MovieScoreWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: hsla(53, 100%, 42%, 1);
  padding: 0.2rem 0.5rem;
  z-index: 10;
`;

const MovieScore = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;
const MovieTitle = styled.h3`
  font-size: 1rem ;



`;

const MovieCover = ({ movie }) => {
  return (
    <Wrapper>
      <MovieImage poster_path={movie.poster_path}>
        <MovieScoreWrapper>
          <MovieScore>{Number(movie.vote_average).toFixed(1)}</MovieScore>
        </MovieScoreWrapper>
      </MovieImage>
      <MovieTitle>{movie.title}</MovieTitle>
    </Wrapper>
  );
};

export default MovieCover;

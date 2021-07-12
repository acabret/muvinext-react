import styled from "styled-components";
import { baseImageUrl, imageSizes } from "../utils/config";

const Wrapper = styled.article`
  /* flex: 0 0 11.5rem; */
  background-color: gray;
  width: 11rem;
  // height: 21.875rem;
  margin: 1rem;
`;
const MovieImage = styled.div`
  position: relative;
  background-image: url(${({ poster_path }) =>
    `${baseImageUrl}${imageSizes.small}${poster_path}`});
  background-position: center;
  background-size: cover;
  padding-top: calc( 100% * 16/11);
  /* height: 17.125rem; */
  width: 100%;
`;

const MovieScoreWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: hsla(53, 100%, 42%, 1);
  padding: 0.2rem 0.5rem;
`;

const MovieScore = styled.span`
  font-size: 1.125rem;
  /* color: #fff; */
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

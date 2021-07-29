import styled from "styled-components";
import { baseImageUrl, imageSizes } from "../utils/config";

const Wrapper = styled.article`
  background-color: hsla(0, 0%, 15%, 1);
  /* width: 11rem; */
  width: 40%;
  margin: 0.5rem;
  border-radius: 5px;
  overflow: hidden;
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
  padding-top: calc(100% * 16 / 11);
  width: 100%;
`;

const MovieScoreWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  /* transform: translate(50%, -50%); */
  background-color: hsla(53, 100%, 42%, .75);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  z-index: 1;
`;

const MovieScore = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;
const MovieTitle = styled.h3`
  padding: 0.35rem;
  color:white;
  font-size: 1rem;
  line-height: 1.1rem;
  height: 2.2rem;
  -webkit-line-clamp:2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

import styled from "styled-components";
import { baseImageUrl, imageSizes } from "../utils/config";
import { Link } from "react-router-dom";

const Wrapper = styled.article`
  background-color: hsla(0, 0%, 15%, 1);
  width: 40%;
  margin: 0.5rem;
  color: #fff;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.1s linear;
  @media (min-width: 768px) {
    width: 15%;
  }
  :hover {
    transform: scale(1.03);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
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
  background-color: hsla(53, 100%, 42%, 0.75);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  z-index: 1;
`;

const MovieScore = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;
const MovieTitle = styled.h3`
  padding: 0.35rem;
  // color: white;
  font-size: 1rem;
  line-height: 1.1rem;
  height: 2.2rem;
  -webkit-line-clamp: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieCover = ({ movie }) => {
  return (
    <Wrapper>
      {/* <StyledLink to={`/movie/${movie.id}`}> */}
      <StyledLink
        to={{ pathname: `/movie/${movie.id}`, state: { movie } }}
      >
        <MovieImage poster_path={movie.poster_path}>
          <MovieScoreWrapper>
            <MovieScore>{Number(movie.vote_average).toFixed(1)}</MovieScore>
          </MovieScoreWrapper>
        </MovieImage>
        <MovieTitle>{movie.title}</MovieTitle>
      </StyledLink>
    </Wrapper>
  );
};

export default MovieCover;

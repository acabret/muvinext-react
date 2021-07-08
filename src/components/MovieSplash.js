import styled from "styled-components";

const Wrapper = styled.article`
  flex: 0 0 11.5rem;
  background-color: gray;
  height: 21.875rem;
  margin: 1rem;
`;
const MovieImage = styled.div`
  position: relative;
  background: ${() => ""};
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
        <MovieScore />
      </MovieImage>
      <h3>{movie.title}</h3>
    </Wrapper>
  );
};

export default MovieSplash;
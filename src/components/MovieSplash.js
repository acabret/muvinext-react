import styled from "styled-components";

const Wrapper = styled.article`
  flex: 0 0 20%;
  background-color: gray;
  height: 150px;
`;

const MovieSplash = ({ movie }) => {
  return (
    <Wrapper>
      <h3>{movie.title}</h3>
    </Wrapper>
  );
};

export default MovieSplash;

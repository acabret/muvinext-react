import styled from "styled-components";
import MovieSplash from "./MovieSplash";

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: red;
`;

const MovieSection = ({ sectionTitle, movies }) => {
  return (
    <section>
      <h2>{sectionTitle}</h2>
      <MovieWrapper>
        {movies.map((movie) => (
          <MovieSplash key={movie.id} movie={movie} />
        ))}
      </MovieWrapper>
    </section>
  );
};

export default MovieSection;

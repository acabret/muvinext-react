import styled from "styled-components";
import MovieCover from "./MovieCover";

const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
  background-color: red;
`;

const SectionTitle = styled.h3`
    font-size: 1.4rem;
    margin-bottom: .75rem;
`;

const MovieSection = ({ sectionTitle, movies }) => {
  return (
    <section>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <MoviesWrapper>
        {movies.map((movie) => (
          <MovieCover key={movie.id} movie={movie} />
        ))}
      </MoviesWrapper>
    </section>
  );
};

export default MovieSection;

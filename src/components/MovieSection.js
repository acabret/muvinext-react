import styled from "styled-components";
import MovieCover from "./MovieCover";

const Wrapper = styled.section`
  padding: 0.5rem 0.25rem;
  background-color: hsla(0, 0%, 6%, 1);
`;

const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 0;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: hsla(47, 92%, 51%, 1);
`;

const MovieSection = ({ sectionTitle, movies }) => {
  
  return (
    <Wrapper>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <MoviesWrapper>
        {movies
          .sort((a, b) => b.vote_average - a.vote_average)
          .map((movie) => (
            <MovieCover key={movie.id} movie={movie} />
          ))}
      </MoviesWrapper>
    </Wrapper>
  );
};

export default MovieSection;

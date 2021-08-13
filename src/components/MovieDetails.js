import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { baseImageUrl, imageSizes } from "../utils/config";
import { FaArrowLeft } from "react-icons/fa";

const Wrapper = styled.div`
  background-color: hsla(0, 0%, 6%, 1);
  min-height: 100vh;
`;

const TitleBar = styled.div`
  display: flex;
  height: 3rem;
  background-color: hsla(0, 0%, 15%, 1);
  border-bottom: 1px solid hsla(0, 0%, 25%, 1);

  @media (min-width: 768px) {
    height: 5rem;
  }
`;

const BackIcon = styled(FaArrowLeft)`
  position: relative;
  color: hsla(0, 0%, 40%, 1);
  font-size: 2rem;
  transition: transform 0.1s linear;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3rem 0 0;
  border-right: 1px solid hsla(0, 0%, 25%, 1);
  cursor:pointer;
  @media (min-width: 768px) {
    flex: 10rem 0 0;
  }

  :hover ${BackIcon} {
    transform: scale(1.05);
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  color: #fff;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    padding-left: 2rem;
    font-size: 2rem;
    font-weight: 900;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  //   align-items: flex-start;
  //   flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  //   width: 400px;
  font-size: 1.125rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    padding: 2rem 5rem;
  }
`;

const MovieImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  @media (min-width: 768px) {
    // //   flex-basis:500px;
    // width: 500px;
    width: 30%;
  }
`;

const MovieImage = styled.div`
  position: relative;
  background-image: url(${({ poster_path }) =>
    `${baseImageUrl}${imageSizes.large}${poster_path}`});
  background-position: center;
  background-size: cover;
  padding-top: calc(100% * 16 / 11);
  width: 100%;
`;


const MovieSpecs = styled.div`
  color: #fff;
  width: 100%;
  padding: 1rem 0;
  font-weight:600;
  @media (min-width: 768px) {
    width: 70%;
    padding: 1rem;
  }
`;

const MovieMetaData = styled.div`
  display: flex;
  margin-bottom: .5rem;
`;
const MetaDataItem = styled.div`
  margin: 0 .5rem;
  color: ${(p)=>p.color ? p.color : "hsla(0, 0%, 40%, 1)"};
  font-weight:600;
`;

const MovieDetails = () => {
  const history = useHistory();
  const movie = history.location.state.movie;
  const goHome = () => history.goBack();

  return (
    <Wrapper>
      <TitleBar>
        <BackButton onClick={goHome}>
          <BackIcon />
        </BackButton>
        <Title>{movie.title}</Title>
      </TitleBar>
      <MovieInfo>
        <MovieImageContainer>
          <MovieImage poster_path={movie.poster_path} />
        </MovieImageContainer>
        <MovieSpecs>
          <MovieMetaData>
            <MetaDataItem>{movie.release_date.split("-")[0]}</MetaDataItem>
            <MetaDataItem color={"hsla(53, 100%, 42%, 1)"}>{Number(movie.vote_average).toFixed(1)}</MetaDataItem>
          </MovieMetaData>
          <div>{movie.overview}</div>
        </MovieSpecs>
      </MovieInfo>
    </Wrapper>
  );
};

export default MovieDetails;

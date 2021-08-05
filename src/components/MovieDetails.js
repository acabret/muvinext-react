import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { baseImageUrl, imageSizes } from "../utils/config";

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

const BackButton = styled.div`
  flex: 3rem 0 0;
  border-right: 1px solid hsla(0, 0%, 25%, 1);
  @media (min-width: 768px) {
    flex: 10rem 0 0;
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

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }
`;

const MovieImageContainer = styled.div`
  width: 100%;
  overflow:hidden;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 500px;
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

const Test = styled.div`
  width: 300px;
  height: 600px;
  background-color: red;
`;

const MovieSpecs = styled.div`
  //   flex: 100% 1 0;
  color: #fff;

  @media (min-width: 768px) {
    //flex:
    flex-grow: 1;
    // flex-shrink: 0;
  }
`;

const MovieDetails = (props) => {
  const history = useHistory();
  const movie = history.location.state.movie;
  const goHome = () => history.goBack();

  return (
    <Wrapper>
      <TitleBar>
        <BackButton onClick={goHome} />
        <Title>{movie.title}</Title>
      </TitleBar>
      <MovieInfo>
        <MovieImageContainer>
          <MovieImage poster_path={movie.poster_path} />
        </MovieImageContainer>
        {/* <Test></Test> */}
        <MovieSpecs>asdaddad</MovieSpecs>
      </MovieInfo>
    </Wrapper>
  );
};

export default MovieDetails;

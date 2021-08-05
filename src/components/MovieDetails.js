import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: hsla(0, 0%, 6%, 1);
  min-height: 100vh;
`;

const MovieDetails = (props) => {
  const history = useHistory();

  console.log(history.location);
  const goHome = () => {
    // history.push("/");
    history.goBack();
    
  };

  return (
    <Wrapper>
      <button onClick={goHome}>volver atras</button>la pelicula
    </Wrapper>
  );
};

export default MovieDetails;

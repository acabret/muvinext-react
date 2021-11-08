import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width:100vw;
  background-color: hsla(0, 0%, 6%, 1);
`;

const Container = styled.div`

`;

const Spinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
//   position: relative;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border-width: 10px;
  border-style: solid;
  border-color: rgb(124, 124, 124) transparent rgb(124, 124, 124) transparent;
  animation: ${Spinning} 2s linear infinite;
`;

const LoadingScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Spinner />
      </Container>
    </Wrapper>
  );
};

export default LoadingScreen;

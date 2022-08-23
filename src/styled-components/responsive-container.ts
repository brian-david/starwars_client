import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: 90%;
  }
`;

export default Container;

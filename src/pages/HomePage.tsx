import { useQuery } from "@apollo/client";
import { Person } from "../types/types";
import { PEOPLE_PAGE } from "../queries/PEOPLE_PAGE";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import peoplePageReducer, {
  peoplePageSlice,
} from "../state/reducers/peoplePageReducer";
import { RootState } from "../state/store";
import PersonCard from "../components/PersonCard";
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

const HomePage = () => {
  const state = useSelector((state: RootState) => state.peoplePageReducer);
  const { loading, error, data } = useQuery(PEOPLE_PAGE);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("call useEffect in HomePage");
    if (data) {
      dispatch(peoplePageSlice.actions.setCount(data.peoplepage));
      console.log(JSON.stringify(data.peoplepage));
    }
  }, [data, dispatch]);

  useEffect(() => {
    console.log("Rerender");
    console.log("STATE = ", state);
  }, [state]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>`ERROR: ${error.message}`</p>;
  return (
    <Container>
      {state.people !== undefined &&
        state.people.map((person: Person, index: number) => {
          return <PersonCard person={{ ...person }} />;
        })}
    </Container>
  );
};

export default HomePage;

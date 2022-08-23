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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 40px auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: 90%;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HomePage = () => {
  const state = useSelector((state: RootState) => state.peoplePageReducer);
  const { loading, error, data } = useQuery(PEOPLE_PAGE, {
    variables: { pageId: 5 },
  });
  const dispatch = useDispatch();

  const handleNavigate = () => {
    console.log("change page");
  };

  useEffect(() => {
    console.log("call useEffect in HomePage");
    if (data) {
      dispatch(peoplePageSlice.actions.setPage(data.peoplepage));
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
    <>
      <Container>
        {state.people !== undefined &&
          state.people.map((person: Person, index: number) => {
            return <PersonCard person={{ ...person }} />;
          })}
      </Container>
      <Navigation>
        {state.previousPage !== null && (
          <FontAwesomeIcon
            style={{ margin: "10px", cursor: "pointer" }}
            size="4x"
            icon={faArrowCircleLeft}
          />
        )}
        {state.nextPage && (
          <FontAwesomeIcon
            onClick={handleNavigate}
            style={{ margin: "10px", cursor: "pointer" }}
            size="4x"
            icon={faArrowCircleRight}
          />
        )}
      </Navigation>
    </>
  );
};
export default HomePage;

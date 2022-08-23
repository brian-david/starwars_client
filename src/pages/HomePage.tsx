import { useQuery } from "@apollo/client";
import { Person } from "../types/types";
import { PEOPLE_PAGE } from "../queries/PEOPLE_PAGE";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peoplePageSlice } from "../state/reducers/peoplePageReducer";
import { RootState } from "../state/store";
import PersonCard from "../components/PersonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../styled-components/spinner";
import CenteredDiv from "../styled-components/centered-div";
import Container from "../styled-components/responsive-container";
import Navigation from "../styled-components/navigator";
import PersonModal from "../components/PersonModal";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const state = useSelector((state: RootState) => state.reducerIndex);
  const { loading, error, data } = useQuery(PEOPLE_PAGE, {
    variables: { pageId: currentPage },
  });
  const dispatch = useDispatch();

  const updatePage = (direction: string) => {
    if (direction === "next") {
      if (state.page.nextPage !== null) {
        setCurrentPage((currentState) => currentState + 1);
      }
    } else {
      if (state.page.previousPage !== null) {
        setCurrentPage((currentState) => currentState - 1);
      }
    }
  };

  useEffect(() => {
    console.log("Home page render");
    if (data) {
      console.log("dispatch", data.peoplepage);
      dispatch(peoplePageSlice.actions.setPage(data.peoplepage));
    }
  }, [data, dispatch]);

  useEffect(() => {
    console.log("state change");
  }, [state]);

  useEffect(() => {
    console.log("DISPATCH");
  }, [dispatch]);

  if (loading)
    return (
      <CenteredDiv>
        <Spinner />
      </CenteredDiv>
    );

  if (error) return <p>`ERROR: ${error.message}`</p>;
  return (
    <>
      {state.modal.open && <PersonModal />}
      <Container>
        {state.page.people !== undefined &&
          state.page.people.map((person: Person, index: number) => {
            return <PersonCard person={{ ...person }} />;
          })}
      </Container>
      <Navigation>
        {state.page.previousPage !== null && (
          <FontAwesomeIcon
            onClick={() => updatePage("previous")}
            style={{ margin: "10px", cursor: "pointer" }}
            size="4x"
            icon={faArrowCircleLeft}
          />
        )}
        <p>{currentPage}</p>
        {state.page.nextPage !== null && (
          <FontAwesomeIcon
            onClick={() => updatePage("next")}
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

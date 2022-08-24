import React from "react";
import { useDispatch } from "react-redux";
import modalReducer, { modalSlice } from "../state/reducers/modalReducer";
import PersonCardDiv from "../styled-components/person-card-div";
import { Person } from "../types/types";

type PersonCardProps = {
  person: Person;
};

const PersonCard = ({ person, person: { name } }: PersonCardProps) => {
  const dispatch = useDispatch();
  return (
    <PersonCardDiv
      onClick={() => {
        dispatch(modalSlice.actions.setPerson(person));
        dispatch(modalSlice.actions.setOpen());
      }}
    >
      <p>`Name: ${person.name}`</p>
      <p>`Height: ${person.height}`</p>
      <p>`mass: ${person.mass}`</p>
      <p>`gender: ${person.gender}`</p>
      <p>`homeworld: ${person.homeworld.name}`</p>
    </PersonCardDiv>
  );
};

export default PersonCard;

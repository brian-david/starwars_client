import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../state/reducers/modalReducer";
import { RootState } from "../state/store";
import ModalBackground from "../styled-components/modal-background";
import ModalContainer from "../styled-components/modal-container";

const PersonModal = () => {
  const state = useSelector((state: RootState) => state.reducerIndex.modal);
  const dispatch = useDispatch();
  console.log("person selected", state.person.name);
  return (
    <ModalBackground>
      <ModalContainer>
        <button onClick={() => dispatch(modalSlice.actions.setOpen())}>
          close
        </button>
        <p>{state.person.name}</p>
        <p>{`Height: ${state.person.height}`}</p>
        <p>{`mass: ${state.person.mass}`}</p>
        <p>{`gender: ${state.person.gender}`}</p>
        <p>{`homeworld: ${state.person.homeworld.name}`}</p>
      </ModalContainer>
    </ModalBackground>
  );
};

export default PersonModal;

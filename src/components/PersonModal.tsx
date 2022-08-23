import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../state/reducers/modalReducer";
import { RootState } from "../state/store";
import ModalBackground from "../styled-components/modal-background";
import ModalContainer from "../styled-components/modal-container";

const PersonModal = () => {
  const state = useSelector((state: RootState) => state.reducerIndex.modal);
  const dispatch = useDispatch();
  console.log("person selected", state.person.name)
  return (
    <ModalBackground>
      <ModalContainer>
        <button onClick={() => dispatch(modalSlice.actions.setOpen())}>
          close
        </button>
        <p>{state.person.name}</p>
      </ModalContainer>
    </ModalBackground>
  );
};

export default PersonModal;

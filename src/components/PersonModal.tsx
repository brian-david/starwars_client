import { useDispatch } from "react-redux";
import { modalSlice } from "../state/reducers/modalReducer";
import ModalBackground from "../styled-components/modal-background";
import ModalContainer from "../styled-components/modal-container";

const PersonModal = () => {
  const dispatch = useDispatch();
  return (
    <ModalBackground>
      <ModalContainer>
        <button onClick={() => dispatch(modalSlice.actions.setOpen())}>
          close
        </button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default PersonModal;

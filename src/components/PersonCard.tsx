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
        dispatch(modalSlice.actions.setOpen);
      }}
    >
      {name}
    </PersonCardDiv>
  );
};

export default PersonCard;

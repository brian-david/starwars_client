import styled from "styled-components";
import { Person } from "../types/types";

type PersonCardProps = {
  person: Person;
};

const PersonCardDiv = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px;
  max-width: 250px;
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    width: 95%;
    max-width: none;
  }
`;

const PersonCard = ({ person }: PersonCardProps) => {
  return <PersonCardDiv>{person.name}</PersonCardDiv>;
};

export default PersonCard;

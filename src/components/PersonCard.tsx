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
  height: 40px;
  line-height: 40px;
  width: 50%;
  text-align: center;
  transition: transform 0.2s;
  transition: box-shadow 0.2s;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 768px) {
    width: 95%;
    max-width: none;
  }
`;

const PersonCard = ({ person }: PersonCardProps) => {
  return <PersonCardDiv>{person.name}</PersonCardDiv>;
};

export default PersonCard;

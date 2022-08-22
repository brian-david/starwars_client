import { gql } from "@apollo/client";

export const PEOPLE_PAGE = gql`
  query GetPeoplePage {
    peoplepage {
      count
      next
      previous
      people: results {
        name
        height
        mass
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

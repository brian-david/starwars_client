import { gql } from "@apollo/client";

export const PEOPLE_PAGE = gql`
  query GetPeoplePage($pageId: ID) {
    peoplepage(pageId: $pageId) {
      count
      nextPage: next
      previousPage: previous
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

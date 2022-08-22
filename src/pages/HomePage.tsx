import { gql, useQuery } from "@apollo/client";
import { Person } from "../types/root";

const PEOPLE_PAGE = gql`
  query GetPeoplePage {
    peoplepage {
      count
      next
      previous
      results {
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

const HomePage = () => {
  const { loading, error, data } = useQuery(PEOPLE_PAGE);
  if (loading) return <p>loading...</p>;
  if (error) return <p>`ERROR: ${error.message}`</p>;
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {data.peoplepage.results.map((person: Person, index: number) => {
        return <p>{person.name}</p>;
      })}
    </div>
  );
};

export default HomePage;

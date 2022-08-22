import { gql, useQuery } from "@apollo/client";

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
  return <p>{JSON.stringify(data)}</p>;
};

export default HomePage;

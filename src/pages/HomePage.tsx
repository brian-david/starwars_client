import { useQuery } from "@apollo/client";
import { Person } from "../types/types";
import { PEOPLE_PAGE } from "../queries/PEOPLE_PAGE";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import peoplePageReducer, {
  peoplePageSlice,
} from "../state/reducers/peoplePageReducer";

const HomePage = () => {
  const state = useSelector((state: any) => state.rootReducer);
  const { loading, error, data } = useQuery(PEOPLE_PAGE);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("call useEffect in HomePage");
    if (data) {
      dispatch(peoplePageSlice.actions.setCount({ ...data.peoplepage }));
      console.log(JSON.stringify(data.peoplepage));
    }
  }, [data, dispatch]);

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

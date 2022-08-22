import "./App.css";
import { Provider } from "react-redux";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>This is the home page</h1>
      </div>
    </Provider>
  );
}

export default App;

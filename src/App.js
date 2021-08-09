import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./Components/users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users />
      </Provider>
    </div>
  );
}

export default App;

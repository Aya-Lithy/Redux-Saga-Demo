import { Provider } from "react-redux";
import "./App.css";
import UsersList from "./Components/UsersList";
import store from "./redux/index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UsersList />
      </Provider>
    </div>
  );
}

export default App;

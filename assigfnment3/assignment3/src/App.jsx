import "./App.css";
import { Login } from "../Components/Page/login";
import { Restaurantscards } from "../Components/Page/restaurants";
import { useSelector } from "react-redux";

function App() {
  const { token, isAuth } = useSelector((state) => state.login);

  console.log(token, isAuth);

  return (
    <div className="App">
      {isAuth == true ? <Restaurantscards /> : <Login />}
    </div>
  );
}

export default App;

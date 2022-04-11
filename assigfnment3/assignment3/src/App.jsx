import { useState } from "react";
import "./App.css";
import { Login } from "../Components/Page/login";
import {  Button } from "@mui/material";
import { Restaurantscards } from "../Components/Page/restaurants";

function App() {
  const [display, setdisplay] = useState(true);

  const whatToDisplay = () => {
    if (display == true) {
      setdisplay(false);
      return;
    }
    setdisplay(true);
  };
  return (
    <div className="App">
      <Button
        disabled={display == true}
        variant="contained"
        onClick={() => whatToDisplay()}
      >
        {display == true ? null : "Log out"}
      </Button>
      {display == true ? <Login /> : <Restaurantscards />}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get(" add any api here and dont forget to change in dom as well").then((res) => {
      setDetails(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="RestaurantDetails">
      {details.map((e) => {
        return (
          <div className="container" key={e.id}>
            <img src={e.avatar} alt="restaurant pic" />
            <p className="nameres">{e.name}</p>
            <p className="nameres">{e.rating}</p>
            <p className="nameres">{e.title}</p>
            <p className="nameres">{e.salary}</p>
            <p className="nameres">{e.company_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;

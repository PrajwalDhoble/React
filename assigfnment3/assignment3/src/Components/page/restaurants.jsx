import { useState, useEffect } from "react";
import axios from "axios";
// import "./RestaurantDetails.css";
// import { setEnvironmentData } from "worker_threads";

const RestaurantDetails = () => {
  const [details, setDetails] = useState([]);
//   const [array,setArray] = useState([])
// const [data,setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8181/get-restaurants").then((res) => {
      setDetails(res.data);
    });
  }, []);

  return (
    <div className="RestaurantDetails">
      <div className="ratingbtn">
        <div className="rating">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
        <div className="ratingsort">
          <button>4 and above</button>
          <button>3 and above</button>
          <button>2 and above</button>
          <button>1 and above</button>
        </div>
        <div className="paymentsort">
          <button>Cash</button>
          <button>Card</button>
          <button>All</button>
        </div>
        <div className="costsort">
          <button>Low to High</button>
          <button>High to Low</button>
        </div>
      </div>

      {details.map((e) => {
        return (
          <div className="container" key={e.id}>

            <img src={e.img} alt="restaurant pic" />
            <div className="name">
              <p className="nameres">{e.name}</p>
              <p>{e.category}</p>
              <p>Cost for two: {e.costForTwo}</p>
            </div>
            <div className="ratings">
              <p>Rating: {e.rating}</p>
              <p>{e.votes} votes</p>
              <p>{e.reviews} Reviews</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetails;